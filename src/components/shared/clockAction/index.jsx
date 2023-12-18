import { useState } from "react";
import ClockForm from "../clockForm";

const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const toggleEdit =()=>{
    setIsEdit(isEdit ? false: true);
    setIsCreate(false)
  }
  

  const toggleCreate =()=>{
    setIsCreate(isCreate ? false: true);
    setIsEdit(false)
  }
  

  const handleClock = (value) => {
    createClock(value);
  };

  //random Colors
 
  return (
    <div>
      <button onClick={toggleEdit}>Edit</button>
      {local ? (
        <button onClick={toggleCreate}>Create</button>
      ) : (
        <button onClick={() => deleteClock(clock.id)}>Delete</button>
      )}
      {isEdit && (
        <div className="clockModal">
         <div className="formContainer">
         <h3>Edit {clock.title} Clock</h3>
          <ClockForm
            value={clock}
            handleClock={updateClock}
            title={!local}
            edit={true}
            handleToggle={toggleEdit}
          />
          <button onClick={toggleEdit}>X</button>
         </div>
          
        </div>
      )}
      {isCreate && (
        <div className="clockModal">
          <div className="formContainer">
          <h3>Create A New Clock</h3>
          <ClockForm handleClock={handleClock} handleToggle={toggleCreate} />
          <button onClick={toggleCreate}>X</button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default ClockActions;
