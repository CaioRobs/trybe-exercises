import React, { Component } from 'react'

export default class Btn extends Component {
  constructor() {
    super();

    this.state = {
      clicksNumber: 0,
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick(event) {
    // this.setState((previousState, _props) => (newState))
    this.setState((previous, _props) => {
      if (previous.clicksNumber % 2 !== 0) {
        event.target.style.backgroundColor = 'red'
      } else {
        event.target.style.backgroundColor = 'whitesmoke'
      }
      return ({
          clicksNumber: previous.clicksNumber + 1
      })
    })
  }

  render() {
    return (
      <button onClick={this.handleBtnClick}>{this.state.clicksNumber}</button>
    )
  }
}
