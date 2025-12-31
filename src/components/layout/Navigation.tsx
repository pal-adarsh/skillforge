import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Trophy, User, Menu, X, LogIn, LogOut, Gift, TrendingUp, Zap, Globe } from "lucide-react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    { name: t.dashboard, icon: Brain, path: "/dashboard" },
    { name: t.lessons, icon: BookOpen, path: "/lessons" },
    { name: t.generalKnowledge || "GK", icon: Globe, path: "/gk" },
    { name: t.quiz, icon: Trophy, path: "/quiz" },
    { name: t.leaderboard || "Leaderboard", icon: TrendingUp, path: "/leaderboard" },
    { name: t.rewards || "Rewards", icon: Gift, path: "/rewards" },
    { name: t.profile, icon: User, path: "/profile" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl"
    >
      {/* Scanner line effect */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.4 }}
              className="relative p-2 rounded-xl bg-gradient-to-br from-primary to-accent"
            >
              <Zap className="h-5 w-5 text-primary-foreground" />
              <div className="absolute inset-0 rounded-xl bg-primary/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.span
              whileHover={{ scale: 1.02 }}
              className="text-xl font-display font-bold gradient-text"
            >
              {t.appName || "SkillForge"}
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <Button
                  variant="ghost"
                  asChild
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Link to={item.path} className="flex items-center space-x-2">
                    <item.icon className={`h-4 w-4 transition-all duration-300 ${
                      isActivePath(item.path) ? "text-primary" : "group-hover:text-primary"
                    }`} />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </Button>
                {isActivePath(item.path) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-[1px] left-2 right-2 h-[2px] bg-gradient-to-r from-primary via-primary to-accent rounded-full"
                    style={{ boxShadow: '0 0 10px hsl(var(--primary))' }}
                  />
                )}
              </motion.div>
            ))}
            
            {/* Language Selector */}
            <div className="ml-2">
              <LanguageSelector />
            </div>
            
            {/* Auth Section */}
            <div className="ml-3 flex items-center space-x-2 border-l border-border/50 pl-4">
              {user ? (
                <Button
                  variant="ghost"
                  onClick={signOut}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-300"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">{t.signOut}</span>
                </Button>
              ) : (
                <Button
                  variant="default"
                  asChild
                  className="flex items-center space-x-2 bg-primary hover:bg-primary/90 glow-primary transition-all duration-300"
                >
                  <Link to="/login" className="flex items-center space-x-2">
                    <LogIn className="h-4 w-4" />
                    <span className="text-sm font-semibold">{t.signIn}</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-primary" />
            ) : (
              <Menu className="h-5 w-5 text-muted-foreground" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 space-y-1 border-t border-border/30"
          >
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Button
                  variant="ghost"
                  asChild
                  className={`w-full justify-start px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActivePath(item.path)
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={item.path} className="flex items-center space-x-3">
                    <item.icon className={`h-5 w-5 ${isActivePath(item.path) ? "text-primary" : ""}`} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
            
            {/* Mobile Auth Section */}
            <div className="border-t border-border/30 pt-4 mt-4 space-y-2">
              <div className="px-4">
                <LanguageSelector />
              </div>
              {user ? (
                <Button
                  variant="ghost"
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="w-full justify-start px-4 py-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  <span className="font-medium">{t.signOut}</span>
                </Button>
              ) : (
                <Button
                  variant="default"
                  asChild
                  className="w-full justify-start px-4 py-3 bg-primary hover:bg-primary/90"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/login" className="flex items-center space-x-3">
                    <LogIn className="h-5 w-5" />
                    <span className="font-semibold">{t.signIn}</span>
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </motion.nav>
  );
};