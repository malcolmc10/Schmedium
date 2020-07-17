import React, { Component } from 'react'

export default class Register extends Component {
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
    const { handleRegister, history } = this.props;

    

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(this.state);
        history.push('/user');
      }} className="my-5 mx-auto max-w-xl shadow-md p-8">
        <h3 className="content-center text-xl m-8">Register Today!</h3>
        <label>
          <h1 className="content-center text-xl m-8 " >Username:</h1>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none"/>
        </label>
        <br />
        <label>
          <h1 className="content-center text-xl m-8 " >Password:</h1>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none"/>
        </label>
        <br />
        <button className="bg-red-800 hover:bg-red-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>

      
    )
    
  }
  
}

