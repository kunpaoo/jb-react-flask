import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";

class Bills_Payments extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   currentStep: 1,
  };
 }

 handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({
   [name]: value,
  });
 };

 handleSubmit = (event) => {
  event.preventDefault();
 };

 _next = () => {
  let currentStep = this.state.currentStep;
  currentStep =
   currentStep >= 2
    ? currentStep >= 3
      ? 4
      : currentStep + 1
    : currentStep + 1;
  this.setState({
   currentStep: currentStep,
  });
 };

 _prev = () => {
  let currentStep = this.state.currentStep;
  currentStep = currentStep <= 1 ? 1 : currentStep - 1;
  this.setState({
   currentStep: currentStep,
  });
 };

 /*
  * the functions for our button
  */
 previousButton() {
  let currentStep = this.state.currentStep;
  if (currentStep !== 1) {
   return (
    <button className="btn btn-secondary" type="button" onClick={this._prev}>
     Previous
    </button>
   );
  }
  return null;
 }

 nextButton() {
  let currentStep = this.state.currentStep;
  if (currentStep < 4) {
   return (
    <button
     className="btn btn-primary float-right"
     type="button"
     onClick={this._next}>
     Next
    </button>
   );
  }
  return null;
 }

 render() {
  return (
   <>
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
         className="text-start"
         style={{
          background: "#ffffff",
          boxShadow: "6px 0px 20px",
          height: "53.8203px",
         }}>
         <h3
          className="text-dark mb-0"
          style={{ marginLeft: "24px", paddingTop: "9px" }}>
          Jobs &gt;<span>Text</span>
         </h3>
        </div>
       </div>
       <div className="container-fluid">
        <div />

        {/* Start: Multi step form */}

        <div className="row py-4 ">
         <div className="w-100 row justify-content-center">
          <div className>
           <form onSubmit={this.handleSubmit}>
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
               Job Details
              </a>
              <a
               className="nav-link"
               id="step2-tab"
               data-bs-toggle="tab"
               href="#step2">
               Assign Employee
              </a>
              <a
               className="nav-link"
               id="step3-tab"
               data-bs-toggle="tab"
               href="#step3">
               Breakdown of Fees
              </a>
              <a
               className="nav-link"
               id="step4-tab"
               data-bs-toggle="tab"
               href="#step4">
               Preview &amp; Save
              </a>
             </div>
            </nav>

            <div className="tab-content">
             {/* Step 1*/}
             <div
              className="tab-pane fade show active rounded bg-white p-4"
              id="step1">
              <h3 className="multisteps-form__title text-start">Job Details</h3>
              <Step1
               currentStep={this.state.currentStep}
               handleChange={this.handleChange}
              />
             </div>

             {/* Step 2*/}
             <div className="tab-pane fade rounded bg-white p-4" id="step2">
              <h4>Assign Employee</h4>
              <Step2
               currentStep={this.state.currentStep}
               handleChange={this.handleChange}
              />

              {/* Start: Multiple Input Select Pills */}
             </div>

             {/* Step 3*/}
             <div className="tab-pane fade rounded bg-white p-4" id="step3">
              <h4 className="text-start">Breakdown of Fees</h4>
              <Step3
               currentStep={this.state.currentStep}
               handleChange={this.handleChange}
              />
             </div>

             {/* Step 4*/}
             <div className="tab-pane fade rounded bg-white p-4" id="step4">
              <h4 className="text-start">Preview &amp; Save</h4>
              <div id="prev" className>
               <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
               />
              </div>
             </div>
            </div>
           </form>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <p>Step {this.state.currentStep} </p>
    <div className="row">
     {this.previousButton()}
     {this.nextButton()}
    </div>
   </>
  );
 }
}

