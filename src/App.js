import "./App.css";
import { useState } from "react";
import { generate } from "shortid";
import LocalClock from "./components/localClock";
import ClockList from "./components/clockList";

const LOCAL_CLOCK_INIT = {
  title: "My",
  timezone: "",
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);
  // console.log(clocks)

  //Create a clock
  const createClock = (clock) => {
    clock.id = generate();
    setClocks([...clocks, clock]);
  };

  // Update Local Clock
  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  // Update other any Clock
  const updateClock = (update) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === update.id) return update;
      return clocks;
    });
    setClocks(updatedClocks);
  };

  const deleteClock = (id) => {
    const updatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedClocks);
  };
  console.log(localClock)
  return (
    <div className="App">
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />
      <ClockList
        localClock={localClock.date}
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
}

export default App;
