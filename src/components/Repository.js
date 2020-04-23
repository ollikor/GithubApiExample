import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { BigLoader } from "./Loaders";

import { FetchCommits } from "../api";
import texts from "../texts";

// Component shows all commits
class Repository extends Component {
  state = {
    commits: [],
    repository: "",
    loading: true,
    error: "",
  };

  // Fetch commits when component is loaded
  async componentDidMount() {
    this.setState({ error: "" });
    const owner = this.props.match.params.owner;
    const repository = this.props.match.params.repository;
    let options = {
      owner,
      repository,
    };
    try {
      const commits = await FetchCommits(options);
      this.setState({
        commits: commits,
        repository: repository,
        loading: false,
      });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    return (
      <div className="Repository-content">
        {this.state.loading ? (
          <BigLoader />
        ) : (
          <div>
            <Link to="/">
              <FontAwesomeIcon className="back" icon="long-arrow-alt-left" />
            </Link>
            {this.state.error ? (
              <p className="Error">{this.state.error}</p>
            ) : (
              <div>
                <p className="Repository-title">
                  {texts.repository}: {this.state.repository}
                </p>
                {this.state.commits.map((item, index) => {
                  const date = new Date(item.commit.author.date);
                  return (
                    <div key={index} className="Commit-container">
                      <p className="commit-text">{item.commit.message}</p>
                      {item.author !== null ? (
                        <img
                          className="Commit-avatar"
                          src={item.author.avatar_url}
                          alt="avatar"
                        />
                      ) : null}
                      <p className="Commit-item">{item.commit.author.name}</p>
                      <p className="Commit-item">
                        {texts.committed} {date.toLocaleDateString()}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(Repository);
