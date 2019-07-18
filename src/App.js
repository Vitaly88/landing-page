import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Landing from "./pages/Landing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import NewPaste from "./pages/NewPaste";
import PasteDetails from "./pages/PasteDetails";
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
            <Route path="/about" exact component={About} />
            <Route path="/paste" exact component={NewPaste} />
            <Route path="/paste/:id" exact component={PasteDetails} />
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
