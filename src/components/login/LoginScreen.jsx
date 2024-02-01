import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuhtContext } from '../../auth/AuhtContext.';
import { types } from '../../types/type';

export const LoginScreen = () => {

  const {dispatch} = useContext(AuhtContext);
  const lastPath = localStorage.getItem('lastPath') || '/'

  const navigator = useNavigate();

  const handleLogin = ()=>{

    const login ={
      name: 'Cesar',
      logged: true
    }

    dispatch({
      type: types.login,
      payload: login
    })

    navigator(`${lastPath}`,{
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
