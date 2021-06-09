import React from "react";
import "../css/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Homepage from "./Homepage";
import NotFound from "./NotFound";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Navbar from './Navbar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { useSelector } from "react-redux";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand'
  }
})


const App = () => {

  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <Navbar />
        <Container style={{ height: "90%" }}>
          <Switch>
            {/* <Route path="*" component={NotFound} /> */}
            <Route path="/homepage" exact component={Homepage} />
             <Route path="/" exact component={LandingPage} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
