import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
//import styled from "styled-components";
import { Route } from "react-router-dom";
import Button from "./components/Button/Button";
import Image from "./components/ImageComp/Image";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Home />
        <div>
          <Route path="/buttons" component={Button} />
          <Route path="/images" component={Image} />
        </div>
      </div>
    );
  }
}

export default App;

// const Container=styled.div`

// `
