import React, {Component} from 'react'
import Header from './Shared/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './Shared/Footer'
import { getMovies } from './Components/GetMovies'


export default class App extends Component {
  componentDidMount() {
    getMovies();
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
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
