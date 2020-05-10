import React, { Fragment, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// Common components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Navigation } from "components/Navigation";

// Views
import { HomeView } from "./views/HomeView";
import { DragonDetailsView } from "views/DragonDetailsView";
import { CreateDragonView } from "views/CreateDragonView";
import { LoginView } from "views/LoginView";
import { NotFoundView } from "views/NotFoundView";

// Session action
import { userCheckSession } from "store/actions";

// Global styles
import "./assets/style/index.scss";
import "semantic-ui-css/semantic.min.css";

/**
 * Ensure user has a session to see this component
 * otherwhise user is redirected to login
 * @param {*} param
 */
function PrivateRoute({ user, component, ...options }) {
  return (
    user.isLoggedIn ?
    <Route component={component} {...options} />:
    <Redirect to={`/login?redirect=${options.location.pathname}`} />
  );
};

/**
 * Ensure user goes to proper page if loggedin
 * @param {*} param
 */
function RequiredPath({ user, component, ...options }) {
  return (
    user.isLoggedIn ?
    <Redirect to={"/"} /> :
    <Route component={component} {...options} />
  );
}

/**
 * Main App container
 * Routing logic is done here
 */
function App() {
  const dispatch = useDispatch();

  // Get user data
  const { user } = useSelector(state => ({
    user: state.user,
  }));

  // Check session
  useEffect(function () {
    dispatch(userCheckSession());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      {user.isLoggedIn && <Navigation />}
      <Container className="app-container">
        <Switch>
          <RequiredPath exact path="/login" user={user} component={LoginView} />
          <PrivateRoute exact path="/" user={user} component={HomeView} />
          <PrivateRoute exact path="/dragon/add" user={user} component={CreateDragonView} />
          <PrivateRoute exact path="/dragon/:id" user={user} component={DragonDetailsView} />
          <Route component={NotFoundView} />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;