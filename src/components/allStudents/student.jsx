import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import getData from "../../utils/getData";

class Student extends Component {
  state = {
    student: {},
    error: null
  };
  componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    getData(url).then(result => {
      this.setState({
        student: { name: result.name, img: result.avatar_url }
      });
    });
  }
  render() {
    if (!this.state.student) {
      return <div>Loading ...</div>;
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
          to={`/all-students/student/${this.props.username}`}
          className="container__link"
        >
          View
        </Link>
      </div>
    );
  }
}
Student.propTypes = {
  username: PropTypes.string.isRequired
};

export default Student;
