import  {useState, useEffect} from 'react';
import './App.css';
import { Project } from './Projects';
import Tours from './Tours';
import { Card } from '@mui/material';
import { Wrapper } from './App.style';

const url = 'https://course-api.com/react-tours-project'



function App() {
  const [tours, setTours] = useState<Project[]>([]);

  const removeTours = (id:number) => {

    const newTours = tours.filter((tour) => tour.id !== id);
    console.log('RemoveTours', newTours)
    setTours(newTours)
  }
  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.log(error)
    }

    
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <>
    <Wrapper>
      <Card>  
      {/* <Tours tours={tours} 
      removeTours={removeTours}
      
      /> */}
      
<Tours tours={tours} removeTours={removeTours} />
      </Card>
    </Wrapper>
 </>
  )
}

export default App
