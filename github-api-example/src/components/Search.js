import React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FetchRepositories } from '../api';

import '../App.css';

class Search extends Component {

    state = {
        inputText: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const username = this.state.inputText;
        const repositories = await FetchRepositories(username);
        this.props.repositories(repositories);
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
                        onFocus={(e)=> e.target.select()}
                        id="new-todo"
                        placeholder="username"
                        onChange={(e) => this.setState({inputText: e.target.value})}
                        value={this.state.inputText}
                    />
                    <button>
                        <FontAwesomeIcon icon="search" />
                    </button>
                </form>
            </div>
        )
    }
}

export default Search;