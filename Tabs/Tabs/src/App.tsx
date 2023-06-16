import { useEffect, useState } from 'react'
import './App.css'
import { JobsType } from './JobsType';
import { Button } from '@mui/material';
import Data from './Data';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState<JobsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const { id, order, duties, dates, company, title } = jobs[value];


  const fetchJobs = async () => {


    try {
      const response = await fetch(url)
      const jobs = await response.json()
      console.log('newJobs', jobs)
      setJobs(jobs)
      setLoading(false)
    } catch (error) {
      // setLoading(false)
      console.log(error)
    }
    // setJobs(newJobs)
    // setLoading(false)
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  return (
    <>
      <section className="section">
        <div className="title">
          <h1>Our Experience</h1>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          <div className="btn-container">
            {
              jobs.map((item, index) => {
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
            <p>{duties}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default App
