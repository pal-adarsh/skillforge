-- Function to increment lesson completion stats and award points
CREATE OR REPLACE FUNCTION public.increment_lesson_stats(p_user_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_stats RECORD;
  v_new_level INTEGER;
BEGIN
  -- Get or create user statistics
  SELECT * INTO v_stats FROM user_statistics WHERE user_id = p_user_id FOR UPDATE;
  
  IF NOT FOUND THEN
    INSERT INTO user_statistics (user_id, lessons_completed, total_points, experience_points, level)
    VALUES (p_user_id, 1, 10, 10, 1);
  ELSE
    -- Calculate new values
    v_new_level := FLOOR((v_stats.experience_points + 10) / 100.0) + 1;
    
    -- Update statistics
    UPDATE user_statistics
    SET 
      lessons_completed = lessons_completed + 1,
      total_points = total_points + 10,
      experience_points = experience_points + 10,
      level = v_new_level,
      updated_at = now()
    WHERE user_id = p_user_id;
  END IF;
END;
$$;

-- Function to increment quiz completion stats and award points
CREATE OR REPLACE FUNCTION public.increment_quiz_stats(
  p_user_id UUID,
  p_score INTEGER,
  p_total INTEGER
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_stats RECORD;
  v_points INTEGER;
  v_new_level INTEGER;
BEGIN
  -- Calculate points based on score (max 20 points for perfect score)
  v_points := FLOOR((p_score::FLOAT / p_total::FLOAT) * 20);
  
  -- Get or create user statistics
  SELECT * INTO v_stats FROM user_statistics WHERE user_id = p_user_id FOR UPDATE;
  
  IF NOT FOUND THEN
    INSERT INTO user_statistics (user_id, quizzes_completed, total_points, experience_points, level)
    VALUES (p_user_id, 1, v_points, v_points, 1);
  ELSE
    -- Calculate new level
    v_new_level := FLOOR((v_stats.experience_points + v_points) / 100.0) + 1;
    
    -- Update statistics
    UPDATE user_statistics
    SET 
      quizzes_completed = quizzes_completed + 1,
      total_points = total_points + v_points,
      experience_points = experience_points + v_points,
      level = v_new_level,
      updated_at = now()
    WHERE user_id = p_user_id;
  END IF;
END;
$$;