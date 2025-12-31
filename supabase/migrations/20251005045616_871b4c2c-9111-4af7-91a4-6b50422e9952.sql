-- Create user_statistics table to track points, streaks, and other stats
CREATE TABLE public.user_statistics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  total_points INTEGER NOT NULL DEFAULT 0,
  current_streak INTEGER NOT NULL DEFAULT 0,
  best_streak INTEGER NOT NULL DEFAULT 0,
  lessons_completed INTEGER NOT NULL DEFAULT 0,
  quizzes_completed INTEGER NOT NULL DEFAULT 0,
  total_study_time INTEGER NOT NULL DEFAULT 0,
  level INTEGER NOT NULL DEFAULT 1,
  experience_points INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_statistics ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view all statistics for leaderboard"
ON public.user_statistics
FOR SELECT
USING (true);

CREATE POLICY "Users can update their own statistics"
ON public.user_statistics
FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own statistics"
ON public.user_statistics
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create achievements table
CREATE TABLE public.achievements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  rarity TEXT NOT NULL CHECK (rarity IN ('common', 'rare', 'epic', 'legendary')),
  points INTEGER NOT NULL DEFAULT 0,
  icon TEXT NOT NULL,
  requirement_type TEXT NOT NULL,
  requirement_value INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

-- Create policy for viewing achievements
CREATE POLICY "Anyone can view achievements"
ON public.achievements
FOR SELECT
USING (true);

-- Create user_achievements table
CREATE TABLE public.user_achievements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  achievement_id UUID NOT NULL REFERENCES public.achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, achievement_id)
);

-- Enable RLS
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own achievements"
ON public.user_achievements
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own achievements"
ON public.user_achievements
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create rewards table
CREATE TABLE public.rewards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('avatar', 'badge', 'theme', 'title')),
  cost INTEGER NOT NULL,
  icon TEXT,
  data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.rewards ENABLE ROW LEVEL SECURITY;

-- Create policy for viewing rewards
CREATE POLICY "Anyone can view rewards"
ON public.rewards
FOR SELECT
USING (true);

-- Create user_rewards table
CREATE TABLE public.user_rewards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  reward_id UUID NOT NULL REFERENCES public.rewards(id) ON DELETE CASCADE,
  purchased_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN DEFAULT false,
  UNIQUE(user_id, reward_id)
);

-- Enable RLS
ALTER TABLE public.user_rewards ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own rewards"
ON public.user_rewards
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own rewards"
ON public.user_rewards
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own rewards"
ON public.user_rewards
FOR UPDATE
USING (auth.uid() = user_id);

-- Create trigger for updating timestamps
CREATE TRIGGER update_user_statistics_updated_at
BEFORE UPDATE ON public.user_statistics
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default achievements
INSERT INTO public.achievements (code, name, description, rarity, points, icon, requirement_type, requirement_value) VALUES
('first_lesson', 'First Steps', 'Complete your first lesson', 'common', 10, 'BookOpen', 'lessons_completed', 1),
('five_lessons', 'Knowledge Seeker', 'Complete 5 lessons', 'common', 50, 'Book', 'lessons_completed', 5),
('ten_lessons', 'Dedicated Learner', 'Complete 10 lessons', 'rare', 100, 'GraduationCap', 'lessons_completed', 10),
('first_quiz', 'Quiz Master', 'Complete your first quiz', 'common', 10, 'Brain', 'quizzes_completed', 1),
('five_quizzes', 'Quiz Champion', 'Complete 5 quizzes', 'rare', 50, 'Trophy', 'quizzes_completed', 5),
('perfect_score', 'Perfectionist', 'Get 100% on any quiz', 'epic', 150, 'Star', 'perfect_quiz', 1),
('week_streak', 'Week Warrior', 'Maintain a 7-day streak', 'rare', 100, 'Flame', 'streak', 7),
('month_streak', 'Month Master', 'Maintain a 30-day streak', 'epic', 500, 'Crown', 'streak', 30),
('hundred_points', 'Point Collector', 'Earn 100 total points', 'common', 20, 'Coins', 'total_points', 100),
('thousand_points', 'Point Hoarder', 'Earn 1000 total points', 'rare', 100, 'Gem', 'total_points', 1000),
('level_five', 'Rising Star', 'Reach level 5', 'rare', 150, 'Zap', 'level', 5),
('level_ten', 'Expert', 'Reach level 10', 'epic', 300, 'Award', 'level', 10),
('speed_demon', 'Speed Demon', 'Complete a lesson in under 5 minutes', 'epic', 200, 'Rocket', 'fast_completion', 1),
('night_owl', 'Night Owl', 'Study after midnight', 'rare', 75, 'Moon', 'late_night', 1),
('early_bird', 'Early Bird', 'Study before 6 AM', 'rare', 75, 'Sunrise', 'early_morning', 1);

-- Insert default rewards
INSERT INTO public.rewards (code, name, description, category, cost, icon, data) VALUES
('avatar_gold', 'Golden Avatar Border', 'Unlock a golden border for your avatar', 'avatar', 500, 'Shield', '{"color": "gold", "style": "border"}'),
('avatar_rainbow', 'Rainbow Avatar Border', 'Unlock a rainbow border for your avatar', 'avatar', 1000, 'Sparkles', '{"color": "rainbow", "style": "border"}'),
('badge_star', 'Star Badge', 'Show off with a star badge', 'badge', 200, 'Star', '{"icon": "star"}'),
('badge_fire', 'Fire Badge', 'Display a fire badge on your profile', 'badge', 300, 'Flame', '{"icon": "flame"}'),
('theme_dark', 'Dark Theme', 'Unlock premium dark theme', 'theme', 150, 'Moon', '{"theme": "dark"}'),
('theme_purple', 'Purple Theme', 'Unlock purple color theme', 'theme', 250, 'Palette', '{"theme": "purple"}'),
('title_scholar', 'Scholar Title', 'Display "Scholar" title', 'title', 400, 'BookOpen', '{"title": "Scholar"}'),
('title_genius', 'Genius Title', 'Display "Genius" title', 'title', 800, 'Brain', '{"title": "Genius"}'),
('title_legend', 'Legend Title', 'Display "Legend" title', 'title', 1500, 'Crown', '{"title": "Legend"}');