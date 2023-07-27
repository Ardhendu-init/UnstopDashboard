export interface User {
  name: string;
  bg: string;
}

export interface AssessmentCardInfo {
  id?: number;
  assessmentName: string;
  date: string;
  duration: string;
  question: string;
  users: User[];
}
export interface AssignmentInfo {
  id: number;
  number: string;
  growth: string | null;
  fieldName: string | null;
}

export interface AssessmentData {
  id: number;
  heading: string;
  imgLocation: string;
  logoName: string;
  assignmentInfo: AssignmentInfo[];
}
