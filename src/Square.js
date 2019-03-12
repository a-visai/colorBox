import React, { Component } from 'react'
import './Square.css'

class Square extends Component {
  render() {
    return(
      <div className = {this.props.itemColor}
      onClick = {this.props.colorChanger}>
      <h1>{this.props.itemColor}</h1>
      </div>
    )
  }
}

export default Square
