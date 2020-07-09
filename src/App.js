import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      puzzleBoxes: new Array(8).fill().map((item, idx) => Math.random() >= 0.5),
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCBChange = this.handleCBChange.bind(this);
  }
  renderCB(i) {
    return (<input
              type="checkbox"
              name= ""
              checked={this.state.puzzleBoxes[i]}
              onChange={()=>this.handleCBChange(i)}
            />);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <form onSubmit={this.handleSubmit} className="App-border">
              <label>
                Input search term (opens Google in new tab)
              </label>
              <br />
              <input
                id="searchbox"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button>
                Search
              </button>
            </form>
            <form className="App-border">
              <label>
                8 Switch Puzzle
              </label>
              <div className="board-row">
                {this.renderCB(0)}
                {this.renderCB(1)}
                {this.renderCB(2)}
              </div>
              <div className="board-row">
                {this.renderCB(7)}
                {<span>&nbsp;&nbsp;&nbsp;</span>}
                {this.renderCB(3)}
              </div>
              <div className="board-row">
                {this.renderCB(6)}
                {this.renderCB(5)}
                {this.renderCB(4)}
              </div>
              
            </form>
        </header>
      </div>
    );
  }
  handleChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    window.open('https://www.google.com/search?q=' + this.state.text)
    this.setState({text: ""});
  }
  handleCBChange(e) {
    const puzzleBoxes = this.state.puzzleBoxes.slice();
    puzzleBoxes[e] = !puzzleBoxes[e];
    if (e == 0) {
      puzzleBoxes[7] = !puzzleBoxes[7];
    } else {
      puzzleBoxes[e-1] = !puzzleBoxes[e-1];
    }
    if (e == 7) {
      puzzleBoxes[0] = !puzzleBoxes[0];
    } else {
      puzzleBoxes[e+1] = !puzzleBoxes[e+1];
    }
    this.setState({puzzleBoxes: puzzleBoxes});
    
  }
}

export default App;
