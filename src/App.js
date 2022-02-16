import { useState } from "react";

import HowManyQuestions from "./components/HowManyQuestions";
import Question from "./components/Question";
import Score from "./components/Score";

import { maxQuestions, getQuestions } from "./tools/questions";



function App() {
  // Use an inaccessible -1 value for qIndex to indicate that no
  // quiz is currently in progress
  const [qIndex, setQIndex] = useState(-1);

  // Use useState to store a randomly chosen list of questions
  const [questions, setQuestions] = useState([]);
  const [done, setDone] = useState(0)
  const [wrong, setWrong] = useState(0)


  const goNext = () => {
    let index = qIndex + 1;

    if (index === questions.length) {
      // Indicate that the quiz is no longer in progress
      index = -1;
    }

    setQIndex(index);
  };


  const updateScore = (isWrong) => {
    setDone(done + 1)
    setWrong(wrong + isWrong)
  }


  // Callback to be triggered by theHowManyQuestions component
  const chooseQuestions = (number) => {
    const set = getQuestions(number); // in src/tools/questions.js
    setQuestions(set);
    const index = 0; // start the quiz with the first question
    setQIndex(index);

    setDone(0)
    setWrong(0)
  };


  const finalScore = () => {
    const total = questions.length
    const right = total - wrong

    return (
      <div id="final-score">
        <h1>Game over!</h1>
        <p>You scored {right} / {total}.</p>
        <p>Click <em>Start New Quiz</em> to play again.</p>
      </div>
    )
  }


  const getQuestion = () => {
    if (!questions.length) {
      // The app has only just been initialized
      return "Choose how many questions you want to answer";
    } else if (qIndex < 0) {
      // There are questions, but they have all been answered
      return finalScore();
    }

    const questionData = questions[qIndex];

    return (
      <Question
        index={qIndex + 1}
        {...questionData}
        updateScore={updateScore}
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
      <Score
        total={questions.length}
        done={done}
        wrong={wrong}
      />
    </>
  );
}

export default App;
