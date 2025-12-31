import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  ChevronRight
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