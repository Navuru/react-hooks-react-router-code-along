import React from "react";
// import ReactDOM from "react-dom";
import {Route,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Signup from "./Signup";
import NavBar from "./NavBar";
// import Login from "./Login";
import Messages from "./Messages"
// 


function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/* <Route path="/login" element={<Login/>}/> */}
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/messages" element={<Messages/>}/>
                
            </Routes>
        </div>
    );
  }

  export default App
  