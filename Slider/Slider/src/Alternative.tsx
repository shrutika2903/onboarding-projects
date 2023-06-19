import React, { useState, useEffect } from "react";
import Data from "./Data";

function App() {
const [people, setPeople] = useState(Data);
const [index, setIndex] = React.useState(0);




  return (
    <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className='section-center'>

</div>
    </section>
  )
}

export default App;