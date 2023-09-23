 import Navbar from "../Navbar";
 import Header from "../Header";
 import "bootstrap/dist/css/bootstrap.min.css";
 import React, { useState } from "react";
 import {useNavigate} from "react-router-dom";

 var Createjob = () => {


  // post to api
  

  const navigate = useNavigate();
  const [formData, setFormData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(e.currentTarget);
    var formm = new FormData(document.querySelector('form'));
    var dat = {
        order_date:formm.get("order_date"),
        cust_name:formm.get("cust_name"),
        job_name:formm.get("job_name"),
        est_completion:formm.get("est_completion"),
        warranty:formm.get("warranty"),
        returning:formm.get("returning"),
        unit_name: formm.get("unit_name"),
        brand: formm.get("brand"),
        desc: formm.get("desc")
    }
    fetch('/add',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(dat)
    })
    .then((res)=>(res.text()))
    .then((a)=>console.log("NEXT: ",a));
    // console.log(formData);
    console.log(JSON.stringify(dat));
    // navigate('/job_order');


  }
  

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

  // adding parts needed
  const [parts, setParts] = useState([]);
  function AddInput() {
   const newPart = (
    <div className="flex" key={parts.length}>
     <input
      type="text"
      placeholder="Enter name of parts"
      style={{ marginRight: "19pt", marginTop: "10pt", width: "14rem" }}
     />
     <input
      type="text"
      placeholder="Enter price"
      style={{ marginRight: "19pt", marginTop: "10pt", width: "14rem" }}
     />
     <input
      type="text"
      placeholder="Enter brand"
      style={{ marginRight: "19pt", marginTop: "10pt", width: "14rem" }}
     />
     <input
      type="text"
      placeholder="Enter unit"
      style={{ marginRight: "19pt", marginTop: "10pt", width: "14rem" }}
     />
    </div>
   );

   setParts([...parts, newPart]);

  
  };
  
  var name_of_parts = 1;
  function add_more() {
   name_of_parts++;
   var newDiv = `
    <div id="product_row${name_of_parts}" class="row row-auto">
                        <div class="col"><span>Unit name: <input id="unit_name" class="form-control" type="text"></span></div>
                        <div class="col"><span>Brand:&nbsp;</span><input id="brand_name" class="form-control" type="text"></div>
                    </div>
                    <div class="row">
                        
                                <div class="col-xl-5 col-xxl-7"><span>Defect
                                        Description:&nbsp;</span><textarea id="defect_descrip" class="form-control" style="height: 111px;"
                                        required></textarea></div>
                                <div class="col">
                                    <div class="row">
                                        <div class="col"><span>Product from OCCC?:</span>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-check"><input class="form-check-input" type="radio" id="formCheck-1"><label
                                                            class="form-check-label" for="formCheck-1">Yes</label></div>
                                                </div>
                                                <div class="col">
                                                    <div class="form-check"><input class="form-check-input" type="radio" id="formCheck-2"><label
                                                            class="form-check-label" for="formCheck-2">No</label></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col"><span>With warranty?</span>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-check"><input class="form-check-input" type="radio" id="formCheck-3"><label
                                                            class="form-check-label" for="formCheck-3">Yes</label></div>
                                                </div>
                                                <div class="col">
                                                    <div class="form-check"><input class="form-check-input" type="radio" id="formCheck-4"><label
                                                            class="form-check-label" for="formCheck-4">No</label></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col"><span>If not from OCCC,
                                                where?</span><textarea class="form-control" style="height: 31px;"></textarea></div>
                                    </div>
                                </div>
                                </div>
                            </div>
 
                    
                    </div>`;
   var form = document.getElementById("input-form");
   form.insertAdjacentHTML("beforeend", newDiv);
  }









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




      <div>
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
           <form method="POST" onSubmit={handleSubmit} id="addOrder">
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
                 <input name="job_name" className="form-control" type="text" required />
                </div>
                <div className="col">
                 <span>Date:</span>
                 <input name="order_date" className="form-control" type="date" />
                </div>
               </div>
               <div className="row">
                <div id="input-form">
                 <div id="product_row" className="row row-auto">
                  <div className="col">
                   <span>
                    Unit name:{" "}
                    <input
                     id="unit_name"
                     name="unit_name"
                     className="form-control"
                     type="text"
                    />
                   </span>
                  </div>
                  <div className="col">
                   <span>Brand:&nbsp;</span>
                   <input
                    id="brand"
                    name="brand"
                    className="form-control"
                    type="text"
                   />
                  </div>
                 </div>
                 <div className="row">
                  <div className="col-xl-5 col-xxl-7">
                   <span>Defect Description:&nbsp;</span>
                   <textarea
                    name="desc"
                    id="defect_descrip"
                    className="form-control"
                    style={{ height: "111px" }}
                    required
                    defaultValue={""}
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
                         name="returning"
                         className="form-check-input"
                         type="radio"
                         id="formCheck-1"
                        />
                        <label
                         className="form-check-label"
                         htmlFor="formCheck-1">
                         Yes
                        </label>
                       </div>
                      </div>
                      <div className="col">
                       <div className="form-check">
                        <input
                         name="returning"
                         className="form-check-input"
                         type="radio"
                         id="formCheck-2"
                        />
                        <label
                         className="form-check-label"
                         htmlFor="formCheck-2">
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
                         name="warranty"
                         className="form-check-input"
                         type="radio"
                         id="formCheck-3"
                        />
                        <label
                         className="form-check-label"
                         htmlFor="formCheck-3">
                         Yes
                        </label>
                       </div>
                      </div>
                      <div className="col">
                       <div className="form-check">
                        <input
                        name="warranty"
                         className="form-check-input"
                         type="radio"
                         id="formCheck-4"
                        />
                        <label
                         className="form-check-label"
                         htmlFor="formCheck-4">
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
                <div className>
                 <button className="add" onClick={add_more}>
                  Add More
                 </button>
                </div>
               </div>
               <div className="row row-auto">
                <div className="row mt-4">
                 <h5>Parts/Items needed for the job:</h5>
                </div>
                <div className="col">
                 <span>Name of Parts:&nbsp;</span>
                 <input className="form-control" type="text" />
                </div>
                <div className="col">
                 <span>Brand:&nbsp;</span>
                 <input className="form-control" type="text" />
                </div>
                <div className="col">
                 <div className="row">
                  <div className="col">
                   <span>Unit:&nbsp;</span>
                   <input className="form-control" type="text" />
                  </div>
                 </div>
                </div>
                <div className="col col-auto">
                 <button className="add" onClick={AddInput}>
                  <i className="fa fa-plus-circle" aria-hidden="true" />
                 </button>
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



             {/* Step 2*/}
             <div className="tab-pane fade rounded bg-white p-4" id="step2">
              <h4>Assign Employee</h4>
              {/* Start: Multiple Input Select Pills */}
              <div>
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
              </div>
             </div>



             {/* Step 3*/}



             <div className="tab-pane fade rounded bg-white p-4" id="step3">
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
             </div>


             {/* Step 4*/}
             <div className="tab-pane fade rounded bg-white p-4" id="step4">
              <h4 className="text-start">Preview &amp; Save</h4>
              <div className>
               <div className="row">
                <div className="col">
                 <span>Job Title:&nbsp;</span>
                 <span>Acer Laptop: Broken Battery</span>
                </div>
                <div className="col">
                 <span>Customer:&nbsp;</span>
                 <span>Ninya Anne Paraiso</span>
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
                     <span>Part #1:&nbsp;</span>
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
                     <span>Part #2:&nbsp;</span>
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
             <input
              type="submit"
              className="btn btn-primary"
              data-enchanter="finish" />
            </div>
           </div>
           </form>
          </div>
         </div>
        </div>
        {/* End: Multi step form */}

        {/* modal for Add charges*/}
        <div className="modal fade" role="dialog" tabIndex={-1} id="modal-1">
         <div className="modal-dialog" role="document">
          <div className="modal-content">
           <div className="modal-header align-self-center">
            <h4 className="modal-title">Pricing Details</h4>
           </div>
           <div className="modal-body">
            <div className="row">
             <div className="col">
              <span>Name of Service:</span>
             </div>
            </div>
            <div className="row">
             <div className="col">
              <input type="text" style={{ width: "457px" }} />
             </div>
            </div>
            <div className="row">
             <div className="col">
              <span>Price:</span>
             </div>
            </div>
            <div className="row">
             <div className="col">
              <input type="text" style={{ width: "457px" }} />
             </div>
            </div>
           </div>
           <div className="modal-footer">
            <button
             className="btn btn-light"
             type="button"
             data-bs-dismiss="modal">
             Cancel
            </button>
            <button
             className="btn btn-primary"
             type="button"
             style={{ background: "rgb(36,51,37)" }}>
             Add &amp; Save
            </button>
           </div>
          </div>
         </div>
        </div>
        {/* end: modal for Add charges*/}
        {/*modal for request purchase*/}
        <div className="modal fade" role="dialog" tabIndex={-1} id="modal-2">
         <div className="modal-dialog" role="document">
          <div className="modal-content">
           <div className="modal-header">
            <h4 className="modal-title">Request Item Details</h4>
            <button
             className="btn-close"
             type="button"
             aria-label="Close"
             data-bs-dismiss="modal"
            />
           </div>
           <div className="modal-body">
            <div className="row">
             <div className="col">
              <span>Name of Item:</span>
              <div className="row">
               <div className="col">
                <input type="text" style={{ width: "464px" }} />
               </div>
              </div>
             </div>
             <div className="col">
              <span>Brand:</span>
              <div className="row">
               <div className="col">
                <input type="text" style={{ width: "464px" }} />
               </div>
              </div>
             </div>
             <div className="col">
              <span>Unit:</span>
              <div className="row">
               <div className="col">
                <input type="text" style={{ width: "222px" }} />
               </div>
              </div>
             </div>
             <div className="col">
              <span>Quantity:</span>
              <div className="row">
               <div className="col">
                <input type="number" style={{ width: "213px" }} />
               </div>
              </div>
             </div>
             <div className="col">
              <span>Other Specifications:</span>
              <div className="row">
               <div className="col">
                <textarea style={{ width: "456px" }} defaultValue={""} />
               </div>
              </div>
             </div>
            </div>
           </div>
           <div className="modal-footer align-self-center">
            <button className="btn btn-primary" type="button">
             Submit
            </button>
           </div>
          </div>
         </div>
        </div>
       </div>
       <footer className="bg-white sticky-footer">
        <div className="container my-auto">
         <div className="text-center my-auto copyright">
          <span>Copyright © OCCC 2023</span>
         </div>
        </div>
       </footer>
       <a className="border rounded d-inline scroll-to-top" href="#page-top">
        <i className="fas fa-angle-up" />
       </a>
       <div />
      </div>
     </div>
    </div>
   </div>
  );
 }
 
 export default Createjob;