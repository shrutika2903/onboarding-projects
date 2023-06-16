import { useEffect, useState } from 'react'
import './App.css'
import { JobsType } from './JobsType';
import { Button } from '@mui/material';
import Data from './Data';
import { Wrapper } from './Jobs.style';


function App() {
  const [value, setValue] = useState(0);
  const { duties, dates, company, title } = Data[value];

  return (
    <>
      <Wrapper>

        <section className="section">
          <div className="title">
            <h1>Our Experience</h1>
            <div className="underline"></div>
          </div>

          <div className="jobs-center">
            <div className="btn-container">
              {
                Data.map((item, index) => {
                  console.log('index', index)
                  return (
                    <Button key={item.id}
                      onClick={() => setValue(index)}
                      className={`job-btn ${index === value && 'active-btn'}`}

                    >
                      {item.company}
                    </Button>

                  )
                })}
            </div>

            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              <p className='job-desc'>{duties}</p>
            </article>
          </div>
        </section>
      </Wrapper>

    </>
  )
}

export default App
