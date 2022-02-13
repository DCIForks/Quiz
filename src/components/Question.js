const Question = (props) => {
  const { index, question, answers, goNext } = props


  const answerItems = answers.map( answer => (
    <li
      key={answer}
    >
      {answer}
    </li>
  ))
  

  return (
    <div id="question">
      <p>Question {index}: {question}</p>

      <ul>
        {answerItems}
      </ul>

      <button
        onClick={goNext}
      >
        Next
      </button>
    </div>
  )
}



export default Question