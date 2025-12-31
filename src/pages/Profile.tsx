import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar,
  Trophy,
  BookOpen,
  Clock,
  Target,
  Settings,
  Download,
  Edit,
  Save,
  X,
  Star,
  TrendingUp,
  Award,
  Zap,
  ChevronUp
} from "lucide-react";
import { useProgressTracking } from "@/hooks/useProgressTracking";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export default function Profile() {
  const { user } = useAuth();
  const { language } = useLanguage();
  const t: Record<string, string> = translations[language] as unknown as Record<string, string>;
  const { lessonProgress, quizProgress, getProgressStats, loading } = useProgressTracking();
  const { profile, loading: profileLoading, saving: profileSaving, updateProfile } = useProfile();
  const progressStats = getProgressStats();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    full_name: '',
    phone: '',
    date_of_birth: ''
  });
  
  // Calculate dynamic stats
  const overallProgress = lessonProgress.length > 0 
    ? Math.round(lessonProgress.reduce((sum, lesson) => sum + lesson.progress_percentage, 0) / lessonProgress.length)
    : 0;
    
  const currentStreak = 7; // This could be calculated from completion dates
  const studyTime = Math.round(lessonProgress.length * 2.5); // Estimate based on lessons

  // Initialize edit data when profile loads
  useEffect(() => {
    if (profile) {
      setEditData({
        full_name: profile.full_name || '',
        phone: profile.phone || '',
        date_of_birth: profile.date_of_birth || ''
      });
    }
  }, [profile]);

  const stats = [
    { 
      icon: BookOpen, 
      label: t.lessonsCompleted,
      value: progressStats.completedLessons, 
      total: lessonProgress.length,
      color: "text-primary",
      change: t.change_lessons.replace('{count}', String(Math.max(3, 0))),
      trend: "up" 
    },
    { 
      icon: Trophy, 
      label: t.quizScore,
      value: progressStats.averageQuizScore, 
      total: 100,
      color: "text-secondary",
      suffix: "%",
      change: t.change_quiz.replace('{percent}', String(Math.round(progressStats.averageQuizScore ? 12 : 0))),
      trend: "up" 
    },
    { 
      icon: Zap, 
      label: t.streakDays,
      value: currentStreak, 
      total: 30,
      color: "text-accent",
      change: t.change_streak,
      trend: "up" 
    },
    { 
      icon: Clock, 
      label: t.studyTime,
      value: studyTime, 
      total: 100,
      color: "text-green-400",
      change: t.change_study.replace('{hours}', String(Math.round(studyTime * 0.1))),
      trend: "up" 
    },
  ];

  const achievements = [
    { 
      title: t.achievement_first_steps_title,
      description: t.achievement_first_steps_desc,
      earned: progressStats.completedLessons > 0,
      date: progressStats.completedLessons > 0 ? "March 15, 2024" : null
    },
    { 
      title: t.achievement_quiz_master_title,
      description: t.achievement_quiz_master_desc,
      earned: progressStats.averageQuizScore >= 90,
      date: progressStats.averageQuizScore >= 90 ? "March 22, 2024" : null
    },
    { 
      title: t.achievement_learning_streak_title,
      description: t.achievement_learning_streak_desc,
      earned: currentStreak >= 7,
      date: currentStreak >= 7 ? "March 30, 2024" : null
    },
    { 
      title: t.achievement_category_explorer_title,
      description: t.achievement_category_explorer_desc,
      earned: false,
      date: null
    },
    { 
      title: t.achievement_speed_learner_title,
      description: t.achievement_speed_learner_desc,
      earned: false,
      date: null
    },
    { 
      title: t.achievement_perfect_score_title,
      description: t.achievement_perfect_score_desc,
      earned: progressStats.averageQuizScore === 100,
      date: progressStats.averageQuizScore === 100 ? "April 5, 2024" : null
    }
  ];

  const recentActivity = [
    { 
      type: "lesson", 
      title: t.activity_react_hooks,
      date: "2 hours ago",
      progress: 75 
    },
    { 
      type: "quiz", 
      title: t.activity_js_quiz,
      date: "1 day ago",
      score: progressStats.averageQuizScore 
    },
    { 
      type: "achievement", 
      title: t.activity_streak_badge,
      date: "2 days ago" 
    },
    { 
      type: "lesson", 
      title: t.activity_quantum,
      date: "3 days ago",
      progress: 30 
    },
  ];

  const handleSave = async () => {
    const success = await updateProfile(editData);
    if (success) {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    if (profile) {
      setEditData({
        full_name: profile.full_name || '',
        phone: profile.phone || '',
        date_of_birth: profile.date_of_birth || ''
      });
    }
    setIsEditing(false);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "lesson": return BookOpen;
      case "quiz": return Trophy;
      case "achievement": return Award;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 glow-text">{t.profileHeading}</h1>
          <p className="text-xl text-muted-foreground">
            {t.profileSubheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="glass-card p-6 mb-6">
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative inline-block mb-4"
                >
                  <Avatar className="w-24 h-24 mx-auto ring-4 ring-primary/20">
                    <AvatarImage src={user?.user_metadata?.avatar_url} />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      {(profile?.full_name || user?.email || 'U').split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 rounded-full w-8 h-8"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </motion.div>
                
                {!isEditing ? (
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{profile?.full_name || user?.email || 'User'}</h3>
                    <p className="text-muted-foreground mb-4">{t.learningEnthusiast}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsEditing(true)}
                      disabled={profileLoading}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      {t.editProfile}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">{t.fullName}</Label>
                      <Input
                        id="name"
                        value={editData.full_name}
                        onChange={(e) => setEditData({...editData, full_name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t.phoneLabel}</Label>
                      <Input
                        id="phone"
                        value={editData.phone}
                        onChange={(e) => setEditData({...editData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="dob">{t.dateOfBirth}</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={editData.date_of_birth}
                        onChange={(e) => setEditData({...editData, date_of_birth: e.target.value})}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={handleSave} 
                        className="flex-1"
                        disabled={profileSaving}
                      >
                        {profileSaving ? (
                            t.saving
                          ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                              {t.save}
                          </>
                        )}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleCancel}
                        disabled={profileSaving}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{user?.email}</p>
                    <p className="text-sm text-muted-foreground">{t.emailLabel || 'Email'}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{profile?.phone || t.notProvided}</p>
                    <p className="text-sm text-muted-foreground">{t.phoneLabel || 'Phone'}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">
                      {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      }) : t.notProvided}
                    </p>
                    <p className="text-sm text-muted-foreground">{t.joined}</p>
                  </div>
                </div>

                {profile?.date_of_birth && (
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">
                        {new Date(profile.date_of_birth).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-muted-foreground">{t.dateOfBirth}</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-primary" />
                {t.quickActions}
              </h3>
              
              <div className="space-y-3">
                
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  {t.accountSettings}
                </Button>
                
               
              </div>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="glass">
                <TabsTrigger value="overview">{t.overview}</TabsTrigger>
                <TabsTrigger value="achievements">{t.achievements}</TabsTrigger>
                <TabsTrigger value="activity">{t.recentActivity}</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Card className="glass-card p-6 hover:glow-primary transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 rounded-lg bg-muted/20 ${stat.color}`}>
                            <stat.icon className="h-6 w-6" />
                          </div>
                          <div className="flex items-center space-x-1">
                            <ChevronUp className="h-3 w-3 text-emerald-400" />
                            <Badge variant="outline" className="text-xs border-emerald-400/30 text-emerald-400">
                              {stat.change}
                            </Badge>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-1">
                          {stat.value}{stat.suffix || ''}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">{stat.label}</p>
                        
                        <Progress 
                          value={(stat.value / stat.total) * 100} 
                          className="h-2"
                        />
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Learning Progress */}
                <Card className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                    {t.learningProgress}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{t.coding}</span>
                          <span className="text-sm text-muted-foreground">8/12 lessons</span>
                        </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    
                    <div>
                        <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{t.science}</span>
                        <span className="text-sm text-muted-foreground">5/8 lessons</span>
                      </div>
                      <Progress value={63} className="h-2" />
                    </div>
                    
                    <div>
                        <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{t.generalKnowledge}</span>
                        <span className="text-sm text-muted-foreground">2/4 lessons</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Achievements Tab */}
              <TabsContent value="achievements" className="space-y-6">
                <Card className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    {t.achievements}
                  </h3>
                  
                  <div className="grid gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-200 ${
                          achievement.earned 
                            ? "border-primary/30 bg-primary/5" 
                            : "border-border bg-muted/5 opacity-60"
                        }`}
                      >
                        <div className={`p-3 rounded-full ${
                          achievement.earned 
                            ? "bg-primary/20 text-primary" 
                            : "bg-muted/20 text-muted-foreground"
                        }`}>
                          <Star className="h-6 w-6" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          {achievement.earned && achievement.date && (
                            <p className="text-xs text-primary mt-1">{t.earnedOn.replace('{date}', achievement.date)}</p>
                          )}
                        </div>
                        
                        {achievement.earned && (
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {t.earned}
                          </Badge>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="space-y-6">
                <Card className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    {t.recentActivity}
                  </h3>
                  
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => {
                      const ActivityIcon = getActivityIcon(activity.type);
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-muted/5 transition-colors"
                        >
                          <div className="p-2 rounded-full bg-primary/20 text-primary">
                            <ActivityIcon className="h-4 w-4" />
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-medium">{activity.title}</h4>
                            <p className="text-sm text-muted-foreground">{activity.date}</p>
                          </div>
                          
                          <div className="text-right">
                            {activity.progress && (
                              <Badge variant="outline">{activity.progress}% complete</Badge>
                            )}
                            {activity.score && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                {activity.score}%
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
