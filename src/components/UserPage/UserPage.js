import React from "react";
import { connect } from "react-redux";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = props =>
  <div className="container">
    <h1 className="welcome">Welcome to It Could Be Tacos!</h1>
    <p className="container-sm">This app has everything you need for finding your new favorite recipes, adding notes to recipe cards like your grandmother used to in her old recipe books,
    planning your meals for the week, and finding all the ingredients you need in the grocery store! To get started, click the search button, edit your dietary needs
      at the top and search for whatever sounds good to you!  </p>
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
