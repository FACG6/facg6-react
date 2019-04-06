import React, { Component } from "react";
import {Link} from 'react-router-dom';

import getData from "../../utils/getData";

class Student extends Component {
  state = {
    student: {},
    error: null
  };
  componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    getData(url).then(result => {
      if (result.error) {
        this.setState({ error: result.error });
      }
      this.setState({
        student: { name: result.name, img: result.avatar_url, info: result }
      });
    });
  }
  render() {
    if (!this.state.student) {
      return <div>Loading ...</div>;
    }
    const { name, img} = this.state.student;
    return (
      <div className="container">
        <img className='container__img' src={img} alt='pict'/>
        <p className='container_username'> {name ? name : this.props.username}</p>
        <Link to={`/all-students/student/${this.props.username}`} target='_blank' className='container__link'>View</Link>
      </div>
    );
  }
}

export default Student;
