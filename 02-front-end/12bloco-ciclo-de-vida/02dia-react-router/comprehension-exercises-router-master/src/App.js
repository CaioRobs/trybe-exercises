import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import NotFound from './components/NotFound';
const greet = 'Hello, my friend';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route
            path="/users" 
            render={(routerProps) => (<Users {...routerProps} greetingsMessage={greet} />)} 
          />
          <Route path="*" component={ NotFound }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
