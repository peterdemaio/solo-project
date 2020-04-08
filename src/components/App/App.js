import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import Search from '../SearchPage/SearchPage'
import Favorites from '../Favorites/Favorites'
import MealPlan from '../MealPlan/MealPlan'
import GroceryList from '../GroceryListPage/GroceryListPage'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import './App.css';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
      light: green,
    },
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
})

class App extends Component {

  componentDidMount() {
    console.log('page loaded, the user id is:', this.props.reduxStore.user.id)
    this.props.dispatch({ type: 'FETCH_USER' })

  }

  render() {
    return (
      <Router>
        <div>
          {/* // nav.js.maxwidth < 430px ?
            // render navmobile.js :
            // render nav.js */}
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/search"
              component={Search}
            />
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/mealplan"
              component={MealPlan}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/favorites"
              component={Favorites}
            />
            <ProtectedRoute
              exact
              path="/grocerylist"
              component={GroceryList}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <div><h1>404 -Page Not found</h1><img src="https://www.holidaycat.cz/wp-content/uploads/2015/06/Cat-Chewing-Cord.jpg" alt="Maybe a cat chewed our wires" /></div>} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
});

let styledApp = withStyles(theme)(App)

export default connect(mapStateToProps)(styledApp);
