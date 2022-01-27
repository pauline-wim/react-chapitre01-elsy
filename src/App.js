import React from "react";
// Components
import Box from "./components/Box"
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps : 3000,
    }

    this.handleSteps = this.handleSteps.bind(this);
    this.handleHeart = this.handleHeart.bind(this);
    this.handleTemp = this.handleTemp.bind(this);
  }

  handleSteps(e) {
    return this.setState({steps: e.target.value})
  }

  handleHeart(e) {
    return this.setState({heart: e.target.value})
  }

  handleTemp(e) {
    return this.setState({temperature: e.target.value})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box 
            icon="local_drink" 
            color="#3A85FF" 
            value={this.state.water} 
            unit="L"
          />
          {/* Steps */}
          <Box 
            icon="directions_walk" 
            color="black" 
            value={this.state.steps} 
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onInput={this.handleSteps}
          />
          {/* Heart */}
          <Box 
            icon="favorite" 
            color="red" 
            value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onInput={this.handleHeart}
          />
          {/* Temperature */}
          <Box 
            icon="wb_sunny" 
            color="yellow" 
            value={this.state.temperature} 
            unit="°C"
            min={tempMin}
            max={tempMax}
            onInput={this.handleTemp}

          />
        </div>
      </div>
    );
  }
}

export default App;