import React, { Component } from 'react'

export default class CityInput extends Component {
  render() {
    return (
      <label for="city">
        Cidade
        <input type="text" name="city" id="city" />
      </label>
    )
  }
}
