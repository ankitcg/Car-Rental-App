import React from 'react'

import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {
  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handlelogout = () => {
    logout() 
 }
  return (
    <header>
        <div className='container'>
                <Link to="/">
                    <h1>LOGO</h1>
                </Link>
                <nav>
                      
                      {user && (
                        <>
                        <div className='carBooking'>
                        <Link to='/BookingDetails'>My bookings</Link>
                        </div>
                        <div>
                        <button onClick={handlelogout}>Log out</button>
                        </div>
                        </>
                    )}
                </nav>
            </div>
    </header>
  )
}
