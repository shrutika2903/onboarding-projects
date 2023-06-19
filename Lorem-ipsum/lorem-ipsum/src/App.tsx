import { useState } from 'react'
import text from './Data';
import './App.css'



function App() {
  const [count, setCount] = useState<any>(0);
  const [texts, setTexts] = useState(text);
  console.log('Text', text)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let amount = parseInt(count);
    console.log('amount', amount)
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setTexts(text.slice(0, amount)); 
   };



  return (
    <>
      <section className='section-center'>
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>paragraphs:</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className='btn'>generate</button>
        </form>
        <article>
          
        {texts.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
        </article>
      </section>
    </>
  )
}

export default App;
