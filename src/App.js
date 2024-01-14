import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";


export default function app(){

  return <BrowserRouter>
  <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/singIn" element={<SignIn/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/singnUp" element={<SignUp/>}/>

<Route path=""/>

  </Routes>
  
  </BrowserRouter>
    
  
}


