import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, this is my awesome Users component </p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
};

export default Users;
