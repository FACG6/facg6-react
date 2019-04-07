import React, { Component } from "react";
import { Link } from "react-router-dom";

import getData from "../../utils/getData";

class Student extends Component {
  state = {
    student: {},
    error: null
  };
  componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    getData(url)
      .then(result => {
        const error = result.error;
        if (error) {
          this.setState({ error});
        } else {
          this.setState({
            student: { name: result.name, img: result.avatar_url }
          });
        }
      })
      .catch(error => {
        this.setState({ error: 'There an error please refresh the page' });
      });
  }
  render() {
    if (!this.state.student) {
      return <div>Loading ...</div>;
    }
    const error = this.state.error
    if (error) {
      return (
        <div className="container">
          <p>{error}</p>
        </div>
      );
    }
    const { name, img } = this.state.student;
    return (
      <div className="container">
        <img className="container__img" src={img} alt="pict" />
        <p className="container_username">
          {" "}
          {name ? name : this.props.username}
        </p>
        <Link
          to={`/all-students/${this.props.username}`}
          className="container__link"
        >
          View
        </Link>
      </div>
    );
  }
}

export default Student;
