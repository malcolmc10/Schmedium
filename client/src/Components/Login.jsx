import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {
    username: "",
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
    const { handleLogin, history } = this.props;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(this.state);
        history.push('/')
      }} className="my-5 mx-auto max-w-xl shadow-md p-8">
        <h3 className="content-center text-xl m-8 ">Login</h3>
        <label>
          <h1 className="content-center text-xl m-8 ">Username:</h1>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none"/>
        </label>
        <br />
        <label>
          <h1 className="content-center text-xl m-8 ">Password:</h1>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none"/>
        </label>
        <br />
        <Link to='/register' ><button className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline my-5">Register</button></Link>
        <br></br>
        <button className="bg-red-800 hover:bg-red-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
    )
  }
}