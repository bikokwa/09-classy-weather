import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "lisbon" };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {}

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search from location..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button>Get weather</button>
      </div>
    );
  }
}

export default App;
