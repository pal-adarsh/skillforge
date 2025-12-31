import { Standard } from "../types";

export const communicationCategory: Standard = {
  id: "communication",
  name: "Communication",
  displayName: "Communication & Expression Skills",
  description: "Master the art of effective communication and self-expression",
  color: "bg-blue-500",
  subjects: [
    {
      id: "comm-verbal",
      name: "Verbal Communication",
      icon: "MessageCircle",
      color: "text-blue-500",
      lessonIds: ["comm-speaking-clearly", "comm-conversation-skills", "comm-public-speaking", "comm-storytelling"]
    },
    {
      id: "comm-written",
      name: "Written Communication",
      icon: "FileText",
      color: "text-indigo-500",
      lessonIds: ["comm-writing-basics", "comm-email-etiquette", "comm-creative-writing", "comm-note-taking"]
    },
    {
      id: "comm-nonverbal",
      name: "Non-Verbal Communication",
      icon: "Eye",
      color: "text-purple-500",
      lessonIds: ["comm-body-language", "comm-facial-expressions", "comm-personal-space", "comm-tone-voice"]
    },
    {
      id: "comm-conflict",
      name: "Conflict Resolution",
      icon: "Shield",
      color: "text-teal-500",
      lessonIds: ["comm-handling-disagreements", "comm-assertive-communication", "comm-saying-no", "comm-apologizing"]
    }
  ]
};

