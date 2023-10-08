import Navbar from "../Navbar";
import Header from "../Header";

var View_Request = () => {
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
            Items/ Parts &gt;
            <span style={{ marginLeft: "10px", fontSize: "21px" }}>
             View purchases
            </span>
           </h3>
          </div>
         </div>
         <div className="container-fluid">
          <div>
           <div className="row" id="headbot">
            <div className="col h-auto">
             <div
              className="mh-100"
              style={{
               marginTop: "21px",
               paddingBottom: "0px",
               marginBottom: "8px",
              }}>
              <label className="form-label" />
              <input
               type="date"
               style={{
                height: "33px",
                paddingTop: "0px",
                marginTop: "0px",
                paddingLeft: "0px",
                marginLeft: "3px",
               }}
              />
              <a
               className="btn btn-primary btn-sm d-none d-sm-inline-block"
               role="button"
               style={{
                background: "rgb(2,60,63)",
                paddingRight: "12px",
                borderRadius: "8px",
                fontSize: "16px",
                paddingTop: "6px",
                marginRight: "-2px",
                marginLeft: "12px",
               }}
               href="/Bills_ListofPricings.html"
               data-bs-target="#modal-3"
               data-bs-toggle="modal">
               Purchase Item
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
             <table className="table my-0" id="dataTable">
              <thead>
               <tr>
                <th className="text-start" />
                <th className="text-start">ID</th>
                <th className="text-start" style={{ fontSize: "18px" }}>
                 Purchased Item/parts
                </th>
                <th className="text-center">Date Requested</th>
                <th className="text-center">Quantity</th>
               </tr>
              </thead>
              <tbody>
               <tr>
                <td>1</td>
                <td>12123</td>
                <td>
                 <div className="col-lg-11 col-xl-11 col-xxl-12 w-auto">
                  <a href="#" data-bs-target="#modal-1" data-bs-toggle="modal">
                   <h6
                    style={{
                     fontSize: "12px",
                     color: "rgb(0,0,0)",
                     marginBottom: "0px",
                     marginTop: "4px",
                     paddingRight: "0px",
                    }}>
                    <strong>Acer Battery</strong>
                   </h6>
                   <div
                    style={{
                     fontSize: "8px",
                     paddingTop: "12px",
                     marginTop: "-12px",
                    }}>
                    <span className="w-auto" style={{ fontSize: "9px" }}>
                     Id: 1231112-122
                    </span>
                   </div>
                  </a>
                 </div>
                </td>
                <td className="text-center">09/14/2023</td>
                <td className="text-center">1</td>
                <td className="text-center">
                 <button
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "rgb(23,59,62)" }}
                  data-bs-target="#modal-2"
                  data-bs-toggle="modal">
                  Edit
                 </button>
                 <button
                  className="btn btn-primary"
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
         {/* ========== Start Modal for parts information ========== */}
         <div className="modal fade" role="dialog" tabIndex={-1} id="modal-1">
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
                  <div className="col">
                   <span>Quantity:&nbsp;</span>
                   <span>2</span>
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
         
         {/* ========== Start Add Purchase ========== */}
         <div className="modal fade" role="dialog" tabIndex={-1} id="modal-3">
          <div className="modal-dialog modal-lg" role="document">
           <div className="modal-content">
            <div className="modal-body">
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
                   <span>Parts name:&nbsp;</span>
                   <input type="text" className="form-control" />
                  </div>
                 </div>
                 <div className="row">
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
                  <strong>Vendor</strong>
                 </span>
                 <div className="row">
                  <div className="col">
                   <span>Name: </span>
                   <input type="text" className="form-control" />
                  </div>
                 </div>
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
              Purchase
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
export default View_Request;