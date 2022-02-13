import { useState } from 'react'
import Question from './components/Question';
import questions from './data/questions'



function App() {
  const [ qIndex, setQIndex ] = useState(0)
  const question = questions[qIndex]
  // { question: <String>, answers: <String[]> }


  const goNext = () => {
    const index = (qIndex + 1 ) % questions.length
    setQIndex(index)
  }

  
  return (
    <Question
      index={qIndex + 1}
      {...question}
      goNext={goNext}
    />
  );
}



export default App;
