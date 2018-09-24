import React from 'react';


const Slot = (props) => {
  const thisClass = "slot color-" + props.value;
  return (
    <li
      className={thisClass}
      onClick={() => props.updateSlot(props.rowNum, props.colNum)}
    >
      
    </li>
  );
}

export default Slot;