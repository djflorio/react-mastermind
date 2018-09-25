import React from 'react';


const Option = (props) => {

  let thisClass = "option color-" + props.value;

  if (props.currentColor === props.value) {
    thisClass += " option--active";
  }

  return (
    <div
      className={thisClass}
      onClick={() => props.setCurrentColor(props.value)}>
    </div>
  );
}

export default Option;