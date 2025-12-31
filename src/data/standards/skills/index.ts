import { emotionalIntelligenceCategory, emotionalIntelligenceLessons } from "./emotional-intelligence";
import { lifeSkillsCategory, lifeSkillsLessons } from "./life-skills";
import { communicationCategory, communicationLessons } from "./communication";
import { digitalIntelligenceCategory, digitalIntelligenceLessons } from "./digital-intelligence";
import { criticalThinkingCategory, criticalThinkingLessons } from "./critical-thinking";
import { valuesEthicsCategory, valuesEthicsLessons } from "./values-ethics";
import { careerAwarenessCategory, careerAwarenessLessons } from "./career-awareness";
import { healthFitnessCategory, healthFitnessLessons } from "./health-fitness";
import { socialAwarenessCategory, socialAwarenessLessons } from "./social-awareness";
import { learningToLearnCategory, learningToLearnLessons } from "./learning-to-learn";
import { creativityCategory, creativityLessons } from "./creativity";

// Export all skill categories
export const skillCategories = [
  emotionalIntelligenceCategory,
  lifeSkillsCategory,
  communicationCategory,
  digitalIntelligenceCategory,
  criticalThinkingCategory,
  valuesEthicsCategory,
  careerAwarenessCategory,
  healthFitnessCategory,
  socialAwarenessCategory,
  learningToLearnCategory,
  creativityCategory
];

// Export all skill lessons combined
export const skillLessons = [
  ...emotionalIntelligenceLessons,
  ...lifeSkillsLessons,
  ...communicationLessons,
  ...digitalIntelligenceLessons,
  ...criticalThinkingLessons,
  ...valuesEthicsLessons,
  ...careerAwarenessLessons,
  ...healthFitnessLessons,
  ...socialAwarenessLessons,
  ...learningToLearnLessons,
  ...creativityLessons
];

// Re-export individual categories and lessons
export {
  emotionalIntelligenceCategory,
  emotionalIntelligenceLessons,
  lifeSkillsCategory,
  lifeSkillsLessons,
  communicationCategory,
  communicationLessons,
  digitalIntelligenceCategory,
  digitalIntelligenceLessons,
  criticalThinkingCategory,
  criticalThinkingLessons,
  valuesEthicsCategory,
  valuesEthicsLessons,
  careerAwarenessCategory,
  careerAwarenessLessons,
  healthFitnessCategory,
  healthFitnessLessons,
  socialAwarenessCategory,
  socialAwarenessLessons,
  learningToLearnCategory,
  learningToLearnLessons,
  creativityCategory,
  creativityLessons
};
