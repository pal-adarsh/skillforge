import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressRing } from "@/components/ui/progress-ring";
import { LessonCard } from "@/components/ui/lesson-card";
import { QuickAccessWidgets } from "@/components/dashboard/QuickAccessWidgets";
import { useProgressTracking } from "@/hooks/useProgressTracking";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";
import { useGamification } from "@/hooks/useGamification";
import { lessons } from "@/data/lessons";
import { standards } from "@/data/standards";
import { 
  Brain,
  BookOpen, 
  Trophy, 
  Zap,
  TrendingUp,
  Clock,
  Star,
  Play,
  ArrowRight,
  Flame,
  Target,
  Award,
  ChevronUp,
  Wifi,
  WifiOff,
  Sparkles,
  Activity,
  Loader2
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-brain.jpg";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { usePWAInstall } from "@/hooks/usePWAInstall";
import { InstallPrompt } from "@/components/ui/install-prompt";

export default function Dashboard() {
  const { language } = useLanguage();
  const t: Record<string, string> = translations[language] as unknown as Record<string, string>;
  const { user } = useAuth();
  const { profile, loading: profileLoading } = useProfile();
  const { stats: gamificationStats, achievements: allAchievements, userAchievements, loading: gamificationLoading } = useGamification();
  const { lessonProgress, quizProgress, getProgressStats, loading: progressLoading } = useProgressTracking();
  const { showInstallPrompt, installApp, dismissPrompt } = usePWAInstall();
  const progressStats = getProgressStats();
  
  // Calculate real data from Supabase
  const overallProgress = lessonProgress.length > 0 
    ? Math.round(lessonProgress.reduce((sum, lesson) => sum + lesson.progress_percentage, 0) / lessonProgress.length)
    : 0;
    
  const currentStreak = gamificationStats?.current_streak || 0;
  const bestStreak = gamificationStats?.best_streak || 0;
  const totalPoints = gamificationStats?.total_points || 0;
  const level = gamificationStats?.level || 1;
  const studyTime = gamificationStats?.total_study_time || Math.round(lessonProgress.length * 2.5);
  const userName = profile?.full_name || user?.email?.split('@')[0] || 'Learner';
  
  const isLoading = profileLoading || gamificationLoading || progressLoading;
  
  // Get earned achievement IDs
  const earnedAchievementIds = new Set(userAchievements.map(ua => ua.achievement_id));
  
  // Map achievements with earned status
  const achievementsWithStatus = allAchievements.slice(0, 4).map(achievement => ({
    ...achievement,
    earned: earnedAchievementIds.has(achievement.id)
  }));
  
  const dashboardStats = [
    { 
      icon: BookOpen, 
      label: t.lessonsCompleted,
      value: progressStats.completedLessons.toString(),
      change: t.change_lessons.replace('{count}', String(Math.max(3, 0))),
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    { 
      icon: Trophy, 
      label: t.quizScore,
      value: `${progressStats.averageQuizScore}%`, 
      change: t.change_quiz.replace('{percent}', String(Math.round(progressStats.averageQuizScore ? 12 : 0))),
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30"
    },
    { 
      icon: Flame, 
      label: t.streakDays,
      value: currentStreak.toString(), 
      change: t.change_streak,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    { 
      icon: Clock, 
      label: t.studyTime,
      value: `${studyTime}h`, 
      change: t.change_study.replace('{hours}', String(Math.round(studyTime * 0.1))),
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30"
    },
  ];

  const featuredSkills = standards.slice(0, 4);

  const getRecentLessons = () => {
    const recentLessonsData = lessons.slice(0, 4).map(lesson => {
      const progress = lessonProgress.find(p => p.lesson_id === lesson.id);
      return {
        id: lesson.id,
        title: lesson.title,
        description: lesson.description,
        duration: lesson.duration,
        difficulty: lesson.difficulty,
        progress: progress?.progress_percentage || 0,
        isLocked: false,
        isCompleted: progress?.completed || false,
        image: lesson.image,
        category: lesson.category,
        onClick: () => {}
      };
    });
    
    return recentLessonsData.sort((a, b) => {
      if (a.progress > 0 && b.progress === 0) return -1;
      if (a.progress === 0 && b.progress > 0) return 1;
      return b.progress - a.progress;
    }).slice(0, 2);
  };
  
  const recentLessons = getRecentLessons();

  return (
    <>
      <InstallPrompt
        isVisible={showInstallPrompt}
        onInstall={installApp}
        onDismiss={dismissPrompt}
      />
      <div className="min-h-screen pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Card className="glass-card overflow-hidden relative">
            {/* Background gradient effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
            
            <div className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6"
                  >
                    <Activity className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">{t.dashboard}</span>
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-display font-bold mb-4"
                  >
                    {(() => {
                      const welcome = t.dashboardWelcome || 'Welcome back, {name}!';
                      const parts = welcome.split('{name}');
                      return (
                        <>
                          {parts[0]} <br />
                          <span className="gradient-text">{userName}</span>
                          {parts[1]}
                        </>
                      );
                    })()}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-muted-foreground mb-8"
                  >
                    {t.dashboardSubheading}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button size="lg" variant="glow" asChild>
                      <Link to="/lessons" className="flex items-center gap-2">
                        <Play className="h-5 w-5" />
                        {t.continueLearning}
                      </Link>
                    </Button>
                    
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/quiz" className="flex items-center gap-2">
                        <Trophy className="h-5 w-5" />
                        {t.takeQuiz}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
                
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                    <ProgressRing percentage={overallProgress} size={200} className="relative animate-float" />
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Stats Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-display font-bold">{t.yourProgress}</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className={`glass-card p-5 hover:border-primary/30 transition-all duration-300 group`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${stat.bgColor} border ${stat.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <Badge variant="cyber" className="text-[10px]">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      {stat.change}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                  
                  <div className="mt-4 h-1.5 w-full bg-muted/30 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick Access - Notes & Pomodoro */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-display font-bold">Quick Access</h2>
          </div>
          <QuickAccessWidgets />
        </motion.section>

        {/* Featured Skill Areas */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-display font-bold">{t.exploreSkills}</h2>
            </div>
            
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link to="/lessons" className="flex items-center gap-2">
                {t.viewAll}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Link to={`/lessons/${skill.id}`}>
                  <Card className="glass-card p-5 hover:border-primary/30 transition-all duration-300 cursor-pointer h-full group">
                    <div className={`h-1.5 ${skill.color} rounded-full mb-4 group-hover:shadow-glow-orange transition-all duration-300`} />
                    <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{skill.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {skill.subjects.reduce((acc, s) => acc + s.lessonIds.length, 0)} lessons
                    </Badge>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Continue Learning */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
              <Brain className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-display font-bold">{t.continueLearning}</h2>
            </div>
            
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link to="/lessons" className="flex items-center gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {recentLessons.map((lesson, index) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <LessonCard {...lesson} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements & Streak */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Streak Section */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                    <Flame className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold">{t.learningStreak}</h3>
                </div>
                <Badge variant="default">
                  {currentStreak} Days
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{t.currentStreak}</span>
                  <span className="font-display font-semibold">{currentStreak} days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{t.bestLabel}</span>
                  <span className="font-display font-semibold">{Math.max(currentStreak, 23)} days</span>
                </div>
                <div className="h-2 w-full bg-muted/30 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((currentStreak / 30) * 100, 100)}%` }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  {30 - currentStreak} {t.change_streak}
                </p>
              </div>
            </Card>
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/30">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold">{t.achievements}</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  {t.viewAll}
                </Button>
              </div>
              
              <div className="space-y-3">
                {achievementsWithStatus.slice(0, 2).map((achievement, index) => (
                  <motion.div
                    key={achievement.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className={`flex items-center space-x-3 p-3 rounded-xl border transition-all duration-300 ${
                      achievement.earned 
                        ? 'border-primary/30 bg-primary/5 hover:bg-primary/10' 
                        : 'border-border/50 bg-muted/20 hover:bg-muted/30'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      achievement.earned 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-muted/30 text-muted-foreground'
                    }`}>
                      <Target className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{achievement.name}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </div>
                    {achievement.earned && (
                      <Star className="h-4 w-4 text-primary animate-pulse" />
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>
        </div>

        {/* Offline Status Indicator */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Card className="glass-card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {user ? (
                  <>
                    <div className="p-1.5 rounded-full bg-emerald-500/20">
                      <Wifi className="h-4 w-4 text-emerald-400" />
                    </div>
                    <span className="text-sm font-medium">{t.onlineMode}</span>
                    <Badge variant="success">{t.synced}</Badge>
                  </>
                ) : (
                  <>
                    <div className="p-1.5 rounded-full bg-primary/20">
                      <WifiOff className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{t.offlineMode}</span>
                    <Badge variant="default">{t.localStorage}</Badge>
                  </>
                )}
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                {user ? t.lastSyncJustNow : t.signInToSync}
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
    </>
  );
}