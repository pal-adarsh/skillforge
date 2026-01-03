import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LessonCard } from "@/components/ui/lesson-card";
import { 
  Search, 
  ChevronLeft,
  BookOpen,
  Heart,
  Brain,
  MessageCircle,
  Shield,
  Lightbulb,
  Scale,
  Compass,
  Apple,
  Globe,
  Sparkles,
  Palette,
  Users,
  Flame,
  Target,
  Zap,
  Activity
} from "lucide-react";
import codingImage from "@/assets/coding-category.jpg";
import scienceImage from "@/assets/science-category.jpg";
import generalImage from "@/assets/general-category.jpg";
import { lessons } from "@/data/lessons";
import { standards, Standard, Subject, getStandardById } from "@/data/standards";
import { LessonReader } from "@/components/LessonReader";
import { useProgressTracking } from "@/hooks/useProgressTracking";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { getTranslatedLesson } from "@/data/lessonTranslations";

const iconMap: Record<string, any> = {
  BookOpen,
  Heart,
  Brain,
  MessageCircle,
  Shield,
  Lightbulb,
  Scale,
  Compass,
  Apple,
  Globe,
  Sparkles,
  Palette,
  Users,
  Flame,
  Target,
  Eye: Target,
  FileText: BookOpen,
  Home: Heart,
  Wallet: Target,
  Clock: Flame,
  Search: Lightbulb,
  Zap: Sparkles,
  TrendingUp: Target,
  Building: Globe,
  Briefcase: Compass,
  Plus: Heart,
  Dumbbell: Flame,
  Rocket: Sparkles,
  Laptop: Brain
};

type ViewMode = "skills" | "topics" | "lessons" | "all-lessons";

