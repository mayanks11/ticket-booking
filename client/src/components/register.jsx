import React, {useState} from "react";
import './register.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
export default function Register(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');

    const generateError = (error) => toast.error(error, {
        position: "bottom-right"
    })
    const handleClick = async() => {
         try {
           const res = await axios.post(`http://localhost:2000/api/user`,{name: name, email: email, mobile: mobile, age: age, password: password},{withCredentials: true})
           console.log(res);
           if(res.data.errors){
                const {name, password, email} = res.data.errors;
                if(name){
                    generateError(name)
                }else if (password){
                    generateError(password)
                }else if (email){
                    generateError(email)
                }
            }else{
                navigate('/success', {state: {user: res.data}});
            }
         } catch (error) {
           console.error(error);
         }
       }

    return(
        
        <div className="Register">
            <form>
                <h1 className="reg-h h3 mb-3 fw-normal">Please register to continue</h1>
                 <div className="register-form-lName form-floating">
                    <input onChange={(e) => {setName(e.target.value)}} value={name} type="text" className=" form-control" placeholder="Name"/>
                    <label htmlFor="floatingInput">Name</label>
                 </div>
                 <div className="register-form-email form-floating">
                    <input onChange={(e) => {setEmail(e.target.value)}} value={email} type="text" className=" form-control" placeholder="email"/>
                    <label htmlFor="floatingInput">Email</label>
                 </div>
                 <div className="register-form-mobile form-floating">
                    <input onChange={(e) => {setMobile(e.target.value)}} value={mobile} type="text" className=" form-control" placeholder="mobile"/>
                    <label htmlFor="floatingInput">Mobile No.</label>
                 </div>
                 <div className="register-form-age form-floating">
                    <input onChange={(e) => {setAge(e.target.value)}} value={age} type="text" className=" form-control" placeholder="age"/>
                    <label htmlFor="floatingInput">Age</label>
                 </div>
                <div className="form-floating register-form-pass">
                    <input onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" autoComplete="false" className=" form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button onClick={e => {handleClick(e.preventDefault())}} className="register-btn w-10 btn btn-lg btn-primary" type="submit">Register</button>
                <p className="reg-footer mt-5 mb-3 text-muted fixed-bottom">&copy; Mayank 2022</p>
                
            </form>
            <ToastContainer/>
            
        </div>
        
        
    )
}