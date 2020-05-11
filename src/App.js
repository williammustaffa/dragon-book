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
import { UpdateDragonView } from "views/UpdateDragonView";
import { LoginView } from "views/LoginView";
import { NotFoundView } from "views/NotFoundView";

// Session action
import { userCheckSession } from "store/actions";
import { Spinner } from "components/Spinner";

// Global styles
import "./assets/style/index.scss";
import "semantic-ui-css/semantic.min.css";

/**
 * Ensure user has a session to see this component
 * otherwhise user is redirected to login
 * @param {*} param
 */
function PrivateRoute({ user, component, ...options }) {
  // Get user data
  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.user.isLoggedIn,
  }));

  return (
    isLoggedIn ?
    <Route component={component} {...options} />:
    <Redirect to={`/login?redirect=${options.location.pathname}`} />
  );
};

/**
 * Ensure user goes to proper page if loggedin
 * @param {*} param
 */
function RequiredPath({ user, component, ...options }) {
  // Get user data
  const { isLoggedIn } = useSelector(state => ({
    isLoggedIn: state.user.isLoggedIn,
  }));

  return (
    isLoggedIn ?
    <Redirect to={"/"} /> :
    <Route component={component} {...options} />
  );
}

/**
 * Prevent router logic running before session check
 */
function SessionContainer({ children }) {
  const dispatch = useDispatch();

  // Get user data
  const { isCheckingSession } = useSelector(state => ({
    isCheckingSession: state.user.isCheckingSession,
  }));

  // Check session
  useEffect(function () {
    dispatch(userCheckSession());
  }, [dispatch]);

  return (
    isCheckingSession ?
    <Spinner /> :
    children
  );
}

/**
 * Main App container
 * Routing logic is done here
 */
function App() {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <Container className="app-container">
        <SessionContainer>
          <Switch>
            <RequiredPath exact path="/login" component={LoginView} />
            <PrivateRoute exact path="/" component={HomeView} />
            <PrivateRoute exact path="/dragon/add" component={CreateDragonView} />
            <PrivateRoute exact path="/dragon/update/:id" component={UpdateDragonView} />
            <PrivateRoute exact path="/dragon/:id" component={DragonDetailsView} />
            <Route component={NotFoundView} />
          </Switch>
        </SessionContainer>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;