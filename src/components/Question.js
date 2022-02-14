import { useState } from 'react'
import Answers from './Answers'


const Question = (props) => {
  const { index, question, answers, goNext } = props

  // selected will become the string text of the selected answer
  const [ selected, setSelected ] = useState()
  // checked will become true when Check Answer is pressed
  const [ checked, setChecked ] = useState(false)


  // Event listenen to forward to Answer items
  const selectAnswer = (answer) => {
    setSelected(answer)
  }

  // Event listener for Check Answer button
  const checkAnswer = () => {
    setChecked(true)
  }

  // checked needs to be set back to its default value before
  // showing the next question. If not, the next question will
  // be shown with the correct answer highlighted.
  // selected needs to be set back to its default value, too.
  // If not, the Check Answer button will be active before the
  // player has chosen an answer.
  const nextQuestion = () => {
    setSelected()
    setChecked(false)
    goNext()
  }

  // Show the Next button disabled when a question is first shown
  // Show Check Answer after an answer has been selected
  // Enable the Next button after Check Answer has been pressed
  // Intercept click on Next, in order to reset state
  const getButton = () => {
    if (checked) {
      return (
        <button
          onClick={nextQuestion}
        >
          Next
        </button>
      )
    } else if (selected) {
      return (
        <button
          onClick={checkAnswer}
        >
          Check Answer
        </button>
      )
    } else {
      return (
        <button
          disabled
        >
          Next
        </button>
      )
    }
  }
  

  return (
    <div id="question">
      <p>Question {index}: {question}</p>

      <Answers
        question={index}
        answers={answers}
        select={selectAnswer}
        selected={checked && selected}
      />

      {getButton()}
      
    </div>
  )
}



export default Question