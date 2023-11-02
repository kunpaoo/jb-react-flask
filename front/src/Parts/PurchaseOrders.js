import Navbar from "../Navbar";
import Header from "../Header";
import React,{useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

var PurchaseOrders = () => {

  const navigate = useNavigate();

  const [data,setData] = useState();

  useEffect(()=>{
    fetch("/api/po")
    .then((res)=>res.json())
    .then((data)=>{
      setData(data);
    })
  })

  
  const [modData, setModData] = useState(
    {
      "vendor":{
        "name":"",
        "address":"",
        "phone":"",
        "email":"",
      },
      "parts":[]
    }
  );
  const modalData = (id) => {
    fetch("/api/po/"+id)
    .then((res)=>res.json())
    .then((d)=>{
      console.log(d)
      setModData(d)
    })
  }

  var po_list;
  data === (null || undefined)? po_list = "loading":
  po_list = data.map((row)=>{
    return(
    <tr>
      <td>{row.po_id}</td>
      <td className="lh-sm text-start" style={{ fontSize: "9px" }}>
        <a href="/" onClick={() => modalData(row.po_id)} className="text-decoration-none text-reset" data-bs-target="#modal-1" data-bs-toggle="modal">
          <strong style={{fontSize: "12px"}}>{row.item_name}</strong> <br/>
            ID: {row.item_id}
        </a>
      </td>
      <td>{row.quantity}</td>
      <td>2023-04-03</td>
      <td>
        <button
        className="btn text-white me-1"
        type="button"
        style={{ background: "rgb(23,59,62)" }}
        data-bs-target="#modal-2"
        data-bs-toggle="modal"
        >
        Edit
        </button>
        <button
        className="btn text-white"
        type="button"
        style={{ background: "rgb(23,59,62)" }}
        onclick="confirm_cancel"
        data-bs-toggle="modal">
        Cancel
        </button>
      </td>
      </tr>
    )});
 

    const getData = () => {
      var formm = new FormData(document.querySelector('form'));
      var dat = {
          item_name:formm.get("item_name"),
          quantity:formm.get("quantity")
      }
      return JSON.stringify(dat);
    }

    const handleSubmit = (event) => {
      let dat = getData();

      fetch('/add/po',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:dat
    })
    .then((res)=>(res.text()))
    .then((a)=>console.log("NEXT: ",a));
    // console.log(formData);
    // console.log(JSON.stringify(dat));
    //  navigate('/job_order');
    }

    const handleUpdate = (event)  => {

    }

    const [items, setItems] = useState([])
    var addItem = () => {
      let newItem = (
        <>
        <div className="row mt-3">
        <div className="col">
          <span>Name&nbsp;</span>
          <input name="item_name" type="text" className="form-control" />
        </div>
        <div className="col">
          <span>Brand&nbsp;</span>
          <input name="brand" type="text" className="form-control" />
        </div>
        </div>
        <div className="row mt-1">
        <div className="col">
          <span>Price&nbsp;</span>
          <input name="price" type="number" className="form-control" />
        </div>
        <div className="col">
          <span>Quantity&nbsp;</span>
          <input name="quantity" type="number" className="form-control" />
        </div>
        </div>
        </>
      )
      setItems([...items,newItem])
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
           className="d-sm-flex justify-content-between align-items-center"
           id="head2"
           style={{
            paddingRight: "0px",
            marginRight: "0px",
            background: "#ffffff",
            boxShadow: "0px 0px 20px 1px",
           }}>
           <h3 className="text-dark mb-0" style={{ marginLeft: "24px" }}>
            Parts &gt;
            <span style={{ marginLeft: "10px", fontSize: "21px" }}>
             Purchase Orders
            </span>
           </h3>
          </div>
         </div>
         <div className="container-fluid">
          <div>
           <div className="row" id="headbot">
            <div className="col h-auto">
             <div
              className="d-flex p-2 pt-3">
              <input
               type="date"
               style={{
                height: "33px"
               }}
              />
              <button
               className="btn btn-sm ms-2 text-white px-2 "
               style={{
                background: "rgb(2,60,63)",
                width: "11em",
                fontSize:"12px"
               }}
               href="/Bills_ListofPricings.html"
               data-bs-target="#modal-3"
               data-bs-toggle="modal">
               Add Purchase Order
              </button>
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
              <span style={{ paddingTop: "0px", marginTop: "-20px" }}>
               Show:
              </span>
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
           </div>
          </div>


          <div className="card shadow">
           <div className="card-body" style={{ paddingTop: "0px" }}>
            <div
             className="table-responsive table mt-2"
             id="dataTable-2"
             role="grid"
             aria-describedby="dataTable_info">
             <table className="table text-center table-hover align-middle" id="dataTable">
              <thead>
               <tr>
                <th>ID</th>
                <th className="text-start">Part</th>
                <th>Quantity</th>
                <th>Date Created</th>
               </tr>
              </thead>
              <tbody>

                {po_list}
               <tr>
                <td>12123</td>
                <td className="lh-sm text-start" style={{ fontSize: "9px" }}>
                  <a href="/" className="text-decoration-none text-reset" data-bs-target="#modal-1" data-bs-toggle="modal">
                    <strong style={{fontSize: "12px"}}>Acer Battery</strong> <br/>
                     ID: 1231112-122
                  </a>
                </td>
                <td>1</td>
                <td>2023-04-03</td>
                <td>
                 <button
                  className="btn text-white me-1"
                  type="button"
                  style={{ background: "rgb(23,59,62)" }}
                  data-bs-target="#modal-2"
                  data-bs-toggle="modal">
                  Edit
                 </button>
                 <button
                  className="btn text-white"
                  type="button"
                  style={{ background: "rgb(23,59,62)" }}
                  onclick="confirm_cancel"
                  data-bs-toggle="modal">
                  Cancel
                 </button>
                </td>
               </tr>
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






         {/* ========== Start Modal for purchase order details ========== */}
         <div className="modal fade" role="dialog" tabIndex={-1} id="modal-1">
          <div className="modal-dialog modal-lg" role="document">
           <div className="modal-content">
            <div className="modal-body">
             <h4 className="modal-title text-center">Purchase Order Details</h4>
             <div className="pt-3 mx-3 pe-3">
              
             <div className="text-white mb-2 py-2 ps-3"
                 style={{
                  background: "#162215",
                  borderRadius: "7px",
                 }}>
              
                 <span style={{ fontSize: "20px" }}>
                  <strong>Vendor: {modData.vendor.name}</strong>
                 </span>
                 <div className="row">
                  <div
                   className="col"
                   style={{ marginBottom: "3px" }}>
                   <span>Address:&nbsp;</span>
                   <span>{modData.vendor.address}</span>
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
                   <span>Number:&nbsp; {modData.vendor.phone}</span>
                  </div>
                  <div className="col">
                   <span>Email:&nbsp; {modData.vendor.email}</span>
                  </div>
                 </div>

                 </div> 
               
              
              <div
                className="text-black py-2 px-3"
                style={{ borderRadius: "6px" }}>
                <b className="fs-5">Items</b>

              <table className="mt-1 table text-start table-bordered w-100">
              <thead className="table-gray-200"  style={{background:"#162215"}} >
                <tr >
                  <th width="30%">Name</th>
                  <th width="30%">Brand</th>
                  <th width="20%">Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              </table>
              </div>
               
              <div className="my-3 card bg-outline-info text-black w-100 h-auto">
              <div className="card-header">
                <b>Delivery</b>
              </div>
              <div className="card-body">
              <div className="card-text text-center">

                {/* table */}

              <table className="text-start table table-striped table-bordered">
                <thead className="thead-light">
                  <tr>
                  <th>Delivery Date</th>
                  <th>Destination</th>
                  <th>Origin</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                </tbody>
              </table>
              </div>
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
         
    
         {/* ========== End Modal for parts information ========== */}



         {/* ========== Start Edit Purchased Item ========== */}
         <div className="modal fade" role="dialog" tabIndex={-1} id="modal-2">
          <div className="modal-dialog modal-lg" role="document">
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
               <div className="row" style={{ borderRadius: "6px" }}>
                <div
                 className="col"
                 style={{
                  paddingBottom: "15px",
                  borderRadius: "34px",
                  borderColor: "rgba(133,135,150,0)",
                  color: "rgb(0, 0, 0)",
                  paddingRight: "22px",
                 }}>
                 <div className="row" style={{ paddingTop: "7px" }}>
                  <div className="col">
                   <span style={{ paddingTop: "0px" }}>
                    <strong style={{ fontSize: "20px" }}>Item Details</strong>
                   </span>
                  </div>
                 </div>
                 <div className="row" style={{ paddingTop: "6px" }}>
                  <div className="col">
                   <span>Unit:&nbsp;</span>
                   <input type="text" className="form-control" />
                  </div>
                  <div className="col">
                   <span>Price:&nbsp;</span>
                   <input type="text" className="form-control" />
                  </div>
                 </div>
                 <div className="row">
                  <div className="col">
                   <span>Brand:&nbsp;</span>
                   <input type="text" className="form-control" />
                  </div>
                  <div className="col">
                   <span>Quantity:&nbsp;</span>
                   <input type="text" className="form-control" />
                  </div>
                 </div>
                </div>
               </div>
               <div className="row">
                <div
                 className="col"
                 style={{
                  marginTop: "14px",
                  borderRadius: "7px",
                  color: "rgb(0, 0, 0)",
                  paddingTop: "12px",
                  paddingLeft: "18px",
                  paddingBottom: "12px",
                 }}>
                 <span style={{ fontSize: "20px" }}>
                  <strong>Vendor</strong>:&nbsp;
                 </span>
                 <span style={{ fontSize: "20px" }}>
                  <input type="text" className="form-control" />
                 </span>
                 <div className="row">
                  <div
                   className="col"
                   style={{ paddingBottom: "0px", marginBottom: "3px" }}>
                   <span>Address:&nbsp;</span>
                   <input type="text" className="form-control" />
                  </div>
                 </div>
                 <div className="row">
                  <div className="col" style={{ marginBottom: "3px" }}>
                   <span>Contact Details:&nbsp;</span>
                  </div>
                 </div>
                 <div className="row" style={{ marginRight: "7px" }}>
                  <div className="col">
                   <span>Number:&nbsp;</span>
                   <input type="text" className="form-control" />
                  </div>
                  <div className="col">
                   <span>Email:&nbsp;</span>
                   <input type="text" className="form-control" />
                  </div>
                 </div>
                </div>
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
             <button
              className="btn btn-light"
              type="button"
              data-bs-dismiss="modal"
              style={{ background: "rgb(0, 48, 46)", color: "#ffffff" }}>
              Save
             </button>
            </div>
           </div>
          </div>
         </div>
         


         {/* ========== Start Add Purchase Order ========== */}
         <div className="modal fade" role="dialog" tabIndex={-1} id="modal-3">
          <div className="modal-dialog modal-lg" role="document">
           <div className="modal-content">
            <div className="modal-body mx-2 p-3">
            <form method="POST">


            <div className="border border-black p-3" >
              <strong className="fs-5">Vendor</strong>
              <div className="row mt-1">
              <div className="col">
                Name 
                <input name="vendor_name" type="text" className="form-control" />
              </div>
              </div>
              <div className="row mt-1">
              <div className="col">
                Address&nbsp;
                <input name="vendor_add" type="text" className="form-control" />
              </div>
              </div>
              <div className="row mt-1">
              <div className="col">
                Number&nbsp;
                <input name="vendor_phone" type="text" className="form-control" />
              </div>
              <div className="col">
                Email&nbsp;
                <input name="vendor_email" type="text" className="form-control" />
              </div>
              </div>
            </div>
                 
            <div className="border border-black p-3" >
            <strong className="fs-5">Items</strong>
              <div className="row mt-1">
              <div className="col">
                <span>Name&nbsp;</span>
                <input name="item_name" type="text" className="form-control" />
              </div>
              <div className="col">
                <span>Brand&nbsp;</span>
                <input name="brand" type="text" className="form-control" />
              </div>
              </div>
              <div className="row mt-1">
              <div className="col">
                <span>Price&nbsp;</span>
                <input name="price" type="number" className="form-control" />
              </div>
              <div className="col">
                <span>Quantity&nbsp;</span>
                <input name="quantity" type="number" className="form-control" />
              </div>
              </div>

              {items.map((item)=>item)}
              <button type="button" onClick={addItem} className="btn btn-sm btn-secondary mt-3" >Add Item</button>

            </div>


               
              
             </form>
            </div>

           

            <div className="modal-footer">
             <button
              className="btn btn-light"
              type="button"
              data-bs-dismiss="modal"
              style={{ background: "rgb(241,241,241)" }}>
              Close
             </button>
             <button
              className="btn btn-light text-white"
              type="button"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
              style={{ background: "rgb(0, 48, 46)"}}>
              Submit
             </button>
             
            </div>
            
           </div>
           
          </div>
         </div>
         
         </div>
         {/* ========== End Add Purchase ========== */}
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
}


export default PurchaseOrders;