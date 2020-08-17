import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>Stackathon</h1>
    <nav>
      <Link to="/example1">Example1</Link>
      <Link to="/example2">Example2</Link>
      <Link to="/example3">Example3</Link>
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {};
};

const mapDispatch = dispatch => {
  return {};
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
