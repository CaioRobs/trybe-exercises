import React, { Component } from 'react'

export default class CPFInput extends Component {
  render() {
    return (
      <label for="cpf">
        CPF
        <input type="text" name="cpf" id="cpf" />
      </label>
    )
  }
}
