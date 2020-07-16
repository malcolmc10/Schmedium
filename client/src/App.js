import React, { Component } from 'react'
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import { getArticles } from './Services/api-helper'
import { Link, Route, withRouter } from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './Services/auth'
import Main from './Pages/Main'
import Login from './Components/Login'
import Register from './Components/Register'
import './tailwind.output.css'
import Create from './Pages/Create'
import About from './Components/About'



export default class App extends Component {
  state = {
    articles: null,
    userData: {
      username: '',
      password: '',
    },
    currentUser: null
  }

  componentDidMount() {
    this.handleVerify();
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser })
  }

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  }

  componentDidMount = async () => {
    const articles = await getArticles()
    this.setState({
      articles
    })
  }

  render() {
    const { handleLogin, handleRegister } = this.props;
    return (
      <div className="content-center">
        <Header

        />

      



        <Route exact path='/'>
          <div className="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
            <Main
              articles={this.state.articles}
            />
          </div>

          <div id="about">
            <About />
          </div>
          
        </Route>

        

        <Route path='/register'>
          <Register
            handleChange={this.handleChange}
            userData={this.state.userData}
            handleRegister={this.handleRegister}
          /></Route>


        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={handleLogin}
          />
        )} />

        <Route path='/create' render={(props) => (
          <Create
            {...props}
            handleArticleCreate={this.handleArticleCreate}
          />

        )} />





        <Footer />








      </div>
    )
  }
}
































