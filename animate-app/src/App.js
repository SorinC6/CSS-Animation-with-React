import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
//import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Home />
      </div>
    );
  }
}

export default App;

// const Container=styled.div`

// `
