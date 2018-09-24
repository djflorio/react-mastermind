import React from 'react';

import Slot from './Slot';


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