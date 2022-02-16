import { useState } from 'react'
import Question from './components/Question';
import questions from './data/questions'
import { shuffle } from './tools/utilities'



function App() {
  const [ qIndex, setQIndex ] = useState(0)
  let { question, answers } = questions[qIndex]
  // { question: <String>, answers: <String[]> }


  const goNext = () => {
    const index = (qIndex + 1 ) % questions.length
    setQIndex(index)
  }


  answers = answers.map(( answer, index ) => (
    { answer, correct: !index }
  ))
  shuffle(answers)

  
  return (
    <Question
      index={qIndex + 1}
      question={question}
      answers={answers}
      goNext={goNext}
    />
  );
}



export default App;
