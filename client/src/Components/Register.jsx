import React, { Component } from 'react'

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleRegister, history } = this.props;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(this.state);
        history.push('/user');
      }} class="w-full max-w-sm border-2 border-red-800 text-2xl p-32 content-center">
        <h3>Register</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            className="border-2 border-red-800"/>
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          className="border-2 border-red-800"/>
        </label>
        <br />
        <button className="border-2 border-red-800">Submit</button>
      </form>
    )
  }
}