function Step1(props) {
 var dat = {};

 // add values to preview

 const preview = (key, radio) => {
  console.log(document.getElementsByName(key)[0].checked);
  let value = radio
   ? document.getElementsByName(key)[0].checked
     ? "yes"
     : "no"
   : document.getElementById(key).value;
  value != null ? (dat[key] = value) : (dat[key] = "loading");

  console.log(dat);
 };

 // next buttons

 //   itemize units

 const [numunits, setUnits] = useState(1);
 const [newUnits, setNewUnits] = useState([]);

 // Remove defected Inputs
 function RemoveInputs() {
  var DefectInputs = document.getElementById("defectsinfo");
  DefectInputs.remove();
 }

 function add_more() {
  setUnits(numunits + 1);
  console.log(numunits);
  var units = numunits + 1;
  const newDiv = (
   <>
    <div className="row row-auto" id="defectsinfo" style={{ margin: "6pt" }}>
     <div
      id={"product_row" + { units }}
      className="row row-auto mt-2 p-4 "
      style={{ background: "#ebf0ec" }}>
      <div class="col">
       <span>
        Unit name:{" "}
        <input
         id="unit_name"
         name={"unit_name" + { units }}
         class="form-control"
         type="text"
        />
       </span>
      </div>
      <div class="col">
       <span>Brand:&nbsp;</span>
       <input
        id="brand_name"
        name={"brand" + { units }}
        class="form-control"
        type="text"
       />
      </div>
     </div>
     <div class="row p-4" style={{ background: "#ebf0ec" }}>
      <div class="col-xl-5 col-xxl-7">
       <span>Defect Description:&nbsp;</span>
       <textarea
        name={"desc" + { units }}
        id="defect_descrip"
        class="form-control"
        style={{ height: "111px;" }}
        required></textarea>
      </div>
      <div class="col">
       <div class="row">
        <div class="col">
         <span>Product from OCCC?:</span>
         <div class="row">
          <div class="col">
           <div class="form-check">
            <input
             value="yes"
             name={"returning" + { units }}
             class="form-check-input"
             type="radio"
             id="formCheck-1"
            />
            <label class="form-check-label" for="formCheck-1">
             Yes
            </label>
           </div>
          </div>
          <div class="col">
           <div class="form-check">
            <input
             value="no"
             name={"returning" + { units }}
             class="form-check-input"
             type="radio"
             id="formCheck-2"
            />
            <label class="form-check-label" for="formCheck-2">
             No
            </label>
           </div>
          </div>
         </div>
        </div>
        <div class="col">
         <span>With warranty?</span>
         <div class="row">
          <div class="col">
           <div class="form-check">
            <input
             value="yes"
             name={"warranty" + { units }}
             class="form-check-input"
             type="radio"
             id="formCheck-3"
            />
            <label class="form-check-label" for="formCheck-3">
             Yes
            </label>
           </div>
          </div>
          <div class="col">
           <div class="form-check">
            <input
             value="no"
             name={"warranty" + { units }}
             class="form-check-input"
             type="radio"
             id="formCheck-4"
            />
            <label class="form-check-label" for="formCheck-4">
             No
            </label>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="row">
        <div class="col">
         <span>If not from OCCC, where?</span>
         <textarea class="form-control" style={{ height: "31px" }}></textarea>
        </div>
       </div>
      </div>
     </div>
     <a
      name=""
      id=""
      onClick={RemoveInputs}
      className="btn btn-danger"
      href="#"
      role="button">
      Remove
     </a>
    </div>
   </>
  );

  // <a
  //  name=""
  //  className="btn btn-danger"
  //  id=""
  //  href="#"
  //  role="button"
  //  onClick={RemoveInputs}>
  //  <i class="fa fa-trash-o" aria-hidden="true"></i>
  // </a>;
  setNewUnits([...newUnits, newDiv]);
 }

 // remove parts

 // adding parts needed
 const [parts, setParts] = useState([]);
 const [numparts, setNumParts] = useState(1);

 // remove parts
 function RemovePartsInput() {
  var PartsInput = document.getElementById("Parts");
  PartsInput.remove();
 }

 function AddInput() {
  setNumParts(numparts + 1);
  console.log(numparts);
  var p = numparts + 1;
  var item_name = "item_name" + p;
  var brand = "item_brand" + p;
  var est_price = "est_price" + p;
  const newPart = (
   <div className="row row-auto mt-2" id="Parts" key={parts.length}>
    <div className="col">
     <input
      id="item_name"
      name={item_name}
      type="text"
      className="form-control"
      placeholder="Enter name of part"
     />
    </div>

    <div className="col">
     <input
      id="brand_name"
      name={brand}
      type="text"
      className="form-control"
      placeholder="Enter brand"
     />
    </div>
    <div className="col">
     <input
      id="est_price"
      name={est_price}
      type="text"
      className="form-control"
      placeholder="Enter estimated price"
     />
    </div>
    <div className="col">
     <a
      id=""
      class="btn btn-primary btn-danger"
      role="button"
      onClick={RemovePartsInput}>
      <i class="fa fa-trash" aria-hidden="true"></i>
     </a>
    </div>
   </div>
  );

  setParts([...parts, newPart]);
 }

 const navigate = useNavigate();
 const [formData, setFormData] = useState();

 //function for trashcan

 // get data from forms

 const getData = () => {
  var formm = new FormData(document.querySelector("form"));
  var dat = {
   order_date: formm.get("order_date"),
   cust_name: formm.get("cust_name"),
   job_name: formm.get("job_name"),
   est_completion: formm.get("est_completion"),
   numunits: numunits,
   num_of_parts: numparts,
  };

  console.log(typeof dat.order_date);

  var u = [dat];

  for (var x = 1; x <= numunits; x++) {
   u.push({
    unit_name: dat["unit_name" + x],
    brand: dat["brand" + x],
    desc: dat["desc" + x],
    returning: dat["returning" + x],
    warranty: dat["warranty" + x],
   });
   // console.log(numunits);
   // dat["unit_name"+x] = formm.get("unit_name"+x);
   // dat["brand"+x] = formm.get("brand"+x);
   // dat["desc"+x] = formm.get("desc"+x);
   // dat["returning"+x] = formm.get("returning"+x);
   // dat["warranty"+x] = formm.get("warranty"+x);
  }

  for (x = 1; x <= numparts; x++) {
   // console.log(numparts);
   // dat["item_name"+x] = formm.get("item_name"+x);
   // dat["item_brand"+x] = formm.get("item_brand"+x);
   // dat["est_price"+x] = formm.get("est_price"+x);
   u.push({
    item_name: dat["item_name" + x],
    item_brand: dat["item_brand" + x],
    est_price: dat["est_price" + x],
   });
  }

  console.log(u);

  return JSON.stringify(dat);
 };

 //submit to api

 const handleSubmit = (e) => {
  e.preventDefault();
  setFormData(e.currentTarget);
  var dat = getData();

  fetch("/add", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: dat,
  })
   .then((res) => res.text())
   .then((a) => console.log("NEXT: ", a));
  // console.log(formData);
  // console.log(JSON.stringify(dat));
  navigate("/job_order");
 };

 //   function getFormData(){
 //     var data = $('form').serializeArray().reduce(function(obj, item) {
 //         obj[item.name] = item.value;
 //         return obj;
 //     }, {});
 //     setFormData(data);
 //     fetch('/add',{
 //         method:"POST",
 //         form: 'cors',
 //         body: formData
 //       })
 //     // eslint-disable-next-line no-restricted-globals
 //     location.replace("/job_order");
 //   }

 const displayData = (e) => {
  var dat = getData();
  //  var warranty = dat["warranty"] === "yes"?  "WITH WARRANTY" : "WITHOUT WARRANTY";
  //  var returning = dat["returning"] === "yes"? "BOUGHT FROM OCCC" : "BOUGHT OUTSIDE OCCC";

  // multiple units

  var unitsprev = [];
  for (var x = 1; x <= dat["units"]; x++) {
   var warranty =
    dat["warranty"] === "yes" ? "WITH WARRANTY" : "WITHOUT WARRANTY";
   var returning =
    dat["returning"] === "yes" ? "BOUGHT FROM OCCC" : "BOUGHT OUTSIDE OCCC";
   unitsprev += (
    <>
     <div className="row">
      <div className="col">
       <span>Unit {x}:</span>
       <br />
       <span>{dat["unit_name" + x]}</span>
      </div>
      <div className="col">
       <span>Brand: &nbsp;</span>
       <span>{dat["unit_brand" + x]}</span>
      </div>
     </div>
     <div className="row">
      <div className="col">
       <span>{warranty}</span>
      </div>
      <div className="col">
       <span>Bought in OCCC?&nbsp;</span>
       <span>{returning}</span>
      </div>
     </div>
     <div className="row">
      <div className="col">
       <span className="text-uppercase fw-bold">Defect Description:</span>
      </div>
     </div>
     <div className="row">
      <div className="col">
       <span>{dat["desc" + x]}</span>
      </div>
     </div>
    </>
   );
  }

  // multiple items

  var itemsprev;
  for (x = 1; x <= dat["num_of_parts"]; x++) {
   itemsprev += (
    <>
     <div className="row">
      <div className="col">
       <div className="row">
        <div className="col">
         <span>Part {x}: &nbsp;</span>
         <span>{dat["item_name"]}</span>
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
         <span>{dat["item_brand" + x]}</span>
        </div>
       </div>
       <div className="row">
        <div className="col">
         <span>Estimated Price:&nbsp;</span>
         <span>{dat["est_price" + x]}</span>
        </div>
       </div>
      </div>
     </div>
    </>
   );
  }
  console.log(dat["item_name"]);

  document.getElementById("prev").innerHTML = `
        <div className="row">
            <div className="col">
                <span>Job Title:&nbsp;</span>
                <span>${dat["job_name"]}</span>
            </div>
            <div className="col">
                <span>Customer:&nbsp;</span>
                <span>${dat["cust_name"]}</span>
            </div>
            <div className="col">
                <span>Created:&nbsp;</span>
                <span>${dat["order_date"]}</span>
            </div>
            </div>

            ${unitsprev}
            ${itemsprev}
        `;
 };

 if (props.currentStep !== 1) {
  return null;
 }
 return (
  <div className="tab-pane fade show active rounded bg-white p-4" id="step1">
   <h3 className="multisteps-form__title text-start">Job Details</h3>
   <div id="input-grp-double" className="form-row mt-2">
    <div className="row">
     <div className="col">
      <span>Customer:</span>
      {/* Start: Search Field With Icon */}
      <div className="search-container">
       <input
        className="form-control search-input"
        type="text"
        name="cust_name"
        placeholder="Search..."
        id="cust_name"
        onInput={() => preview("cust_name")}
       />
       <button className="btn btn-light search-btn" type="button">
        {" "}
        <i className="fa fa-search" />
       </button>
      </div>
      {/* End: Search Field With Icon */}
     </div>
    </div>
    <div className="row">
     <div className="col">
      <span>Job Name:&nbsp;</span>
      <input
       name="job_name"
       className="form-control"
       type="text"
       id="job_name"
       onInput={() => preview("job_name", false)}
       required
      />
     </div>
     <div className="col">
      <span>Date:</span>
      <input
       name="order_date"
       className="form-control"
       type="date"
       id="order_date"
       onInput={() => preview("order_date", false)}
      />
     </div>
    </div>
    <div className="row">
     <div id="input-form">
      <div id="product_row" className="row row-auto">
       <div className="col">
        <span>
         Unit name:{" "}
         <input
          id="unit_name1"
          name="unit_name1"
          className="form-control"
          type="text"
          onInput={() => preview("unit_name1", false)}
         />
        </span>
       </div>
       <div className="col">
        <span>Brand:&nbsp;</span>
        <input
         id="brand1"
         name="brand1"
         className="form-control"
         type="text"
         onInput={() => preview("brand1", false)}
        />
       </div>
      </div>
      <div className="row">
       <div className="col-xl-5 col-xxl-7">
        <span>Defect Description:&nbsp;</span>
        <textarea
         name="desc1"
         id="desc1"
         className="form-control"
         style={{ height: "111px" }}
         required
         defaultValue={""}
         onInput={() => preview("desc1", false)}
        />
       </div>
       <div className="col">
        <div className="row">
         <div className="col">
          <span>Product from OCCC?:</span>
          <div className="row">
           <div className="col">
            <div className="form-check">
             <input
              name="returning1"
              className="form-check-input"
              type="radio"
              id="formCheck-1"
              value="yes"
              onInput={() => preview("returning1", true)}
             />
             <label className="form-check-label" htmlFor="formCheck-1">
              Yes
             </label>
            </div>
           </div>
           <div className="col">
            <div className="form-check">
             <input
              name="returning1"
              className="form-check-input"
              type="radio"
              id="formCheck-2"
              value="no"
              onInput={() => preview("returning1", true)}
             />
             <label className="form-check-label" htmlFor="formCheck-2">
              No
             </label>
            </div>
           </div>
          </div>
         </div>
         <div className="col">
          <span>With warranty?</span>
          <div className="row">
           <div className="col">
            <div className="form-check">
             <input
              name="warranty1"
              className="form-check-input"
              type="radio"
              id="warranty1"
              value="yes"
              onInput={() => preview("warranty1", true)}
             />
             <label className="form-check-label" htmlFor="wararnty1">
              Yes
             </label>
            </div>
           </div>
           <div className="col">
            <div className="form-check">
             <input
              name="warranty1"
              className="form-check-input"
              type="radio"
              id="warranty1"
              value="no"
              onInput={() => preview("warranty1", true)}
             />
             <label className="form-check-label" htmlFor="formCheck-4">
              No
             </label>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div className="row">
         <div className="col">
          <span>If not from OCCC, where?</span>
          <textarea
           className="form-control"
           style={{ height: "31px" }}
           defaultValue={""}
          />
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="row">
      <div className="inp-group">{newUnits.map((unit) => unit)}</div>
     </div>
     <div className="col col-auto">
      <a className="btn btn-primary mt-2" onClick={add_more} role="button">
       Add more
      </a>
     </div>
    </div>

    <div className="row row-auto">
     <div className="row mt-4">
      <h5>Parts needed for the job:</h5>
     </div>
     <div className="col">
      <span>Name of Part:&nbsp;</span>
      <input name="item_name" className="form-control" type="text" />
     </div>
     <div className="col">
      <span>Brand:&nbsp;</span>
      <input name="item_brand" className="form-control" type="text" />
     </div>

     <div className="col">
      <span>Estimated Price:&nbsp;</span>
      <input name="est_price" className="form-control" type="text" />
     </div>

     {/* <div className="col">
                 <div className="row">
                  <div className="col">
                   <span>Unit:&nbsp;</span>
                   <input className="form-control" type="text" />
                  </div>
                 </div>
                </div> */}
     <div className="col col-auto">
      <a
       className="btn btn-primary rounded-circle mt-4"
       href="#"
       role="button"
       onClick={AddInput}>
       <i className="fa fa-plus-circle" />
      </a>

      <span />
     </div>
    </div>
    <div className="row">
     <div className="inp-group">{parts.map((part) => part)}</div>
    </div>
   </div>
   <div className="row mt-4">
    <span>Estimated Time Completion:</span>
    <input name="est_completion" className="form-control w-25" type="date" />
   </div>
  </div>
 );
}

