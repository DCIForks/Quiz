import Answers from './Answers'


const Question = (props) => {
  const { index, question, answers, goNext } = props
  

  return (
    <div id="question">
      <p>Question {index}: {question}</p>

      <Answers
        question={index}
        answers={answers}
      />

      <button
        onClick={goNext}
      >
        Next
      </button>
    </div>
  )
}



export default Question