import { useState } from 'react'



const HowManyQuestions = (props) => {
  const {
    chooseQuestions, // function to call in App component
    maxQuestions,    // value exported by src/tools/questions.js
    quizOver         // true if this component should be active
  } = props
  
  // <<< HARD-CODED customizable array of numbers of questions
  let possibleNumbers = [ 5, 10, 15, 20, 30, 50 ] // HARD-CODED >>>
      .filter( number => number <= maxQuestions)
  // The .filter ensures that it's not possible to select more
  // questions than there are
      

  // Initialize the component with the first (default) value 
  const [ number, setNumber ] = useState(possibleNumbers[0])


  // Event listener for the select element
  const setNumberOfQuestions = (event) => {
    const number = parseInt(event.target.value)

    // Only this component will be re-renderd when the number changes
    setNumber(number)
  }


  // Event listener for the Start New Quiz button
  const startQuiz = () => {
    chooseQuestions(number)
  }


  // Create the select element with its options
  const options = possibleNumbers.map( number => {
    // React will complain unless each option has a unique key
    const key = number + "_questions"

    return  <option key={key}>{number}</option>
  })


  const selector = (
    <select
      onChange={setNumberOfQuestions}
    >
      {options}
    </select>
  )


  // Prepare to disable mouse and touch interactions while the quiz
  // is in progress
  const className = quizOver ? "" : "disabled"


  return (
    <div
      id="number-of-questions"
      className={className}
    >
      <div>
        Ask {selector} questions
      </div>
      <button
        onClick={startQuiz}
      >
        Start New Quiz
      </button>
    </div>
  )
}



export default HowManyQuestions