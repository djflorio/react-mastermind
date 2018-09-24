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

const SlotGroup = (props) => {
  return (
    <ul className="slot-group">
      {
        props.slots.map((slot, i) => (
          <Slot
            key={"slot" + i}
            value={slot}
            rowNum={props.rowNum}
            colNum={i}
            updateSlot={props.updateSlot}
          />
        ))
      }
    </ul>
  );
}

export default SlotGroup;