import React from "react";
import ClockListItem from "./clockListItem";

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  
   
  return (
    <div>
      <h3>Other clocks</h3>
      <hr />
      {clocks.length === 0 ? (
        <p>There is no clock, please create one</p>
      ) : (
        <div className="interClock">
          {clocks.map((clock) => (
            <ClockListItem
              key={clock.id}
              clock={clock}
              localClock={localClock}
              updateClock={updateClock}
              deleteClock={deleteClock}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClockList;
