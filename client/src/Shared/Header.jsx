import React from 'react'
import logo from '../assets/logo.png'
import hamburgerIcon from '../assets/zondicons/menu.svg'


export default function Header() {
    

  return (
    <div>
      <ul>

        <li>
          <a href="/">My Articles</a>
        </li>

        <li>
          <a href="/">Blogiosa</a>
        </li>

        <li>
          <a href="/"><img src={logo} alt="logo" />
          </a>
        </li>

        <li>
          <a href="/">About</a>
        </li>


        <li>
          <a href="/">Log In</a>
        </li>

      </ul>
    </div>
  )
}