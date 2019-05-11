import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  state = {};

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div style={{ backgroundColor: "#FF5733" }}>
              <h1 className="display-4 mb-4">Contact List:</h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
