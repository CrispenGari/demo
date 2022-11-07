import { QuestionType } from "../types";
import { Image } from "react-native";
// import { openDatabase } from "react-native-sqlite-storage";

const errorCB = (err: any) => {
  console.log("SQL Error: " + err);
};

const successCB = () => {
  console.log("SQL executed fine");
};

const openCB = () => {
  console.log("Database OPENED");
};

export const chapters: any[] = Array(31)
  .fill(null)
  .map((v, index) => ({
    id: index,
    title: `Chapter ${index + 1}`,
    description: "In this chapter we are going to cover basic arithmetic.",
    contents: [],
    quiz: [],
  }));

export const test1: {
  title: any;
  total: number;
  time: number;
  questions: QuestionType[];
} = {
  title: "Test 1",
  total: 7,
  time: 1000 * 60 * 10, // in milliseconds give me 10 minutes
  questions: [
    {
      id: 0,
      answer: { id: 1, text: "triangle" },
      question: "What is the name with 3 sides?",
      answers: [
        { id: 0, text: "cube" },
        { id: 1, text: "triangle" },
        { id: 2, text: "circle" },
        { id: 3, text: "rectangle" },
      ],
      total: 1,
    },
    {
      id: 1,
      answer: { id: 0, text: "true" },
      question: "8 and 108 are even numbers less than 109?",
      answers: [
        { id: 0, text: "true" },
        { id: 1, text: "false" },
      ],
      total: 1,
    },
    {
      id: 2,
      answer: { id: 1, text: "false" },
      question: "A shape with 5 sides is called a DODECAGON?",
      answers: [
        { id: 0, text: "true" },
        { id: 1, text: "false" },
      ],
      total: 1,
    },
    {
      id: 3,
      answer: { id: 2, text: 25 },
      question: "What is the area of the following shape?",
      diagram: Image.resolveAssetSource(require("../../assets/images/s.jpg"))
        .uri,
      answers: [
        { id: 0, text: 10 },
        { id: 1, text: 15 },
        { id: 2, text: 25 },
        { id: 3, text: "None of the above." },
      ],
      total: 1,
    },
    {
      id: 4,
      answer: [
        { id: 1, text: 7 },
        { id: 2, text: 5 },
        { id: 4, text: 3 },
      ],
      question:
        "From the following list of numbers, select all odd numbers that are less than 10?",
      answers: [
        { id: 0, text: 9 },
        { id: 1, text: 7 },
        { id: 2, text: 5 },
        { id: 3, text: 0 },
        { id: 4, text: 3 },
        { id: 5, text: 11 },
      ],
      total: 3,
    },
  ],
};
