import Navbar from "../Navbar";
import Header from "../Header";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import sample_cust from "./Cust_list";
import { Tab, Tabs } from "react-bootstrap";

var EditCustomer = () => {
 const [activeStep, setActiveStep] = useState(0);

 const handleTabClick = (step) => {
  setActiveStep(step);
 };

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
  <>
   <div id="page-top" class="overflow-hidden">
    <div id="wrapper">
     <Navbar />
     <div className="h-100 w-100">
      <Header />
      <div>
       <div>
        <div className="d-sm-flex justify-content-between align-items-center">
         <h3 className="text-dark mb-0 ms-3">Edit Customer</h3>
        </div>
       </div>
       <div className="container-fluid">
        {/* Start: Multi step form */}
        <div className="row py-4 ">
         <div className="w-100 row ms-1 justify-content-center">
          <Tabs
           className="nav nav-pills nav-fill bg-dark text-white p-0"
           activeKey={activeStep}
           onSelect={handleTabClick}
           id="step-tabs"
           role="tablist">
           {/* Step 1*/}
           <Tab
            className="tab-pane fade show rounded bg-white p-4"
            id="step1"
            eventKey={0}
            title="Profile">
            <h3 className="multisteps-form__title text-start">Profile</h3>
            <div className="form-row row-auto mt-2">
             <div className="row">
              <div className="col">
               <span>Name:&nbsp;</span>
               <input className="form-control" type="text" required />
              </div>
             </div>
             <div className="row">
              <div className="row">
               <div className="col">
                <span>Address:&nbsp;</span>
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
                 <input id="unit_name" className="form-control" type="text" />
                </span>
               </div>
               <div className="col">
                <span>Contact:&nbsp;</span>
                <input id="brand_name" className="form-control" type="text" />
               </div>
              </div>
             </div>
            </div>
           </Tab>
           {/* Step 2*/}
           <Tab
            className="tab-pane fade rounded bg-white p-4"
            id="step2"
            eventKey={1}
            title="Preview & Save">
            <h4 className="text-start">Preview &amp; Save</h4>
           </Tab>
          </Tabs>
          <div>
           {activeStep > 0 && (
            <button
             className="btn btn-secondary mt-3 float-start"
             onClick={() => setActiveStep(activeStep - 1)}>
             Previous
            </button>
           )}
           {activeStep < 1 && (
            <button
             className="btn btn-primary mt-3 float-end"
             onClick={() => setActiveStep(activeStep + 1)}>
             Next
            </button>
           )}
           {activeStep >= 1 && (
            <button className="btn btn-success mt-3 float-end">Update</button>
           )}
          </div>
         </div>
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
  </>
 );
};

export default EditCustomer;
