import React from 'react'
import Header from './Shared/Header'
import Footer from './Shared/Footer'

export default function Main() {
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
        </main>
    )
}
