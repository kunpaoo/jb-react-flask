import Navbar from "../Navbar";
import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";


var Deliveries = () => {


    const [typeinput,setInput] = useState();

    function getType(event){
        let k = event.target.value;
        k === "po"?
        setInput("Purchase Order ID") :
        setInput("Order ID")
    }

    const [items,setItems] = useState([]);
    const [numitems,setNumItems] = useState(0);
    const addItem = () => {
        setNumItems(numitems+1);
        var i = numitems+1;
        const newItem = <>
            <div className="row mt-2">
            <div className="col-8 ">
            <input type="text" name={"ref_id"+i} id={"ref_id"+i} placeholder={typeinput} className="w-100"/>
            </div>
            <div className="col-2 align-self-start p-0">
            <button className="btn btn-danger btn-sm" style={{width:"3em"}}> - </button>
            </div>
            </div>
        </>
        setItems([...items,newItem]);
    }

    const deleteItem = (event) =>{
        setNumItems(numitems-1);
        document.getElementById(event.target).remove();
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
          <div className="col">
           <div
            className="d-sm-flex justify-content-between align-items-center text-start"
            id="head2"
            style={{
             paddingRight: "0px",
             marginRight: "0px",
             background: "#ffffff",
             boxShadow: "0px 0px 20px 1px",
            }}>
            <h3
             className="text-dark mb-0"
             style={{ marginLeft: "24px", paddingBottom: "0px" }}>
             Jobs &gt;
             <span
              className="text-start"
              style={{
               fontSize: "22px",
               paddingLeft: "1px",
               marginLeft: "10px",
               paddingBottom: "0px",
               marginBottom: "1px",
               paddingTop: "0px",
              }}>
              View Deliveries
             </span>
            </h3>
           </div>
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
              <button
               className="btn btn-primary btn-sm d-none d-sm-inline-block"
               
               style={{
                background: "rgb(2,60,63)",
                paddingRight: "12px",
                borderRadius: "8px",
                fontSize: "16px",
                paddingTop: "6px",
                marginRight: "-2px",
                marginLeft: "12px",
               }}
               data-bs-target="#modal-1"
               data-bs-toggle="modal">
               Add Deliveries
              </button>
             </div>
            </div>
            <div className="col text-end">
             <div style={{ paddingTop: "22px" }}>
              {/* Start: Form Select - 12 Months without Month Numbers */}
              <select>
               <option value={1} selected>
                January
               </option>
               <option value={2}>February</option>
               <option value={3}>March</option>
               <option value={4}>April</option>
               <option value={5}>May</option>
               <option value={6}>June</option>
               <option value={7}>July</option>
               <option value={8}>August</option>
               <option value={9}>September</option>
               <option value={10}>October</option>
               <option value={11}>November</option>
               <option value={12}>December</option>
              </select>
              {/* End: Form Select - 12 Months without Month Numbers */}
             </div>
            </div>
           </div>
          </div>
          {/* Start: Bootstrap Calendar */}
          <div className="bootstrap_calendar">
           <div className="container py-5">
            {/* Calendar */}
            <div className="calendar shadow bg-white p-5">
             <div className="d-flex align-items-center">
              <i className="fa fa-calendar fa-3x mr-3" />
              <h2 className="month font-weight-bold mb-0 text-uppercase">
               December 2019
              </h2>
             </div>
             <p className="font-italic text-muted mb-5">
              No events for this day.
             </p>
             <ol className="day-names list-unstyled">
              <li className="font-weight-bold text-uppercase">Sun</li>
              <li className="font-weight-bold text-uppercase">Mon</li>
              <li className="font-weight-bold text-uppercase">Tue</li>
              <li className="font-weight-bold text-uppercase">Wed</li>
              <li className="font-weight-bold text-uppercase">Thu</li>
              <li className="font-weight-bold text-uppercase">Fri</li>
              <li className="font-weight-bold text-uppercase">Sat</li>
             </ol>
             <ol className="days list-unstyled">
              <li>
               <div className="date">1</div>
               <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal-2">
                <div>Laptop Battery</div>
               </button>
               <button></button>
              </li>
              <li>
               <div className="date">2</div>
              </li>
              <li>
               <div className="date">3</div>
              </li>
              <li>
               <div className="date">4</div>
              </li>
              <li>
               <div className="date">5</div>
              </li>
              <li>
               <div className="date">6</div>
              </li>
              <li>
               <div className="date">7</div>
              </li>
              <li>
               <div className="date">8</div>
              </li>
              <li>
               <div className="date">9</div>
              </li>
              <li>
               <div className="date">10</div>
              </li>
              <li>
               <div className="date">11</div>
              </li>
              <li>
               <div className="date">12</div>
              </li>
              <li>
               <div className="date">13</div>
               <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal-2">
                <div>Printer</div>
               </button>
               <button></button>
              </li>
              <li>
               <div className="date">14</div>
              </li>
              <li>
               <div className="date">15</div>
              </li>
              <li>
               <div className="date">16</div>
              </li>
              <li>
               <div className="date">17</div>
              </li>
              <li>
               <div className="date">18</div>
              </li>
              <li>
               <div className="date">19</div>
              </li>
              <li>
               <div className="date">20</div>
              </li>
              <li>
               <div className="date">21</div>
               <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal-2">
                <div>Phone Lcd</div>
               </button>
               <button></button>
              </li>
              <li>
               <div className="date">22</div>
               <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal-2">
                <div>Laptop Battery</div>
               </button>
               <button></button>
              </li>
              <li>
               <div className="date">23</div>
              </li>
              <li>
               <div className="date">24</div>
              </li>
              <li>
               <div className="date">25</div>
              </li>
              <li>
               <div className="date">26</div>
              </li>
              <li>
               <div className="date">27</div>
              </li>
              <li>
               <div className="date">28</div>
              </li>
              <li>
               <div className="date">29</div>
              </li>
              <li>
               <div className="date">30</div>
              </li>
              <li>
               <div className="date">31</div>
              </li>
              <li className="outside">
               <div className="date">1</div>
              </li>
              <li className="outside">
               <div className="date">2</div>
              </li>
              <li className="outside">
               <div className="date">3</div>
              </li>
              <li className="outside">
               <div className="date">4</div>
              </li>
             </ol>
            </div>
           </div>
          </div>
          {/* End: Bootstrap Calendar */}


        {/* ADD DELIVERY */}
          <div className="modal fade" role="dialog" tabIndex={-1} id="modal-1">
           <div className="modal-dialog" role="document">
            <div className="modal-content">
             <div
              className="modal-header d-xl-flex justify-content-xl-start align-items-xl-start align-self-center"
              style={{ paddingTop: "26px" }}>
              <h4 style={{ fontSize: "19px" }}>Delivery Details</h4>
             </div>
             <div className="modal-body container justify-content-md-center">
              <div className="row">
                <div className="col">
               <div onChange={event => {getType(event)}} className="row">
                <div className="col">
                <input name="delitype" type="radio" value="po" /> Purchase order  
                </div>
                <div className="col">
                <input name="delitype" type="radio" value="warranty"/> Warrantied Unit
                </div>
               </div>
               </div>
            <div className="row row-auto mt-2">
            <div className="col">
                <div id="item1" className="row mt-2">
                <div className="col-8 ">
                <input type="text" name="ref_id1" id="ref_id1" placeholder={typeinput} className="w-100"/>
                </div>
                <div className="col-2 align-self-start p-0">
                <button className="btn btn-danger btn-sm" style={{width:"3em"}} onClick={deleteItem}> - </button>
                </div>
                </div>
                {items}
                <button className="btn btn-success btn-sm mt-2" onClick={addItem}>Add</button>
            </div>
            </div>
            


              </div>
              <div className="row" style={{ paddingTop: "16px" }}>
                <div className="row">
                 <div className="col text-start">
                  <span>Title</span>
                 </div>
                </div>
                <div className="row">
                 <div className="col">
                  <input type="text" style={{ width: "467px" }} />
                 </div>
                </div>
              </div>
              <div
               className="row"
               style={{ paddingTop: "16px", marginTop: "-9px" }}>
               <div className="col">
                <div className="row">
                 <div className="col text-start">
                  <span>Origin</span>
                 </div>
                </div>
                <div className="row">
                 <div className="col">
                  <input type="text" style={{ width: "467px" }} />
                 </div>
                </div>
               </div>
              </div>
              <div
               className="row"
               style={{ paddingTop: "16px", marginTop: "-9px" }}>
               <div className="col">
                <div className="row">
                 <div className="col text-start">
                  <span>Destination</span>
                 </div>
                </div>
                <div className="row">
                 <div className="col">
                  <input type="text" style={{ width: "467px" }} />
                 </div>
                </div>
               </div>
              </div>
              <div
               className="row"
               style={{ paddingTop: "16px", marginTop: "-9px" }}>
               <div className="col">
                <div className="row">
                 <div className="col text-start">
                  <span>Delivery Date</span>
                 </div>
                </div>
                <div className="row">
                 <div className="col">
                  <input type="date" style={{ width: "463.5px" }} />
                 </div>
                </div>
               </div>
              </div>
              <div
               className="row"
               style={{ paddingTop: "16px", marginTop: "-9px" }}>
               <div className="col">
                <div className="row">
                 <div className="col text-start">
                  <span>Notes</span>
                 </div>
                </div>
                <div className="row">
                 <div className="col">
                  <textarea style={{ width: "462px" }} defaultValue={""} />
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
               Close
              </button>
              <button className="btn btn-primary" type="button">
               Save
              </button>
             </div>
            </div>
           </div>
          </div>
         </div>


         <div className="modal fade" role="dialog" tabIndex={-1} id="modal-2">
          <div className="modal-dialog" role="document">
           <div className="modal-content">
            <div className="modal-header">
             <h4 className="modal-title">Delivery Details</h4>
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
               <span>Delivery Id:&nbsp;&nbsp;</span>
               <span>123-211</span>
              </div>
              <div className="col text-end">
               <span>Order Id:&nbsp;</span>
               <span>132-343</span>
              </div>
             </div>
             <div className="row">
              <div className="col">
               <span>Delivery Date:&nbsp;&nbsp;</span>
               <span>09/14/2030</span>
              </div>
              <div className="col text-end">
               <span>Date Received:&nbsp;</span>
               <span>-- -- ----</span>
              </div>
             </div>
             <div className="row">
              <div className="col">
               <span>Origin:&nbsp;</span>
               <span>OCCC</span>
              </div>
              <div className="col text-end">
               <span>Destination:&nbsp;</span>
               <span>Hp General Santo</span>
              </div>
             </div>
             <div className="row">
              <div className="col" style={{ paddingTop: "16px" }}>
               <span>Delivery Status:&nbsp;</span>
               <span>On-going</span>
              </div>
             </div>
            </div>
            <div className="modal-footer">
             <button className="btn btn-primary" type="button">
              Cancel Delivery
             </button>
             <button className="btn btn-primary" type="button">
              Scan
             </button>
             <button
              className="btn btn-primary"
              type="button"
              data-bs-target="#modal-3"
              data-bs-toggle="modal">
              Edit
             </button>
            </div>
           </div>
          </div>
         </div>
         <div className="modal fade" role="dialog" tabIndex={-1} id="modal-3">
          <div className="modal-dialog" role="document">
           <div className="modal-content">
            <div className="modal-header">
             <h4 className="modal-title">Edit Delivery</h4>
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
               <span>Delivery Id:&nbsp;&nbsp;</span>
               <span>123-211</span>
              </div>
              <div className="col text-end">
               <span>Order Id:&nbsp;</span>
               <span>132-343</span>
              </div>
             </div>
             <div className="row">
              <div className="col">
               <span>Delivery Date:&nbsp;&nbsp;</span>
               <span>09/14/2030</span>
              </div>
              <div className="col text-end">
               <span>Date Received:&nbsp;</span>
               <span>-- -- ----</span>
              </div>
             </div>
             <div className="row" style={{ paddingTop: "15px" }}>
              <div className="col">
               <span>Origin:&nbsp;</span>
               <textarea style={{ width: "221px" }} defaultValue={""} />
              </div>
              <div className="col">
               <span>Destination:&nbsp;</span>
               <textarea style={{ width: "218px" }} defaultValue={""} />
              </div>
             </div>
             <div className="row">
              <div className="col" style={{ paddingTop: "16px" }}>
               <span>Delivery Status:&nbsp;</span>
               <span>On-going</span>
              </div>
             </div>
            </div>
            <div className="modal-footer">
             <button
              className="btn btn-light"
              type="button"
              data-bs-dismiss="modal">
              Close
             </button>
             <button className="btn btn-primary" type="button">
              Save
             </button>
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
        </div>
       </div>
      </div>
     </div>
    );

}
export default Deliveries;