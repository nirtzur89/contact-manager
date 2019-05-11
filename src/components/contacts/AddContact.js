import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = e => {
    e.preventDefault();
    alert(this.state);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-5">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                value={phone}
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="add contact"
              className="byn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
