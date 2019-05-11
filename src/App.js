import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="Nir Tzur"
          email="nirtzur89@gmail.com"
          phone="01736349808"
        />
        <Contact
          name="Krystian Kielar"
          email="kk1234@gmail.com"
          phone="01785466525"
        />
      </div>
    );
  }
}

export default App;
