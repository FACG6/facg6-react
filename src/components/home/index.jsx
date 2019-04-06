import React, { Component } from "react";
import "./style.css";
import getData from "../../utils/getData";

class Home extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    const url = "https://api.github.com/orgs/facg6";
    getData(url)
      .then(response => this.setState({ data: response }))
      .catch(e => <h3>{e}</h3>);
  }
  render() {
    if (!this.state.data) {
      return <h3>...Loading</h3>;
    }
    const { avatar_url, html_url } = this.state.data;
    return (
      <div className="main">
        <img className="avatar" src={avatar_url} alt="" />
        <a href={html_url}>Go to repo s.</a>
        <div className="description">
          The Code Academy is Palestine’s first full-stack coding bootcamp with
          a flagship campus in Gaza City and second campus in the West Bank city
          of Hebron. We train 16 students in a full-time, intensive course for 8
          weeks with an additional 16 weeks of project-based learning with
          real-world clients to jumpstart your professional portfolio. The
          objective is to graduate as full-stack developers who can deploy
          production-grade software online and secure high-quality jobs with
          companies or work as freelance developers.
        </div>
      </div>
    );
  }
}

export default Home;
