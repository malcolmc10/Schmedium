import React, { Component } from 'react'
import Header from './Shared/Header'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './Shared/Footer'
import { getArticles } from './Services/api-helper'
import { Link, Route, withRouter } from 'react-router-dom'


export default class App extends Component {
  state = {
    articles: null,
    userData: {
      username: '',
      password: '',
    },
    currentUser: null
  }

  componentDidMount = async () => {
    const articles = await getArticles()
    this.setState({
      articles
    })
  }

  render() {
    return (
      <div>
        <Header 
        currentUser={this.state.currentUser}
        handleLogout={this.handleLogout}
        />
        <div>
          {this.state.articles && this.state.articles.map(article => (
            <div className='article'>
              <Link to={`/article/${article.id}`}>
                <h5>{article.article}</h5>
                <img src={article.movie_id} />
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}































// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
