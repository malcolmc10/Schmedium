import React from 'react'
import logo from '../assets/logo.png'
import hamburgerIcon from '../assets/zondicons/menu.svg'



export default function Header(props) {


  return (
    <div id="header" className="">
      <ul className="flex sm:justify-evenly items-center py-4 text-xl bg-gray-200 text-red-900 justify-between shadow-md">
      <li className="sm:hidden">
          <a href="/" >
            <img src={hamburgerIcon} alt="hamburger icon" className="w-4" />
          </a>
        </li>

        <li className="hidden sm:block">
          <a href="/" className="text-red-900">My Articles</a>
        </li>

        <li className="hidden sm:block">
          <a href="/create">Write a Post</a>
        </li>

        <li>
          <a href="/"><img src={logo} alt="logo" className="w-40" />
          </a>
        </li>

        <li className="hidden sm:block">
          <a href="#about">About</a>
        </li>

        <li className="hidden sm:block">
          <a href="/Register">Register</a>
        </li>

        <li className="hidden sm:block">
          <a href="/login" className="text-yellow-500 font-bold">Log In</a>
        </li>


      </ul>

      <form>
        
      </form>

    </div>
  )
}