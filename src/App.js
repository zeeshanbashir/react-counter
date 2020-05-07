import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  addCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.addCounter()}>
          <h1>Increase</h1>
        </button>
        <h2>counts {this.state.counter}</h2>
      </div>
    );
  }
}

export default App;
