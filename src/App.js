import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel.js'
import styled, { css } from 'styled-components';

const Content=styled.div`
.App {
  width:100% ;
  min-height:100%;
  max-height:300%;
  margin:0;
  background-color: #4c7686;
}




`

class App extends Component {
  render() {
    return (
      <Content>
      <div className="App">
        <Carousel/>
      </div>
      </Content>
    );
  }
}

export default App;
