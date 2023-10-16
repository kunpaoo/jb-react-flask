import { Button } from "react-bootstrap";
import Header from "../Header";
import Navbar from "../Navbar";
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

var JobOrder = () => {

  const [data,setData] = useState();

  useEffect(()=>{
    fetch("/api")
    .then((res)=>res.json())
    .then((data)=>{
      setData(data);
    })
  })

  var job_list;
  data === (null || undefined)? job_list = "loading":
  job_list = data.map((row)=>{
    return(
      <tr>
      <td>{row.order_id}</td>
      <td>
        <div className="col-lg-11 col-xl-11 col-xxl-12 w-auto">
        <a href="/" onClick={() => modalData(row.order_id)} data-bs-target="#modal-1" data-bs-toggle="modal" id={row.order_id}>
          <h6
          style={{
            fontSize: "12px",
            color: "rgb(0,0,0)",
            marginBottom: "0px",
            marginTop: "4px",
            paddingRight: "0px",
          }}>
          <strong>{row.job_name}</strong>
          </h6>
          <div
          style={{
            fontSize: "8px",
            paddingTop: "12px",
            marginTop: "-12px",
          }}>
          <span className="w-auto" style={{ fontSize: "9px" }}>
            Created {row.order_date}
          </span>
          </div>
          <div
          style={{
            paddingTop: "0px",
            marginTop: "-12px",
          }}>
          <span className="w-auto" style={{ fontSize: "9px" }}>
            Created by: Anya Kuan
          </span>
          </div>
        </a>
        </div>
      </td>
      <td>
        <div className="col-lg-11 col-xl-11 col-xxl-12 w-auto">
        <h6
          style={{
          fontSize: "12px",
          color: "rgb(0,0,0)",
          marginBottom: "0px",
          marginTop: "4px",
          paddingRight: "0px",
          }}>
          <strong>{row.cust_name}</strong>
        </h6>
        <div
          style={{
          marginTop: "-9px",
          marginLeft: "9px",
          paddingTop: "1px",
          }}>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="bi bi-telephone-fill"
          style={{
            color: "rgb(61,61,61)",
            fontSize: "9px",
            marginRight: "2px",
          }}>
          <path
            fillRule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
          </svg>
          <span style={{ fontSize: "9px" }}>{row.cust_phone}</span>
        </div>
        </div>
      </td>
      <td>
        <div className="col-lg-11 col-xl-11 col-xxl-12 justify-content-center w-auto">
        <h6
          style={{
          fontSize: "12px",
          color: "rgb(0,0,0)",
          marginBottom: "0px",
          marginTop: "4px",
          paddingRight: "0px",
          }}>
          <strong>{row.tech_name}</strong>
        </h6>
        <div
          className="w-auto"
          style={{
          marginTop: "-9px",
          marginLeft: "9px",
          paddingTop: "1px",
          }}>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            color: "rgb(61,61,61)",
            fontSize: "9px",
            marginRight: "2px",
          }}>
          <path
            d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z"
            fill="currentColor"
          />
          <path
            d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z"
            fill="currentColor"
          />
          </svg>
          <span style={{ fontSize: "9px" }}>{row.tech_email}</span>
        </div>
        <div
          className="w-auto"
          style={{
          marginLeft: "9px",
          paddingTop: "0px",
          marginTop: "-13px",
          }}>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="bi bi-telephone-fill"
          style={{
            color: "rgb(61,61,61)",
            fontSize: "9px",
            marginRight: "2px",
          }}>
          <path
            fillRule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
          </svg>
          <span style={{ fontSize: "9px" }}>{row.tech_phone}</span>
        </div>
        </div>
      </td>
      <td className="text-center" style={{ fontSize: "11px" }}>
        {row.est_completion}
      </td>
      <td className="text-center">
        <span
        className="badge bg-primary"
        style={{ background: "rgb(1,139,32)" }}>
        With warranty
        </span>
      </td>
      <td className="text-center">
        <span className="badge bg-primary" style={{ fontSize: "11px" }}>
        Scheduling Delivery
        </span>
      </td>
      </tr>
    )
  })



  // modal preview js

  var [modData,setModData] = useState({
    "order": {
      "job_name": "",
      "cust_name": "",
      "order_date": "",
      "order_id": ""
    },
    "units" : [],
    "parts" : []
  });
  
  const modalData = (id) => {

    fetch("/api/"+id)
    .then((res)=>res.json())
    .then((d)=>{
      console.log(d)
      setModData(d);
    })

    
  }


  var unit_list;
  unit_list = modData.units.map((unit)=>{
    // console.log(unit)
    return(
      <>
      <div className="row">
          <div className="col">
           <span>Unit Name:</span>
           <span>{unit.unit_name}</span>
          </div>
          <div className="col">
           <span>{unit.warranty? "WITH WARRANTY" : "WITHOUT WARRANTY"}</span>
          </div>
          <div className="col">
           <span>{unit.returning? "RETURNING" : "NON RETURNING"}</span>
          </div>
         </div>
         <div className="row">
          <div className="col">
           <span className="text-uppercase fw-bold">Defect Description:</span>
          </div>
         </div>
         <div className="row">
          <div className="col">
           <span>
            {unit.defect_description}
           </span>
          </div>
         </div>
      </>
    )
  });

  var part_list = modData.parts.map((part)=>{
    return(
      <>
      <div className="row">
        <div className="col">
          <span>Item:&nbsp;</span>
          <span>{part.item_name}</span>
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
          <span>{part.brand}</span>
        </div>
        </div>
        <div className="row">
        <div className="col">
          <span>Estimated Price:&nbsp;</span>
          <span>{part.est_price}</span>
        </div>
        </div>
      </>
    )
  })

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

      {/* MAIN CONTENT */}


      <div className="d-flex flex-column" id="content-wrapper">
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
          Jobs
         </h3>
         <a
          className="btn btn-primary btn-sm d-none d-sm-inline-block"
          role="button"
          data-bs-target="#modal-1"
          style={{
           background: "rgb(2,60,63)",
           paddingRight: "12px",
           borderRadius: "16px",
           fontSize: "16px",
           paddingTop: "6px",
           marginRight: "14px",
          }}
          href="/Create_Job_Order">                       {/*create job order url*/}
          <svg
           xmlns="http://www.w3.org/2000/svg"
           width="1em"
           height="1em"
           viewBox="0 0 24 24"
           fill="none"
           className="fa-sm text-white-50"
           style={{
            fontSize: "30px",
            paddingTop: "0px",
            color: "rgb(255,255,255)",
           }}>
           <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
            fill="currentColor"
           />
           <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
            fill="currentColor"
           />
          </svg>
          &nbsp;Create New Job
         </a>
        </div>
       </div>
       <div className="container-fluid">
        <div>
         <div className="row" id="headbot">
          <div className="col h-auto">
           <div
            id="dataTable_filter-1"
            className="dataTables_filter mh-100"
            style={{ marginTop: "21px" }}>
            <label className="form-label">
             <input
              type="search"
              className="form-control form-control-sm"
              aria-controls="dataTable"
              placeholder="Search"
              style={{ paddingTop: "0px", marginTop: "8px" }}
             />
            </label>
            <a
             className="btn btn-primary btn-sm d-none d-sm-inline-block"
             role="button"
             data-bs-target="#modal-1"
             style={{
              background: "rgb(2,60,63)",
              paddingRight: "12px",
              borderRadius: "8px",
              fontSize: "16px",
              paddingTop: "6px",
              marginRight: "-2px",
              marginLeft: "12px",
             }}
             href="/View_Deliveries.html">
             View Deliveries
            </a>
           </div>
          </div>
          <div
           className="col-xxl-4 col-auto w-auto flex-wrap d-flex position-relative"
           style={{ paddingTop: "14px" }}>
           <div
            style={{
             paddingLeft: "0px",
             paddingRight: "0px",
             marginTop: "4px",
             paddingTop: "13px",
             paddingBottom: "0px",
             marginBottom: "-1px",
            }}>
            <span style={{ paddingTop: "0px", marginTop: "-20px" }}>Show:</span>
           </div>
          </div>
          <div
           className="col w-auto col-auto"
           style={{ paddingBottom: "0px", marginBottom: "-40px" }}>
           <div
            id="dataTable_length-1"
            className="dataTables_length"
            aria-controls="dataTable"
            style={{ paddingTop: "0px" }}>
            <div style={{ paddingBottom: "0px", paddingTop: "0px" }}>
             <label
              className="form-label"
              style={{
               fontSize: "25px",
               marginLeft: "-12px",
               marginBottom: "-18px",
               paddingBottom: "0px",
               paddingTop: "16px",
               marginTop: "3px",
              }}>
              <select
               className="d-inline-block form-select form-select-sm"
               style={{ marginTop: "8px" }}>
               <option value={10} selected>
                10
               </option>
               <option value={25}>25</option>
               <option value={50}>50</option>
               <option value={100}>100</option>
              </select>
              &nbsp;
             </label>
            </div>
           </div>
          </div>


          <div
           className="col w-auto col-auto"
           style={{ paddingBottom: "0px", marginBottom: "-40px" }}>
           <button
            className="btn btn-primary"
            type="button"
            style={{
             height: "36px",
             paddingTop: "0px",
             marginTop: "22px",
             width: "41px",
             background: "rgba(78,115,223,0)",
             borderColor: "rgba(255,255,255,0.02)",
             marginRight: "5px",
             paddingLeft: "2px",
             marginLeft: "-20px",
            }}
            data-bs-target="#offcanvasRight"
            data-bs-toggle="offcanvas">
            <svg
             xmlns="http://www.w3.org/2000/svg"
             height="1em"
             viewBox="0 0 24 24"
             width="1em"
             fill="currentColor"
             style={{
              fontSize: "33px",
              paddingTop: "0px",
              marginTop: "4px",
              borderColor: "rgb(24,59,62)",
              color: "rgb(23,59,62)",
              paddingLeft: "0px",
              marginLeft: "0px",
             }}>
             <path d="M0 0h24v24H0V0z" fill="none" />
             <path d="M0 0h24m0 24H0" fill="none" />
             <path d="M4.25 5.66c.1.13 5.74 7.33 5.74 7.33V19c0 .55.45 1 1.01 1h2.01c.55 0 1.01-.45 1.01-1v-6.02s5.49-7.02 5.75-7.34C20.03 5.32 20 5 20 5c0-.55-.45-1-1.01-1H5.01C4.4 4 4 4.48 4 5c0 .2.06.44.25.66z"></path>
            </svg>
           </button>
          </div>
         </div>
        </div>

        {/* TABLE START */}
        <div className="card shadow">
         <div className="card-body" style={{ paddingTop: "0px" }}>
          <div
           className="table-responsive table mt-2"
           id="dataTable-2"
           role="grid"
           aria-describedby="dataTable_info">
           <table className="table my-0" id="dataTable">
            <thead>
             <tr>
              <th className="text-center">ID</th>
              <th className="text-center" style={{ fontSize: "19px" }}>
               Job Description
              </th>
              <th className="text-center" style={{ fontSize: "18px" }}>
               Customer
              </th>
              <th className="text-center">Assigned</th>
              <th className="text-center">Estimated Completion</th>
              <th className="text-center">Warranty</th>
              <th className="text-center">Status</th>
             </tr>
            </thead>

            {/* TABLE DATA START */}
            <tbody>

              {job_list}

             <tr>
              <td>12123</td>
              <td>
               <div className="col-lg-11 col-xl-11 col-xxl-12 w-auto">
                <a href="/" data-bs-target="#modal-1" data-bs-toggle="modal">
                 <h6
                  style={{
                   fontSize: "12px",
                   color: "rgb(0,0,0)",
                   marginBottom: "0px",
                   marginTop: "4px",
                   paddingRight: "0px",
                  }}>
                  <strong>Acer Laptop: Broken Battery&nbsp;</strong>
                 </h6>
                 <div
                  style={{
                   fontSize: "8px",
                   paddingTop: "12px",
                   marginTop: "-12px",
                  }}>
                  <span className="w-auto" style={{ fontSize: "9px" }}>
                   Created 2/02/2023 11:23 a.m.
                  </span>
                 </div>
                 <div
                  style={{
                   paddingTop: "0px",
                   marginTop: "-12px",
                  }}>
                  <span className="w-auto" style={{ fontSize: "9px" }}>
                   Created by: Anya Kuan
                  </span>
                 </div>
                </a>
               </div>
              </td>
              <td>
               <div className="col-lg-11 col-xl-11 col-xxl-12 w-auto">
                <h6
                 style={{
                  fontSize: "12px",
                  color: "rgb(0,0,0)",
                  marginBottom: "0px",
                  marginTop: "4px",
                  paddingRight: "0px",
                 }}>
                 <strong>Jane MariedAusten</strong>
                </h6>
                <div
                 style={{
                  marginTop: "-9px",
                  marginLeft: "9px",
                  paddingTop: "1px",
                 }}>
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-telephone-fill"
                  style={{
                   color: "rgb(61,61,61)",
                   fontSize: "9px",
                   marginRight: "2px",
                  }}>
                  <path
                   fillRule="evenodd"
                   d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                 </svg>
                 <span style={{ fontSize: "9px" }}>09759983569</span>
                </div>
               </div>
              </td>
              <td>
               <div className="col-lg-11 col-xl-11 col-xxl-12 justify-content-center w-auto">
                <h6
                 style={{
                  fontSize: "12px",
                  color: "rgb(0,0,0)",
                  marginBottom: "0px",
                  marginTop: "4px",
                  paddingRight: "0px",
                 }}>
                 <strong>Mr. K echsdfd O.sd</strong>
                </h6>
                <div
                 className="w-auto"
                 style={{
                  marginTop: "-9px",
                  marginLeft: "9px",
                  paddingTop: "1px",
                 }}>
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{
                   color: "rgb(61,61,61)",
                   fontSize: "9px",
                   marginRight: "2px",
                  }}>
                  <path
                   d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z"
                   fill="currentColor"
                  />
                  <path
                   d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z"
                   fill="currentColor"
                  />
                 </svg>
                 <span style={{ fontSize: "9px" }}>KTJjdjf@gmail.com</span>
                </div>
                <div
                 className="w-auto"
                 style={{
                  marginLeft: "9px",
                  paddingTop: "0px",
                  marginTop: "-13px",
                 }}>
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-telephone-fill"
                  style={{
                   color: "rgb(61,61,61)",
                   fontSize: "9px",
                   marginRight: "2px",
                  }}>
                  <path
                   fillRule="evenodd"
                   d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                 </svg>
                 <span style={{ fontSize: "9px" }}>09759983569</span>
                </div>
               </div>
              </td>
              <td className="text-center" style={{ fontSize: "11px" }}>
               09/14/2003
              </td>
              <td className="text-center">
               <span
                className="badge bg-primary"
                style={{ background: "rgb(1,139,32)" }}>
                With warranty
               </span>
              </td>
              <td className="text-center">
               <span className="badge bg-primary" style={{ fontSize: "11px" }}>
                Scheduling Delivery
               </span>
              </td>
             </tr>
            </tbody>
            <tfoot></tfoot>
           </table>

          {/* TABLE DATA END */}

          </div>
          <div className="row">
           <div className="col-md-6 align-self-center">
            <p
             id="dataTable_info-1"
             className="dataTables_info"
             role="status"
             aria-live="polite">
             Showing 1 to 10 of 27
            </p>
           </div>
           <div className="col-md-6">
            <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
             <ul className="pagination">
              <li className="page-item disabled">
               <a className="page-link" aria-label="Previous" href="#">
                <span aria-hidden="true">«</span>
               </a>
              </li>
              <li className="page-item active">
               <a className="page-link" href="#">
                1
               </a>
              </li>
              <li className="page-item">
               <a className="page-link" href="#">
                2
               </a>
              </li>
              <li className="page-item">
               <a className="page-link" href="#">
                3
               </a>
              </li>
              <li className="page-item">
               <a className="page-link" aria-label="Next" href="#">
                <span aria-hidden="true">»</span>
               </a>
              </li>
             </ul>
            </nav>
           </div>
          </div>
         </div>
        </div>
       </div>



       {/* ORDER DETAILS */}
       <div className="modal fade" role="dialog" tabIndex={-1} id="modal-1">
        <div className="modal-dialog modal-xl" role="document">
         <div className="modal-content">
          <div className="modal-header">
           <h4 className="modal-title">Preview</h4>
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
             <span>Job Title:&nbsp;</span>
             <span>{modData.order.job_name}</span>
            </div>
            <div className="col">
             <span>Customer:&nbsp;</span>
             <span>{modData.order.cust_name}</span>
            </div>
            <div className="col">
             <span>Created:&nbsp;</span>
             <span>{modData.order.order_date}</span>
            </div>
           </div>
           <div className="row">
            <div className="col">
             <span>Job Id:&nbsp;</span>
             <span>{modData.order.order_id}</span>
            </div>
          </div>

          {unit_list}
            
          

           <div className="row">
            <div className="col">
             <span className="fw-bold">Parts Needed:</span>
             <div className="row">
              <div className="col">
               
               {part_list}
              </div>
             </div>
            </div>
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
            <div className="row ">
             <div className="coln text-end">
              <Link to={"/Edit_Job_Order/"+modData.order.order_id}>
               <Button data-bs-dismiss="modal" >Edit</Button>
              </Link>
              &nbsp;
              <Button className="mr-4">Delete</Button>
             </div>
            </div>
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

       <div
        className="offcanvas offcanvas-start offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        style={{ width: "398px" }}>
        <div className="offcanvas-header" style={{ height: "85px" }}>
         {/* Start: Pretty Search Form */}
         <form className="search-form">
          <div className="input-group">
           <span className="input-group-text">
            <i className="fa fa-search" />
           </span>
           <input
            className="form-control"
            type="text"
            placeholder="Search"
            style={{ width: "273.5px" }}
           />
          </div>
         </form>
         {/* End: Pretty Search Form */}
         <button
          className="btn-close"
          type="button"
          aria-label="Close"
          data-bs-dismiss="offcanvas"
         />
        </div>
        <div
         className="offcanvas-body"
         style={{ width: "394px", paddingLeft: "23px" }}>
         <div className="col">
          <p>Search by:</p>
         </div>
         <div className="col">
          <div className="form-check">
           <input className="form-check-input" type="radio" id="formCheck-1" />
           <label className="form-check-label" htmlFor="formCheck-1">
            Order Id
           </label>
          </div>
          <div className="form-check">
           <input className="form-check-input" type="radio" id="formCheck-4" />
           <label className="form-check-label" htmlFor="formCheck-4">
            Job Description
           </label>
          </div>
          <div className="form-check">
           <input className="form-check-input" type="radio" id="formCheck-3" />
           <label className="form-check-label" htmlFor="formCheck-3">
            Customer
           </label>
          </div>
          <div className="form-check">
           <input className="form-check-input" type="radio" id="formCheck-2" />
           <label className="form-check-label" htmlFor="formCheck-2">
            Assigned Technician
           </label>
          </div>
         </div>
         <div className="col">
          <span>Filter by status:</span>
         </div>
         <div className="col">
          <select style={{ width: "339px" }}>
           <optgroup label="Status">
            <option value={12} selected>
             Completed
            </option>
            <option value={13}>Repair in Progress</option>
            <option value={14}>Awaiting Parts</option>
            <option value={14}>Scheduling Delivery</option>
            <option value={14}>Awaiting Delivery</option>
            <option value={14}>Under Evaluation</option>
            <option value={14}>Awaiting Technician</option>
           </optgroup>
          </select>
         </div>
         <div className="col">
          {/* Start: Multiple Input Select Pills */}
          <div>
           <label className="form-label">Filter by Warranty:</label>
           <div className="selectgroup selectgroup-pills">
            <label className="selectgroup-item">
             <input
              type="checkbox"
              name="value"
              defaultValue="HTML"
              className="selectgroup-input"
              defaultChecked
             />
             <span className="selectgroup-button">With warranty</span>
            </label>
            <label className="selectgroup-item">
             <input
              type="checkbox"
              name="value"
              defaultValue="CSS"
              className="selectgroup-input"
             />
             <span className="selectgroup-button">Without warranty</span>
            </label>
           </div>
          </div>
          {/* End: Multiple Input Select Pills */}
         </div>
         <div className="col text-center" style={{ paddingTop: "40px" }}>
          <button
           className="btn btn-primary"
           type="button"
           style={{
            width: "314.984px",
            background: "rgb(12,30,31)",
           }}>
           Apply Filters
          </button>
         </div>
         <div className="col text-center" style={{ paddingTop: "9px" }}>
          <button
           className="btn btn-primary"
           type="button"
           style={{
            width: "315.102px",
            background: "rgb(112,112,112)",
           }}>
           Reset Filter
          </button>
         </div>
        </div>
       </div>
       <a className="border rounded d-inline scroll-to-top" href="#page-top">
        <i className="fas fa-angle-up" />
       </a>
      </div>
     </div>
    </div>
   </div>
  );
};

export default JobOrder;
