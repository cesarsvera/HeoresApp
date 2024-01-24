import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = ({history}) => {

  const navigator = useNavigate();

  const handleLogin = ()=>{
    navigator('/',{
      replace: true
    })
  }


  return (
    <div>
      <h1>Login</h1>
      <hr/>

      <button
      className='btn btn-primary'
      onClick={handleLogin}
      >
        Login
      </button>

    </div>
  )
}
