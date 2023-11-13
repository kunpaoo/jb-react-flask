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
      "items":[]
    }
  );

  const modalData = (id) => {
    fetch("/api/po/"+id)
    .then((res)=>res.json())
    .then((d)=>{
      console.log(d)
      setModData(d);
    })
  }


  const [items, setItems] = useState([]);
  const [numitem,setNumItems] = useState(1);
  const[editMod, setEditMod] = useState(
    {
      "vendor":{
        "name":"",
        "address":"",
        "phone":"",
        "email":"",
      },
      "items":[]
    }
  );


  const editModalData = (id) => {

    fetch("/api/po/"+id)
    .then((res)=>res.json())
    .then((d)=>{
      console.log(d)
      setEditMod(d);
    })

    setNumItems(editMod.items.length);
    setItems(editMod.items.map((item,index) => (
      <>
      <div id={index+1}>
      <div className="row mt-1">
      <div className="col">
        <span>Name&nbsp;</span>
        <input defaultValue={item.item_name} name={"nitem_name"+(index+1)} type="text" className="form-control" />
      </div>
      <div className="col">
        <span>Brand&nbsp;</span>
        <input defaultValue={item.brand} name={"nbrand"+(index+1)} type="text" className="form-control" />
      </div>
      </div>
      <div className="row mt-1">
      <div className="col">
        <span>Price&nbsp;</span>
        <input defaultValue={item.price} name={"nprice"+(index+1)} type="number" className="form-control" />
      </div>
      <div className="col">
        <span>Quantity&nbsp;</span>
        <input defaultValue={item.quantity} name={"nquantity"+(index+1)} type="number" className="form-control" />
        <div className="d-flex justify-content-end">
        <button onClick={event => removeItem(event,index+1)} className="btn btn-danger btn-sm mt-2">Delete Item</button>
        </div>
      </div>
      </div>
      </div>
      </>

  )));

  console.log("EDIT RESET "+items)
    
  }


  var po_list;
  data === (null || undefined)? po_list = "loading":
  po_list = data.map((row)=>{
    return(
    <tr>
      <td>{row.po_id}</td>
      <td className="lh-sm text-start">
        <a href="/" onClick={() => modalData(row.po_id)} className="text-decoration-none text-reset" data-bs-target="#modal-1" data-bs-toggle="modal">
          {row.vendor}<br/>
           
        </a>
      </td>
      <td>{row.date_ordered}</td>
      <td>{row.completed? 
      <span className="badge bg-success">Completed</span>:
      <span className="badge bg-secondary">Not Completed</span>
      }</td>
      <td>
        <button
        className="btn text-white me-1"
        type="button"
        style={{ background: "rgb(23,59,62)" }}
        data-bs-target="#modal-2"
        data-bs-toggle="modal"
        onClick={() => editModalData(row.po_id)}
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
 
    const [isNewData, setIsNewData] = useState(false);

    const getData = () => {

      var n = isNewData? "n" : "";
      let f = isNewData? "#editForm" : "#addForm";
      
      var formm = new FormData(document.querySelector(f));

      console.log(...formm)
      var dat = {
          vendor:{
            name:formm.get(n+'vendor_name'),
            phone:formm.get(n+'vendor_phone'),
            address:formm.get(n+'vendor_add'),
            email:formm.get(n+'vendor_email')
          },
          parts:[]
      }


      for(let x = 1;x<=items.length+1;x++){
        console.log("READING ITEM " + formm.get('item_name'+x))
        if (formm.get(n+'item_name'+x) == null){
          continue;
        }
        dat.parts.push({
          item_name:formm.get(n+'item_name'+x),
          brand:formm.get(n+'brand'+x),
          price:formm.get(n+'price'+x),
          quantity:formm.get(n+'quantity'+x),
        })
      } 

      JSON.stringify(dat.vendor)
      JSON.stringify(dat.parts)
      return JSON.stringify(dat);

    }

    const handleSubmit = (event, edit) => {
      let dat = getData();
      edit? setIsNewData(true):setIsNewData(false);
      console.log(dat)
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
      let dat = getData()
      fetch('/update/po/<id>',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:dat
    })
    .then((res)=>(res.text()))
    .then((a)=>console.log("NEXT: ",a));
    }

    var addItem = (event,edit) => {
      
      let n = edit? setIsNewData(true):setIsNewData(false);
      setNumItems(numitem+1);
      let num = numitem+1;
      let newItem = (
        <>
        <div id={num}>
        <div className="row mt-3">
        <div className="col">
          <span>Name&nbsp;</span>
          <input name={n+"item_name"+num} type="text" className="form-control" />
        </div>
        <div className="col">
          <span>Brand&nbsp;</span>
          <input name={n+"brand"+num} type="text" className="form-control" />
        </div>
        </div>
        <div className="row mt-1">
        <div className="col">
          <span>Price&nbsp;</span>
          <input name={n+"price"+num} type="number" className="form-control" />
        </div>
        <div className="col">
          <span>Quantity&nbsp;</span>
          <input name={n+"quantity"+num} type="number" className="form-control" />
          <div className="d-flex justify-content-end">
          <button onClick={event => removeItem(event,num)} className="btn btn-danger btn-sm mt-2">Delete Item</button>
          </div>
        </div>
        </div>
        </div>
        </>
      );
      setItems([...items,newItem])
    }
    
    var removeItem = (event,id) => {
      event.preventDefault();
      var inp = document.getElementById(id);
      inp.remove();
    }





    //render
    return (
     <div id="page-top" class="overflow-hidden">
      <div id="wrapper">
       <Navbar />
       <div
        id="wrapper container-fluid border border-black"
        style={{ height: "100vh", overflowY: "auto", width: "100%" }}>
        <div
         className="d-flex flex-column container-fluid"
         id="content-wrapper"></div>
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
               href="/"
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
                <th className="text-start">Vendor</th>
                <th>Date Created</th>
                <th>Status</th>
               </tr>
              </thead>
              <tbody>

                {po_list}
               
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
                  <strong>Vendor: {modData.vendor.vendor}</strong>
                 </span>
                 <div className="row">
                  <div
                   className="col"
                   style={{ marginBottom: "3px" }}>
                   <span>Address:&nbsp;</span>
                   <span>{modData.vendor.vendor_add}</span>
                  </div>
                 </div>

                 <div
                  className="row"
                  style={{ marginLeft: "19px", marginRight: "7px" }}>
                  <div className="col">
                   <span>Phone:&nbsp; {modData.vendor.vendor_phone}</span>
                  </div>
                  <div className="col">
                   <span>Email:&nbsp; {modData.vendor.vendor_email}</span>
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
                {modData.items.map(part => {
                  return(
                    <tr>
                    <td>{part.item_name}</td>
                    <td>{part.brand}</td>
                    <td>{part.price}</td>
                    <td>{part.quantity}</td>
                    </tr>
                  )
                }
                )}
                
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



         {/* ========== Start Edit Purchase Order ========== */}
         <div className="modal fade" role="dialog" tabIndex={-1} id="modal-2">
          <div className="modal-dialog modal-lg" role="document">
           <div className="modal-content">
           <form method="POST" id="editForm">
            <div className="modal-body mx-2 p-3">
            <div className="p-3" >
              
              <strong className="fs-5">Vendor</strong>
              <div className="row mt-1">
              <div className="col">
                Name 
                <input name="nvendor_name" type="text" className="form-control" defaultValue={modData.vendor.vendor} />
              </div>
              </div>
              <div className="row mt-1">
              <div className="col">
                Address&nbsp;
                <input name="nvendor_add" type="text" className="form-control" defaultValue={modData.vendor.vendor_add}/>
              </div>
              </div>
              <div className="row mt-1">
              <div className="col">
                Phone&nbsp;
                <input name="nvendor_phone" type="text" className="form-control" defaultValue={modData.vendor.vendor_phone}/>
              </div>
              <div className="col">
                Email&nbsp;
                <input name="nvendor_email" type="text" className="form-control" defaultValue={modData.vendor.vendor_email}/>
              </div>
              </div>
            </div>
                 
            <div className="p-3" >
            <strong className="fs-5">Items</strong>
              {items.map((item)=>item)}
              
              <button type="button" onClick={(event) => addItem(event,true)} className="btn btn-sm btn-secondary mt-3" >Add Item</button>
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
              onClick={(event) => handleSubmit(event,true)}
              style={{ background: "rgb(0, 48, 46)"}}>
              Submit
             </button>
             
            </div>
            </div>
            </form>

            </div>
          </div>
         </div>
         


         {/* ========== Start Add Purchase Order ========== */}
         <div className="modal fade" role="dialog" tabIndex={-1} id="modal-3">
          <div className="modal-dialog modal-lg" role="document">
           <div className="modal-content">
           <form method="POST" id="addForm">
            <div className="modal-body mx-2 p-3">
            


            <div className="p-3" >
              
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
                Phone&nbsp;
                <input name="vendor_phone" type="text" className="form-control" />
              </div>
              <div className="col">
                Email&nbsp;
                <input name="vendor_email" type="text" className="form-control" />
              </div>
              </div>
            </div>
                 
            <div className="p-3" >
            <strong className="fs-5">Items</strong>
              <div className="row mt-1">
              <div className="col">
                <span>Name&nbsp;</span>
                <input name="item_name1" type="text" className="form-control" />
              </div>
              <div className="col">
                <span>Brand&nbsp;</span>
                <input name="brand1" type="text" className="form-control" />
              </div>
              </div>
              <div className="row mt-1">
              <div className="col">
                <span>Price&nbsp;</span>
                <input name="price1" type="number" className="form-control" />
              </div>
              <div className="col">
                <span>Quantity&nbsp;</span>
                <input name="quantity1" type="number" className="form-control" />
              </div>
              </div>

              {items.map((item)=>item)}
              <button type="button" onClick={event=>addItem(event,false)} className="btn btn-sm btn-secondary mt-3" >Add Item</button>

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
              className="btn btn-light text-white"
              type="button"
              data-bs-dismiss="modal"
              onClick={(event)=>handleSubmit(event,false)}
              style={{ background: "rgb(0, 48, 46)"}}>
              Submit
             </button>
             
            </div>
            
            </form>
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