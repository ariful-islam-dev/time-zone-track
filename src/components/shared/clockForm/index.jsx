import React, { useEffect, useState } from 'react';
import { TIMEZONE_OFFSET } from '../../../constants/timezone';

const ClockForm = ({values={title: "", timezone:"UTC", offset:0}, handleClock, title=true, edit=false}) => {
    const [formValues, setFormValues]=useState({...values});
    useEffect(()=>{
        if(TIMEZONE_OFFSET[formValues.timezone]){
            setFormValues((prev)=>({...prev, offset: TIMEZONE_OFFSET[formValues.timezone]}))
        }
    }, [formValues.timezone]);

    const handleChange = (e)=>{
        let {name , value}= e.target;
    }
    return (
        <div>
            <form action="">
                <div><label htmlFor="title">Enter Title</label><input type="text"  id='title' name='title' value={formValues.title} onChange={handleChange} disabled={!title}/></div>
            </form>
        </div>
    );
};

export default ClockForm;