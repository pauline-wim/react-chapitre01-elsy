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
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps : 3000,
    }

    this.onStepsChange = this.onStepsChange.bind(this);
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onTempChange = this.onTempChange.bind(this);
    this.calculateWater = this.calculateWater.bind(this);
  }

  onStepsChange(e) {
    return this.setState({steps: e.target.value})
  }

  onHeartChange(e) {
    return this.setState({heart: e.target.value})
  }

  onTempChange(e) {
    return this.setState({temperature: e.target.value})
  }

  calculateWater() {
    console.log("Calling function calculateWater");
    
    this.setState((prevState) => {
      if (this.state.temperature > 20) {
        return {water: prevState.water + 0.02}
      } 
      if (this.state.heart > 120) {
        return {water: prevState.water + 0.0008}
      }
      if (this.state.steps > 10000) {
        return {water: prevState.water + 0.00002}
      }
    });
    return this.state.water;
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box 
            icon="local_drink" 
            color="#3A85FF" 
            value={this.calculateWater} 
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
            step={1000}
            onInput={this.onStepsChange}
          />
          {/* Heart */}
          <Box 
            icon="favorite" 
            color="red" 
            value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onInput={this.onHeartChange}
          />
          {/* Temperature */}
          <Box 
            icon="wb_sunny" 
            color="yellow" 
            value={this.state.temperature} 
            unit="°C"
            min={tempMin}
            max={tempMax}
            onInput={this.onTempChange}
          />
        </div>
      </div>
    );
  }
}

export default App;