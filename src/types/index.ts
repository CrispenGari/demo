export interface ActionType {
  payload: any;
  type: string;
}

export interface StateType {
  counter: number;
  answers: Array<{
    questionId: number;
    answerId: number;
  }>;
  questions: Array<QuestionType>;
}

export interface QuestionType {
  id: number;
  answer: AnswerType | AnswerType[];
  question: string;
  answers: AnswerType[];
  total: number;
  diagram?: string;
}

export interface AnswerType {
  id: number;
  text: number | string;
}
