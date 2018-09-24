import React from 'react';

import SlotGroup from './SlotGroup';
import ClueGroup from './ClueGroup';


const Row = (props) => {
  return (
    <tr className="row">
      <td>
        <ClueGroup clues={props.clues} />
      </td>
      <td>
        <SlotGroup
          slots={props.slots}
          updateSlot={props.updateSlot}
          rowNum={props.rowNum}
        />
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