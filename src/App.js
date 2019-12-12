import React, { Component } from 'react';
import {
  HashRouter,
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

  handleRepositories = (e) => {
    this.setState({ repositories: e });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <div className="App-content">
            <HashRouter basename="/">
              <Switch>
                <Route path="/" exact>
                  <Search repositories={(e) => this.handleRepositories(e)} />
                  <Repositories repositories={this.state.repositories} />
                </Route>
                <Route path="/:owner/:repository">
                  <Repository />
                </Route>
              </Switch>
            </HashRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
