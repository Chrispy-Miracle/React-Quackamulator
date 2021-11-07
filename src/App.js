// import logo from './logo.svg';
import './App.css';
import React from 'react';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn to Quack
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: "",
      output: "0"
    });
  }   
  
  handleZeros = () => {
    if (this.state.input === "0") {
      this.setState ({input: "0", output: ""});
    } else if (this.state.input.match(/^0/)) {
      this.state.input.replace(/^0/, "");
      // this.setState ({input: this.state.input});
    } else {
      this.setState({input: this.state.input + "0", output: ""});
    }
  }

  handleDecimals = () => {  
    if (this.state.output.match(/^0$/)) {
      this.setState({input: "0.", output: ""});
    } else if (this.state.input.match(/\.$/)) {
      return;
    } else if (this.state.input.match(/\.\d*$/)) {
      return;
    } else {
      this.setState({input: this.state.input + ".", output: ""});
    }
  }
  addToInput = val => {
        this.setState({input: this.state.input + val, output: ""});
  }
        
  operate = val => {
    if (this.state.input === "") {
      this.setState({input: this.state.output + val, output: ""});
      return;
    } else if (val !== "-" && this.state.input.match(/[+\/*]$/)) {
      this.setState({input: this.state.input.slice(0, -1) + val, output: ""});
    } else if (this.state.input.match(/[+\/*\-][+\/*\-]/)) { this.setState({input: this.state.input.slice(0, -2) + val, output: ""});
    } else {
      this.setState({input: this.state.input + val, output: ""});
      }
    } 
 

  clear = () => {
    this.setState({input: "", output: "0"});
  }
  
  equals = () => {
    const answer = eval(this.state.input);
    this.setState({input: "", output: answer});
  }
  
  render() {
    return (
        <div className="container">
          <h1 id="title">Quackamulator!</h1>
          <div id="display" className="answer">{this.state.input}{this.state.output}
            <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css' />
          </div>
          <div className="opButts">
            <button id="add" className="operators" onClick={() => this.operate("+")}>+</button>
            <button id="subtract" className="operators" onClick={() => this.operate("-")}>-</button>
            <button id="multiply" className="operators" onClick={() => this.operate("*")}>x</button>
            <button id="divide" className="operators" onClick={() => this.operate("/")}>/</button>
            <button id="decimal" className="operators" onClick={() => this.handleDecimals(".")}>.</button>
          </div> 
          <div className="grid">
            <button id="one" onClick={() => this.addToInput("1")}>1</button>
            <button id="two" onClick={() => this.addToInput("2")}>2</button>
            <button id="three" onClick={() => this.addToInput("3")}>3</button>
            <button id="four" onClick={() => this.addToInput("4")}>4</button>
            <button id="five" onClick={() => this.addToInput("5")}>5</button>
            <button id="six" onClick={() => this.addToInput("6")}>6</button>
            <button id="seven" onClick={() => this.addToInput("7")}>7</button>
            <button id="eight" onClick={() => this.addToInput("8")}>8</button>
            <button id="nine" onClick={() => this.addToInput("9")}>9</button>
            <button id="zero" onClick={() => this.handleZeros("0")}>0</button>
            <button id="clear" onClick={this.clear}>CLEAR</button>
            <button id="equals"onClick={this.equals}>=</button>
          </div>
        </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));

export default App;
