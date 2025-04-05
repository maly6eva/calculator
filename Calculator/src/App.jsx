import { useState } from "react";
import "./index.css";


function Calculator() {
  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">0</div>
        <div className="increment-buttons">
          <button className="increment">+1</button>
          <button className="decrement">-1</button>
        </div>
        <div className="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="operator">+</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="operator">-</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="operator">×</button>
          <button>0</button>
          <button>,</button>
          <button className="equals">=</button>
          <button className="operator">÷</button>
          <button className="clear">C</button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, JSX, CSS Modules, JavaScript (useState, events
          handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
