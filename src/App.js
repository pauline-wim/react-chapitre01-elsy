import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './App.css';
import Box from "./components/Box.js"
import styles from "./styles/global.css";

const tempMin = -20;
// const tempMax = 40;
const heartMin = 80;
// const heartMax = 180;
const stepsMin = 0;
// const stepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart: {heartMin}</p>
          <p>Temperature: {tempMin}</p>
          <p>Steps: {stepsMin}</p>
          {/* Water */}
          <div className={styles.evenBox}>
            <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          </div>
          {/* Steps */}
          <div className={styles.box}>
            <Box icon="directions_walk" color="black" value={3000} unit="steps" />
          </div>
          {/* Heart */}
          <div className={styles.evenBox}>
            <Box icon="favorite" color="red" value={120} unit="bpm" />
          </div>
          {/* Temperature */}
          <div className={styles.Box}>
            <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
