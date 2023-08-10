import Navbar from "../Navbar";
import Header from "../Header";
import { useState, useEffect } from "react";

const CustomerAdd = () => {





    return ( 


    <div id="page-top" class="overflow-hidden">
    <div id="wrapper">
    
    <Navbar/>
    
    

  {/* MAIN CONTENT */}
    <div id="wrapper container-fluid border border-black" style={{height: '100vh', overflowY: 'auto', width: '100%'}}>
    <div className="d-flex flex-column container-fluid" id="content-wrapper" style={{padding: '0px'}}>
        
     <Header/>





        <div className="d-flex flex-column align-items-center justify-content-center">
        <form className="d-flex flex-column align-items-center justify-content-center" style={{gap:2}} action method="POST">        
            <label>Name</label>
            <input type="text" name="name" />
            <label>Address</label>
            <input type="text" name="address" />
            <label>Phone</label>
            <input type="text" name="phone" />
            <input className="border border-black mt-3" type="submit" />
        </form>
        </div>

        </div></div></div></div>

     );
}
 
export default CustomerAdd;