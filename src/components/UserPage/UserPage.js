import React from "react";
import { connect } from "react-redux";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = props =>
  <div className="container">
    <h1 className="welcome">Welcome to It Could Be Tacos!</h1>
    <p>This app </p>
    {/* <LogOutButton className="log-in" /> */}
  </div>;

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
