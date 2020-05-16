import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Wrapper>
        <Router>
          <Route exact path="/" component={ Home } />
          {/* <Route exact path="/portfolio" component={ Portfolio } />
          <Route exact path="/contact" component={ Contact } /> */}
        </Router>
        </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
