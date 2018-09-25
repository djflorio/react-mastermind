import React from 'react';

import Row from './Row';
import Option from './Option';
import SlotGroup from './SlotGroup';
import GameOver from './GameOver';


class Game extends React.Component {

  constructor(props) {
    super(props);

    this.newGame = this.newGame.bind(this);
    this.updateSlot = this.updateSlot.bind(this);
    this.setCurrentColor = this.setCurrentColor.bind(this);
    this.checkRow = this.checkRow.bind(this);
    this.updateClues = this.updateClues.bind(this);
  }

  componentWillMount() {
    this.newGame();
  }

  newGame() {

    const code = this.generateCode();
    const rows = [];

    for (let i=0; i < 10; i++) {
      rows.push({
        clues: [0,0,0,0],
        inputs: [0,0,0,0]
      });
    }

    this.setState({
      playing: true,
      code: code,
      turn: 0,
      rows: rows,
      currentColor: 1,
      currentRow: 9,
      options: [1,2,3,4,5,6,7,8],
      hasWon: false
    });
  }

  generateCode() {
    const possible = [1,2,3,4,5,6,7,8];
    const code = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * possible.length);
      code.push(possible[randomIndex]);
      possible.splice(randomIndex, 1);
    }
    return code;
  }

  updateSlot(row, col) {
    if (row !== this.state.currentRow) { return; }
    const newRows = this.state.rows.slice();
    newRows[row].inputs[col] = this.state.currentColor;
    this.setState({
      rows: newRows
    });
  }

  updateClues(row, rightColor, rightSpot) {
    const newRows = this.state.rows.slice();
    const newRow = newRows[row];
    let currentIndex = 0;
    for (let i=0; i < rightSpot.length; i++) {
      newRow.clues[currentIndex] = 2;
      currentIndex += 1;
    }

    for (let i=0; i < rightColor.length; i++) {
      newRow.clues[currentIndex] = 1;
      currentIndex += 1;
    }
    
    this.setState({
      rows: newRows
    });
  }

  setCurrentColor(option) {
    this.setState({
      currentColor: option
    });
  }

  checkRow() {
    const checkRow = this.state.rows[this.state.currentRow].inputs;
    if (checkRow.indexOf(0) !== -1) { return; }

    const rightColor = [];
    const rightSpot = [];
    const code = this.state.code;
    
    for (let i = code.length; i--;) {
      const slot = checkRow[i];

      const rightColorIndex = rightColor.indexOf(slot);
      const rightSpotIndex = rightSpot.indexOf(slot);
      const inRightColorList = rightColorIndex !== -1;
      const inRightSpotList = rightSpotIndex !== -1;

      if (slot === code[i]) {
        rightSpot.push(slot);
        if (inRightColorList) {
          rightColor.splice(rightColorIndex, 1);
        }
      } else if (code.indexOf(slot) !== -1 && !inRightColorList && !inRightSpotList) {
        rightColor.push(slot);
      }
    }

    if (rightSpot.length === 4) {
      this.updateClues(this.state.currentRow, rightColor, rightSpot);
      this.setState({ 
        playing: false,
        hasWon: true
      });
    } else {
      this.updateClues(this.state.currentRow, rightColor, rightSpot);
    }
    if (this.state.currentRow - 1 < 0) {
      this.setState({ playing: false });
    }
    this.setState({ currentRow: this.state.currentRow - 1 });
  }

  render() {
    return (
      <div className="game">
        <GameOver
          newGame={this.newGame}
          playing={this.state.playing}
          guesses={9-this.state.currentRow}
          hasWon={this.state.hasWon}
        />
        <table className="board">
          <tbody>
            <tr>
              <td></td>
              <td className="game__code">
                <SlotGroup
                  rowNum={-1}
                  slots={this.state.playing ? [0,0,0,0] : this.state.code}
                />
              </td>
            </tr>
            {
              this.state.rows.map((row, i) => (
                <Row
                  key={"row" + i}
                  rowNum={i}
                  slots={row.inputs}
                  clues={row.clues}
                  updateSlot={this.updateSlot}
                  checkRow={this.checkRow}
                  currentRow={this.state.currentRow}
                />
              ))
            }
            <tr>
              <td></td>
              <td className="options-outer">
                <div className="options-inner">
                  <div className="options">
                  {
                    this.state.options.map(option => (
                      <Option
                        key={"option" + option}
                        value={option}
                        currentColor={this.state.currentColor}
                        setCurrentColor={this.setCurrentColor}
                      />
                    ))
                  }
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Game;