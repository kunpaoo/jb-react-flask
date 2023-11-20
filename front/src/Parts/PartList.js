import Navbar from "../Navbar";
import Header from "../Header";
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";




var PartList = () => {

  const navigate = useNavigate();

  const [data,setData] = useState();

  useEffect(()=>{
    fetch("/api/parts")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setData(data);
    })
  })
  
  var parts_list;
  data === (null || undefined)? parts_list = "loading":
  parts_list = data.map((part)=>{
    return(
        <>
        <tr>
            <td className="text-center">{part.item_id}</td>
            <td>
            <a
            className="text-decoration-none text-reset"
            href="/"
            data-bs-target="#modal-2"
            data-bs-toggle="modal">
            {part.item_name}
            </a>
            </td>
            <td>{part.brand}</td>
            <td>{part.quantity}</td>
            <td>{part.price}</td>
        </tr>
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

     <div>
      <div
       style={{
        paddingTop: "0px",
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
        }}>
        <h3 className="text-dark mb-0" style={{ marginLeft: "24px" }}>
         Search Parts
        </h3>
       </div>
      </div>
      <div className="container-fluid">
       <div>
        <div className="row" id="headbot">
         <div className="col h-auto">
          <div
           id="dataTable_filter-1"
           className="dataTables_filter"
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
             borderRadius: "5px",
             fontSize: "10px",
             paddingTop: "6px",
             marginRight: "0px",
             marginLeft: "9px",
             paddingRight: "12px",
            }}
            href="/parts/purchaseorders">
            &nbsp; View Purchase Orders
           </a>
          </div>
         </div>
         <div
          className="col-xxl-4 col-auto w-auto flex-wrap d-flex position-relative"
          style={{ paddingTop: "13px" }}>
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
          style={{ marginBottom: "-28px", paddingTop: "16px" }}>
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
              marginTop: "-11px",
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
        </div>
       </div>
       <div className="card shadow">
        <div className="card-body" style={{ paddingTop: "0px" }}>
         <div
          className="table-responsive table mt-2"
          id="dataTable-2"
          role="grid"
          aria-describedby="dataTable_info">
          <table className="table table-bordered table-hover" id="dataTable">
           <thead>
            <tr>
             <th  className="text-center">ID</th>
             <th>Name</th>
             <th>Brand</th>
             <th>Price</th>
             <th>Quantity</th>
            </tr>
           </thead>
           <tbody>
            {parts_list}
           </tbody>
           <tfoot>
            <tr />
           </tfoot>
          </table>
         </div>
         {/* Modal for Parts Information*/}
         <div className="modal fade" role="dialog" tabIndex={-1} id="modal-2">
          <div className="modal-dialog modal-xl" role="document">
           <div className="modal-content">
            <div className="modal-body">
             <h4 className="modal-title text-center">Acer Battery</h4>
             <div className="row text-center">
              <div className="col">
               <span>Current Stocks:&nbsp;</span>
               <span>7</span>
              </div>
             </div>
             <div className="row text-center">
              <div className="col">
               <span />
              </div>
             </div>
             <div
              className="row"
              style={{
               paddingTop: "20px",
               marginLeft: "10px",
               marginRight: "6px",
              }}>
              <div className="col" style={{ paddingRight: "23px" }}>
               <div
                className="row"
                style={{ background: "rgb(25,34,22)", borderRadius: "6px" }}>
                <div
                 className="col"
                 style={{
                  paddingBottom: "15px",
                  borderRadius: "34px",
                  borderColor: "rgba(133,135,150,0)",
                  color: "rgb(255,255,255)",
                  paddingRight: "22px",
                 }}>
                 <div className="row" style={{ paddingTop: "7px" }}>
                  <div className="col" style={{ paddingLeft: "20px" }}>
                   <span style={{ paddingTop: "0px" }}>Item Details:</span>
                  </div>
                 </div>
                 <div
                  className="row"
                  style={{ paddingTop: "6px", marginLeft: "18px" }}>
                  <div className="col">
                   <span>Unit:&nbsp;</span>
                   <span>321312324</span>
                  </div>
                  <div className="col">
                   <span>Price:&nbsp;</span>
                   <span>$12</span>
                  </div>
                 </div>
                 <div className="row" style={{ marginLeft: "20px" }}>
                  <div className="col">
                   <span>Brand:&nbsp;</span>
                   <span>Acer</span>
                  </div>
                 </div>
                </div>
               </div>
               <div className="row">
                <div
                 className="col"
                 style={{
                  marginTop: "14px",
                  background: "#162215",
                  borderRadius: "7px",
                  color: "rgb(255,255,255)",
                  paddingTop: "12px",
                  paddingLeft: "18px",
                  paddingBottom: "12px",
                 }}>
                 <span style={{ fontSize: "20px" }}>
                  <strong>Vendor</strong>:&nbsp;
                 </span>
                 <span style={{ fontSize: "20px" }}>
                  <strong>Lit Tech</strong>
                 </span>
                 <div className="row">
                  <div
                   className="col"
                   style={{ paddingBottom: "0px", marginBottom: "3px" }}>
                   <span>Address:&nbsp;</span>
                   <span>Purok Verde, General Santos City</span>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col" style={{ marginBottom: "3px" }}>
                   <span>Contact Details:&nbsp;</span>
                  </div>
                 </div>
                 <div
                  className="row"
                  style={{ marginLeft: "19px", marginRight: "7px" }}>
                  <div className="col">
                   <span>Number:&nbsp;</span>
                   <span>0976 887 9876</span>
                  </div>
                  <div className="col">
                   <span>Email:&nbsp;</span>
                   <span>Littech@gmail.com</span>
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div
               className="col"
               style={{
                background: "#dedede",
                borderRadius: "6px",
                paddingTop: "14px",
                paddingLeft: "20px",
                marginBottom: "-1px",
               }}>
               <span style={{ fontSize: "23px" }}>
                <strong>Item Change Log</strong>
               </span>
               <div
                className="table-responsive"
                style={{ paddingBottom: "0px" }}>
                <table className="table">
                 <thead>
                  <tr>
                   <th style={{ background: "rgba(255,255,255,0)" }}>
                    Time stamp
                   </th>
                   <th style={{ background: "rgba(255,255,255,0)" }}>
                    Quantity
                   </th>
                  </tr>
                 </thead>
                 <tbody>
                  <tr>
                   <td style={{ background: "rgba(255,255,255,0)" }}>
                    09/12/2023
                   </td>
                   <td style={{ background: "rgba(255,255,255,0)" }}>+2</td>
                   <td style={{ background: "rgba(255,255,255,0)" }}>
                    <a href="/">
                     <span style={{ textDecoration: "underline" }}>
                      View details
                     </span>
                    </a>
                   </td>
                  </tr>
                  <tr>
                   <td style={{ background: "rgba(255,255,255,0)" }}>
                    09/12/2023
                   </td>
                   <td style={{ background: "rgba(255,255,255,0)" }}>+1</td>
                   <td style={{ background: "rgba(255,255,255,0)" }}>
                    <a href="/">
                     <span style={{ textDecoration: "underline" }}>
                      View details
                     </span>
                    </a>
                   </td>
                  </tr>
                  <tr>
                   <td style={{ background: "rgba(255,255,255,0)" }}>
                    09/12/2023
                   </td>
                   <td style={{ background: "rgba(255,255,255,0)" }}>+1</td>
                   <td style={{ background: "rgba(255,255,255,0)" }}>
                    <a href="#">
                     <span style={{ textDecoration: "underline" }}>
                      View details
                     </span>
                    </a>
                   </td>
                  </tr>
                  <tr>
                   <td style={{ background: "rgba(255,255,255,0)" }}>
                    09/12/2023
                   </td>
                   <td style={{ background: "rgba(255,255,255,0)" }}>+1</td>
                   <td style={{ background: "rgba(255,255,255,0)" }}>
                    <a href="#">
                     <span style={{ textDecoration: "underline" }}>
                      View details
                     </span>
                    </a>
                   </td>
                  </tr>
                 </tbody>
                </table>
               </div>
              </div>
             </div>
            </div>
            <div className="modal-footer">
             <button
              className="btn btn-light"
              type="button"
              data-bs-dismiss="modal"
              style={{ background: "rgb(241,241,241)" }}>
              Close
             </button>
            </div>
           </div>
          </div>
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
       <div className="modal fade" role="dialog" tabIndex={-1} id="modal-3">
        <div className="modal-dialog" role="document">
         <div className="modal-content">
          <div className="modal-header align-self-center">
           <h4 className="modal-title">Items/Parts Details</h4>
          </div>
          <div className="modal-body">
           <div className="row">
            <div className="col" />
           </div>
           <div className="row">
            <div className="col">
             <span>Text</span>
             <div className="row">
              <div className="col">
               <input type="text" />
              </div>
             </div>
            </div>
           </div>
           <div className="row">
            <div className="col">
             <span>Text</span>
             <div className="row">
              <div className="col">
               <input type="text" />
              </div>
             </div>
            </div>
           </div>
           <div className="row">
            <div className="col">
             <span>Text</span>
             <div className="row">
              <div className="col">
               <input type="text" />
              </div>
             </div>
            </div>
            <div className="col">
             <span>Text</span>
             <div className="row">
              <div className="col">
               <input type="text" />
              </div>
             </div>
            </div>
           </div>
           <div className="row">
            <div className="col">
             <span>Text</span>
             <div className="row">
              <div className="col">
               <input type="text" />
              </div>
             </div>
            </div>
            <div className="col">
             <span>Text</span>
             <div className="row">
              <div className="col">
               <input type="text" />
              </div>
             </div>
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
           <button className="btn btn-primary" type="button">
            Save
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
     </div>
    </div>
   </div>
  </div>
 );
};

export default PartList;