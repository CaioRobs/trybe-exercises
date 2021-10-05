import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
};


class Name extends Component {
  render() { 
    return (
     <h2>
       Caio R R Vieira
     </h2>
    )
  }
};

class Description extends Component {
  render() {
    return (
      <p>
        Sou estudante de WEB DEV, estudando React!
      </p>
    )
  }
};

export {Title, Name, Description};

