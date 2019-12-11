import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FetchRepositories } from '../api';

// Component to search repositories with username
class Search extends Component {

    state = {
        inputText: '',
        error: '',
        loading: false
    }

    // Function to handle search input
    handleSubmit = async (e) => {
        e.preventDefault()
        if (this.state.inputText === '') {
            this.setState({ error: 'Set a username' });
        } else {
            this.setState({ loading: true });
            const username = this.state.inputText;
            const repositories = await FetchRepositories(username);
            // send props to app.js
            this.props.repositories(repositories);
            this.setState({ error: '', loading: false });
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
                        className="Search-input"
                        onFocus={(e) => e.target.select()}
                        placeholder="username"
                        onChange={(e) => this.setState({ inputText: e.target.value })}
                        value={this.state.inputText}
                    />
                    <button className="Search-button">
                        <FontAwesomeIcon icon="search" />
                    </button>
                    <p className="Error">{this.state.error}</p>
                    {this.state.loading ? <p>Loading...</p> : null}
                </form>
            </div>
        )
    }
}

export default Search;