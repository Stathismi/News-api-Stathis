import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import Home  from "./Home";
import Header from "./components/Header";
import "./styles/App.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  render() {

    return (
      <div className="container-fluid App">
        <Header/>
        <BrowserRouter>
          <Switch >
            <Route
              component={Home}
              exact
              path="/"
            />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
