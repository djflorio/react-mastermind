import React from 'react';

import Slot from './Slot';


const Row = (props) => {
  return (
    <tr>
      <td>
        <ul className="row">
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
      </td>
      <td>
        clues
      </td>
      <td>
        <button disabled={props.currentRow !== props.rowNum} className="row__check" onClick={props.checkRow}>
          Check
        </button>
      </td>
    </tr>
  );
}

export default Row;