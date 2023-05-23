import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import { useAdmin } from '../hooks/useAdmin';
import '../styles/Form.css'


export  function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {admin, isLoading , error} = useAdmin()


    const handleSubmit = async (e) => {
      e.preventDefault()
      await admin(email, password)
    }

  return (
    <form className='login' onSubmit={handleSubmit}>

       <h3>Sign in your Admin account</h3>

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


export  function AdminLogin() {
  return (
    <div className='background'>
        <div className='home'>
        <div className='desc'>
            All you needed is a wheel in your Hand and four on Road.
            <div className='links'>
                <Link to='/'>User Signin</Link> &nbsp; &nbsp; &nbsp;
            </div>
        </div>
        <div className='form'><Form/></div>
        </div>
    </div>
  )
}


