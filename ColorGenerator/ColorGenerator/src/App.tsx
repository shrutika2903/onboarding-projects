import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App(): JSX.Element {
  const [color, setColor] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<Array<any>>(new Values('#f15025').all(10));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : ''}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color: any, index: number) => {
          return (
            <SingleColor
              key={index}
              rgb={color.rgb}
              weight={color.weight}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
