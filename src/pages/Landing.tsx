import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  MessageCircle, 
  Shield, 
  Lightbulb, 
  Target,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Clock,
  Star,
  Zap,
  ChevronRight,
  BookOpen,
  Trophy,
  TrendingUp,
  FileText,
  Timer,
  FileUp,
  Globe,
  Coffee,
  Flame,
  Award,
  Users,
  BarChart,
  Gift,
  Code,
  Pen,
  BookMarked,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import heroImage from "@/assets/hero-brain.jpg";

export default function Landing() {
  const { user } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: BookOpen,
      title: t.interactiveLessonsTitle,
      description: t.interactiveLessonsDesc,
      color: "from-blue-500 to-cyan-500",
      glow: "shadow-[0_0_30px_hsl(195_80%_50%_/_0.3)]",
      link: "/lessons"
    },
    {
      icon: Trophy,
      title: t.quizAssessmentsTitle,
      description: t.quizAssessmentsDesc,
      color: "from-amber-500 to-orange-500",
      glow: "shadow-[0_0_30px_hsl(25_95%_55%_/_0.3)]",
      link: "/quiz"
    },
    {
      icon: Globe,
      title: t.generalKnowledgeTitle,
      description: t.generalKnowledgeDesc,
      color: "from-green-500 to-emerald-500",
      glow: "shadow-[0_0_30px_hsl(150_80%_45%_/_0.3)]",
      link: "/gk"
    },
    {
      icon: FileText,
      title: t.smartNotesTitle,
      description: t.smartNotesDesc,
      color: "from-purple-500 to-violet-500",
      glow: "shadow-[0_0_30px_hsl(270_90%_65%_/_0.3)]",
      link: "/notes"
    },
    {
      icon: FileUp,
      title: t.pdfAnalyzerTitle,
      description: t.pdfAnalyzerDesc,
      color: "from-indigo-500 to-blue-500",
      glow: "shadow-[0_0_30px_hsl(220_90%_55%_/_0.3)]",
      link: "/pdf"
    },
    {
      icon: Timer,
      title: t.pomodoroTimerTitle,
      description: t.pomodoroTimerDesc,
      color: "from-red-500 to-pink-500",
      glow: "shadow-[0_0_30px_hsl(350_90%_60%_/_0.3)]",
      link: "/pomodoro"
    },
    {
      icon: TrendingUp,
      title: t.leaderboardTitleFeature,
      description: t.leaderboardDescFeature,
      color: "from-teal-500 to-cyan-500",
      glow: "shadow-[0_0_30px_hsl(180_80%_50%_/_0.3)]",
      link: "/leaderboard"
    },
    {
      icon: Gift,
      title: t.rewardsAchievementsTitle,
      description: t.rewardsAchievementsDesc,
      color: "from-yellow-500 to-amber-500",
      glow: "shadow-[0_0_30px_hsl(45_95%_55%_/_0.3)]",
      link: "/rewards"
    }
  ];

  const aiFeatures = [
    {
      icon: Sparkles,
      title: t.aiPoweredPDFChatTitle,
      description: t.aiPoweredPDFChatDesc,
      color: "text-purple-500"
    },
    {
      icon: Brain,
      title: t.smartNoteAssistantTitle,
      description: t.smartNoteAssistantDesc,
      color: "text-blue-500"
    },
    {
      icon: Code,
      title: t.mermaidFlowchartsTitle,
      description: t.mermaidFlowchartsDesc,
      color: "text-green-500"
    },
    {
      icon: BookMarked,
      title: t.personalizedLearningTitle,
      description: t.personalizedLearningDesc,
      color: "text-orange-500"
    }
  ];

  const gamificationFeatures = [
    {
      icon: Award,
      title: t.achievementSystemTitle,
      description: t.achievementSystemDesc
    },
    {
      icon: Flame,
      title: t.learningStreaksTitle,
      description: t.learningStreaksDesc
    },
    {
      icon: BarChart,
      title: t.progressTrackingTitle,
      description: t.progressTrackingDesc
    },
    {
      icon: Users,
      title: t.globalCompetitionTitle,
      description: t.globalCompetitionDesc
    }
  ];

  const skillAreas = [
    {
      icon: Heart,
      title: t["Emotional Intelligence"] || "Emotional Intelligence",
      description: t["Understand and manage emotions for a healthier mind and better relationships."] || "Understand and manage emotions for a healthier mind and better relationships.",
      color: "from-rose-500 to-orange-500",
      glow: "shadow-[0_0_30px_hsl(25_95%_55%_/_0.3)]"
    },
    {
      icon: MessageCircle,
      title: t["Communication Skills"] || "Communication Skills",
      description: t["Master the art of expressing yourself clearly and connecting with others."] || "Master the art of expressing yourself clearly and connecting with others.",
      color: "from-cyan-500 to-blue-500",
      glow: "shadow-[0_0_30px_hsl(185_80%_50%_/_0.3)]"
    },
    {
      icon: Shield,
      title: t["Digital Intelligence"] || "Digital Intelligence",
      description: t["Navigate the online world safely and become a responsible digital citizen."] || "Navigate the online world safely and become a responsible digital citizen.",
      color: "from-violet-500 to-purple-500",
      glow: "shadow-[0_0_30px_hsl(270_90%_65%_/_0.3)]"
    },
    {
      icon: Lightbulb,
      title: t["Critical Thinking"] || "Critical Thinking",
      description: t["Develop analytical skills and logical reasoning for better decision making."] || "Develop analytical skills and logical reasoning for better decision making.",
      color: "from-amber-500 to-orange-500",
      glow: "shadow-[0_0_30px_hsl(25_95%_55%_/_0.3)]"
    }
  ];

  const allSkills = [
    t["Emotional Intelligence & Mental Well-Being"] || "Emotional Intelligence & Mental Well-Being",
    t["Life Skills & Daily Independence"] || "Life Skills & Daily Independence",
    t["Communication & Expression Skills"] || "Communication & Expression Skills",
    t["Digital Intelligence & Online Safety"] || "Digital Intelligence & Online Safety",
    t["Critical Thinking & Logical Reasoning"] || "Critical Thinking & Logical Reasoning",
    t["Values, Ethics & Character Building"] || "Values, Ethics & Character Building",
    t["Career Awareness & Skill Discovery"] || "Career Awareness & Skill Discovery",
    t["Health, Fitness & Body Awareness"] || "Health, Fitness & Body Awareness",
    t["Social Awareness & Real-World Knowledge"] || "Social Awareness & Real-World Knowledge",
    t["Learning How to Learn"] || "Learning How to Learn",
    t["Creativity & Innovation"] || "Creativity & Innovation"
  ];

  const stats = [
    { label: t.skillAreas, value: "11", icon: Zap },
    { label: t.topics, value: "44+", icon: Target },
    { label: t.lessonsCount, value: "176+", icon: Brain },
    { label: t.realWorld, value: "100%", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src={heroImage} 
            alt="Learning Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
            >
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-mono text-primary uppercase tracking-wider">{t.eliteLearningPlatform}</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            >
              {t.masterRealWorldSkills}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {t.beyondTextbooks}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              {user ? (
                <Button asChild size="lg" variant="glow" className="text-lg px-10 py-6">
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <span>{t.continueLearning}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild size="lg" variant="glow" className="text-lg px-10 py-6">
                    <Link to="/login" className="flex items-center gap-2">
                      <span>{t.startYourJourney}</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-10 py-6">
                    <Link to="/login" className="flex items-center gap-2">
                      <span>{t.signInCta}</span>
                      <ChevronRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl"
                >
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Platform Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 text-sm font-mono uppercase tracking-wider">
              <Zap className="h-3 w-3 mr-2" />
              {t.allInOnePlatform}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t.everythingYouNeedToExcel}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.completeSuiteOfTools}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className={`glass-card p-6 h-full hover:border-primary/50 transition-all duration-500 ${feature.glow}`}>
                  <div className="relative">
                    {/* Animated gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                    
                    <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {t.explore} <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 text-sm font-mono uppercase tracking-wider">
              <Sparkles className="h-3 w-3 mr-2" />
              {t.aiPoweredLearning}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t.learnSmarterWithAI}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.leverageCuttingEdgeAI}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-muted/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gamification Features */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 text-sm font-mono uppercase tracking-wider">
                <Trophy className="h-3 w-3 mr-2" />
                {t.gamification}
              </Badge>
              <h2 className="text-4xl font-display font-bold mb-6">
                {t.stayMotivatedTrackProgress}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t.turnLearningIntoAdventure}
              </p>
              
              <div className="space-y-4">
                {gamificationFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: t.badgesLabel, value: "50+", color: "from-yellow-500 to-orange-500" },
                  { icon: Flame, label: t.dailyStreaksLabel, value: "🔥", color: "from-red-500 to-pink-500" },
                  { icon: Trophy, label: t.achievementsLabelShort, value: "100%", color: "from-blue-500 to-cyan-500" },
                  { icon: Star, label: t.pointsLabelShort, value: "∞", color: "from-purple-500 to-violet-500" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="group"
                  >
                    <Card className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300">
                      <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-3 group-hover:scale-110 transition-transform`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skill Areas Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-wider mb-4 block">{t.featuredSkills}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t.skillsThatMatter}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.learnPracticalSkills}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skillAreas.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className={`glass-card p-8 h-full hover:border-primary/30 transition-all duration-500 ${skill.glow} hover:${skill.glow}`}>
                  <div className="relative">
                    {/* Scanner line effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
                    </div>
                    
                    <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r ${skill.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">{skill.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Skills List Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-mono text-primary uppercase tracking-wider mb-4 block">{t.completeCurriculum}</span>
              <h2 className="text-4xl font-display font-bold mb-8">
                {t.essentialSkillAreas}
              </h2>
              <div className="space-y-3">
                {allSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="mt-1 p-1 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="glass-card p-8">
                <div className="space-y-6">
                  {[
                    { icon: Clock, title: t.learnAtYourPace, desc: t.learnAtYourPaceDesc, color: "text-primary" },
                    { icon: Target, title: t.practicalApplication, desc: t.practicalApplicationDesc, color: "text-secondary" },
                    { icon: Sparkles, title: t.interactiveLearning, desc: t.interactiveLearningDesc, color: "text-accent" },
                    { icon: Star, title: t.trackProgress, desc: t.trackProgressDesc, color: "text-primary" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center space-x-4 group"
                    >
                      <div className={`p-3 rounded-xl bg-muted/50 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-sm font-mono text-primary uppercase tracking-wider mb-4 block">{t.getStarted}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t.readyToBuildSkills}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t.joinLearners}
            </p>
            {!user && (
              <Button asChild size="lg" variant="glow" className="text-lg px-12 py-6">
                <Link to="/login" className="flex items-center gap-2">
                  <span>{t.beginYourJourney}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}