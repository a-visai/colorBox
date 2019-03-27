import React, { Component } from 'react';
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
      <div className='flex-grid'>
        <div className='col'>
          <Square
          colorChanger = {this.handleClick}
          itemColor = {color[counter]}
          />
        </div>
      </div>
    );
  }
}

export default App;
