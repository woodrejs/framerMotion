import React from "react";
import "./App.css";
import "./app/scss/variables.scss";
import Nav from "./app/components/Nav";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Offer from "./app/pages/Offer";
import Contact from "./app/pages/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <main className="app">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/omnie">
            <About />
          </Route>
          <Route path="/oferta">
            <Offer />
          </Route>
          <Route path="/kontakt">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default App;
