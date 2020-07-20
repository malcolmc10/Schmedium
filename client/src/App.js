import React, { Component } from 'react'
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import { getArticles, deleteArticle } from './Services/api-helper'
import { Link, Route, withRouter } from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './Services/auth'
import Main from './Pages/Main'
import Login from './Components/Login'
import Register from './Components/Register'
import './tailwind.output.css'
import Create from './Pages/Create'
import About from './Components/About'
import UpdateArticle from './Components/UpdateArticle'
import { updateArticle } from './Services/api-helper'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from './Components/Carousel.jsx'




export default class App extends Component {
  state = {
    articles: null,
    userData: {
      username: '',
      password: '',
    },
    currentUser: null
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
    const currentUser = await this.handleVerify()
    const articles = await getArticles()
    this.setState({
      articles,
      currentUser
    })
  }

  handleUpdate = async (id, articleData) => {
    const newArticle = await updateArticle(id, articleData)
    this.setState(prevState => ({
      articles: prevState.articles.map(article => (article.id == newArticle.id ? newArticle : article))
    }))
  }

  handleDelete = async (id) => {
    await deleteArticle(id);
    this.setState(prevState => ({
      articles: prevState.articles.filter(article => article.id !== id)
    }))
  }


  render() {
    const { handleLogin, handleRegister } = this.props;
    return (
      <div className="content-center">
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <div className="m-50 bg-red-900 border-2 border-gray-200 my-2">
          <Carousel />
        </div>


        <Route exact path='/'>
          <div className=" min-h-screen p-8 flex items-center justify-center">
            <Main
              articles={this.state.articles}
              currentUser={this.state.currentUser}
              deleteArticle={this.handleDelete}
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

            handleLogin={this.handleLogin}
          />
        )} />

        <Route path='/create' render={(props) => (
          <Create
            {...props}
            handleArticleCreate={this.handleArticleCreate}
          />

        )} />

        {this.state.articles && <Route path='/article/:id/edit' render={(props) => {
          const { id } = props.match.params;

          const newArticle = this.state.articles.find(article => article.id === parseInt(id));

          return <UpdateArticle
            {...props}
            handleUpdate={this.handleUpdate}
            article={newArticle} />
        }}

        />}




        <Footer />

      </div>
    )
  }
}
































