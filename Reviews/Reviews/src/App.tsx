import './App.css'
import Review from './Review'
import { Wrapper } from './App.style'

function App() {

  return (
  <>
  <Wrapper>
<div className='container'>
  <div className="title">
  <h2>Our Reviews</h2>
  <div className='underline'></div>
  </div>

</div>
<Review />
</Wrapper>
  </>
  )
}

export default App
