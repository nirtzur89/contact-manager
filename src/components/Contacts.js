import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
