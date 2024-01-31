import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className="span-two">AC</button>
      <button className="operation-buttons">DEL</button>
      <button className="opertaion-buttons">/</button>
      <button className="Numeric-buttons">1</button>
      <button className="Numeric-buttons">2</button>
      <button className="Numeric-buttons">3</button>
      <button className="operation-buttons">X</button>
      <button className="Numeric-buttons">4</button>
      <button className="Numeric-buttons">5</button>
      <button className="Numeric-buttons">6</button>
      <button className="opertaion-buttons">+</button>
      <button className="Numeric-buttons">7</button>
      <button className="Numeric-buttons">8</button>
      <button className="Numeric-buttons">9</button>
      <button className="opertaion-buttons">-</button>
      <button className="Numeric-buttons">.</button>
      <button className="Numeric-buttons">0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
