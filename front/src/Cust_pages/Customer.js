import Navbar from "../Navbar";
import Header from "../Header";
import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import sample_cust from "./Cust_list";



var Customer = () => {
     const history = useNavigate(); //

     const handleEdit = (id, Name, Address, Email, Contact) => {
      localStorage.setItem("Name", Name);
      localStorage.setItem("Address", Address);
      localStorage.setItem("Email", Email);
      localStorage.setItem("Contact", Contact);
      localStorage.setItem("Id", id);
     };

     const handleData = (id) => {
      var index = sample_cust
       .map(function (e) {
        return e.id;
       })
       .indexOf(id);

      sample_cust.splice(index, 1);
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
     <div className="d-flex flex-column" id="content-wrapper">
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
         Customer
        </h3>
        <a
         className="btn btn-primary btn-sm d-none d-sm-inline-block"
         role="button"
         style={{
          background: "rgb(2,60,63)",
          marginRight: "26px",
          paddingRight: "12px",
          borderRadius: "16px",
          fontSize: "16px",
          paddingTop: "6px",
         }}
         href="/create_customer">
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
         &nbsp;Add new customer
        </a>
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
          <table className="table my-0" id="dataTable">
           <thead>
            <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Address</th>
             <th>Email</th>
             <th>Contact</th>
            </tr>
           </thead>
           <tbody>
            {sample_cust && sample_cust.length > 0
             ? sample_cust.map((item) => {
                return (
                 <tr>
                  <td>{item.id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Address}</td>
                  <td>{item.Email}</td>
                  <td>{item.Contact}</td>
                  <td>
                   <Button onClick={() => handleData(item.id)}>Delete</Button>
                   &nbsp;
                   <Link to={"/edit_customer"}>
                    <Button
                     onClick={() =>
                      handleEdit(
                       item.id,
                       item.Name,
                       item.Address,
                       item.Email,
                       item.Contact
                      )
                     }>
                     edit
                    </Button>
                   </Link>
                  </td>
                 </tr>
                );
               })
             : "No data present"}
           </tbody>
           <tfoot>
            <tr />
           </tfoot>
          </table>
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

export default Customer;
