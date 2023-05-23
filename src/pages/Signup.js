import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';
import '../styles/Form.css'

 

//Form things
export  function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [error1 , setError1] = useState('')
    const {signup, isloading, error} = useSignup()
 
    
    // HandleSubmit For submit the form 
    const handleSubmit = async (e) => {
        e.preventDefault()


        //Checking some Validations
        if(!contact){setError1('All fields are mandatory');return}
        if(password !== confirmPassword){
          setError1("Passwords doesn't match")
          return
        }else{
          setError1('')
        }
        

        //After checking validation then and only then user can signup
        await signup(email, password)

    }
    


  return (

    //Signup Form
    <form className='login'  onSubmit={handleSubmit}>

       <h3>Register in your account</h3>
       
       
       {error1 && <div className='error'>{error1}</div>}
       {error && <div className='error'>{error}</div>}

       <input type='text'
        onChange={(e) => setName(e.target.value)}
        value = {name}
        placeholder='name'/>

       <input type='email'
        onChange={(e) => setEmail(e.target.value)}
        value = {email}
        placeholder='email'/>

       <input type='number'
        onChange={(e) => setContact(e.target.value)}
        value = {contact}
        placeholder='contact'/>

       <input  type='password' 
       onChange={(e) => setPassword(e.target.value)}
       value={password}
       placeholder='password'/>

       <input type='password'
        onChange={(e) => setconfirmPassword(e.target.value)}
        value = {confirmPassword}
        placeholder='confirm password'/>
        
        <div><Link to='/'>Signin</Link></div>
        <button disabled={isloading}>Register</button>
        
    </form>
  )
}

 

//Signup page
export  function Signup() {
  return (
    <div className='background'>
        <div className='home'>
        <div className='desc'>
           Book A Car On The Gooooo...
            
        </div>
        <div className='form'><Form/></div>
        </div>
    </div>
  )
}


