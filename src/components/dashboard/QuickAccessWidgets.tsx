import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Timer, 
  FileText, 
  Plus, 
  ArrowRight, 
  Clock,
  Target,
  Sparkles,
  BookOpen,
  Brain,
  PlayCircle,
  PauseCircle,
  FileUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface QuickAccessWidgetsProps {
  className?: string;
}

export function QuickAccessWidgets({ className }: QuickAccessWidgetsProps) {
  const [pomodoroStats, setPomodoroStats] = useState({
    sessionsToday: 0,
    dailyGoal: 4,
    totalFocusTime: 0,
  });
  
  const [notesStats, setNotesStats] = useState({
    totalPages: 0,
    recentPages: [] as { id: string; title: string; icon: string }[],
  });

  useEffect(() => {
    // Load notes from localStorage
    const notesData = localStorage.getItem('skillforge_notes');
    if (notesData) {
      try {
        const pages = JSON.parse(notesData);
        setNotesStats({
          totalPages: pages.length,
          recentPages: pages
            .sort((a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
            .slice(0, 3)
            .map((p: any) => ({ id: p.id, title: p.title || 'Untitled', icon: p.icon || '📄' })),
        });
      } catch (e) {
        console.error('Failed to parse notes', e);
      }
    }
  }, []);

  return (
    <div className={className}>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Pomodoro Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glass-card h-full">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Timer className="h-5 w-5 text-primary" />
                  </div>
                  <span>Pomodoro Timer</span>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/pomodoro" className="flex items-center gap-1">
                    Open <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold">{pomodoroStats.sessionsToday}/{pomodoroStats.dailyGoal}</p>
                  <p className="text-sm text-muted-foreground">Sessions Today</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">{pomodoroStats.totalFocusTime}m</p>
                  <p className="text-sm text-muted-foreground">Focus Time</p>
                </div>
              </div>
              
              <Progress 
                value={(pomodoroStats.sessionsToday / pomodoroStats.dailyGoal) * 100} 
                className="h-2 mb-4"
              />
              
              <div className="flex gap-2">
                <Button className="flex-1" asChild>
                  <Link to="/pomodoro">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Start Focus
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Notes Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass-card h-full">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <span>Smart Notes</span>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/notes" className="flex items-center gap-1">
                    Open <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold">{notesStats.totalPages}</p>
                  <p className="text-sm text-muted-foreground">Total Pages</p>
                </div>
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  AI Powered
                </Badge>
              </div>
              
              {notesStats.recentPages.length > 0 ? (
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-muted-foreground">Recent Notes</p>
                  {notesStats.recentPages.map((page) => (
                    <Link
                      key={page.id}
                      to="/notes"
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <span>{page.icon}</span>
                      <span className="text-sm truncate">{page.title}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mb-4">
                  No notes yet. Create your first note!
                </p>
              )}
              
              <Button className="w-full" variant="outline" asChild>
                <Link to="/notes">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Note
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Feature Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4"
      >
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <Brain className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium text-sm">AI Assistant</p>
                  <p className="text-xs text-muted-foreground">Powered by Gemini</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <BookOpen className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-medium text-sm">Block Editor</p>
                  <p className="text-xs text-muted-foreground">Notion-style</p>
                </div>
              </div>
              <Link to="/pdf" className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <FileUp className="h-8 w-8 text-indigo-500" />
                <div>
                  <p className="font-medium text-sm">PDF Analyzer</p>
                  <p className="text-xs text-muted-foreground">AI-powered</p>
                </div>
              </Link>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <Target className="h-8 w-8 text-orange-500" />
                <div>
                  <p className="font-medium text-sm">Flowcharts</p>
                  <p className="text-xs text-muted-foreground">Auto-generated</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <Clock className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="font-medium text-sm">Focus Mode</p>
                  <p className="text-xs text-muted-foreground">Pomodoro built-in</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
