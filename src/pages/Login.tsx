import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { validateEmail, validatePassword, logSecurityEvent } from "@/lib/security-utils";
import { 
  Brain,
  Mail,
  Lock,
  Eye,
  Zap,
  EyeOff,
  ArrowRight,
  Loader2,
  User
} from "lucide-react";
import heroImage from "@/assets/hero-brain.jpg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (isSignUp && !fullName)) return;

    // Validate email
    if (!validateEmail(email)) {
      toast({
        title: t.invalidEmail,
        description: t.enterValidEmail,
        variant: "destructive",
      });
      return;
    }

    // Validate password for signup
    if (isSignUp) {
      const passwordValidation = validatePassword(password);
      if (!passwordValidation.valid) {
        toast({
          title: t.weakPassword,
          description: passwordValidation.errors.join(' '),
          variant: "destructive",
        });
        return;
      }
    }

    setLoading(true);
    try {
      const { error } = isSignUp 
        ? await signUp(email, password, fullName)
        : await signIn(email, password);

      if (error) {
        logSecurityEvent('Authentication failed', { 
          email: email.substring(0, 3) + '***', 
          isSignUp, 
          error: error.message 
        });
        toast({
          title: t.authenticationError,
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: isSignUp ? t.accountCreated : t.welcomeBack,
          description: isSignUp 
            ? t.checkEmailVerify
            : t.signedInSuccess,
        });
        if (!isSignUp) {
          navigate('/dashboard');
        }
      }
    } catch (error) {
      toast({
        title: t.error,
        description: t.unexpectedError,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="AI Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        <Card className="glass-card p-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-primary to-accent glow-primary mb-4">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold glow-text">{t.welcome}</h1>
            <p className="text-muted-foreground mt-2">
              {t.signInToContinue}
            </p>
          </motion.div>

          {/* Authentication Form */}
          <form onSubmit={handleEmailAuth} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {isSignUp && (
                <div>
                  <Label htmlFor="fullName">{t.fullName}</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder={t.fullName}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="email">{t.emailAddress}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">{t.password}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={isSignUp ? t.createAccount + " (min 8 chars, include letters and numbers)" : t.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    minLength={8}
                    pattern={isSignUp ? "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&]{8,}$" : undefined}
                    title={isSignUp ? t.password + " must be at least 8 characters and contain both letters and numbers" : undefined}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full glow-primary" 
                size="lg"
                disabled={loading || !email || !password || (isSignUp && !fullName)}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4 mr-2" />
                )}
                {isSignUp ? t.createAccount : t.signInBtn}
              </Button>
            </motion.div>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
            </div>
          </div>

          

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            {isSignUp ? t.alreadyHaveAccount : t.dontHaveAccount} {" "}
            <button 
              type="button"
              className="text-primary hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? t.signInHere : t.signUpHere}
            </button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}