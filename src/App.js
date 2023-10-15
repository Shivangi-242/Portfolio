import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skill from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
