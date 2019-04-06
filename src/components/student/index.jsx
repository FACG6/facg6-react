import React, { Component } from "react";

import getData from "../../utils/getData";
import Repo from './Repo';
import "./style.css";

export default class index extends Component {
  state = {
    name: null,
    repos: null,
    following: 0,
    followers: 0,
    bio: null,
    img: null
  };

  componentDidMount() {
    const username = this.props.match.params.username;
    getData(`https://api.github.com/users/${username}`)
      .then(result => {
        this.setState({
          name: result.name,
          bio: result.bio,
          followers: result.followers,
          following: result.following,
          img: result.avatar_url
        });
        return getData(result.repos_url);
      })
      .then(result => {
        const repos = result.map(repo => {
          return { name: repo.name, link: repo.html_url };
        });
        this.setState({ repos: [...repos] });
      });
  }
  render() {
    const { name, img, followers, following, bio, repos } = this.state;
    return (
      <main className="main-students">
        <section className="main__info">
          <img src={img} className="main__info-img" alt="pict" />
          <p className="main__info-username">
            {this.props.match.params.username}
          </p>
          <p className="main__info-name">{name}</p>
          <p className="main__info-bio">bio : {bio}</p>
          <p className="main__info-following">following : {following}</p>
          <p className="main__info-followers">Followers : {followers}</p>
        </section>
        <section className="main__repos">
          <p className="main__repos-title">Repositories : </p>
          <ol className="main__repos-link">
          {this.state.repos? repos.map((repo, index) => <Repo key={index} details={repo}/>): 'Loading ...'}
          </ol>
        </section>
      </main>
    );
  }
}
