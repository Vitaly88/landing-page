import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Landing from "./pages/Landing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          <div style={{ flexGrow: 1 }} />
          <Footer>Made with Love</Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
