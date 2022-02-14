import questions from '../data/questions'
import { shuffle } from './utilities'


const maxQuestions = questions.length


// Make sure the questions are already in a random order before
// the first questions are chosen, otherwise the same questions
// will always be given when the app starts.
shuffle(questions)


// Flag the correct answer to each question once and for all
questions.forEach(({ answers }) => {
  answers.forEach(( answer, index ) => {
    // Replace the current string by an object with a correct flag
    answers[index] = { answer, correct: !index }
  })
})


const getQuestions = (number) => {
  // Choose the first n shuffled questions...
  const selected = questions.splice(0, number)
  // ... and move them to the end of the list of questions
  questions.push(...selected)

  // Show the answers in a different order each time each question
  // is asked
  selected.forEach(({ answers }) => shuffle(answers))

  // Shuffle the selected questions so that they will not be in
  // the same order as they are now at the end of the list.
  // This means that the next time these questions are 
  // selected, they will not be in the same order.
  return shuffle(selected)
}


export { maxQuestions, getQuestions }