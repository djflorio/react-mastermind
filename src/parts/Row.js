import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import SlotGroup from './SlotGroup';
import ClueGroup from './ClueGroup';


const Row = (props) => {
  return (
    <tr className="row">
      <td>
        <ClueGroup
          clues={props.clues}
          currentRow={props.currentRow}
        />
      </td>
      <td>
        <SlotGroup
          slots={props.slots}
          updateSlot={props.updateSlot}
          rowNum={props.rowNum}
          currentRow={props.currentRow}
        />
      </td>
      <td>
        <button disabled={props.currentRow !== props.rowNum} className="row__check" onClick={props.checkRow}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
      </td>
    </tr>
  );
}

export default Row;