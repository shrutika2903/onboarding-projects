import { useState } from 'react'
import ReviewsData from './ReviewData'
import { Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card/Card';
import { Wrapper } from './App.style';

function Review() {
const [index, setIndex] = useState(0)
const {name, job, image, text} = ReviewsData[index];
const checkNumber = (number: number) => {
  if (number > ReviewsData.length - 1) {
    return 0;
  }
  if (number < 0) {
    return ReviewsData.length - 1;
  }
  return number;
};

const nextPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
  });
};
const prevPerson = () => {
  setIndex((index) => {
    let newIndex = index - 1;
    return checkNumber(newIndex);
  });
};
const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() * ReviewsData.length);
  if (randomNumber === index) {
    randomNumber = index + 1;
  }
  setIndex(checkNumber(randomNumber));
};
  return (
  <>
  <Wrapper>
  <Card>
 
     <img src={image} alt={name} />
  
  <h4>{name}</h4>
  <h4>{job}</h4>
  <h4>{text}</h4>
<div className='button-container'> 
<Button className='prev-btn' onClick={prevPerson}>
  <ArrowBackIosIcon/>
</Button>
<Button className='next-btn'onClick={nextPerson}>
<ArrowForwardIosIcon />
</Button>
</div>

<Button className='random-btn'
onClick={randomPerson}>Surprise Me</Button>
</Card>
</Wrapper>
  </>
  )
}

export default Review;
