import { Standard } from "./types";
import { skillCategories } from "./skills";

// Export types
export type { Standard, Subject } from "./types";

// All standards (now skill-based categories)
export const standards: Standard[] = skillCategories;

// Helper to get standard by ID
export const getStandardById = (id: string): Standard | undefined => {
  return standards.find(std => std.id === id);
};
