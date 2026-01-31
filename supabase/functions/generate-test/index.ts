import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { lessonTitle, lessonContent, difficulty } = await req.json();
    
    console.log(`Generating test for lesson: ${lessonTitle}, difficulty: ${difficulty}`);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const prompt = `Generate exactly 5 quiz questions about "${lessonTitle}". 

Return ONLY valid JSON in this exact format (no markdown, no code blocks):
{
  "questions": [
    {
      "id": 1,
      "type": "multiple_choice",
      "question": "Your question here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "Option A",
      "explanation": "Brief explanation why this is correct"
    },
    {
      "id": 2,
      "type": "true_false",
      "question": "A true/false statement about the topic?",
      "correctAnswer": "true",
      "explanation": "Brief explanation"
    },
    {
      "id": 3,
      "type": "multiple_choice",
      "question": "Another question?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "Option B",
      "explanation": "Brief explanation"
    },
    {
      "id": 4,
      "type": "true_false",
      "question": "Another true/false statement?",
      "correctAnswer": "false",
      "explanation": "Brief explanation"
    },
    {
      "id": 5,
      "type": "multiple_choice",
      "question": "Final question?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "Option C",
      "explanation": "Brief explanation"
    }
  ]
}

Make questions relevant to the topic "${lessonTitle}" and difficulty level: ${difficulty}.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: 'You are a quiz generator. Always respond with valid JSON only, no markdown formatting.' },
          { role: 'user', content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Lovable AI error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit reached. Please wait a moment and try again.', isRateLimit: true }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add credits to continue.', isRateLimit: true }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No content in AI response');
    }

    console.log('AI response content:', content);

    // Parse the JSON from the response
    let testData;
    try {
      // Remove any markdown code blocks if present
      let cleanContent = content.trim();
      if (cleanContent.startsWith('```json')) {
        cleanContent = cleanContent.slice(7);
      } else if (cleanContent.startsWith('```')) {
        cleanContent = cleanContent.slice(3);
      }
      if (cleanContent.endsWith('```')) {
        cleanContent = cleanContent.slice(0, -3);
      }
      cleanContent = cleanContent.trim();
      
      testData = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error('Failed to parse AI response:', content);
      throw new Error('Failed to parse test data');
    }

    console.log('Test generated successfully');

    return new Response(
      JSON.stringify(testData),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-test function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate test';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
