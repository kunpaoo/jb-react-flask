import Navbar from "../Navbar";
import Header from "../Header";
import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import sample_cust from "./Cust_list";

var Create_customer = () => {
    
      
 const [name, setName] = useState("");
 const [Address, setAddress] = useState("");
 const [Email, setEmail] = useState("");
 const [Contact, setContact] = useState("");
 const history = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  const ids = uuid();
  let uniqueId = ids.slice(0, 0);

  let a = name,
   b = Address,
   c = Email,
   d = Contact;

  sample_cust.push({
   id: uniqueId,
   Name: a,
   Address: b,
   Email: c,
   Contact: d,
  });
  history("/");



 };

 return (
  <div id="page-top" class="overflow-hidden">
   <div id="wrapper">
    <Navbar />
    <div
     id="wrapper container-fluid border border-black"
     style={{ height: "100vh", overflowY: "auto", width: "100%" }}>
     <div
      className="d-flex flex-column container-fluid"
      id="content-wrapper"
      style={{ padding: "0px" }}></div>
     <Header />
     <div
      style={{
       paddingTop: "0px",
       background: "#ffffff",
       paddingLeft: "0px",
       paddingRight: "0px",
       marginRight: "2px",
       marginTop: "-1px",
      }}>
      <div
       className="d-sm-flex justify-content-between align-items-center"
       id="head2"
       style={{
        paddingRight: "0px",
        marginRight: "0px",
        background: "#ffffff",
        boxShadow: "0px 0px 20px 1px",
       }}>
       <h3 className="text-dark mb-0" style={{ marginLeft: "24px" }}>
        Customer
       </h3>
      </div>
     </div>
     <div className="container-fluid ">
      {/* Start: Multi step form */}
      <div className="row py-4 ">
       <div className="w-100 row justify-content-center">
        <div className>
         <form action method="post" id="registration">
          <nav>
           <div
            className="nav nav-pills nav-fill navbar-dark bg-dark text-white"
            id="nav-tab"
            role="tablist">
            <a
             className="nav-link active"
             id="step1-tab"
             data-bs-toggle="tab"
             href="#step1">
             Profile
            </a>
            <a
             className="nav-link"
             id="step4-tab"
             data-bs-toggle="tab"
             href="#step2">
             Preview &amp; Save
            </a>
           </div>
          </nav>
          <div className="tab-content">
           {/* Step 1*/}
           <div
            className="tab-pane fade show active rounded bg-white p-4"
            id="step1">
            <h3 className="multisteps-form__title text-start">Profile</h3>
            <div className="form-row row-auto mt-2">
             <div className="row">
              <div className="col">
               <span>Name:&nbsp;</span>
               <input
                className="form-control"
                type="text"
                id="cust_name"
                required
                onChange={(e) => setName(e.target.value)}
               />
              </div>
             </div>
             <div className="row">
              <div className="row">
               <div className="col">
                <span>Defect Description:&nbsp;</span>
                <textarea
                 id="defect_descrip"
                 className="form-control"
                 style={{ height: "111px" }}
                 required
                 defaultValue={""}
                />
               </div>
              </div>
              <div id="product_row" className="row row-auto">
               <div className="col">
                <span>
                 Email:{" "}
                 <input
                  id="unit_name"
                  className="form-control"
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                 />
                </span>
               </div>
               <div className="col">
                <span>Contact:&nbsp;</span>
                <input
                 id="brand_name"
                 className="form-control"
                 type="text"
                 required
                 onChange={(e) => setName(e.target.value)}
                />
               </div>
              </div>
             </div>
            </div>
           </div>
           {/* Step 2*/}
           <div className="tab-pane fade rounded bg-white p-4" id="step2">
            <h4 className="text-start">Preview &amp; Save</h4>
            <div className>
             <div className="row">
              <div className="col">
               <span>Name of Customer:&nbsp;</span>
               <span value="Name_show"></span>
     
              </div>
              <div className="col">
               <span>Created:&nbsp;</span>
               <span>09/14/22/2023</span>
              </div>
             </div>
             <div className="row">
              <div className="col">
               <span>Job Id:&nbsp;</span>
               <span>32819-232</span>
              </div>
              <div className="col">
               <span>WITH WARRANTY</span>
              </div>
              <div className="col">
               <span>Bought in:&nbsp;</span>
               <span>OCCC</span>
              </div>
             </div>
             <div className="row">
              <div className="col">
               <span className="text-uppercase fw-bold">
                Defect Description:
               </span>
              </div>
             </div>
             <div className="row">
              <div className="col">
               <span>
                Peter Piper Pick a peck from pickled pepper a peck of peter
                piper pick if peter piper pick a peck of pickeled pepper where
                is the peck of pickled piper peter piper pick.
               </span>
              </div>
             </div>
             <div className="row">
              <div className="col">
               <span className="fw-bold">Parts Needed:</span>
               <div className="row">
                <div className="col">
                 <div className="row">
                  <div className="col">
                   <span>Item #1:&nbsp;</span>
                   <span>Battery</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Details:</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Brand:&nbsp;</span>
                   <span>Acer</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Unit:&nbsp;</span>
                   <span>th-w1-34</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Price:&nbsp;</span>
                   <span>$12</span>
                  </div>
                 </div>
                </div>
               </div>
               <div className="row">
                <div className="col">
                 <div className="row">
                  <div className="col">
                   <span>Item #1:&nbsp;</span>
                   <span>Battery</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Details:</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Brand:&nbsp;</span>
                   <span>Acer</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Unit:&nbsp;</span>
                   <span>th-w1-34</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Price:&nbsp;</span>
                   <span>$12</span>
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div className="col">
               <span />
               <span />
               <div className="row">
                <div className="col">
                 <div className="row">
                  <div className="col">
                   <span>Assigned Technician:&nbsp;</span>
                   <span>Mr. Tech K. One</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Total Amount to be Paid:&nbsp;</span>
                   <span>$34</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Estimated Completion:&nbsp;</span>
                   <span>09/14/2023</span>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
         </form>
         <div className="row justify-content-between">
          <div className="col-auto">
           <button
            type="button"
            className="btn btn-secondary"
            data-enchanter="previous">
            Previous
           </button>
          </div>
          <div className="col-auto">
           <button
            type="button"
            className="btn btn-primary"
            data-enchanter="next">
            Next
           </button>
           <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="btn btn-primary">
            Finish
           </button>
          </div>
         </div>
        </div>
       </div>
      </div>
      {/* End: Multi step form */}
     </div>
     <footer className="bg-white sticky-footer">
      <div className="container my-auto">
       <div className="text-center my-auto copyright">
        <span>Copyright © OCCC 2023</span>
       </div>
      </div>
     </footer>
    </div>
   </div>
  </div>
 );
};

export default Create_customer;
