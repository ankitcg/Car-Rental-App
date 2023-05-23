import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/CarBooking.css'
// import axios from 'axios'

// import { Link } from 'react-router-dom';
import { useCarContext } from '../hooks/useCarContext';
import { Link } from 'react-router-dom';



const CarBooking = () => { 
    
    const [destination, setdestination] = useState([]);
   
    const [selectId, setSelectId] = useState([])
    const [type, setType] = useState([])


    const handleSelectChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSelectId(e.target.value)
        
    }
    const handleSelectTypeChange = (e)  =>  {
        e.preventDefault()
        console.log(e.target.value)
        setType(e.target.value)
        
    }


    const {cars, dispatch} = useCarContext()


    useEffect(() => {
       const fetchcars = async () => {
           const response = await fetch('/api/v1/car/carDetails')
           const destAndOrigin = await fetch('/api/v1/car/getbookingdetails')
           const json2 = await destAndOrigin.json()
           const json = await response.json()
           if(response.ok){
             dispatch({type : 'SET_CAR', payload : json})
           }
           setdestination(json2.users[json2.users.length-1]);
       }
       fetchcars()
     
    }, [dispatch])



    return (
        <div className='main-container'>
            {/* <Header /> */}
            {/* <hr /> */}
            <p> {destination.origin} &gt; {destination.destination} &gt; {destination.startdate}  -  {destination.enddate} <Link to='/quote'><button className='modify-btn'>Modify</button></Link> </p>


            <section className='thirdNavbar'>
                <label for='car-type'>Car-type</label>
                <select className='dropdown' id='car-type' onChange={handleSelectTypeChange}>
                    
                    <option>
                        XUV
                    </option>
                    <option>
                        UV
                    </option>
                    <option>all</option>
                </select>
                 
                 <label for='seater'>Seater</label>
                <select className='dropdown btns' id='cars' onChange={handleSelectChange}>
                    <option>all</option>
                    <option>
                        4 
                    </option>
                    <option>
                        6 
                    </option>
                    <option>
                        8 
                    </option>
                </select>

               
                {/* <button className='btns'>Setting</button> */}
                <button className='btns'>Milage</button>
                <button className='btns'>Other</button>
                

            </section>
            


            <section style={{ width: "100%" }} className='big-container'>

                {  cars && 

                    cars
                    .filter((item) => {
                          if((Number(selectId) === 4 || Number(selectId) === 6 || Number(selectId) === 8)){
                          return (Number(item.seater) === Number(selectId));
                          }
                          else{
                            return item.seater === 4 || item.seater === 6 || item.seater === 8 || item.seater === 3
                          }
                        
                    }) 
                    .filter((item) => {
                        if((type === 'XUV' || type === 'UV')){
                            return item.carType === type
                        }
                        else{
                            return item.carType === 'XUV' || item.carType === 'UV'
                        }
                    })
                    
                    .map((item) => {
                
                        return (
                            <div key={item._id} className='cards'>

                                <div className='image_box'>
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <p className='seat'>{item.seater} Persons</p>
                                <p className='seat'>{item.carType}</p>
                                <div className='details'>

                                    <h3>{item.name}</h3>
                                    <p className='rate'>{item.rateperkm}Rs/km</p>

                                </div>
                                <div className='fare-btn'>
                                    <p className='fare'>{item['fare']}</p>

                                    <Link to='/BookingDetails'><button className='btn'>{item.Book}</button></Link>
                                </div>

                            </div>
                        )
                    })
                }
            </section>
        </div >
    )
}
export default CarBooking