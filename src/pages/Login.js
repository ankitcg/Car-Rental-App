import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import '../styles/Form.css'


export  function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, isLoading , error} = useLogin()


    const handleSubmit = async (e) => {
      e.preventDefault()
      await login(email, password)
    }

  return (
    <form className='login' onSubmit={handleSubmit}>

       <h3>Sign in your account</h3>

       <input type='email'
        onChange={(e) => setEmail(e.target.value)}
        value = {email}
        placeholder='phone/email'/>

       <input  type='password' 
       onChange={(e) => setPassword(e.target.value)}
       value={password}
       placeholder='password'/>
       
       <span>forgot password?</span>
       <div className='createAccount'><Link to='/signup'>create account</Link></div>
       <button disabled={isLoading}>Login</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}


export  function Login() {
  return (
    <div className='background'>
        <div className='home'>
        <div className='desc'>
        Book A Car On The Gooooo...
            <div className='links'>
                <Link to='/signup'>Register</Link> &nbsp; &nbsp; &nbsp;

                <Link to='/adminLogin'>Admin User</Link>
            </div>
        </div>
        <div className='form'><Form/></div>
        </div>
    </div>
  )
}


