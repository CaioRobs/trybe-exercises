import React, { Component } from 'react'

export default class AddressInput extends Component {
  render() {
    return (
      <label for="address">
        Endereço
        <input type="text" name="address" id="address" />
      </label>
    )
  }
}
