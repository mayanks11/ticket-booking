import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './success.css';
export default function Success(){
    const [bus, setBus] = useState([]);
    const[from, setFrom] = useState('');
    const[to, setTo] = useState('');
    const navigate = useLocation();
    const hello = useNavigate();
    const[show, setShow] = useState(false);
    const[hit, setHit] = useState([]);
    console.log(navigate.state)
    useEffect(() => {
        async function getEntry(){
            try {
                const res = await axios.get("http://localhost:2000/api/buses")
                setBus(res.data);
            } catch (error) {console.log(error)}
        }
        getEntry()
    },[])
    
    const Search=(e)=>{

        setFrom(e.target.value);
       
    }
    const To=(e)=>{
        setTo(e.target.value);
    }
    const handleSearch = async () => {
        try {
          const res = await axios.post(`http://localhost:2000/api/search`,{from: from, to: to})
          console.log(res.data);
          
          if(res.data.length > 0){
            setShow(true);
            setHit(res.data);
          }else{
            setShow(false)
          }
        } catch (error) {
          console.log(error)
        }
      }

    return(
        <div className="success">
            <h1 className="success-h">Welcome {navigate.state.user.name}</h1>
            <button className=" logout-btn btn btn-danger" onClick={() => {hello('/')}}>Logout</button>
            <hr className="success-hr"/>
            
            <form className="form">
                <h1 className="suc-h h3 mb-3 fw-normal">Enter From and To</h1>
                <div className="from-selector">
                <div className="search-btn"><div><h5>From</h5> </div></div>
                    <select onChange={(e)=>Search(e)} name="state" id="state" class="suc-form form-control bottom ">
                    <option>*</option>
                    {
        
                        bus.map((buses => 
                            <option onChange={(e)=>Search(e)}>{buses.from}</option>
                        ))
                    }
                                
                    </select>
                </div>
                
                <div className="to-selector">
                <div className="search-btn"><div><h5>To</h5> </div></div>
                    <select onChange={(e)=>To(e)} name="state" id="state" class="suc-form form-control bottom ">
                    <option>*</option>
                    {
                        
                        bus.map((buses => 
                            <option>{buses.to}</option>
                        ))
                    }
                                
                    </select>
                </div>

                <button onClick={e => {handleSearch(e.preventDefault())}} className="suc-btn w-10 btn btn-lg btn-primary" type="submit">Search</button>
                <p className="suc-footer mt-5 mb-3 text-muted fixed-bottom">&copy; Mayank 2022</p>
                
            </form>
        
            <hr className="success-hr"/>
            
            {(show === true) ?  
            hit.map((buses => 
            <>
            <h1>Buses</h1>
                <div className="col-lg-3 col-md-6">  
          <div className="card">
          <div className="card-body">
            <h5 className="card-title">Bus: {buses.busId}</h5>
            <p className="card-text">Seats: {buses.seats}</p>
            <p className="card-text">Available Seats: {buses.avaiableSeats}</p>
            <button class="book-btn btn btn-primary" >Book</button>
            <button class="book-btn btn btn-primary" >Contact</button>
          </div>
        
          </div>
          </div>
          </>
            ))
                
                        :
                        <h5>  Not Found</h5> 
                }
            
                
            
        </div>
    )
}