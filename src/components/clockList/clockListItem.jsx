import React from 'react';
import ClockDisplay from '../shared/clockDisplay';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import { formatDistance } from 'date-fns';
import ClockActions from '../shared/clockAction';

const ClockListItem = ({clock, localClock, updateClock, deleteClock}) => {
    const {date}= useClock(clock.timezone, clock.offset);
    const timer = useTimer(date);
    // console.log(clock)
    if(!date || !timer) return null;

    // Random Colors
    const colors = ["red", "green", 'deepPink', 'blue', 'orange', "purple"];
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    return (
        <div className='clockItem' style={{background: randomColor}}>
           <ClockDisplay date={timer} title={clock.title} timezone={clock.timezone} offset={clock.offset}/>
           <h3>{formatDistance(localClock, timer)}</h3>
           <ClockActions clock={clock} updateClock={updateClock} deleteClock={deleteClock}/>
        </div>
    );
};

export default ClockListItem;