
import React, { useEffect, useState } from 'react';
import "../styles/Admin.css";
// import { useNavigate } from 'react-router-dom'
import EditCar from './EditCar'
import { Link } from 'react-router-dom';
import { useAdminCarContext } from '../hooks/useAdminCarContext';



const Admin = () => {
    const [cardata,setcardata] = useState(false);
    // const [data,setdata] = useState([])
    const [singlecar,setsinglecar] = useState({
        carname:"", type:"", model:"", milage:"", perkm:"", description:"", cardetails:"", details:"",_id:""
      })
    const {cars, dispatch} = useAdminCarContext()
    useEffect(() => {
        const fetchcars = async () => {
            const response = await fetch('/carRental/car/adminpageCars')
            const json = await response.json()
            if(response.ok){
              dispatch({type : 'SET_ADMIN_CAR', payload : json})
            }
        }
        fetchcars()
     }, [dispatch])
    // const navigate = useNavigate();
    const EditCarDetailPage =(Item)=>{
        const {carname, type, model, milage, perkm, description, cardetails, details,_id} = Item
       setsinglecar({
        carname:carname, type:type, model:milage, milage, perkm:perkm, description:description, cardetails:description, details:details,_id:_id
       })
       setcardata(true)
       }
    return (
        <>
        {!cardata &&
    <div>
        <h3><b>welcome admin</b></h3>
               <div className='acd'>
               <h3 className='cars'><b>cars</b></h3>
               <Link to="/addcar"><button className='ac'>Add car</button></Link>
            </div>
        <section style={{ width: "100vw" }}>
            {/* addding functionality to get images */}
             { cars && cars.map((item, index) => {
                return(
                        <div key={index} className='cards'>
                            <div className='image_box'>
                            <img src={item.image} alt={item.name}
                               onClick={()=>{EditCarDetailPage(item)}}
                               />
                            </div>
                            <p className='seat'>{item.type} seater</p>
                            <div className='details'>
                                <h3>{item.carname}</h3>
                                <p className='rate'>{item.perkm}Rs/km</p>
                            </div>
                            <div>
                                <p className='availableDate'>available date:{item.availablefrom} to {item.availabletill}</p>
                            </div>
                        </div>
                )}
             )
                }
        </section>
    </div >
}
    {
        cardata &&
        <EditCar singlecar={singlecar}/>
    }
        </>
    )
}
export default Admin;
