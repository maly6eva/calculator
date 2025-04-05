import {useState} from "react";
import "./index.css";


function Calculator() {
    const [count, setCount] = useState('0')

    function subOne() {
        const resultOne = eval(count)
        setCount((resultOne + 1).toString())
    }

    function subTwo() {
        const resultTwo = eval(count)
        setCount((resultTwo - 1).toString())
    }

    function resultCount(value) {
        if (value === 'C') {
            setCount('0')
            return
        } else if (value === '=') {
            setCount(eval(count).toString())
        }

        setCount((prev) => (prev === '0' ? value : prev + value))

    }

    return (
        <div className="calculator-container">
            <h1 className="calculator-title">UseState Calculator</h1>
            <div className="calculator">
                <div className="display">{count}</div>
                <div className="increment-buttons">
                    <button className="increment" onClick={subOne}>+1</button>
                    <button className="decrement" onClick={subTwo}>-1</button>
                </div>
                <div className="buttons">
                    <button onClick={() => resultCount(1)}>1</button>
                    <button onClick={() => resultCount(2)}>2</button>
                    <button onClick={() => resultCount(3)}>3</button>
                    <button className="operator" onClick={() => resultCount('+')}>+</button>
                    <button onClick={() => resultCount(4)}>4</button>
                    <button onClick={() => resultCount(5)}>5</button>
                    <button onClick={() => resultCount(6)}>6</button>
                    <button className="operator" onClick={() => resultCount('-')}>-</button>
                    <button onClick={() => resultCount(7)}>7</button>
                    <button onClick={() => resultCount(8)}>8</button>
                    <button onClick={() => resultCount(9)}>9</button>
                    <button className="operator" onClick={() => resultCount('*')}>×</button>
                    <button onClick={() => resultCount(0)}>0</button>
                    <button onClick={() => resultCount(',')}>,</button>
                    <button className="equals" onClick={() => resultCount('=')}>=</button>
                    <button className="operator" onClick={() => resultCount('/')}>/</button>
                    <button className="clear" onClick={() => resultCount('C')}>C</button>
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
