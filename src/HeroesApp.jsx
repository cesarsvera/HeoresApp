import React, { useReducer } from 'react'
import { AppRouter } from './router/AppRouter'
import { AuhtContext } from './auth/AuhtContext.'
import { authReducer } from './auth/authReducer'

const init = ()=> {
  return JSON.parse(localStorage.getItem('user')) || 
          { logged: false};
}


export const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  return (
    <div>
      <AuhtContext.Provider value={{user, dispatch}}>

        <AppRouter/>
      </AuhtContext.Provider>
    </div>
  )
}
