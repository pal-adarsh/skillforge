export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  lessonIds: string[];
}

export interface Standard {
  id: string;
  name: string;
  displayName: string;
  description: string;
  color: string;
  subjects: Subject[];
}
