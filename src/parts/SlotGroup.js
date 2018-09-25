import React from 'react';


const Slot = (props) => {
  let thisClass = "slot color-" + props.value;

  if (props.currentRow === props.rowNum) {
    thisClass += " slot--active";
  }

  const update = () => {
    if (props.rowNum >= 0) {
      props.updateSlot(props.rowNum, props.colNum);
    }
  }

  return (
    <div
      className={thisClass}
      onClick={update}>
    </div>
  );
}

const SlotGroup = (props) => {
  return (
    <div className="slot-group">
      {
        props.slots.map((slot, i) => (
          <Slot
            key={"slot" + i}
            value={slot}
            rowNum={props.rowNum}
            colNum={i}
            updateSlot={props.updateSlot}
            currentRow={props.currentRow}
          />
        ))
      }
    </div>
  );
}

export default SlotGroup;