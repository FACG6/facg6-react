import React from "react";
import PropTypes from "prop-types";

function Repo(props) {
  const { name, link } = props.details;
  return (
    <li>
      {name} : <a href={link}> {link} </a>
    </li>
  );
}
Repo.propTypes = {
  details: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
export default Repo;
