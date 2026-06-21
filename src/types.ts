export type Role = 'student' | 'instructor';

export interface OnboardingData {
  level: string;
  goal: string;
  timeAvailable: string;
  format: string;
}

export interface User {
  id: string; // usually email for simple mock
  email: string;
  name: string;
  role: Role;
  onboardingData?: OnboardingData;
  progress: string[]; // array of completed unit IDs
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface UnitBlock {
  type: 'idea' | 'case' | 'activity' | 'quiz';
  title?: string;
  content?: string;
  questions?: QuizQuestion[];
}

export interface CourseUnit {
  id: string;
  title: string;
  description: string;
  blocks: UnitBlock[];
}
