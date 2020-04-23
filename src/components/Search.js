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

  // Function to handle search input and fetch repositories
  handleSubmit = async (e) => {
    this.setState({ error: "" });
    this.props.repositories([]);
    e.preventDefault();
    if (this.state.inputText === "") {
      this.setState({ error: texts["user-error"] });
      
    } else {
      this.setState({ loading: true });
      const username = this.state.inputText;
      let options = {
        username,
      };
      // If is repositories function send those to app component via props
      try {
        const repositories = await FetchRepositories(options);
        const error = repositories.length ? "" : texts["repository-error"];
        this.setState({ error: error, loading: false });
        this.props.repositories(repositories);
      } catch (error) {
        this.setState({ error: error.message, loading: false });
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