function Step2(props) {
 if (props.currentStep !== 2) {
  return null;
 }
 return (
  <>
   <h4>Assign Employee</h4>
   <div className="selectgroup selectgroup-pills">
    <div className="row">
     <label className="selectgroup-item">
      <input
       type="checkbox"
       name="3"
       defaultValue="CSS"
       className="selectgroup-input"
      />
      <div className="row selectgroup-button">
       <div className="col">
        {/* Start: Gravatar Image */}
        <img
         alt=""
         className="rounded-circle"
         src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
         width={70}
         height={68}
        />
        {/* End: Gravatar Image */}
       </div>
       <div className="col">
        <span>Mr. Technician K. One</span>
       </div>
       <div className="col">Available</div>
      </div>
     </label>
    </div>
    <div className="row">
     <label className="selectgroup-item">
      <input
       type="checkbox"
       name="value"
       defaultValue="CSS"
       className="selectgroup-input"
      />
      <div className="row selectgroup-button">
       <div className="col">
        {/* Start: Gravatar Image */}
        <img
         alt=""
         className="rounded-circle"
         src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
         width={70}
         height={68}
        />
        {/* End: Gravatar Image */}
       </div>
       <div className="col">
        <span>Mr. Technician K. One</span>
       </div>
       <div className="col">Available</div>
      </div>
     </label>
    </div>
    <div className="row">
     <label className="selectgroup-item">
      <input
       type="checkbox"
       name="value"
       defaultValue="CSS"
       className="selectgroup-input"
      />
      <div className="row selectgroup-button">
       <div className="col">
        {/* Start: Gravatar Image */}
        <img
         alt=""
         className="rounded-circle"
         src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
         width={70}
         height={68}
        />
        {/* End: Gravatar Image */}
       </div>
       <div className="col">
        <span>Mr. Technician K. One</span>
       </div>
       <div className="col">Available</div>
      </div>
     </label>
    </div>
    <div className="row">
     <label className="selectgroup-item">
      <input
       type="checkbox"
       name="value"
       defaultValue="CSS"
       className="selectgroup-input"
      />
      <div className="row selectgroup-button">
       <div className="col">
        {/* Start: Gravatar Image */}
        <img
         alt=""
         className="rounded-circle"
         src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
         width={70}
         height={68}
        />
        {/* End: Gravatar Image */}
       </div>
       <div className="col">
        <span>Mr. Technician K. One</span>
       </div>
       <div className="col">Available</div>
      </div>
     </label>
    </div>
    <div className="row">
     <label className="selectgroup-item">
      <input
       type="checkbox"
       name="value"
       defaultValue="CSS"
       className="selectgroup-input"
      />
      <div className="row selectgroup-button">
       <div className="col">
        {/* Start: Gravatar Image */}
        <img
         alt="technician profile"
         className="rounded-circle"
         src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
         width={70}
         height={68}
        />
        {/* End: Gravatar Image */}
       </div>
       <div className="col">
        <span>Mr. Technician K. One</span>
       </div>
       <div className="col">Available</div>
      </div>
     </label>
    </div>
   </div>
  </>
 );
}

