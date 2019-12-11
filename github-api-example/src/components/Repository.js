import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import {
    Link
} from "react-router-dom";

import { FetchCommits } from '../api';

// Component shows all commits 
class Repository extends Component {

    state = {
        commits: [],
        repository: '',
        loading: true
    }

    async componentDidMount() {
        const owner = this.props.match.params.owner;
        const repository = this.props.match.params.repository;
        const commits = await FetchCommits(owner, repository);
        this.setState({ commits: commits, repository: repository, loading: false });
    }

    render() {
        return (
            <div className="Repository-content">
                <Link to="/"><FontAwesomeIcon className="back" icon="long-arrow-alt-left" /></Link>
                <p className="Repository-title">Repository: {this.state.repository}</p>
                {this.state.loading ? <p>Loading...</p> : null}
                {
                    // Show error if commits fetch have failed
                    this.state.commits === "Not commits" || this.state.commits === "Search failed" ?
                        <li className="Repositories">{this.state.commits}</li> :
                        this.state.commits.map((item, index) => {
                            const date = new Date(item.commit.author.date);
                            return (
                                <div key={index} className="Commit-container">
                                    <p className="commit-text">{item.commit.message}</p>
                                    {
                                        item.author !== null ?
                                            <img className="Commit-avatar" src={item.author.avatar_url} alt="avatar" />
                                            : null
                                    }
                                    <p className="Commit-item">{item.commit.author.name}</p>
                                    <p className="Commit-item"> Committed on {date.toLocaleDateString()}</p>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
}

export default withRouter(Repository);