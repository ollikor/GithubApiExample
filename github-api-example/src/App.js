import React from 'react';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Search from './components/Search';
import Repositories from './components/Repositories';
import Repository from './components/Repository';

import './App.css';

class App extends Component {

  state = {
    repositories: []
  }

  handleRepositories(e) {
    this.setState({ repositories: e })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Search repositories={(e) => this.handleRepositories(e)} />
              <Repositories repositories={this.state.repositories} />
            </Route>
            <Route path="/repository/:name">
              <Repository />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
