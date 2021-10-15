import React, { Component } from 'react'

export default class EmailInput extends Component {
  render() {
    return (
    <label for="email">
      Email
      <input type="email" name="email" id="email" />
    </label>
    )
  }
}
