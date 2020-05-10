import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";

// Common components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Navigation } from "components/Navigation";

// Views
import { HomeView } from "./views/HomeView";
import { DragonDetailsView } from "views/DragonDetailsView";
import { CreateDragonView } from "views/CreateDragonView";
import { LoginView } from "views/LoginView";

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
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/" component={HomeView} />
          <Route exact path="/dragon/add" component={CreateDragonView} />
          <Route exact path="/dragon/:id" component={DragonDetailsView} />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;