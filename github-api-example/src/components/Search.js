import React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FetchRepositories } from '../api';

import '../App.css';

class Search extends Component {

    state = {
        inputText: '',
        repositories: []
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const username = this.state.inputText;
        // const repositories = await FetchRepositories(username);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(
        (result) => {
            this.props.repositories(result);
            console.log(result)
          this.setState({
            // isLoaded: true,
            repositories: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
        // this.setState({ inputText: '' });
    }

    render() {
        return (
            <div className="Search">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search repositories with username
                </label>
                    <input
                        className="SearchInput"
                        onFocus={(e)=> e.target.select()}
                        id="new-todo"
                        placeholder="username"
                        onChange={(e) => this.setState({inputText: e.target.value})}
                        value={this.state.inputText}
                    />
                    <button className="SearchButton">
                        <FontAwesomeIcon icon="search" />
                    </button>
                </form>
            </div>
        )
    }
}

export default Search;