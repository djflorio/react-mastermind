import React from 'react';

import Row from './Row';
import Option from './Option';


class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      code: [0,0,0,0],
      turn: 0,
      rows: [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ],
      currentColor: 1,
      currentRow: 9,
      options: [1,2,3,4,5,6,7,8],
      hasWon: false,
      hasLost: false
    };

    this.newGame = this.newGame.bind(this);
    this.updateSlot = this.updateSlot.bind(this);
    this.setCurrentColor = this.setCurrentColor.bind(this);
    this.checkRow = this.checkRow.bind(this);
  }

  componentWillMount() {
    this.newGame();
  }

  newGame() {

    const code = this.generateCode();

    this.setState({
      playing: true,
      code: code,
      turn: 0,
      rows: [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ],
      currentColor: 1,
      currentRow: 9,
      options: [1,2,3,4,5,6,7,8],
      hasWon: false,
      hasLost: false
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
    const newRows = this.state.rows.slice();
    newRows[row][col] = this.state.currentColor;
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
    let rightColor = 0;
    let rightSpot = 0;
    const checked = [];
    const code = this.state.code;
    const checkRow = this.state.rows[this.state.currentRow];

    for (let i = code.length; i--;) {
      const slot = checkRow[i];
      if (checked.indexOf(slot) === -1) {
        if (slot === code[i]) {
          rightSpot += 1;
          checked.push(slot);
        } else if (code.indexOf(slot) !== -1) {
          rightColor += 1;
          checked.push(slot);
        }
      }
    }

    if (rightSpot === 4) {
      console.log("FUCK YEAH");
    } else {
      console.log("Only color: " + rightColor);
      console.log("Right spot: " + rightSpot);
    }

    this.setState({ currentRow: this.state.currentRow - 1 });
  }

  render() {
    return (
      <div className="game">
        <table className="board">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {
              this.state.rows.map((row, i) => (
                <Row
                  key={"row" + i}
                  rowNum={i}
                  slots={row}
                  updateSlot={this.updateSlot}
                  checkRow={this.checkRow}
                  currentRow={this.state.currentRow}
                />
              ))
            }
            <tr>
              <td>
                <div className="options">
                  {
                    this.state.options.map(option => (
                      <div key={"option" + option} className="option-container">
                        <Option
                          value={option}
                          setCurrentColor={this.setCurrentColor}
                        />
                      </div>
                    ))
                  }
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