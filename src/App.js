import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import ReactGA from "react-ga";
import { useRoutes } from "hookrouter";
import Routes from "./services/routes";

function App() {
  // const routeResult = useRoutes(Routes);
  // return routeResult;
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Home />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
