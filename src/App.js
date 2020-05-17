import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Route exact path="/react-profile/" component={ Home } />
            <Route exact path="/portfolio" component={ Portfolio } />
            <Route exact path="/contact" component={ Contact } />
            {/* <Route exact path="*">
                <Redirect to="/" />
            </Route> */}
        </Router>
      <Footer />
    </div>
  );
}

export default App;
