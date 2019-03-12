import React, { Component } from 'react';
import './App.css';
import Square from './Square.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: ['red','orange','yellow','green','blue','indigo','violet'],
      counter: 0
    }
  }

  handleClick = () => {
    let {color, counter} = this.state
    if (counter < color.length - 1) {
      this.setState({counter: counter + 1})
    } else {
      this.setState({counter: 0})
    }
  }

  render() {
    let {color, counter} = this.state
    return (
      <div>
        <Square
        colorChanger = {this.handleClick}
        itemColor = {color[counter]}
        />
      </div>
    );
  }
}

export default App;
