import { useState } from "react";

import HowManyQuestions from "./components/HowManyQuestions";
import Question from "./components/Question";

import { maxQuestions, getQuestions } from "./tools/questions";



function App() {
  // Use an inaccessible -1 value for qIndex to indicate that no
  // quiz is currently in progress
  const [qIndex, setQIndex] = useState(-1);

  // Use useState to store a randomly chosen list of questions
  const [questions, setQuestions] = useState();


  const goNext = () => {
    let index = qIndex + 1;

    if (index === questions.length) {
      // Indicate that the quiz is no longer in progress
      index = -1;
    }

    setQIndex(index);
  };


  // Callback to be triggered by theHowManyQuestions component
  const chooseQuestions = (number) => {
    const set = getQuestions(number); // in src/tools/questions.js
    setQuestions(set);
    const index = 0; // start the quiz with the first question
    setQIndex(index);
  };


  const getQuestion = () => {
    if (!questions) {
      // The app has only just been initialized
      return "Choose how many questions you want to answer";
    } else if (qIndex < 0) {
      // There are questions, but they have all been answered
      return "Game over. Click Start New Quiz to play again.";
    }

    const questionData = questions[qIndex];

    return (
      <Question
        index={qIndex + 1}
        {...questionData}
        goNext={goNext}
      />
    );
  };


  const question = getQuestion();


  // Forward question and answers separately
  return (
    <>
      <HowManyQuestions
        chooseQuestions={chooseQuestions}
        maxQuestions={maxQuestions}
        quizOver={qIndex < 0}
      />
      {question}
    </>
  );
}

export default App;
