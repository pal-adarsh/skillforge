import { useEffect, useState } from 'react';
import { useGamification } from '@/hooks/useGamification';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Medal, Crown, Zap, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useFocusMode } from "@/hooks/useFocusMode";
import { FocusModeToggle } from "@/components/ui/focus-mode-toggle";
import { InactivityAlert, WelcomeBackMessage } from "@/components/ui/focus-mode-alerts";

interface LeaderboardEntry {
  user_id: string;
  total_points: number;
  level: number;
  current_streak: number;
  lessons_completed: number;
  quizzes_completed: number;
  profiles: {
    full_name: string | null;
  };
}

export default function Leaderboard() {
  const { user } = useAuth();
  const { getLeaderboard, stats } = useGamification();
  const { language } = useLanguage();
  const t: Record<string, string> = translations[language] as unknown as Record<string, string>;
  const {
    isFocusModeEnabled,
    toggleFocusMode,
    screenTimeData,
    tabSwitchCount,
    isFullscreen,
    exitFullscreen,
    showInactivityAlert,
    dismissInactivityAlert,
    showWelcomeBackMessage,
    dismissWelcomeBackMessage,
    motivationalMessage
  } = useFocusMode({ userName: 'User' });
  const [topUsers, setTopUsers] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<'all' | 'week' | 'month'>('all');

  useEffect(() => {
    loadLeaderboard();
  }, [period]);

  const loadLeaderboard = async () => {
    setLoading(true);
    const data = await getLeaderboard(50);
    setTopUsers(data);
    setLoading(false);
  };

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 1:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-muted-foreground font-bold">{index + 1}</span>;
    }
  };

  const getInitials = (name: string | null) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const userRank = topUsers.findIndex(u => u.user_id === user?.id) + 1;

  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl">
      {/* Focus Mode Toggle - Upper Right */}
      <div className="fixed top-20 right-4 z-40">
        <FocusModeToggle
          isEnabled={isFocusModeEnabled}
          onToggle={toggleFocusMode}
          totalTime={screenTimeData.totalScreenTime}
          focusTime={screenTimeData.focusModeTime}
          tabSwitchCount={tabSwitchCount}
          isFullscreen={isFullscreen}
          onExitFullscreen={exitFullscreen}
          userName="User"
        />
      </div>

      {/* Focus Mode Alerts */}
      <InactivityAlert
        show={showInactivityAlert}
        onDismiss={dismissInactivityAlert}
      />
      <WelcomeBackMessage
        show={showWelcomeBackMessage}
        message={motivationalMessage}
        onDismiss={dismissWelcomeBackMessage}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Trophy className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold">{t.leaderboardTitle}</h1>
          </div>
          <p className="text-muted-foreground text-lg">{t.leaderboardSubtitle}</p>
        </div>

        {/* User's Current Rank Card */}
        {stats && userRank > 0 && (
          <Card className="border-primary/50 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <span className="text-2xl font-bold text-primary">#{userRank}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{t.leaderboardYourRank}</h3>
                    <p className="text-muted-foreground">
                      {stats.total_points} {t.leaderboardPoints} • {t.leaderboardLevel} {stats.level}
                    </p>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {stats.lessons_completed} {t.leaderboardLessonsCompleted}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {t.leaderboardDayStreak.replace('{count}', String(stats.current_streak))}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tabs for different periods */}
        <Tabs value={period} onValueChange={(v) => setPeriod(v as any)} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all">{t.leaderboardAllTime}</TabsTrigger>
            <TabsTrigger value="month">{t.leaderboardThisMonth}</TabsTrigger>
            <TabsTrigger value="week">{t.leaderboardThisWeek}</TabsTrigger>
          </TabsList>

          <TabsContent value={period} className="space-y-4 mt-6">
            {/* Top 3 Podium */}
            {topUsers.length >= 3 && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {/* 2nd Place */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="text-center pt-8">
                    <CardContent className="space-y-4">
                      <div className="flex justify-center">
                        <Medal className="h-12 w-12 text-gray-400" />
                      </div>
                      <Avatar className="h-20 w-20 mx-auto border-4 border-gray-400">
                        <AvatarFallback className="bg-gray-400/20 text-xl">
                          {getInitials(topUsers[1]?.profiles?.full_name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">
                          {topUsers[1]?.profiles?.full_name || 'Anonymous'}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {topUsers[1]?.total_points.toLocaleString()} pts
                        </p>
                        <Badge variant="secondary" className="mt-2">
                          Level {topUsers[1]?.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* 1st Place */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="-mt-8"
                >
                  <Card className="text-center pt-8 border-yellow-500/50 bg-gradient-to-b from-yellow-500/10 to-transparent">
                    <CardContent className="space-y-4">
                      <div className="flex justify-center">
                        <Crown className="h-16 w-16 text-yellow-500 animate-pulse" />
                      </div>
                      <Avatar className="h-24 w-24 mx-auto border-4 border-yellow-500">
                        <AvatarFallback className="bg-yellow-500/20 text-2xl">
                          {getInitials(topUsers[0]?.profiles?.full_name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-xl">
                          {topUsers[0]?.profiles?.full_name || 'Anonymous'}
                        </h3>
                        <p className="text-muted-foreground">
                          {topUsers[0]?.total_points.toLocaleString()} pts
                        </p>
                        <Badge className="mt-2 bg-yellow-500 hover:bg-yellow-600">
                          Level {topUsers[0]?.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* 3rd Place */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="text-center pt-8">
                    <CardContent className="space-y-4">
                      <div className="flex justify-center">
                        <Medal className="h-12 w-12 text-amber-600" />
                      </div>
                      <Avatar className="h-20 w-20 mx-auto border-4 border-amber-600">
                        <AvatarFallback className="bg-amber-600/20 text-xl">
                          {getInitials(topUsers[2]?.profiles?.full_name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">
                          {topUsers[2]?.profiles?.full_name || 'Anonymous'}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {topUsers[2]?.total_points.toLocaleString()} pts
                        </p>
                        <Badge variant="secondary" className="mt-2">
                          Level {topUsers[2]?.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            )}

            {/* Rest of leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  {t.leaderboardTopLearners}
                </CardTitle>
                <CardDescription>
                  {t.leaderboardRankingsBasedOnPoints}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {loading ? (
                  <p className="text-center py-8 text-muted-foreground">{t.leaderboardLoading}</p>
                ) : (
                  topUsers.slice(3).map((entry, index) => (
                    <motion.div
                      key={entry.user_id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${entry.user_id === user?.id
                        ? 'bg-primary/10 border border-primary/50'
                        : 'hover:bg-muted/50'
                        }`}
                    >
                      <div className="flex items-center justify-center w-10 h-10">
                        {getRankIcon(index + 3)}
                      </div>

                      <Avatar className="h-12 w-12">
                        <AvatarFallback>
                          {getInitials(entry.profiles?.full_name)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <h4 className="font-semibold">
                          {entry.profiles?.full_name || t.leaderboardAnonymousUser}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{entry.total_points.toLocaleString()} {t.leaderboardPts}</span>
                          <span>•</span>
                          <span>{t.leaderboardLevel} {entry.level}</span>
                          <span>•</span>
                          <span>{entry.lessons_completed} {t.leaderboardLessonsLabel}</span>
                        </div>
                      </div>

                      <Badge variant="outline">
                        {entry.current_streak > 0 && `🔥 ${entry.current_streak}`}
                      </Badge>
                    </motion.div>
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
