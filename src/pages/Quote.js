import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Quote.css';
// import { useCarContext } from '../hooks/useCarContext';

const Quote = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        startdate :  '',
        enddate : "",
        origin : "",
        destination : ""
    })
    const handleCheck =  async (e) =>{
        e.preventDefault()
        // const destAndOrigin = {...state}
        const response = await fetch('/api/v1/car/bookingdetails',{  
            method : "POST",
            body : JSON.stringify(state),
            headers : {
             'Content-Type' : 'application/json'
            }
         }) 
         const json = await response.json()
         if(response.ok){
            navigate('/CarBooking')
            setState(json.users);
   
          
         } 
    }
    
   
    return (
        <>
            <div className='box' >
                <div className='QuoteContainer'>
                    <div className='wrapper'>

                        <div className='quote'>
                            <h2>Main Quote for the website will be placed here to make understand</h2>

                        </div>

                        <div className='input'>
                            <label>
                                <input type="date" placeholder="startdate" onChange={(e) => setState({...state, startdate:e.target.value})}/>
                            </label>
                        </div>

                        <div className='input'>
                            <label>
                                <input type="date" placeholder=" enddate"  onChange={(e) => setState({...state, enddate:e.target.value})}/>
                            </label>
                        </div>
                        <div className='input'>
                            <label>
                                <input type="text" placeholder="Mumbai"  onChange={(e) => setState({...state, origin:e.target.value})}/>
                            </label>
                        </div>
                        <div className='input'>
                            <label>
                                <input type="text" placeholder="Delhi" onChange={(e) => setState({...state, destination:e.target.value})}/>
                            </label>
                        </div>

                       <button className='check-btn' onClick={handleCheck}>
                            check
                        </button>





                    </div>
                </div>

            </div>

        </>
    )
}

export default Quote