/* eslint-disable */
import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState(calculate(this.state, e.target.textContent));
  }

  displayHandler() {
    this.setState({
      total: e.target.textContent,
    });
  }

  render() {
    const { total, operation,  next } = this.state;
    return (
      <div className="calculator">
        <div className="calculator-buttons">
          <div className="number">
            {total}
            {operation}
            {next}
          </div>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>AC</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>+/-</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>%</button>
          <button type="button" className="calc-buttons m-sign" onClick={this.clickHandler}>÷</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>7</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>8</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>9</button>
          <button type="button" className="calc-buttons m-sign" onClick={this.clickHandler}>x</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>4</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>5</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>6</button>
          <button type="button" className="calc-buttons m-sign" onClick={this.clickHandler}>-</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>1</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>2</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>3</button>
          <button type="button" className="calc-buttons m-sign" onClick={this.clickHandler}>+</button>
          <button type="button" className="calc-buttons zero" onClick={this.clickHandler}>0</button>
          <button type="button" className="calc-buttons" onClick={this.clickHandler}>.</button>
          <button type="button" className="calc-buttons m-sign" onClick={this.clickHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
