import React, { useState, useEffect } from "react";
import Data from "./Data";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function App() {
const [people, setPeople] = useState(Data);
const [index, setIndex] = React.useState(0);

const nextSlide = () => {
    setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
}

const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  
}

useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])


  return (
    <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className='section-center'>
        {
            people.map((person, personIndex) => {
                const {id, image, name, title, quote} = person
            let position = 'nextSlide'
            if (personIndex === index) {
                position = 'activeSlide'
            }
            if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                position = 'lastSlide'
            } 
                return  (
                    <article className={position} key={id}>
                    <img src={image} alt={name} className='person-img' />
                    <h4>{name}</h4>
                    <p className='title'>{title}</p>
                    <p className='text'>{quote}</p>
                    <ArrowForwardIosIcon className='icon' />
                  </article>
                )
            })
        }
        <button className='prev' onClick={prevSlide}>
          <ArrowBackIosIcon /> 
        </button>
        <button className='next' onClick={nextSlide}>
          <ArrowForwardIosIcon />
        </button>
</div>
    </section>
  )
}

export default App;