function Step3(props) {
 if (props.currentStep !== 3) {
  return null;
 }
 return (
  <>
   <h4 className="text-start">Breakdown of Fees</h4>
   <div className>
    <div className="row">
     <div className="col">
      <span className="fw-bold">Parts Needed:</span>
      <div className="row">
       <div className="col">
        <div className="row">
         <div className="col">
          <span>Part #1:&nbsp;</span>
          <span>Battery</span>
         </div>
         <div className="col text-center">
          <span>$50</span>
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
       </div>
      </div>
      <div className="row">
       <div className="col">
        <div className="row">
         <div className="col">
          <span>Part #2:&nbsp;</span>
          <span>Battery</span>
         </div>
         <div className="col text-center">
          <span>$50</span>
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
       </div>
      </div>
     </div>
    </div>
    <div className="row" style={{ borderBottomStyle: "solid" }}>
     <div className="col">
      <span className="fw-bold">Fees and Others:</span>
      <div className="row">
       <div className="col">
        <div className="row">
         <div className="col">
          <span>Service Fee</span>
         </div>
         <div className="col text-center">
          <span>$50</span>
         </div>
        </div>
        <div className="row">
         <div className="col">
          <span>Delivery Fee</span>
         </div>
         <div className="col text-center">
          <span>$50</span>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="row mt-2">
     {/* <div className="col">
               <div>
                <button
                 className="btn btn-primary"
                 type="button"
                 style={{ background: "rgb(23,59,62)", marginLeft: "0px" }}
                 data-bs-target="#modal-1"
                 data-bs-toggle="modal">
                 &nbsp;Add New Service
                </button>
               </div>
              </div> */}
     <div className="col text-end">
      <span>Total Amount:</span>
     </div>
     <div className="col text-start">
      <span> $30</span>
     </div>
    </div>
    <div className="row">
     <span>Notes: </span>
    </div>
    <div className="row">
     <textarea name id cols={30} rows={3} defaultValue={""} />
    </div>
   </div>
  </>
 );
}

function Step4(props) {
 if (props.currentStep !== 4) {
  return null;
 }
 return (
  <>
   <div className="col">
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
   <button className="btn btn-success btn-block">Submit</button>
  </>
 );
}

export default Bills_Payments;