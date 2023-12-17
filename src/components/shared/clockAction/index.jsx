import React, { useState } from 'react';
import ClockForm from '../clockForm';

const ClockActions = ({local=false,clock, updateClock, createClock, deleteClock}) => {
    const [isEdit, setIsEdit]=useState(false);
    const [isCreate, setIsCreate] =useState(false);

    const handleClock = (value)=>{
        createClock(value)
    }
    return (
        <div>
            <button onClick={()=>handleClock(!isEdit)}>Edit</button>
            {
                local? <button>Create</button>: <button>Delete</button>
            }
            {isEdit &&(
                <>
                    <h3>Edit Clock</h3>
                    <ClockForm
                        value={clock}
                        handleClock={updateClock}
                        title={!local}
                        edit={true}
                    />
                </>
            )}
            {
                isCreate && <>
                    <h3>Create A New Clock</h3>
                    <ClockForm handleClock={handleClock}/>
                </>
            }
        </div>
    );
};

export default ClockActions;