export const communicationLessons = [
  // ==================================================================================
  // VERBAL COMMUNICATION
  // ==================================================================================
  { 
    id: "comm-speaking-clearly", 
    title: "Speaking Clearly & Confidently", 
    description: "Techniques for clear and confident speech", 
    category: "Communication", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1475721027767-f42135547d05?w=800",
    tags: ["speech", "articulation", "confidence"],
    content: `
# Speaking Clearly & Confidently

## The Foundation of Connection

Clear speech is not about sounding fancy or using big words. It is about **making sure your thoughts reach the listener exactly as you intend**.  
When you speak clearly, people don’t have to struggle to understand you—they can focus on *what* you’re saying instead of *how* you’re saying it.

Clear and confident speech helps you:
- Express ideas without confusion
- Earn trust and credibility
- Reduce misunderstandings
- Feel more self-assured in conversations, meetings, and presentations

Good communication is not a talent you’re born with—it’s a **skill you train**.

![Microphone close up](https://images.unsplash.com/photo-1475721027767-f42135547d05?w=800&q=80)

## The 3 Ps of Voice

Your voice has three powerful controls. Mastering them can instantly improve how confident you sound.

### 1. **Pace (Speed):**
*The Problem:*  
Speaking too fast usually comes from nervousness or excitement. Your words blur together and listeners miss key points.  
Speaking too slowly can make you sound unsure or bored.

*The Fix:*  
- Aim for a **natural, conversational rhythm**
- Slow down when explaining something important or complex
- Use short pauses instead of rushing
- Remember: **pauses are powerful**, not awkward

> Tip: If people often say “What?” or “Can you repeat that?”, your pace is probably too fast.

### 2. **Pitch (Tone):**
*The Problem:*  
A flat, monotone voice makes even interesting ideas sound dull.  
Ending sentences like questions (“upspeak”) makes you sound uncertain—even when you’re right.

*The Fix:*  
- Let your pitch rise and fall naturally
- Lower your pitch slightly at the end of statements to sound confident
- Show emotion through tone, not volume

> Your voice should match your message. Serious idea → steady tone. Exciting idea → energetic tone.

### 3. **Power (Volume):**
*The Problem:*  
Mumbling makes you sound insecure. Shouting feels aggressive and uncomfortable.

*The Fix:*  
- Breathe deeply and speak from your **diaphragm (belly)**, not your throat
- Imagine speaking *to the last person in the room*
- Stand or sit upright—posture affects volume

> Confidence comes from controlled power, not loudness.

## Articulation Exercises

Clear speech requires **active lips, tongue, and jaw**. When these muscles are lazy, words become unclear.

Practice these before important conversations, calls, or presentations:
- *“Red leather, yellow leather.”*
- *“Unique New York.”*
- *“The lips, the teeth, the tip of the tongue.”*

Say them:
1. Slowly
2. Clearly
3. Then gradually faster

Just **2–3 minutes** of practice can noticeably sharpen your speech.

## Eliminating Filler Words

Words like “um,” “uh,” “like,” and “you know” appear when your brain is thinking faster than your mouth.

They:
- Break confidence
- Distract listeners
- Make you sound unprepared

### **The Strategy: Embrace the Silence**
- Replace filler words with a **pause**
- A pause gives your brain time to think
- Listeners interpret pauses as confidence and control

**Golden Rule:**  
Silence feels longer to you than to the listener.

## Key Takeaway

Confidence is often *heard before it is seen*.  
Speak a little slower, pronounce words clearly, and trust pauses.

> "Speak clearly, if you speak at all; carve every word before you let it fall."  
— Oliver Wendell Holmes
    `,
  },
  { 
    id: "comm-conversation-skills", 
    title: "Art of Conversation", 
    description: "Learn to start and maintain engaging conversations", 
    category: "Communication", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
    tags: ["social", "networking", "dialogue"],
    content: `
# The Art of Conversation

## Breaking the Ice

Conversation is the bridge between strangers and connection.  
The hardest part is not talking—it’s **starting**.

Most people fear awkward silence, but remember:
> The other person is usually just as nervous as you.

A simple, genuine opening can turn silence into comfort.

![Friends talking](https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80)

## The FORD Method

When your mind goes blank, use **FORD** as a mental map.

- **F – Family/Friends:**  
  "Do you live with your family?"  
  "Are you close to your friends?"

- **O – Occupation/School:**  
  "What are you studying these days?"  
  "What kind of work do you enjoy the most?"

- **R – Recreation:**  
  "How do you usually spend your weekends?"  
  "Any hobbies that help you relax?"

- **D – Dreams:**  
  "What’s something you’d love to learn someday?"  
  "If time and money weren’t a problem, what would you do?"

> Start light, go deeper gradually.

## Open vs. Closed Questions

Questions shape conversations.

### Closed Questions (Conversation Killers)
- "Did you like the event?" → "Yes."

### Open Questions (Conversation Starters)
- "What part of the event did you enjoy the most?"

Open questions invite **stories, opinions, and emotions**.

## Conversational Threading

Great conversations don’t jump randomly—they **flow**.

Pull a thread from what the other person says:
- **Topic Thread**
- **Emotion Thread**
- **Experience Thread**

Example:
- *Person:* "I went to the beach yesterday."
- "Which beach did you visit?"
- "Was it crowded or peaceful?"
- "Sounds refreshing—did you really need that break?"

This shows:
✔ You’re listening  
✔ You care  
✔ You’re engaged  

## The 50/50 Rule

A healthy conversation is balanced.
- Talk too much → feels like a lecture
- Talk too little → feels like an interview

Aim to:
- Share
- Listen
- Respond thoughtfully

Listening is not waiting to speak—it’s understanding.

## Key Takeaway

You don’t need to be interesting to be liked.  
You need to be **interested**.

> "The most important thing in communication is hearing what isn't said."  
— Peter Drucker
    `
  },
  { 
    id: "comm-public-speaking", 
    title: "Introduction to Public Speaking", 
    description: "Overcome fear and speak confidently in public", 
    category: "Communication", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1475721027767-f42135547d05?w=800",
    tags: ["presentation", "speech", "leadership"],
    content: `
# Introduction to Public Speaking

## The Fear is Real (And Normal)

Fear of public speaking is one of the most common fears worldwide.  
Your nervousness doesn’t mean you’re bad—it means **you care**.

Even confident speakers feel nervous.  
The difference? They know how to manage it.

![Person speaking on stage](https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80)

## Preparation: The Antidote to Anxiety

Confidence grows from clarity.

- **Know Your Audience:**  
  Are they beginners or experts? Students or professionals?

- **Know Your Message:**  
  Don’t memorize every word.  
  Memorize:
  - Key points
  - Flow
  - Opening and closing

Preparation turns fear into focus.

## Structuring Your Speech

### 1. The Hook (10%)
Grab attention instantly.
- A surprising fact
- A short story
- A strong question

Avoid boring introductions.

### 2. The Body (80%)
Use the **Rule of Three**:
- 3 key ideas
- 3 examples
- 3 clear takeaways

Simple structure = memorable speech.

### 3. The Conclusion (10%)
End with purpose.
- Summarize briefly
- Tell them what to do next
- Leave them with one strong thought

## Delivery Techniques

- **Eye Contact:**  
  Speak to individuals, not the wall.

- **Hand Gestures:**  
  Natural and purposeful gestures improve clarity.

- **Posture:**  
  Stand tall. Stillness signals confidence.

## Handling Mistakes

Mistakes happen. Professionals don’t panic.

1. Pause
2. Breathe
3. Smile
4. Continue

Never apologize unnecessarily.

## Key Takeaway

Public speaking is not about impressing—it’s about **serving**.

> "Public speaking is a gift you give, not a performance you endure."  
— Dale Carnegie
`
  },
  { 
    id: "comm-storytelling", 
    title: "Power of Storytelling", 
    description: "Engage others through compelling narratives", 
    category: "Communication", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=800",
    tags: ["narrative", "persuasion", "engagement"],
    content: `
# The Power of Storytelling

## Facts Tell, Stories Sell

Information informs, but stories **connect**.  
Stories help people feel, remember, and relate.

Whether teaching, selling, or explaining—stories make ideas human.

![Reading a book](https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=800&q=80)

## The Simple Story Arc

Every good story has:

### 1. Context
Set the scene.

### 2. Conflict
Introduce a challenge or problem.

### 3. Resolution
Show growth, change, or learning.

No conflict = no interest.

## The Hero’s Journey (Simplified)

- Hero → Your audience
- Villain → Their problem
- Guide → You
- Victory → Their transformation

This makes stories relatable and empowering.

## Sensory Details

Bring stories to life by engaging senses:
- Sight
- Sound
- Smell
- Touch
- Taste

Specific details create vivid images.

## Why Stories Work

Stories trigger emotions:
- Dopamine → attention
- Oxytocin → trust
- Cortisol → focus

Emotion creates memory.

## Key Takeaway

Stories don’t just share information—they **build connection**.

> "Marketing is no longer about the stuff that you make, but about the stories you tell."  
— Seth Godin
`
  },

  // ==================================================================================
  // WRITTEN COMMUNICATION
  // ==================================================================================
  { 
    id: "comm-writing-basics", 
    title: "Writing Basics", 
    description: "Fundamentals of clear and effective writing", 
    category: "Communication", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    tags: ["writing", "grammar", "clarity"],
    content: `
# Writing Basics

## Clarity is King

In the modern world, writing is how we think on paper or screen. Emails, messages, assignments, reports, and even social media posts reflect the clarity of our thoughts.  
If your writing is confusing, people assume your thinking is confusing too.

Good writing is not about using difficult words. It is about:
- Making your idea easy to understand
- Reducing effort for the reader
- Saying exactly what you mean—no more, no less

Clear writing respects the reader’s time.

![Pen and paper](https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80)

## The BLUF Method (Bottom Line Up Front)

BLUF means **Bottom Line Up Front**—start with your main point.

In school, we are often taught to build slowly toward a conclusion.  
In real life (emails, messages, work), people want the **answer first**.

*Bad:*  
"Due to the current traffic situation and unexpected delays caused by roadwork, I wanted to inform you that…"  
→ "I will be late."

*Good:*  
"I will be 10 minutes late. There is heavy traffic due to roadwork."

BLUF works best for:
- Emails
- Messages
- Reports
- Requests
- Updates

## Active vs. Passive Voice

Active voice makes writing:
✔ Clearer  
✔ Shorter  
✔ More confident  

*Passive:*  
*The task was completed by the team.*

*Active:*  
*The team completed the task.*

**Zombie Test:**  
If you can add “by zombies” at the end, it’s passive.  
"The report was written (by zombies)." → Passive.

Use passive voice only when:
- The doer is unknown
- The action matters more than who did it

## Kill Your Darlings (Editing)

First drafts are never perfect. Editing is where strong writing is born.

### Cut Fluff
Remove weak filler words:
- very
- really
- actually
- basically
- quite

*Weak:*  
"I am actually very tired today."

*Strong:*  
"I am exhausted today."

### Sentence Variety
- Short sentences = impact
- Long sentences = explanation
- Mix both for rhythm

Good writing **sounds natural when read aloud**.

## Structure

Clear structure helps readers scan and understand quickly:

1. **Headline:** What is this about?
2. **Introduction:** Why does this matter?
3. **Body:** Key details, examples, evidence  
   (Use bullet points and spacing)
4. **Conclusion:** What should happen next?

Structure is kindness to the reader.

## Key Takeaway

Writing improves thinking.  
Reading improves writing.  
Editing improves both.

> "Easy reading is damn hard writing."  
— Nathaniel Hawthorne
`
  },
  { 
    id: "comm-email-etiquette", 
    title: "Email & Message Etiquette", 
    description: "Professional communication in digital formats", 
    category: "Communication", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800",
    tags: ["email", "professionalism", "digital"],
    content: `
# Email & Message Etiquette

## The Digital Handshake

An email is often the first impression you make.  
Your tone, clarity, and structure silently communicate your professionalism.

A messy email suggests:
- Lack of care
- Lack of clarity
- Lack of respect for time

![Typing on laptop](https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80)

## The Subject Line

The subject line decides everything:
- Opened or ignored
- Read now or later

*Bad:*  
"Hello"  
"Question"

*Good:*  
"Request: Leave Approval for 12 March"  
"Action Needed: Website Content Review"

Rule:  
**One email = one purpose = one clear subject**

## Structure of a Professional Email

1. **Salutation**  
   "Hi [Name]," → Standard  
   "Dear [Name]," → Formal  

2. **The Why (First Line)**  
   Don’t warm up. Be direct.

3. **The Details**  
   Use bullet points or short paragraphs.

4. **Call to Action**  
   Be specific:
   - Reply?
   - Approve?
   - Review?
   - Deadline?

5. **Sign-off**  
   "Thanks,"  
   "Best regards,"  
   Your name

## Tone Check

Written words lack facial expression and voice tone.

*Rude:*  
"Send me the file."

*Better:*  
"Please send me the file."

*Best:*  
"Could you please send me the file when convenient?"

**Golden Tip:**  
Read your email out loud before sending.

## The Deadly Sins of Email

- **Reply All Abuse**  
  Only reply-all if everyone truly needs the response.

- **Wall of Text**  
  If it’s hard to scan, it won’t be read.

- **Emotional Emails**  
  Never send emails when angry.
  Draft → Pause → Review → Send later.

## Instant Messaging (Slack / Teams / WhatsApp)

Messaging is faster but still professional.

- Respect working hours
- Be clear and complete
- Avoid the “Hello” trap

*Bad:*  
"Hi"

*Good:*  
"Hi Rahul, can you help me with the login issue when you’re free?"

## Key Takeaway

Digital communication is about **clarity + courtesy**.

> "The most valuable of all talents is that of never using two words when one will do."  
— Thomas Jefferson
`
  },
  { 
    id: "comm-creative-writing", 
    title: "Creative Expression Through Writing", 
    description: "Express yourself through creative writing", 
    category: "Communication", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    tags: ["creativity", "writing", "expression"],
    content: `
# Creative Expression Through Writing

## Why Write Creatively?

Creative writing is not just about stories or poems.  
It helps you:
- Understand your emotions
- Improve empathy
- Think deeply
- Express ideas freely

Creative writing is a safe space—there are no wrong answers.

![Old typewriter](https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80)

## Show, Don't Tell

Telling gives information.  
Showing creates experience.

*Tell:*  
"He was nervous."

*Show:*  
"His hands trembled as he reached for the door handle."

Readers remember **images**, not explanations.

## Metaphor and Simile

Comparisons make writing vivid.

- **Simile:** Uses “like” or “as”  
  "Her thoughts raced like a runaway train."

- **Metaphor:** Direct comparison  
  "Fear was a shadow following him."

Use them sparingly—strong metaphors are better than many weak ones.

## Character Development

Believable characters have:
- **Desires:** What they want
- **Flaws:** What holds them back

Perfect characters feel fake.  
Flawed characters feel human.

Conflict grows naturally from flaws.

## Freewriting Practice

This exercise removes fear and perfectionism.

Steps:
1. Set a 10-minute timer
2. Write continuously
3. Don’t stop or edit
4. Let thoughts flow naturally

Purpose:  
Silence the inner critic and unlock creativity.

## Key Takeaway

Creativity grows through consistency, not perfection.

> "We write to taste life twice, in the moment and in retrospect."  
— Anaïs Nin
 `
  },
  { 
    id: "comm-note-taking", 
    title: "Effective Note-Taking", 
    description: "Capture important information efficiently", 
    category: "Communication", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800",
    tags: ["learning", "productivity", "notes"],
    content: `
# Effective Note-Taking

## Capture vs. Comprehension

Writing everything word-for-word is passive and ineffective.  
Good notes help you **understand**, not just record.

The goal is to:
- Filter information
- Capture meaning
- Support recall later

![Notebook and pen](https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80)

## The Cornell Method

Divide the page into three parts:

1. **Notes (Right Side):**  
   Main ideas, examples, diagrams

2. **Cues (Left Side):**  
   Keywords, questions, headings  
   (Added after the session)

3. **Summary (Bottom):**  
   2–3 sentences capturing the core idea

This method turns notes into study material.

## Mind Mapping

Ideal for:
- Brainstorming
- Big-picture understanding
- Visual learners

Start with a central idea, then branch outward.

Mind maps show **relationships**, not just lists.

## The Outline Method

Structured and logical:
- Great for lectures
- Works well for exams
- Easy to review

Use indentation to show importance.

## Digital vs. Analog

- **Handwritten Notes:**  
  Better memory retention

- **Typed Notes:**  
  Faster and searchable

Best approach:
Type for speed → Rewrite key ideas by hand.

## The Review Rule

Notes fade quickly if not reviewed.

Use the **10–24–7 Rule**:
- 10 minutes after
- 24 hours later
- 7 days later

Each review strengthens memory.

## Key Takeaway

Good note-taking is active thinking on paper.

> "The palest ink is better than the best memory."  
— Chinese Proverb
 `
  },

  // ==================================================================================
  // NON-VERBAL COMMUNICATION
  // ==================================================================================
  { 
    id: "comm-body-language", 
    title: "Reading Body Language", 
    description: "Understand what gestures and postures communicate", 
    category: "Communication", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=800",
    tags: ["body-language", "psychology", "observation"],
    content: `
# Reading Body Language

## The Silent Language

More than half of human communication happens without words. Even when people carefully choose what to say, their bodies often reveal what they truly feel.

Body language includes posture, gestures, facial expressions, eye movement, and physical distance. While words can be filtered, body signals are mostly unconscious—making them far more honest.

Learning to read body language helps you:
- Detect interest or boredom
- Sense comfort or discomfort
- Improve empathy
- Respond more intelligently in conversations

![Group of people talking](https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?w=800&q=80)

## The Basics: Open vs. Closed

### Open Body Language (Comfort & Engagement)
These signals suggest the person feels safe and interested:
- Arms and legs uncrossed
- Body and torso facing you
- Relaxed shoulders
- Palms visible (signals honesty)

**Example:**  
A colleague leaning slightly forward with open arms during discussion usually means engagement.

### Closed Body Language (Discomfort or Defense)
These signals suggest emotional distance or unease:
- Crossed arms or legs
- Body turned away
- Objects used as shields (bags, cups, phones)

**Example:**  
Someone answering questions while holding their bag tightly in front of them may feel defensive or nervous.

## Mirroring

Mirroring is subconscious copying of posture, gestures, or rhythm. It’s a strong sign of rapport and connection.

**Example:**
- One person leans back → the other does too
- One crosses legs → the other follows

### How to Use Mirroring
- Mirror subtly (not instantly)
- Match posture, not exact movements
- Never exaggerate

Mirroring builds trust without words.

## The Feet Don’t Lie

Feet reveal intention because we rarely control them consciously.

- Feet pointing toward you → interest
- Feet pointing toward exit → desire to leave
- Shifting feet → impatience or anxiety

**Example:**  
If someone keeps nodding but their feet face the door, they’re mentally already gone.

## Detecting Discomfort (Self-Soothing Behaviors)

When people feel stress, anxiety, or deception, they often touch themselves to calm down.

Common signs:
- Rubbing the neck
- Touching face or nose
- Covering mouth
- Playing with rings, hair, or sleeves

These behaviors don’t always mean lying—but they do signal **emotional discomfort**.

## Context Is Key

Never judge based on one signal.

- Crossed arms could mean defensiveness—or simply cold weather
- Lack of eye contact could mean dishonesty—or shyness

Always look for **clusters** of signals and consider the situation.

## Key Takeaway

Words can be rehearsed. Bodies cannot.  
When body language and words disagree, trust the body.

> "The most important thing in communication is hearing what isn't said."  
— Peter Drucker
`
  },
  { 
    id: "comm-facial-expressions", 
    title: "Facial Expressions & Emotions", 
    description: "Recognize and interpret facial cues", 
    category: "Communication", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    tags: ["emotions", "expressions", "face"],
    content: `
# Facial Expressions & Emotions

## The Universal Language

Despite cultural differences, humans share a common emotional facial language. Across the world, people instinctively recognize seven core emotions:
- Happiness
- Sadness
- Anger
- Fear
- Surprise
- Disgust
- Contempt

These expressions are rooted in biology, not culture.

![Close up of eye](https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80)

## Decoding the Eyes

Eyes reveal emotional truth faster than words.

### Pupil Dilation
- Enlarged pupils → attraction, interest, excitement
- Constricted pupils → discomfort or dislike

### Eye Blocking
- Rubbing eyes
- Closing eyes tightly
- Looking away suddenly

These indicate denial, disbelief, or emotional overload.

### The Squint
- Narrowed eyes signal suspicion, doubt, or deep focus
- Often appears during evaluation or disagreement

## The Duchenne Smile (Real vs. Fake)

### Fake Smile
- Only lips move
- Eyes remain unchanged
- Common in polite or forced situations

### Genuine Smile (Duchenne)
- Cheeks lift
- Wrinkles appear near eyes
- Feels warm and natural

**Rule:**  
If the eyes don’t smile, the emotion isn’t real.

## Micro-expressions

Micro-expressions flash across the face for a fraction of a second before being hidden.

Examples:
- Brief eyebrow drop → anger
- Lip corner tightening → contempt
- Flash of fear → widened eyes

These signals reveal true emotion before social masking takes over.

## Nodding Signals

- **Triple Nod:** Encourages the speaker to continue  
- **Slow Nod:** Signals agreement or understanding  
- **Fast Repeated Nods:** Impatience or eagerness to respond  

Nods guide the flow of conversation without interruption.

## Key Takeaway

The face is a live dashboard of emotion.  
Learning to read it helps you respond with empathy and intelligence.
`
  },
  { 
    id: "comm-personal-space", 
    title: "Understanding Personal Space", 
    description: "Navigate social boundaries appropriately", 
    category: "Communication", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100, 
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
    tags: ["proxemics", "boundaries", "etiquette"],
    content: `
# Understanding Personal Space (Proxemics)

## The Invisible Bubbles

Everyone carries an invisible comfort zone around their body. When someone enters this space uninvited, the brain triggers stress responses.

Respecting personal space builds:
- Trust
- Safety
- Comfort

Violating it creates anxiety—even without words.

![People standing apart](https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80)

## The Four Zones (Edward Hall’s Proxemics)

### 1. Intimate Zone (0–18 inches)
Reserved for:
- Partners
- Close family
- Medical emergencies

Uninvited entry causes instant discomfort.

### 2. Personal Zone (1.5–4 feet)
Used with:
- Friends
- Casual conversations

Comfortable and friendly distance.

### 3. Social Zone (4–12 feet)
Used in:
- Workplaces
- Shops
- Professional meetings

Neutral and respectful.

### 4. Public Zone (12+ feet)
Used for:
- Speeches
- Teaching
- Presentations

Authority-based distance.

## Cultural Variations

Space preferences vary globally.

- Close-contact cultures → stand closer
- Distant cultures → value space

**Golden Rule:**  
If someone steps back, **do not step forward**.

## Touch Etiquette

### Safe Touch
- Handshake
- High-five
- Light shoulder tap (context-dependent)

### Unsafe Touch
- Face
- Head
- Torso

When unsure, don’t touch.

## Key Takeaway

Respecting physical space is respecting emotional boundaries.
`
  },
  { 
    id: "comm-tone-voice", 
    title: "Tone of Voice Matters", 
    description: "How your voice affects your message", 
    category: "Communication", 
    difficulty: "Intermediate" as const, 
    duration: "20 min", 
    points: 130, 
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800",
    tags: ["voice", "audio", "persuasion"],
    content: `
# Tone of Voice Matters

## It’s Not What You Say…

Tone determines meaning. The same words can express care, anger, sarcasm, or indifference depending on delivery.

Example:
"I'm fine."
- Soft tone → reassurance
- Sharp tone → irritation
- Flat tone → emotional withdrawal

![Sound waves](https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80)

## The 38% Rule

Research suggests emotional communication relies heavily on tone and body language.

- Words → Meaning
- Tone → Emotion
- Body → Intention

Tone bridges logic and feeling.

## Elements of Tone (Prosody)

### Pitch
- High pitch → excitement or nervousness
- Low pitch → confidence and authority

### Volume
- Loud → dominance or aggression
- Soft → intimacy or seriousness

### Speed
- Fast → anxiety or excitement
- Slow → importance, calm, sadness

### Timbre
- Warm tone → trust
- Flat tone → boredom
- Strained tone → stress

Smiling while speaking actually changes your vocal warmth.

## The Sentence Stress Test

The emphasis changes the meaning completely:

"I didn't say she stole my money."

Each stressed word creates a different interpretation—proving tone shapes meaning as much as words.

## Key Takeaway

Tone is the emotional soundtrack of speech.  
Make sure the music supports the message.
 `
  },

  // ==================================================================================
  // CONFLICT RESOLUTION
  // ==================================================================================
  { 
    id: "comm-handling-disagreements", 
    title: "Handling Disagreements", 
    description: "Navigate conflicts peacefully and productively", 
    category: "Communication", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
    tags: ["conflict", "negotiation", "peace"],
    content: `
# Handling Disagreements

## Conflict Is Inevitable

Disagreements are not a sign of failure—they are a sign of difference. Differences in values, expectations, priorities, and communication styles naturally create conflict.

The real danger is not conflict itself, but how it is handled:
- Poorly handled conflict damages trust
- Well-handled conflict strengthens relationships

Healthy conflict focuses on solutions, not winning.

![Tug of war concept](https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80)

## The "I" Statement

"You" statements feel like attacks. They trigger defensiveness and shut down listening.

"I" statements focus on **your experience**, not their character.

*Bad:*  
"You never listen to me."  

*Good:*  
"I feel ignored when I'm interrupted because it makes me feel unimportant."

### The Formula
"I feel **[Emotion]** when **[Situation]** because **[Reason]**."

This approach:
✔ Reduces blame  
✔ Keeps emotions honest  
✔ Encourages dialogue  

## Separating the Person from the Problem

Attacking people escalates conflict. Addressing behavior resolves it.

*Destructive:*  
"You are careless."

*Productive:*  
"The deadline was missed, and it affected the timeline."

Focus on:
- Actions
- Impact
- Solutions

Not personality.

## De-escalation Techniques

When emotions rise, logic disappears. Your first job is to **lower emotional intensity**.

1. **Lower Your Voice**  
   Calm tones create calm responses.

2. **Validate Feelings**  
   “I can see why you’re upset.”  
   Validation ≠ agreement.

3. **Take a Strategic Pause**  
   “Let’s take a few minutes and continue once we’re calmer.”

Pausing prevents damage you’ll later regret.

## Finding Common Ground

Agreement creates momentum.

Start with shared goals:
- “We both want this project to succeed.”
- “We both care about maintaining trust.”

Once people feel aligned, solutions come easier.

## Key Takeaway

Conflict is not about defeating the other person.  
It’s about solving a problem **without damaging the relationship**.

> "Peace is not the absence of conflict, it is the ability to handle conflict by peaceful means."  
— Ronald Reagan
 `
  },
  { 
    id: "comm-assertive-communication", 
    title: "Being Assertive, Not Aggressive", 
    description: "Express needs while respecting others", 
    category: "Communication", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1508963493749-b6f78f6d6350?w=800",
    tags: ["assertiveness", "boundaries", "respect"],
    content: `
# Being Assertive, Not Aggressive

## The Communication Spectrum

How you express needs determines how people respond.

### 1. Passive (Doormat)
- Avoids conflict
- Suppresses needs
- Says yes when meaning no

*Result:* Frustration, resentment, burnout

### 2. Aggressive (Bully)
- Dominates conversation
- Uses blame or threats
- Ignores others’ needs

*Result:* Fear, resistance, broken trust

### 3. Assertive (Leader)
- Clear and respectful
- Honest about needs
- Open to discussion

*Result:* Mutual respect and cooperation

![Confident stance](https://images.unsplash.com/photo-1508963493749-b6f78f6d6350?w=800&q=80)

## Why We Avoid Assertiveness

Many people confuse assertiveness with rudeness.  
In reality, **unclear communication causes more harm than clear boundaries**.

Assertiveness:
- Prevents misunderstandings
- Protects energy and time
- Builds long-term respect

## Scripts for Assertiveness

### The Broken Record
Calmly repeat your boundary without emotion.

"I understand, but I can’t offer a discount."  
"I hear your concern, but I can’t offer a discount."

Consistency beats arguments.

### The Fog
Accept valid criticism without defensiveness.

*Critic:* “You’re late.”  
*Response:* “You’re right. Let’s get started.”

No excuses. No drama.

## Body Language of Assertiveness

Your body must match your words:
- Upright posture
- Calm eye contact
- Steady voice
- Relaxed shoulders

Never apologize for having a boundary.

## Key Takeaway

Assertiveness is self-respect in action.  
If you don’t communicate your limits, others will define them for you.
 `
  },
  { 
    id: "comm-saying-no", 
    title: "The Art of Saying No", 
    description: "Set boundaries respectfully and firmly", 
    category: "Communication", 
    difficulty: "Intermediate" as const, 
    duration: "20 min", 
    points: 130, 
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    tags: ["boundaries", "refusal", "self-care"],
    content: `
# The Art of Saying No

## The Cost of "Yes"

Every "yes" consumes time, energy, and attention.  
When you say yes to everything, you silently sacrifice:
- Rest
- Focus
- Personal priorities

Saying no is not rejection—it is **selection**.

![Stop sign concept](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80)

## Why It's Hard

We struggle to say no because of:
- Desire to be liked
- Fear of conflict
- Fear of missing opportunities
- Guilt

But resentment is the price of people-pleasing.

## How to Say No (Without Being a Jerk)

You don’t owe long explanations.

### Effective No Styles

1. **Soft No**  
   “I’d love to help, but I don’t have the capacity right now.”

2. **Delay No**  
   “Let me think about it and get back to you.”

3. **Alternative No**  
   “I can’t do this, but I can suggest another option.”

4. **Policy No**  
   “I don’t take meetings after 7 PM.”

Policies reduce emotional pressure.

## The Sandwich Method

- Positive start
- Clear refusal
- Positive close

This preserves warmth while holding boundaries.

## Dealing with Pushback

Repeat calmly:
- “That won’t be possible.”
- “My decision is final.”

No over-explaining.

## Key Takeaway

You are not responsible for managing other people’s disappointment.  
Healthy boundaries protect relationships—not harm them.

> "Half of the troubles of this life can be traced to saying yes too quickly and not saying no soon enough."  
— Josh Billings
`
  },
  { 
    id: "comm-apologizing", 
    title: "Making Genuine Apologies", 
    description: "Learn to apologize sincerely and effectively", 
    category: "Communication", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100, 
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800",
    tags: ["apology", "forgiveness", "relationships"],
    content: `
# Making Genuine Apologies

## The Power of Repair

Mistakes are unavoidable. Damage is optional.

Strong relationships survive not because people are perfect—but because they repair harm quickly and sincerely.

![Shaking hands](https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&q=80)

## The Non-Apology (Avoid These!)

- “I’m sorry IF you felt hurt.” → Shifts blame
- “I’m sorry BUT…” → Cancels apology
- “I guess I’m sorry.” → Insincere

If it contains excuses, it’s not an apology.

## The 4 Rs of a Good Apology

### 1. Responsibility
Own the mistake clearly.
“I interrupted you.”

### 2. Remorse
Acknowledge emotional impact.
“I regret that it hurt you.”

### 3. Repair
Offer to fix the damage.
“How can I make this right?”

### 4. Recommitment
Explain what will change.
“It won’t happen again.”

## The Apology Script

"I’m sorry for **[Action]**.  
It was wrong because **[Impact]**.  
In the future, I will **[Change]**.  
Is there anything I can do to repair this?"

## Forgiveness Is Optional

A sincere apology does not guarantee forgiveness.  
Your responsibility ends at honesty and change—not control.

## Key Takeaway

An apology without changed behavior is manipulation.  
A changed behavior is the loudest apology.
`
  }
];