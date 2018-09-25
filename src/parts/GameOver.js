import React from 'react';


const GameOver = (props) => {

  const moveText = props.guesses > 1 ? " moves" : " move";

  if (props.playing) {
    return null;
  }

  return (
    <div className="game-over">
      {
        props.hasWon ?
        <div className="game-over__win">
          <h1 className="game-over__header">
            You Cracked the Code
          </h1>
          <h2 className="game-over__score">
            {"in " + props.guesses + moveText}
          </h2>
          <button className="game-over__new" onClick={props.newGame}>
            Play Again
          </button>
        </div>
        :
        <div className="game-over__lose">
          <h1 className="game-over__header">
            Failed
          </h1>
          <button className="game-over__new" onClick={props.newGame}>
            Play Again
          </button>
        </div>
      }
      

    </div>
  );
}

export default GameOver;