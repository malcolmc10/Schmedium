import React from 'react'
import logo from '../assets/logo.png'




export default function Header(props) {
    

  return (
    <div id="header">
      <ul className="flex sm:justify-evenly items-center py-4 text-xl ttext-black justify-between">
        

        <li className="hidden sm:block">
          <a href="/" className="text-black">My Articles</a>
        </li>
        <li className="hidden sm:block">
          <a href="/">Sorting Hat</a>
        </li>

        <li className="hidden sm:block">
          <a href="/">Blogiosa</a>
        </li>

        <li>
          <a href="/"><img src={logo} alt="logo" className="w-0" />
          </a>
        </li>

        <li className="hidden sm:block">
          <a href="/">About</a>
        </li>


        <li className="hidden sm:block">
          <a href="/" className="text-black">Log In</a>
        </li>


      </ul>
      
    </div>
  )
}