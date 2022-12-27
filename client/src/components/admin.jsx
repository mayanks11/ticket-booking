import React, { useState } from "react";
import './admin.css';
import axios from "axios";
export default function Admin(){
    const [from, setFrom] = useState('');    
    const [to, setTo] = useState('');
    const [seats, setSeats] = useState('');
    const [availSeat, setAvailSeat] = useState('');
    const [dep, setDep] = useState('');
    const [arr, setArr] = useState('');
    const [id, setId] = useState('');
    const [contact, setContact] = useState('');
    const [delId, setDel] = useState('');
    const handleClick = async() => {
        try {
          const res = await axios.post(`http://localhost:2000/api/bus`,{from: from, to: to, seats: seats, avaiableSeats: availSeat, busId: id, contact: contact, departureTime: dep, arrivalTime: arr})
          console.log(res);
          alert('Bus added');
          setFrom('');
          setTo('');
          setSeats('');
          setAvailSeat('');
          setDep('');
          setArr('');
          setId('');
          setContact('');

        } catch (error) {
          console.error(error);
        }
      }
      const handleDel = async (id) => {
        
        
        try {
          const res = await axios.delete(`http://localhost:2000/api/bus/${id}`)
          console.log(res.data)
          alert('Bus Deleted');
          setDel('');

        } catch (error) {
          console.log(error)
        }
        
      }
    return(
        <div className="admin">
            <h1 >Admin</h1>
            <form>
                <h1 className="admin-h1 h3 mb-3 fw-normal">Add bus details</h1>
                 <div className="admin-form-from form-floating">
                    <input value={from} onChange={(e) => setFrom(e.target.value)} type="text" className=" form-control" placeholder="From"/>
                    <label htmlFor="floatingInput">From</label>
                 </div>
                 <div className="admin-form-to form-floating">
                    <input value={to} onChange={(e) => setTo(e.target.value)} type="text" className=" form-control" placeholder="to"/>
                    <label htmlFor="floatingInput">To</label>
                 </div>
                 <div className="admin-form-seats form-floating">
                    <input value={seats} onChange={(e) => setSeats(e.target.value)} type="text" className=" form-control" placeholder="seats"/>
                    <label htmlFor="floatingInput">Seats</label>
                 </div>
                 <div className="admin-form-avail-seat form-floating">
                    <input value={availSeat} onChange={(e) => setAvailSeat(e.target.value)} type="text" className=" form-control" placeholder="available seats"/>
                    <label htmlFor="floatingInput">Available Seats</label>
                 </div>
                <div className="form-floating admin-form-departure">
                    <input value={dep} onChange={(e) => setDep(e.target.value)} type="text"  className=" form-control" placeholder="departure time"/>
                    <label htmlFor="floatingPassword">Departure Time</label>
                </div>
                <div className="form-floating admin-form-arrival">
                    <input value={arr} onChange={(e) => setArr(e.target.value)} type="text"  className=" form-control" placeholder="arrival time"/>
                    <label htmlFor="floatingPassword">Arrival Time</label>
                </div>
                <div className="form-floating admin-form-id">
                    <input value={id} onChange={(e) => setId(e.target.value)} type="text"  className=" form-control" placeholder="bus id"/>
                    <label htmlFor="floatingPassword">Bus Id</label>
                </div>
                <div className="form-floating admin-form-contact">
                    <input value={contact} onChange={(e) => setContact(e.target.value)} type="text"  className=" form-control" placeholder="contact"/>
                    <label htmlFor="floatingPassword">Contact</label>
                </div>

                <button onClick={e => {handleClick(e.preventDefault())}} className="admin-btn w-10 btn btn-lg btn-primary" type="submit">Add</button>
                {/* <p className="reg-footer mt-5 mb-3 text-muted fixed-bottom">&copy; Mayank 2022</p> */}
                
            </form>
            <form>
                <h1 className="admin-del-h1 h3 mb-3 fw-normal">Delete Bus</h1>
                 <div className="admin-form-delete form-floating">
                    <input value={delId} onChange={(e) => setDel(e.target.value)} type="text" className=" form-control" placeholder="id"/>
                    <label htmlFor="floatingInput">Bus Id</label>
                 </div>
                 

                <button onClick={(e) => handleDel(delId,e.preventDefault(),)} className="admin-del-btn w-10 btn btn-lg btn-primary" type="submit">Delete</button>
                {/* <p className="reg-footer mt-5 mb-3 text-muted fixed-bottom">&copy; Mayank 2022</p> */}
                
            </form>
        </div>
    )
}