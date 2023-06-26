import  { useState } from 'react'
import Data from './data';
import './App.css';
import List from './List';
import Button from '@mui/material/Button';
import { Wrapper } from './App.style';
import { Card } from '@mui/material';


function App() {
  const [data, setData] = useState(Data);
  return (
    <>
      <Wrapper>
        <Card variant="outlined">
          <h1>{data.length} Birthdays Today</h1>
          <List projects={data} />
          <Button onClick={() => setData([])} variant="contained">Clear All</Button>
        </Card>

      </Wrapper>
    </>
  )

}

export default App;
