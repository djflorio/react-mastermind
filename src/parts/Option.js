import React from 'react';


const Option = (props) => {

  const thisClass = "option color-" + props.value;
  return (
    <div
      className={thisClass}
      onClick={() => props.setCurrentColor(props.value)}>
    </div>
  );
}

export default Option;