import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-buttons">
          <input type="number" />
          <button type="button" className="calc-buttons">AC</button>
          <button type="button" className="calc-buttons">&plusmn;</button>
          <button type="button" className="calc-buttons">&#37;</button>
          <button type="button" className="calc-buttons m-sign">&divide;</button>
          <button type="button" className="calc-buttons">7</button>
          <button type="button" className="calc-buttons">8</button>
          <button type="button" className="calc-buttons">9</button>
          <button type="button" className="calc-buttons m-sign">&times;</button>
          <button type="button" className="calc-buttons">4</button>
          <button type="button" className="calc-buttons">5</button>
          <button type="button" className="calc-buttons">6</button>
          <button type="button" className="calc-buttons m-sign">&minus;</button>
          <button type="button" className="calc-buttons">1</button>
          <button type="button" className="calc-buttons">2</button>
          <button type="button" className="calc-buttons">3</button>
          <button type="button" className="calc-buttons m-sign">&#43;</button>
          <button type="button" className="calc-buttons zero">0</button>
          <button type="button" className="calc-buttons">&sdot;</button>
          <button type="button" className="calc-buttons m-sign">&#61;</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
