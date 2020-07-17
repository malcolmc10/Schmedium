import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import { getAllArticles, postArticle, putArticle, deleteArticle } from '../services/articles'


export default class Main extends Component {
    state = {
      articles: [],
      movies: []
    }
   
    componentDidMount() {
      this.fetchArticles();
      this.fetchMovies();
    }
  
    fetchMovies = async () => {
      const flavors = await getMovies();
      this.setState({ movies });
    }
    fetchArticles = async () => {
      const articles = await getAllArticles();
      this.setState({ articles });
    }
  
    handleArticleCreate = async (articleData) => {
      const newArticle = await postArticle(articleData);
      this.setState(prevState => ({
        articles: [...prevState.articles, newArticle]
      }))
    }
  
    handleArticleUpdate = async (id, articleData) => {
      const newArticle = await putArticle(id, articleData);
      this.setState(prevState => ({
        articles: prevState.articles.map(article => article.id === parseInt(id) ? newArticle : article)
      }))
    }
  
    handleArticleDelete = async (id) => {
      await deleteArticle(id);
      this.setState(prevState => ({
        articles: prevState.articles.filter(article => article.id !== id)
      }))
    }
  
    render() {
      const { handleLogin, handleRegister } = this.props;
      return (
          
        <main>
            
          <Route path='/login' render={(props) => (
            <Login
              {...props}
              handleLogin={handleLogin}
            />
          )} />
          <Route path='/register' render={(props) => (
            <Register
              {...props}
              handleRegister={handleRegister}
            />
          )} />
          <Route path='/articles' render={() => (
            <ShowArticles
              flavors={this.state.articles}
            />
          )} />
          <Route exact path='/movies' render={() => (
            <ShowMovies
              foods={this.state.Movies}
              handleMovieDelete={this.handleMovieDelete}
            />
          )} />
          <Route path='/articles/new' render={(props) => (
            <CreateArticle
              {...props}
              handleArticleCreate={this.handleArticleCreate}
            />
          )} />
          <Route path='/articles/:id/edit' render={(props) => {
            const { id } = props.match.params;
            const articleItem = this.state.articles.find(article => article.id === parseInt(id));
            return <UpdateArticle
              {...props}
              handleArticleUpdate={this.handleArticleUpdate}
              ArticleItem={articleItem}
              id={id}
            />
          }} />
          <Route path='/articles/:id' render={(props) => {
            const { id } = props.match.params;
            return <ArticleItem
              id={id}
              articles={this.state.articles}
            />
          }} />
          
        </main>
      )
    }
  }
