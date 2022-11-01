import { useState } from 'react'
import Rated from './Components/Rated';
import Rating from './Components/Rating';
import './App.css';

function App() {
  const [rate, setRate] = useState('')
  const [submit, setSubmit] = useState(false)

  return (
    <div className="App container ">
      {submit ? <Rated rate={rate} /> : <Rating rate={rate} setRate={setRate} submit={submit} setSubmit={setSubmit}/>}
    </div>
  );
}

export default App;
