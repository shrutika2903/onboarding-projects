import { useState } from 'react'
import './App.css';
import Question from './Question';
import AccordionData from './AccordionData';
import { Accordion } from './AccordionType';


function App() {
  const [questions, setQuestions] = useState(AccordionData);
  console.log('Question', questions)
  return (
    <div >
      <h3>questions and answer about login</h3>
      {
        questions.map((question) => {
          return (
            <Question key={question.id} {...question} />
          )
        })
      }
    </div>
  )
}

export default App
