import React, { Component } from 'react'
import Header from './Shared/Header'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './Shared/Footer'
import { getArticles } from './Services/api-helper'
import { Link, Route, withRouter } from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './Services/auth'
// import Main from './Pages/Main'
import Login from './Components/Login'
import Register from './Components/Register'
import './tailwind.output.css'
// import Create from './Pages/Create'


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
        // handleChange={this.handleChange}
        // userData={this.state.userData}
        // handleLogin={this.loginSubmit}
        // currentUser={this.state.currentUser}
        />



        <div>
          {this.state.articles && this.state.articles.map(article => (
            <div className='article'>
              <Link to={`/article/${article.id}`} >
                <h5 class="font-mono text-lg text-gray-800 text-center">{article.article}</h5>
                <img src={article.movie.img_url} alt="HarryPotter"/>
              </Link>
            </div>
          ))}
          {/* <Main currentUser={this.state.currentUser}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister} /> */}
      
        </div>
        <Footer />

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

        {/* <Route path='/articles/new' render={(props) => (
          <Create
          {...props}
          handleArticleCreate={this.handleArticleCreate}
          />

        )}></Route> */}
          



      </div>
    )
  }
}
































