import React from 'react';
import { Component } from 'react';

import Header from './components/Header';
import Search from './components/Search';

import './App.css';

class App extends Component {

  handleRepositories(e) {
    console.log('handle', e);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search repositories={(e) => this.handleRepositories(e)} />
      </div>
    );
  }
}

export default App;
