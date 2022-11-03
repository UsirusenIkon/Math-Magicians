/* eslint-disable */
import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import { useState } from 'react';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const clickHandler = (e) => {
    const result = (calculate({total, next, operation}, e.target.textContent));
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  }

  return (
    <div className="calculator-page">
      <h2>Let's Do Some Math!</h2>
      <div className="calculator">
        <div className="calculator-buttons">
          <div className="number">
            {total}
            {operation}
            {next}
          </div>
          <button type="button" className="calc-buttons" onClick={clickHandler}>AC</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>+/-</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>%</button>
          <button type="button" className="calc-buttons m-sign" onClick={clickHandler}>÷</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>7</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>8</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>9</button>
          <button type="button" className="calc-buttons m-sign" onClick={clickHandler}>x</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>4</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>5</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>6</button>
          <button type="button" className="calc-buttons m-sign" onClick={clickHandler}>-</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>1</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>2</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>3</button>
          <button type="button" className="calc-buttons m-sign" onClick={clickHandler}>+</button>
          <button type="button" className="calc-buttons zero" onClick={clickHandler}>0</button>
          <button type="button" className="calc-buttons" onClick={clickHandler}>.</button>
          <button type="button" className="calc-buttons m-sign" onClick={clickHandler}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
