import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Landing from "./pages/Landing";
import About from "./pages/About";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
      </Router>
    </>
  );
}

export default App;