export default function Lessons() {
  const { classId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("skills");
  const [selectedSkill, setSelectedSkill] = useState<Standard | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Subject | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const { getLessonProgress, updateLessonProgress } = useProgressTracking();
  const { language } = useLanguage();
  const t: Record<string, string> = translations[language] as unknown as Record<string, string>;

  useEffect(() => {
    if (classId) {
      const skill = getStandardById(classId);
      if (skill) {
        setSelectedSkill(skill);
        setViewMode("topics");
      }
    }
  }, [classId]);

  const handleSkillClick = (skill: Standard) => {
    setSelectedSkill(skill);
    setViewMode("topics");
    navigate(`/lessons/${skill.id}`);
  };

  const handleTopicClick = (topic: Subject) => {
    setSelectedTopic(topic);
    setViewMode("lessons");
  };

  const handleBackToSkills = () => {
    setSelectedSkill(null);
    setSelectedTopic(null);
    setViewMode("skills");
    navigate("/lessons");
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
    setViewMode("topics");
  };

  const handleViewAllLessons = () => {
    setViewMode("all-lessons");
  };

  const getImageForLesson = (lessonCategory: string) => {
    const categoryLower = lessonCategory.toLowerCase();
    if (categoryLower.includes("digital") || categoryLower.includes("critical")) return codingImage;
    if (categoryLower.includes("health") || categoryLower.includes("fitness")) return scienceImage;
    return generalImage;
  };

  const displayLessonsForTopic = (topic: Subject) => {
    return topic.lessonIds
      .map(lessonId => {
        const lesson = lessons.find(l => l.id === lessonId);
        if (!lesson) return null;

        const progress = getLessonProgress(lesson.id);
        const translatedLesson = getTranslatedLesson(lesson.id, language);
        
        return {
          title: translatedLesson?.title || lesson.title,
          description: translatedLesson?.description || lesson.description,
          duration: lesson.duration,
          difficulty: lesson.difficulty,
          progress: progress?.progress_percentage || 0,
          isLocked: false,
          isCompleted: progress?.completed || false,
          image: getImageForLesson(lesson.category),
          category: lesson.category,
          id: lesson.id
        };
      })
      .filter(Boolean);
  };

  const allLessons = lessons.map(lesson => {
    const progress = getLessonProgress(lesson.id);
    const translatedLesson = getTranslatedLesson(lesson.id, language);
    
    return {
      title: translatedLesson?.title || lesson.title,
      description: translatedLesson?.description || lesson.description,
      duration: lesson.duration,
      difficulty: lesson.difficulty,
      progress: progress?.progress_percentage || 0,
      isLocked: false,
      isCompleted: progress?.completed || false,
      image: getImageForLesson(lesson.category),
      category: lesson.category,
      id: lesson.id
    };
  });

  const filteredAllLessons = allLessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  if (selectedLesson) {
    const lesson = lessons.find(l => l.id === selectedLesson);
    if (lesson) {
      return (
        <LessonReader 
          lesson={lesson} 
          onBack={() => setSelectedLesson(null)}
          onComplete={(lessonId) => {
            updateLessonProgress(lessonId, lesson.category, 100, true);
          }}
        />
      );
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            {viewMode !== "skills" && (
              <Button
                variant="outline"
                size="icon"
                onClick={viewMode === "topics" ? handleBackToSkills : handleBackToTopics}
                className="hover:border-primary/50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  {viewMode === "skills" && t.skillHub}
                  {viewMode === "topics" && t.topics}
                  {viewMode === "lessons" && t.lessons}
                  {viewMode === "all-lessons" && t.library}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                {viewMode === "skills" && <span className="gradient-text">{t.exploreSkills}</span>}
                {viewMode === "topics" && selectedSkill?.displayName}
                {viewMode === "lessons" && selectedTopic?.name}
                {viewMode === "all-lessons" && t.allLessons}
              </h1>
              <p className="text-muted-foreground mt-2">
                {viewMode === "skills" && t.chooseSkillArea}
                {viewMode === "topics" && selectedSkill?.description}
                {viewMode === "lessons" && `${selectedTopic?.lessonIds.length || 0} ${t.lessonsCount}`}
                {viewMode === "all-lessons" && t.browseAllLessons}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Search */}
        {(viewMode === "all-lessons" || viewMode === "lessons") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Card className="glass-card p-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                  placeholder={t.searchLessons}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-muted/30 border-border/50 focus:border-primary/50"
                />
              </div>
            </Card>
          </motion.div>
        )}

        {/* Skills View */}
        {viewMode === "skills" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
              <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-display font-bold">{t.skillAreas}</h2>
              </div>
              <Button onClick={handleViewAllLessons} variant="outline" className="hover:border-primary/50">
                <BookOpen className="h-4 w-4 mr-2" />
                {t.viewAllLessons}
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {standards.map((skill, index) => {
                const totalLessons = skill.subjects.reduce((acc, topic) => 
                  acc + topic.lessonIds.length, 0
                );
                
                const firstIcon = skill.subjects[0]?.icon || "Sparkles";
                const Icon = iconMap[firstIcon] || Sparkles;
                
                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <Card 
                      className="glass-card overflow-hidden cursor-pointer h-full group"
                      onClick={() => handleSkillClick(skill)}
                    >
                      {/* Top accent bar */}
                      <div className={`h-1 ${skill.color} group-hover:h-1.5 transition-all duration-300`} />
                      
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-2.5 rounded-xl ${skill.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-5 w-5 text-foreground" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {totalLessons} {t.lessonsCount}
                          </Badge>
                        </div>
                        
                        <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {skill.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {skill.subjects.slice(0, 2).map(topic => (
                            <Badge key={topic.id} variant="cyber" className="text-[9px]">
                              {topic.name}
                            </Badge>
                          ))}
                          {skill.subjects.length > 2 && (
                            <Badge variant="outline" className="text-[9px]">
                              +{skill.subjects.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Topics View */}
        {viewMode === "topics" && selectedSkill && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-display font-bold">{t.chooseTopicHeading}</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {selectedSkill.subjects.map((topic, index) => {
                const Icon = iconMap[topic.icon] || BookOpen;
                
                return (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Card 
                      className="glass-card cursor-pointer p-5 h-full group"
                      onClick={() => handleTopicClick(topic)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-2.5 rounded-xl bg-muted/30 ${topic.color} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {topic.lessonIds.length} lessons
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">{topic.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t.exploreLessonsCount.replace('{count}', String(topic.lessonIds.length))}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Lessons View */}
        {viewMode === "lessons" && selectedTopic && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-display font-bold">{t.lessons}</h2>
              <Badge variant="default">{selectedTopic.lessonIds.length}</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayLessonsForTopic(selectedTopic).map((lesson: any, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <LessonCard 
                    {...lesson} 
                    onClick={() => setSelectedLesson(lesson.id)}
                  />
                </motion.div>
              ))}
            </div>

            {selectedTopic.lessonIds.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="p-4 rounded-full bg-muted/30 w-fit mx-auto mb-4">
                  <BookOpen className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{t.noLessonsYet}</h3>
                <p className="text-muted-foreground">
                  {t.lessonsComingSoon}
                </p>
              </motion.div>
            )}
          </motion.section>
        )}

        {/* All Lessons View */}
        {viewMode === "all-lessons" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-display font-bold">{t.allLessons}</h2>
                <Badge variant="default">{filteredAllLessons.length}</Badge>
              </div>
              <Button onClick={handleBackToSkills} variant="outline" className="hover:border-primary/50">
                <Sparkles className="h-4 w-4 mr-2" />
                Back to Skills
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredAllLessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                >
                  <LessonCard 
                    {...lesson} 
                    onClick={() => setSelectedLesson(lesson.id)}
                  />
                </motion.div>
              ))}
            </div>
            
            {filteredAllLessons.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="p-4 rounded-full bg-muted/30 w-fit mx-auto mb-4">
                  <Search className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">No lessons found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search query
                </p>
              </motion.div>
            )}
          </motion.section>
        )}
      </div>
    </div>
  );
}