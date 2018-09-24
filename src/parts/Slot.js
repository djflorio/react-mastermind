import React from 'react';


const Slot = (props) => {
  const thisClass = "slot color-" + props.value;

  const update = () => {
    if (props.rowNum !== 0) {
      props.updateSlot(props.rowNum, props.colNum);
    }
  }

  return (
    <li
      className={thisClass}
      onClick={update}>
    </li>
  );
}

export default Slot;