import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SmallLoader } from "./Loaders";

import { FetchRepositories } from "../api";

import texts from "../texts";

// Component to search repositories with username
class Search extends Component {
  state = {
    inputText: "",
    error: "",
    loading: false,
  };

  // Function to handle search input
  handleSubmit = async (e) => {
    this.setState({ error: false });
    e.preventDefault();
    if (this.state.inputText === "") {
      this.setState({ error: texts["user-error"] });
      this.props.repositories([]);
    } else {
      this.setState({ loading: true });
      const username = this.state.inputText;
      let options = {
        username,
      };
      // const repositories = await FetchRepositories(options={index: 1, username});
      const repositories = await FetchRepositories(options);
      if (repositories.length === 0) {
        this.setState({ error: texts["repository-error"], loading: false });
        this.props.repositories([]);
      } else if (typeof repositories === "string") {
        this.setState({ error: repositories, loading: false });
        this.props.repositories([]);
      } else {
        this.props.repositories(repositories);
        this.setState({ error: false, loading: false });
      }
    }
  };

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <label>{texts["search-label"]}</label>
          <input
            className="Search-input"
            onFocus={(e) => e.target.select()}
            placeholder="username"
            onChange={(e) => this.setState({ inputText: e.target.value })}
            value={this.state.inputText}
          />
          <button className="Search-button">
            {this.state.loading ? (
              <SmallLoader />
            ) : (
              <FontAwesomeIcon icon="search" />
            )}
          </button>
          {this.state.error ? (
            <p className="Error">{this.state.error}</p>
          ) : null}
        </form>
      </div>
    );
  }
}

export default Search;
