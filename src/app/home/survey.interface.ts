export interface ISurvey {
  id: string;
  name: string;
  points: Point[];
}

interface Point {
  id: number;
  type: string;
  answer_type: string;
  content: string;
  answers: Answer[];
}

interface Answer {
  id: number;
  content?: string;
}