import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FetchRepositories } from '../api';

import '../App.css';

class Search extends Component {

    state = {
        inputText: '',
        error: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        if (this.state.inputText === '') {
            this.setState({ error: 'Set a username' });
        } else {
            const username = this.state.inputText;
            const repositories = await FetchRepositories(username);
            this.props.repositories(repositories);
            this.setState({ error: '' });
        }
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
                        onFocus={(e) => e.target.select()}
                        placeholder="username"
                        onChange={(e) => this.setState({ inputText: e.target.value })}
                        value={this.state.inputText}
                    />
                    <button className="SearchButton">
                        <FontAwesomeIcon icon="search" />
                    </button>
                    <p className="Error">{this.state.error}</p>
                </form>
            </div>
        )
    }
}

export default Search;