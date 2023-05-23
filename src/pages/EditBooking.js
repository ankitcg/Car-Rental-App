import React from 'react'
import "../styles/EditBooking.css";
import { Link } from 'react-router-dom';


const EditBooking = () => {
  return (

  
    <div className='booking-box'>

      <section className='left-box'>

        <div>
          <h3 className='title3' >Edit Booking Details</h3>
        </div>

        <div>
          <div className='top-div'>

            <div>
              <p>Car Name</p>
              <p>Car Number</p>

            </div>

            <div>
              <h3>Toyota Innova 6 seater</h3>
              <p>KA 37 BB 9999</p>

            </div>

            <div className='mini-3rd-div-img'>
              <img src='https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='photu' />
            </div>

          </div>

        </div>

        <hr />

        <div>
          <div className='mid-div'>

            <div>
              <p>Origin</p>
              <p>Destination</p>
              <p>Start Date</p>
              <p>End Date</p>
            </div>

            <div>
              <p>Banglore</p>
              <p>Mysore</p>
              <p>16-June-2019</p>
              <p>17-June-2019</p>
            </div>

            <div className='mini-3rd-div-img'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3618.3280597402077!2d84.04830495125768!3d24.92089173394706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x398db10689c9b687%3A0x451f59283c560da1!2sMahindra%20Bombay%20Automobiles!3m2!1d24.9195!2d84.0546!4m5!1s0x398db1cb49448895%3A0x3ba298dc09aa0d8e!2sKaimur%20Wildlife%20Sanctuary%20Gate%2C%20W29W%2BJJ2%2C%20Sikaria%2C%20Bihar%20821115!3m2!1d24.9198187!2d84.0463017!5e0!3m2!1sen!2sin!4v1679992531424!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='car'></iframe>
            </div>

          </div>

        </div>
        <hr />

        <div className='bottom-div'>

          <div>
            <p>Booking ID </p>
            <p>Booking Date</p>
            <p>Booking Time</p>

          </div>
          <div>
            <p>GOYSEB </p>
            <p>19aPRIL-2023</p>
            <p>8:00 PM</p>

          </div>

        </div>


        <Link to='/carbooking'><button className='cancel-btn'> Cancel </button></Link>

        
      </section>

      <section className='right-box'>

        <div>

          <h3 className='title2'>Payment Details</h3>
        </div>

        <div>
          <div className='price'>
            <p>Price per km</p>
            <p>20/km</p>
          </div>

          <div className='pricing'>
            <p>Pricing</p>
            <p>2000rs</p>
          </div>

          <div className='tax'>
            <p>Tax Charges</p>
            <p>50</p>
          </div>

          <hr />

          <div className='tax'>
            <p>Sub Total</p>
            <p>2050rs</p>
          </div>


          <Link to="/mybooking">
            <button className='proceed-btn'>Proceed</button>
          </Link>

        </div>

      </section>

    </div>


  )
}

export default EditBooking