import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";

import { FetchCommits } from '../api';

class Repository extends Component {

    state = {
        commits: [],
        repository: this.props.match.params.repository
    }

    async componentDidMount() {
        const owner = this.props.match.params.owner;
        const repository = this.props.match.params.repository;
        const commits = await FetchCommits(owner, repository);
        this.setState({ commits: commits });
        console.log(commits);
    }

    render() {
        // console.log(this.props.match.params.owner)
        return (
            <div className="RepositoryContent">
                <Link to="/"><FontAwesomeIcon className="back" icon="long-arrow-alt-left" /></Link>
                <p className="RepositoryTitle">Repository: {this.state.repository}</p>
                {
                    this.state.commits.map((item, index) => {
                        const date = new Date(item.commit.author.date);
                        return (
                        <div key={index} className="CommitContainer">
                            <p className="commitText">{item.commit.message}</p>
                            {
                                item.author !== null ?
                                    <img className="CommitAvatar" src={item.author.avatar_url} alt="avatar" />
                                    : null
                            }
                            <p className="CommitItem">{item.commit.author.name}</p>
                            <p className="CommitItem"> Committed on {date.toLocaleDateString()}</p>
                        </div>
                    )})}
            </div>
        )
    }
}

export default withRouter(Repository);