import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface UserStats {
  id: string;
  user_id: string;
  total_points: number;
  current_streak: number;
  best_streak: number;
  lessons_completed: number;
  quizzes_completed: number;
  total_study_time: number;
  level: number;
  experience_points: number;
}

interface Achievement {
  id: string;
  code: string;
  name: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
  icon: string;
  requirement_type: string;
  requirement_value: number;
}

interface UserAchievement {
  id: string;
  achievement_id: string;
  earned_at: string;
  achievement: Achievement;
}

interface Reward {
  id: string;
  code: string;
  name: string;
  description: string;
  category: 'avatar' | 'badge' | 'theme' | 'title';
  cost: number;
  icon: string;
  data: any;
}

interface UserReward {
  id: string;
  reward_id: string;
  purchased_at: string;
  is_active: boolean;
  reward: Reward;
}

export const useGamification = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [userAchievements, setUserAchievements] = useState<UserAchievement[]>([]);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [userRewards, setUserRewards] = useState<UserReward[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch user statistics
  const fetchStats = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_statistics')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        // Create initial stats for new user
        const { data: newStats, error: createError } = await supabase
          .from('user_statistics')
          .insert({ user_id: user.id })
          .select()
          .single();

        if (createError) throw createError;
        setStats(newStats);
      } else {
        setStats(data);
      }
    } catch (error: any) {
      console.error('Error fetching stats:', error);
      toast.error('Failed to load statistics');
    }
  };

  // Fetch all achievements
  const fetchAchievements = async () => {
    try {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .order('rarity', { ascending: true });

      if (error) throw error;
      setAchievements((data || []) as Achievement[]);
    } catch (error: any) {
      console.error('Error fetching achievements:', error);
    }
  };

  // Fetch user's earned achievements
  const fetchUserAchievements = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_achievements')
        .select('*, achievement:achievements(*)')
        .eq('user_id', user.id);

      if (error) throw error;
      setUserAchievements((data || []) as UserAchievement[]);
    } catch (error: any) {
      console.error('Error fetching user achievements:', error);
    }
  };

  // Fetch available rewards
  const fetchRewards = async () => {
    try {
      const { data, error } = await supabase
        .from('rewards')
        .select('*')
        .order('cost', { ascending: true });

      if (error) throw error;
      setRewards((data || []) as Reward[]);
    } catch (error: any) {
      console.error('Error fetching rewards:', error);
    }
  };

  // Fetch user's purchased rewards
  const fetchUserRewards = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_rewards')
        .select('*, reward:rewards(*)')
        .eq('user_id', user.id);

      if (error) throw error;
      setUserRewards((data || []) as UserReward[]);
    } catch (error: any) {
      console.error('Error fetching user rewards:', error);
    }
  };

  // Award points and check for achievements
  const awardPoints = async (points: number, reason: string) => {
    if (!user || !stats) return;

    try {
      const newTotalPoints = stats.total_points + points;
      const newExperience = stats.experience_points + points;
      const newLevel = Math.floor(newExperience / 100) + 1;

      const { error } = await supabase
        .from('user_statistics')
        .update({
          total_points: newTotalPoints,
          experience_points: newExperience,
          level: newLevel,
        })
        .eq('user_id', user.id);

      if (error) throw error;

      setStats({
        ...stats,
        total_points: newTotalPoints,
        experience_points: newExperience,
        level: newLevel,
      });

      toast.success(`+${points} points! ${reason}`);
      
      // Check for new achievements
      await checkAchievements();
    } catch (error: any) {
      console.error('Error awarding points:', error);
    }
  };

  // Update lesson completion
  const updateLessonCompletion = async () => {
    if (!user || !stats) return;

    try {
      const newCount = stats.lessons_completed + 1;

      const { error } = await supabase
        .from('user_statistics')
        .update({ lessons_completed: newCount })
        .eq('user_id', user.id);

      if (error) throw error;

      setStats({ ...stats, lessons_completed: newCount });
      await awardPoints(10, 'Lesson completed!');
      await checkAchievements();
    } catch (error: any) {
      console.error('Error updating lesson completion:', error);
    }
  };

  // Update quiz completion
  const updateQuizCompletion = async (score: number, totalQuestions: number) => {
    if (!user || !stats) return;

    try {
      const newCount = stats.quizzes_completed + 1;
      const points = Math.floor((score / totalQuestions) * 20);

      const { error } = await supabase
        .from('user_statistics')
        .update({ quizzes_completed: newCount })
        .eq('user_id', user.id);

      if (error) throw error;

      setStats({ ...stats, quizzes_completed: newCount });
      await awardPoints(points, `Quiz completed! Score: ${score}/${totalQuestions}`);
      await checkAchievements();
    } catch (error: any) {
      console.error('Error updating quiz completion:', error);
    }
  };

  // Check and award achievements
  const checkAchievements = async () => {
    if (!user || !stats) return;

    const earnedIds = userAchievements.map(ua => ua.achievement_id);
    const newAchievements = achievements.filter(a => {
      if (earnedIds.includes(a.id)) return false;

      switch (a.requirement_type) {
        case 'lessons_completed':
          return stats.lessons_completed >= a.requirement_value;
        case 'quizzes_completed':
          return stats.quizzes_completed >= a.requirement_value;
        case 'total_points':
          return stats.total_points >= a.requirement_value;
        case 'level':
          return stats.level >= a.requirement_value;
        case 'streak':
          return stats.current_streak >= a.requirement_value;
        default:
          return false;
      }
    });

    for (const achievement of newAchievements) {
      try {
        const { error } = await supabase
          .from('user_achievements')
          .insert({
            user_id: user.id,
            achievement_id: achievement.id,
          });

        if (error) throw error;

        toast.success(`🎉 Achievement Unlocked: ${achievement.name}!`, {
          description: achievement.description,
        });

        await awardPoints(achievement.points, `Achievement: ${achievement.name}`);
      } catch (error: any) {
        console.error('Error awarding achievement:', error);
      }
    }

    await fetchUserAchievements();
  };

  // Purchase reward
  const purchaseReward = async (rewardId: string, cost: number) => {
    if (!user || !stats) return false;

    if (stats.total_points < cost) {
      toast.error('Not enough points!');
      return false;
    }

    try {
      // Deduct points
      const { error: updateError } = await supabase
        .from('user_statistics')
        .update({ total_points: stats.total_points - cost })
        .eq('user_id', user.id);

      if (updateError) throw updateError;

      // Add reward
      const { error: insertError } = await supabase
        .from('user_rewards')
        .insert({
          user_id: user.id,
          reward_id: rewardId,
        });

      if (insertError) throw insertError;

      setStats({ ...stats, total_points: stats.total_points - cost });
      await fetchUserRewards();
      
      toast.success('Reward purchased successfully!');
      return true;
    } catch (error: any) {
      console.error('Error purchasing reward:', error);
      toast.error('Failed to purchase reward');
      return false;
    }
  };

  // Get leaderboard
  const getLeaderboard = async (limit: number = 10) => {
    try {
      // First get user statistics
      const { data: statsData, error: statsError } = await supabase
        .from('user_statistics')
        .select('*')
        .order('total_points', { ascending: false })
        .limit(limit);

      if (statsError) throw statsError;

      if (!statsData || statsData.length === 0) return [];

      // Then get profiles for these users
      const userIds = statsData.map(s => s.user_id);
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('user_id, full_name')
        .in('user_id', userIds);

      if (profilesError) throw profilesError;

      // Combine the data
      const combined = statsData.map(stat => {
        const profile = profilesData?.find(p => p.user_id === stat.user_id);
        return {
          ...stat,
          profiles: {
            full_name: profile?.full_name || null
          }
        };
      });

      return combined;
    } catch (error: any) {
      console.error('Error fetching leaderboard:', error);
      return [];
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([
        fetchStats(),
        fetchAchievements(),
        fetchUserAchievements(),
        fetchRewards(),
        fetchUserRewards(),
      ]);
      setLoading(false);
    };

    if (user) {
      loadData();
    }
  }, [user]);

  return {
    stats,
    achievements,
    userAchievements,
    rewards,
    userRewards,
    loading,
    awardPoints,
    updateLessonCompletion,
    updateQuizCompletion,
    purchaseReward,
    getLeaderboard,
    refetch: fetchStats,
  };
};
