import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Nir Tzur",
        email: "nirtzur89@gmail.com",
        phone: "01736349808"
      },
      {
        id: 2,
        name: "Krystian Kielar",
        email: "kk1234@gmail.com",
        phone: "01785466525"
      },
      {
        id: 3,
        name: "Hilla Sason",
        email: "HS333@gmail.com",
        phone: "01783462455"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
