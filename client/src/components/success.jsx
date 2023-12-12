import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './success.css';

export default function Success(){
    //const [bus, setBus] = useState([]);
    const[from, setFrom] = useState('');
    const[to, setTo] = useState('');
    const navigate = useLocation();
    const hello = useNavigate();
    //const[show, setShow] = useState(false);
    const[hit, setHit] = useState([]);
    const[bookCreate, setBookCreate] = useState('None');
    console.log(navigate.state)
    var user = navigate.state;
    
    useEffect(() => {
        
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
        //   console.log(res.data);
          
          if(res.data.length > 0){
            //setShow(true);
            setHit(res.data);

          }else{
            //setShow(false)
          }
        } catch (error) {
          console.log(error)
        }
      }

      const handleBook = (index) =>{
        

        console.log(index)
        
        alert('booked');
        hello('/booking', {state: {user: user, index: index, hit: hit}});
      }

    return(
        <div className="success">
            <h1 className="success-h">Welcome {navigate.state.user.name}</h1>
            <button className=" logout-btn btn btn-danger" onClick={() => {hello('/')}}>Logout</button>
            <hr className="success-hr"/>
            
            <button onChange={() => setBookCreate('Create')} className="btn btn-primary ride">Create Ride</button>
            <button onChange={() => setBookCreate('Book')} className="btn btn-primary ride">Book a ride</button>
        
            <hr className="success-hr"/>
            
            {
              (bookCreate === 'Create')?
              <h1>Select an option</h1>:
              (bookCreate === 'None')?
              <div class="container">
      <div class="py-5 text-center">
        
        <h2>Create Ride</h2>
        <p class="lead">Enter your origin, destination of your travel along with the time of travel and set the price</p>
      </div>

      <div class="row">
        
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Enter details</h4>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">From</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">To</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            

            <div class="mb-3">
              <label for="email">Car number and Type</label>
              <input type="email" class="form-control" id="email"/>
              <div class="invalid-feedback">
                Please enter a valid car no
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Date</label>
              <input type="text" class="form-control" id="address"  required/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Time</label>
              <input type="text" class="form-control" id="address2"/>
            </div>

            
            <hr class="mb-4"/>
            <button class="btn btn-primary btn-lg btn-block" type="submit">Create Ride</button>
          </form>
          
          
        </div>
      </div>  
      </div>  
              :(bookCreate === 'None')?
              <div class="container">
      <div class="py-5 text-center">
        
        <h2>Create Ride</h2>
        <p class="lead">Enter your origin, destination of your travel along with the time of travel and set the price</p>
      </div>

      <div class="row">
        
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Enter details</h4>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">From</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">To</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            

            <div class="mb-3">
              <label for="email">Car number and Type</label>
              <input type="email" class="form-control" id="email"/>
              <div class="invalid-feedback">
                Please enter a valid car no
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Date</label>
              <input type="text" class="form-control" id="address"  required/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Time</label>
              <input type="text" class="form-control" id="address2"/>
            </div>

            
            <hr class="mb-4"/>
            <button class="btn btn-primary btn-lg btn-block" type="submit">Create Ride</button>
          </form>
          
          
        </div>
      </div>  
      </div>:
              <p>hello</p>
            }
            
                
            
    </div>
    )
}