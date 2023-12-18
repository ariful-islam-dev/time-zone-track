
import './App.css';
import { useState } from 'react';
import { generate } from 'shortid';
import LocalClock from './components/localClock';

const LOCAL_CLOCK_INIT={
  title: "My Clock",
  timezone:"",
  offset: 0,
  date: null
}

function App() {
  const [localClock, setLocalClock] = useState({...LOCAL_CLOCK_INIT});
  const [clocks, setClocks] = useState([]);

  //Create a clock
  const createClock = (clock)=>{
    clock.id = generate();
    setClocks([...clocks, clock ])
  }

  // Update Local Clock
  const updateLocalClock = (data)=>{
    setLocalClock({
      ...localClock,
      ...data
    })
  }
  return (
    <div className="App">
      <LocalClock clock={localClock} updateClock={updateLocalClock} createClock={createClock}/>
      <div>International Clock List</div>
    </div>
  );
}

export default App;
