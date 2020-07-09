import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
}

export default App;
