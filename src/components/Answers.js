const Answers = ({ question, answers }) => {
  const answerItems = answers.map(( answer, index ) => {
    const id = `q${question}a${index}`

    return (
      <li
        key={id}
      >
        <input id={id} type="radio" name="answer" />
        <label htmlFor={id}>  
           {answer}
        </label>
      </li>
    )
  })

  return (
    <ul id="answers">
      {answerItems}
    </ul>
  )
}


export default Answers