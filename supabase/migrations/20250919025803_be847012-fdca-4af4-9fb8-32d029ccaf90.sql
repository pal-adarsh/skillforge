-- Create a table for user lesson progress
CREATE TABLE public.lesson_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  lesson_id TEXT NOT NULL,
  category TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  progress_percentage INTEGER DEFAULT 0,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, lesson_id)
);

-- Create a table for user quiz progress
CREATE TABLE public.quiz_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  quiz_id TEXT NOT NULL,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  score INTEGER DEFAULT 0,
  total_questions INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  time_taken INTEGER, -- in seconds
  answers JSONB, -- store user answers
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_progress ENABLE ROW LEVEL SECURITY;

-- Create policies for lesson progress
CREATE POLICY "Users can view their own lesson progress" 
ON public.lesson_progress 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own lesson progress" 
ON public.lesson_progress 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own lesson progress" 
ON public.lesson_progress 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own lesson progress" 
ON public.lesson_progress 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create policies for quiz progress
CREATE POLICY "Users can view their own quiz progress" 
ON public.quiz_progress 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own quiz progress" 
ON public.quiz_progress 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quiz progress" 
ON public.quiz_progress 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own quiz progress" 
ON public.quiz_progress 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_lesson_progress_updated_at
  BEFORE UPDATE ON public.lesson_progress
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_quiz_progress_updated_at
  BEFORE UPDATE ON public.quiz_progress
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_lesson_progress_user_id ON public.lesson_progress(user_id);
CREATE INDEX idx_lesson_progress_category ON public.lesson_progress(category);
CREATE INDEX idx_quiz_progress_user_id ON public.quiz_progress(user_id);
CREATE INDEX idx_quiz_progress_category ON public.quiz_progress(category);
CREATE INDEX idx_quiz_progress_difficulty ON public.quiz_progress(difficulty);