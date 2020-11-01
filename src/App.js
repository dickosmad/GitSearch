import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import RepoUi from "./components/RepoUi/RepoUi";
import axios from "axios";

export default class App extends Component {
  state = {};

  findRepo = (searchTerm) => {
    // axios
    //   .all([
    //     axios.get(`https://api.github.com/users/${searchTerm}`),
    //     axios.get(`https://api.github.com/users/${searchTerm}/repos`),
    //   ])
    //   .then(
    //     axios.spread((...data) => {
    //       this.setState({
    //         userData: data[0].data,
    //         repoData: data[1].data,
    //       });
    //     })
    //   );
    axios.get("https://api.github.com/users/mapbox").then((response) => {
      console.log(response.data);
      console.log(response.status);
    });
  };
  render() {
    const { userData, repoData } = this.state;
    return (
      <div className="App">
        <SearchBar find={this.findRepo} />
        <RepoUi />
      </div>
    );
  }
}
