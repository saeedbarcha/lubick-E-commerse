import React from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'
// import Navbar from '../components/Navbar'

const Routing = () => {
  
  
  return (
    <>

      <BrowserRouter>
      {/* <Navbar  module={module} setModule={setModule}/> */}
          <Routes>
              <Route path="/" element= 
              {<SignIn/>}>
          </Route>
              <Route path="/signin" element={<SignIn/>}></Route>
              
              <Route path="/signup" element={<SignUp/>}></Route>
             
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing