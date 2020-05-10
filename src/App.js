import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";

// Common components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Navigation } from "components/Navigation";

// Views
import { Home } from "./views/Home";

// Global styles
import "./assets/style/index.scss";
import "semantic-ui-css/semantic.min.css";

// Main app component
function App() {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <Container className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;