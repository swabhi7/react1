import React, { Component } from "react";
import "./styles.css";
import classes from "./App.module.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className={classes.Red}>Hello World</h1>
      </div>
    );
  }
  
}

export default App;
