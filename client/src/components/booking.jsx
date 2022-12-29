import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import './booking.css';
export default function Booking(){
    const navigate = useLocation();
    const hello = useNavigate();
    // console.log(navigate);
    var booked = navigate.state.hit[navigate.state.index];
    // console.log(booked)
    const handelClick = () =>{
        alert(booked.contact);
    }
    return(
        
        <div className='booking'>
            <h1 className="success-h" style={{left: "300px"}}>Welcome {navigate.state.user.user.name}, Current Bookings</h1>
            <button className=" logout-btn btn btn-danger" onClick={() => {hello('/')}}>Logout</button>
            <hr className="success-hr"/>
            <div className="card" style={{width: "100%", marginTop: "50px"}}>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Seat no {booked.avaiableSeats - 1}</h6>
                <h5 className="card-title">From {booked.from} To {booked.to}</h5>
                <p className="card-text">Arrival time: {booked.arrivalTime} hrs</p>
                <p className="card-text">Reaching time: {booked.departureTime} hrs</p>
                
                <button onClick={(e) => handelClick(e.preventDefault())} className="btn btn-primary">Contact</button>
            </div>
            </div>
        </div>
    )
}