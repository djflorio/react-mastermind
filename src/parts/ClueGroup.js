import React from 'react';


const Clue = (props) => {
  const thisClass = "clue clue--" + props.value;
  return (
    <li className={thisClass}></li>
  );
}

const ClueGroup = (props) => {
  return (
    <ul className="clue-group">
      {
        props.clues.map((clue, i) => (
          <Clue key={"clue" + i} value={clue} />
        ))
      }
    </ul>
  );
}

export default ClueGroup;