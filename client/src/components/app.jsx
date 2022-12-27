import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./login";
import Register from "./register";
import Success from "./success";
import 'react-toastify/dist/ReactToastify.css';
import Admin from "./admin";
function App(){
    return(
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/success" element={<Success/>}/>
                    <Route exact path = '/admin' element={<Admin/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default App;