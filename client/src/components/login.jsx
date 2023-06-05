import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './login.css';
export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async () => {
        
        try {
          const res = await axios.post(
            `http://localhost:2000/api/login`,
            {
              email: email,
              password: password
            },
            { withCredentials: true }
          );
          console.log(res.data)
          if(res.data === "no"){
            toast.error('No email id found', {
                position: "bottom-right"
            });
          }else if(res.data === "false"){
            toast.error('Incorrect password', {
                position: "bottom-right"
            });
          }else{
            navigate('/success', {state: {user: res.data}});
          }
        } catch (ex) {
          console.log(ex);
        }
      };

    return(
        <div className="login">
            <form>
                <h1 className="log-h h3 mb-3 fw-normal">Welcome, please login in to continue</h1>
                <div className="login-form-email form-floating">
                    <input required={true} onChange={(e) => setEmail(e.target.value)} type="email" className=" form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                 </div>
                <div className="form-floating login-form-pass">
                    <input required={true} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="false" className=" form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button onClick={e => {handleClick(e.preventDefault())}} className="login-btn w-10 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted fixed-bottom">&copy; Mayank 2022</p>
            </form>
            <p className="register-here">New to the site, Register <Link to='/register'>Here</Link></p>
            <ToastContainer/>
        </div>
    )
}