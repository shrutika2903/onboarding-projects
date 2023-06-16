import { useState } from 'react'
import './App.css';
import Question from './Question';
import AccordionData from './AccordionData';
import { Wrapper } from './App.styles';

function App() {
  const [questions, setQuestions] = useState(AccordionData);
  console.log('Question', questions)
  return (
    <Wrapper>
      <div className='container'>
        <h2>Questions and Answer about login</h2>
        <section className='info'>
          {
            questions.map((question) => {
              return (
                <Question key={question.id} {...question} />
              )
            })
          }
        </section>

      </div>
    </Wrapper>
  )
}

export default App
