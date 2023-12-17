import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { generate } from 'shortid';

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
  return (
    <div className="App">
      <div>Local Time</div>
      <div>International Clock List</div>
    </div>
  );
}

export default App;
