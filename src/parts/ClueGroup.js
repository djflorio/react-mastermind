import React from 'react';


const Clue = (props) => {
  const thisClass = "clue clue--" + props.value;
  return (
    <div className={thisClass}></div>
  );
}

const ClueGroup = (props) => {
  return (
    <div className="clue-group">
      {
        props.clues.map((clue, i) => (
          <Clue key={"clue" + i} value={clue} />
        ))
      }
    </div>
  );
}

export default ClueGroup;