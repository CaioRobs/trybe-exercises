import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NotFound extends Component {
  render() {
    return (
      <div>
        <h2>404 Error</h2>
        <p> Page not found </p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
};

export default NotFound;
