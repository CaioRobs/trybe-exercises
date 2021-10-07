import React, { Component } from 'react'

export default class Btn extends Component {
  constructor() {
    super();

    this.state = {
      clicksNumber: 0
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick() {
    console.log(this.props.name)
    this.setState((previousState, _props) => ({
      clicksNumber: previousState.clicksNumber + 1
    }))
  }

  render() {
    return (
      <button onClick={this.handleBtnClick}>{this.state.clicksNumber}</button>
    )
  }
}
