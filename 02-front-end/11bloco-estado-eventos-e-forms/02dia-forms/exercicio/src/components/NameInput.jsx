import React, { Component } from 'react'

export default class NameInput extends Component {
  render() {
    return (
      <label for="name">
        Name
        <input type="text" name="name" id="name" />
      </label>
    )
  }
}
