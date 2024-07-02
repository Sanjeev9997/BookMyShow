import React, { useCallback, useContext, useEffect } from 'react'
import { seats } from '../Data'
import '../Css/LastBookingDetails.css';
import BsContext from '../Context/BsContext';

const LastBookingDetails = () => {
  const context=useContext(BsContext)
  const {handleGetBooking,LastBookingDetails}=context
  useEffect(()=>{
    handleGetBooking()
    
  },[])
  return (
    <div className='last_booking_details_container'>
       <h2 className='last_booking_details_header'>Last Booking : </h2>
       {
        LastBookingDetails?(
          <>
           <div className='seats_container'>
        <p className='seats_header'>Seats:</p>
        <ul className='seats'>
            {seats.map((seat,index)=>{
                return(
                    <li className='seat_value' key={index}>
                        {seat}:{Number(LastBookingDetails.seats[seat])}
                    </li>
                )
            })}
        </ul>
        
       </div>
       <p className='slot' style={{textAlign:"left"}}>Slot:<span>{LastBookingDetails.slot}</span></p>
       <p className='movie'>Movie:<span>{LastBookingDetails.movie}</span></p>
          </>
        ):(
          <p className='no_previous'>No previous booking</p>
        )
       }
       
    </div>
  )
}

export default LastBookingDetails
