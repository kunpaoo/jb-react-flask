import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";

var BillPayment = () => {
 function print_body() {
  document.getElementById("btnPrint").onclick = function () {
   printElement(document.getElementById("print_body"));
  };
 }

 function printElement(elem) {
  var domClone = elem.cloneNode(true);

  var $printSection = document.getElementById("printSection");

  if (!$printSection) {
   var $printSection = document.createElement("div");
   $printSection.id = "printSection";
   document.body.appendChild($printSection);
  }

  $printSection.innerHTML = "";
  $printSection.appendChild(domClone);
  window.print();
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
         Bills/Payements
        </h3>
       </div>
      </div>
      <div className="container-fluid">
       <div>
        <div className="row" id="headbot">
         <div className="col h-auto" style={{ paddingBottom: "9px" }}>
          <div className="mh-100" style={{ marginTop: "21px" }}>
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
            href="/ListofPricings">
            List of Pricings
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
             <th className="text-start">ID</th>
             <th className="text-start" style={{ fontSize: "18px" }}>
              Customer
             </th>
             <th className="text-center">Balance</th>
            </tr>
           </thead>
           <tbody>
            <tr>
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
                 <strong>Marjhealou Niana Anne Mejia</strong>
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
             <td className="text-center">$ 2,343</td>
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
      {/* ========== Start Statement of account ========== */}
      <div
       className="modal fade"
       role="dialog"
       tabIndex={-1}
       id="modal-1"
       style={{ borderStyle: "solid" }}>
       <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
         <div
          className="modal-header"
          style={{ marginBottom: "-1px", paddingBottom: "2px" }}>
          <h4 className="modal-title">Statement of Account</h4>
          <button
           className="btn-close"
           type="button"
           aria-label="Close"
           data-bs-dismiss="modal"
          />
         </div>
         <div
          className="modal-body"
          id="print_body"
          style={{ paddingLeft: "26px", paddingRight: "36px" }}>
          <div className="row">
           <div className="col-lg-7">
            <span style={{ color: "rgb(0,0,0)" }}>
             <strong>Marjhealou Nina Anne M. Paraiso</strong>
            </span>
           </div>
           <div className="col">
            <span>Statement Date:</span>
            <span>09/21/2000</span>
           </div>
          </div>
          <div className="row">
           <div className="col-lg-7">
            <span>Contact:&nbsp;</span>
            <span>0976 889 7654</span>
           </div>
           <div className="col">
            <span style={{ color: "rgb(200,44,35)" }}>
             <strong>WITHOUT WARRANTY</strong>
            </span>
           </div>
          </div>
          <div className="row">
           <div className="col">
            <span>Address:&nbsp;</span>
            <span>Purok Tacurong, Sultan Kudarat</span>
           </div>
          </div>
          <div className="row">
           <div className="col-lg-12" style={{ paddingTop: "15px" }}>
            <span>Customer ID:</span>
            <span>&nbsp;12333-1221</span>
           </div>
          </div>
          <div className="row" style={{ paddingTop: "23px" }}>
           <div className="col-lg-6" style={{ paddingLeft: "2px" }}>
            <span>
             <strong>
              <span style={{ color: "rgb(0, 0, 0)" }}>Details</span>
             </strong>
            </span>
           </div>
           <div className="col" style={{ paddingLeft: "0px" }}>
            <span
             style={{ color: "rgb(200,44,35)", borderColor: "rgb(0,0,0)" }}>
             <strong>
              <span style={{ color: "rgb(0, 0, 0)" }}>Payments</span>
             </strong>
            </span>
           </div>
          </div>
          <div className="row">
           <div className="col" style={{ borderStyle: "solid" }}>
            <div className="row" style={{ borderStyle: "none" }}>
             <div
              className="col"
              style={{
               borderWidth: "0.5px",
               borderColor: "var(--bs-emphasis-color)",
              }}>
              <div className="row">
               <div className="col">
                <span>
                 <strong>
                  Job Order:
                  <span>1213</span>
                 </strong>
                </span>
               </div>
              </div>
              <div className="row">
               <div
                className="table-responsive"
                style={{
                 marginLeft: "-12px",
                 marginRight: "-10px",
                 paddingBottom: "0px",
                 marginBottom: "3px",
                }}>
                <table className="table">
                 <thead>
                  <tr>
                   <th>Parts needed:</th>
                  </tr>
                 </thead>
                 <tbody>
                  <tr>
                   <td>
                    Item #: <span />
                   </td>
                  </tr>
                  <tr>
                   <td>Acer Battery</td>
                   <td>$500</td>
                  </tr>
                 </tbody>
                </table>
               </div>
              </div>
              <div className="row">
               <div
                className="table-responsive"
                style={{
                 marginLeft: "-12px",
                 marginRight: "-10px",
                 paddingBottom: "0px",
                 marginBottom: "3px",
                }}>
                <table className="table">
                 <thead>
                  <tr>
                   <th>Others:</th>
                  </tr>
                 </thead>
                 <tbody>
                  <tr>
                   <td>Service Fee: </td>
                   <td>$500</td>
                  </tr>
                  <tr>
                   <td>Total Amount:</td>
                   <td>$49</td>
                  </tr>
                 </tbody>
                </table>
               </div>
              </div>
              <div className="row">
               <div className="col" style={{ paddingLeft: "32px" }}>
                <span>Less</span>
               </div>
              </div>
              <div className="row">
               <div className="col" style={{ paddingLeft: "44px" }}>
                <span>Payments:&nbsp;</span>
               </div>
               <div
                className="col text-center"
                style={{
                 borderBottomWidth: "0.5px",
                 borderBottomStyle: "solid",
                 marginRight: "24px",
                 marginLeft: "12px",
                }}>
                <span>$23</span>
               </div>
              </div>
              <div className="row">
               <div className="col-lg-6" style={{ paddingLeft: "32px" }}>
                <span>Sub-total:</span>
               </div>
               <div
                className="col text-center"
                style={{
                 paddingLeft: "32px",
                 borderBottomWidth: "1.5px",
                 borderBottomStyle: "solid",
                 marginRight: "21px",
                 marginLeft: "8px",
                 paddingRight: "31px",
                }}>
                <span>$23</span>
               </div>
              </div>
              <div className="row">
               <div className="col" style={{ paddingLeft: "32px" }}>
                <span>Total:</span>
               </div>
               <div className="col text-center" style={{ paddingLeft: "32px" }}>
                <span style={{ marginRight: "28px" }}>$34</span>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div className="col" style={{ borderStyle: "solid" }}>
            <div className="row">
             <div className="col">
              <div
               className="table-responsive"
               style={{
                marginLeft: "-12px",
                marginRight: "-10px",
                paddingBottom: "0px",
                marginBottom: "3px",
               }}>
               <table className="table">
                <thead>
                 <tr>
                  <th>Date</th>
                  <th>Reference Number</th>
                  <th>Amount</th>
                  <th>Remarks</th>
                 </tr>
                </thead>
                <tbody>
                 <tr>
                  <td>09/12/2003</td>
                  <td>14322111</td>
                  <td>$500</td>
                  <td />
                 </tr>
                 <tr>
                  <td>09/12/2003</td>
                  <td>33221221</td>
                  <td>$500</td>
                  <td />
                 </tr>
                </tbody>
               </table>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>
         <button
          id="btnPrint"
          type="button"
          className="btn btn-outline-secondary m-4"
          onclick={print_body}>
          Print Receipt
         </button>
         <div className="modal-footer">
          <button
           className="btn btn-light"
           type="button"
           data-bs-dismiss="modal">
           Close
          </button>
          <button
           className="btn btn-primary"
           type="button"
           style={{ background: "rgb(45,45,45)" }}
           data-bs-target="#modal-2"
           data-bs-toggle="modal">
           Create Payment
          </button>
         </div>
        </div>
       </div>
      </div>
      {/* ========== End Statement of account ========== */}
      {/* ========== Start Create Payment ========== */}
      <div className="modal fade" role="dialog" tabIndex={-1} id="modal-2">
       <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
         <div className="modal-header">
          <h4 className="modal-title">Create Payment</h4>
          <button
           className="btn-close"
           type="button"
           aria-label="Close"
           data-bs-dismiss="modal"
          />
         </div>
         <div className="modal-body">
          <div className="row">
           <div className="col text-start">
            <span style={{ marginLeft: "20px" }}>
             <strong>
              <span style={{ color: "rgb(0, 30, 14)" }}>
               Marjhealou Nina Anne Paraiso
              </span>
             </strong>
            </span>
           </div>
           <div className="col text-end">
            <span style={{ marginRight: "84px" }}>Date: 09/12/2023</span>
           </div>
          </div>
          <div className="row">
           <div className="col text-start" style={{ paddingLeft: "32px" }}>
            <span>Customer ID:&nbsp;</span>
            <span>9203881</span>
           </div>
          </div>
          <div className="row">
           {/* Start: Payment Form */}
           <div className="row py-4 ">
            <div className="w-100 row justify-content-center">
             <div className>
              <form action method="post" id="registration">
               <nav>
                <div
                 className="nav nav-pills nav-fill text-white"
                 id="nav-tab"
                 role="tablist">
                 <a
                  className="nav-link active"
                  id="step1-tab"
                  data-bs-toggle="tab"
                  href="#step1">
                  Card
                 </a>
                 <a
                  className="nav-link"
                  id="step2-tab"
                  data-bs-toggle="tab"
                  href="#step2">
                  Gcash
                 </a>
                 <a
                  className="nav-link"
                  id="step3-tab"
                  data-bs-toggle="tab"
                  href="#step3">
                  Cash
                 </a>
                </div>
               </nav>
               <div className="tab-content">
                {/* Card*/}
                <div
                 className="tab-pane fade show active rounded bg-white p-4"
                 id="step1">
                 <div className="form-group">
                  <label htmlFor="username">Full name (on the card)</label>
                  <input
                   type="text"
                   name="username"
                   required
                   className="form-control"
                  />
                 </div>
                 <div className="form-group">
                  <label htmlFor="cardNumber">Card number</label>
                  <div className="input-group">
                   <input
                    type="text"
                    name="cardNumber"
                    className="form-control"
                    required
                   />
                   <div className="input-group-append">
                    <span className="input-group-text text-muted">
                     <i className="fa fa-cc-visa mx-1" />
                     <i className="fa fa-cc-amex mx-1" />
                     <i className="fa fa-cc-mastercard mx-1" />
                    </span>
                   </div>
                  </div>
                 </div>
                 <div className="row">
                  <div className="col-sm-8">
                   <div className="form-group">
                    <label>
                     <span className="hidden-xs">Expiration</span>
                    </label>
                    <div className="input-group">
                     <input
                      type="number"
                      name
                      className="form-control"
                      required
                     />
                     <input
                      type="number"
                      name
                      className="form-control"
                      required
                     />
                    </div>
                   </div>
                  </div>
                  <div className="col-sm-4">
                   <div className="form-group">
                    <label
                     data-toggle="tooltip"
                     title="Three-digits code on the back of your card">
                     CVV
                     <i className="fa fa-question-circle" />
                    </label>
                    <input type="text" required className="form-control" />
                   </div>
                  </div>
                  <div className="form-group">
                   <label htmlFor="cardNumber">Reference Number:</label>
                   <div className="input-group">
                    <input
                     type="text"
                     name="cardNumber"
                     className="form-control"
                     required
                    />
                   </div>
                  </div>
                 </div>
                 <button
                  type="button"
                  className="subscribe btn btn-primary btn-block rounded-pill mt-4 shadow-sm"
                  data-bs-target="#modal-3"
                  data-bs-toggle="modal">
                  Confirm{" "}
                 </button>
                </div>
                {/* G-cash*/}
                <div className="tab-pane fade rounded bg-white p-4" id="step2">
                 <form role="form">
                  <div className="form-group">
                   <div className="row">
                    <div className="col">
                     <label htmlFor="username">Full name:</label>
                     <input
                      type="text"
                      name="username"
                      required
                      className="form-control"
                     />
                    </div>
                    <div className="col">
                     <label htmlFor="username">Number:</label>
                     <input
                      type="text"
                      name="username"
                      required
                      className="form-control"
                     />
                    </div>
                   </div>
                  </div>
                  <div className="form-group">
                   <div className="row">
                    <div className="col">
                     <label htmlFor="cardNumber">
                      Reference Number in Gcash:
                     </label>
                     <div className="input-group">
                      <input
                       type="text"
                       name="cardNumber"
                       className="form-control"
                       required
                      />
                     </div>
                    </div>
                    <div className="col">
                     <label htmlFor="cardNumber">Total Amount Sent:</label>
                     <div className="input-group">
                      <input
                       type="text"
                       name="cardNumber"
                       className="form-control"
                       required
                      />
                     </div>
                    </div>
                   </div>
                  </div>
                  <div className="form-group">
                   <label htmlFor="cardNumber">Reference Number:</label>
                   <div className="input-group">
                    <input
                     type="text"
                     name="cardNumber"
                     className="form-control"
                     required
                    />
                   </div>
                  </div>
                  <button
                   type="button"
                   className="subscribe btn btn-primary btn-block rounded-pill mt-4 shadow-sm"
                   data-bs-target="#modal-3"
                   data-bs-toggle="modal">
                   Confirm{" "}
                  </button>
                 </form>
                </div>
                {/* Cash*/}
                <div className="tab-pane fade rounded bg-white p-4" id="step3">
                 <form role="form">
                  <div className="form-group">
                   <div className="row">
                    <div className="col">
                     <label htmlFor="username">Full name:</label>
                     <input
                      type="text"
                      name="username"
                      required
                      className="form-control"
                     />
                    </div>
                   </div>
                  </div>
                  <div className="form-group">
                   <label htmlFor="cardNumber">Amount:</label>
                   <div className="input-group">
                    <input
                     type="text"
                     name="cardNumber"
                     className="form-control"
                     required
                    />
                   </div>
                  </div>
                  <div className="form-group">
                   <label htmlFor="cardNumber">Reference Number:</label>
                   <div className="input-group">
                    <input
                     type="text"
                     name="cardNumber"
                     className="form-control"
                     required
                    />
                   </div>
                  </div>
                  <button
                   type="button"
                   className="subscribe btn btn-primary btn-block rounded-pill mt-4 shadow-sm"
                   data-bs-target="#modal-3"
                   data-bs-toggle="modal">
                   Confirm{" "}
                  </button>
                 </form>
                </div>
               </div>
              </form>
             </div>
            </div>
           </div>
           {/* End: Payment Form */}
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
           Add &amp; Save
          </button>
         </div>
        </div>
       </div>
      </div>
      {/* ========== End Create Payment ========== */}
      {/* ========== Start Preview and print of Card ========== */}
      <div
       className="modal fade"
       role="dialog"
       tabIndex={-1}
       id="modal-3"
       style={{ borderStyle: "solid" }}>
       <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
         <div
          className="modal-header"
          style={{ marginBottom: "-1px", paddingBottom: "2px" }}>
          <h4 className="modal-title">Statement of Account</h4>
          <button
           className="btn-close"
           type="button"
           aria-label="Close"
           data-bs-dismiss="modal"
          />
         </div>
         <div
          className="modal-body"
          id="print_body"
          style={{ paddingLeft: "26px", paddingRight: "36px" }}>
          <div className="row">
           <div className="col-lg-7">
            <span style={{ color: "rgb(0,0,0)" }}>
             <strong>Marjhealou Nina Anne M. Paraiso</strong>
            </span>
           </div>
           <div className="col">
            <span>Statement Date:</span>
            <span>09/21/2000</span>
           </div>
          </div>
          <div className="row">
           <div className="col-lg-7">
            <span>Contact:&nbsp;</span>
            <span>0976 889 7654</span>
           </div>
           <div className="col">
            <span style={{ color: "rgb(200,44,35)" }}>
             <strong>WITHOUT WARRANTY</strong>
            </span>
           </div>
          </div>
          <div className="row">
           <div className="col">
            <span>Address:&nbsp;</span>
            <span>Purok Tacurong, Sultan Kudarat</span>
           </div>
          </div>
          <div className="row">
           <div className="col-lg-12" style={{ paddingTop: "15px" }}>
            <span>Customer ID:</span>
            <span>&nbsp;12333-1221</span>
           </div>
          </div>
          <div className="row" style={{ paddingTop: "23px" }}>
           <div className="col-lg-6" style={{ paddingLeft: "2px" }}>
            <span>
             <strong>
              <span style={{ color: "rgb(0, 0, 0)" }}>Details</span>
             </strong>
            </span>
           </div>
           <div className="col" style={{ paddingLeft: "0px" }}>
            <span
             style={{ color: "rgb(200,44,35)", borderColor: "rgb(0,0,0)" }}>
             <strong>
              <span style={{ color: "rgb(0, 0, 0)" }}>Payments</span>
             </strong>
            </span>
           </div>
          </div>
          <div className="row">
           <div className="col" style={{ borderStyle: "solid" }}>
            <div className="row" style={{ borderStyle: "none" }}>
             <div
              className="col"
              style={{
               borderWidth: "0.5px",
               borderColor: "var(--bs-emphasis-color)",
              }}>
              <div className="row">
               <div className="col">
                <span>
                 <strong>
                  Job Order:
                  <span>1213</span>
                 </strong>
                </span>
               </div>
              </div>
              <div className="row">
               <div
                className="table-responsive"
                style={{
                 marginLeft: "-12px",
                 marginRight: "-10px",
                 paddingBottom: "0px",
                 marginBottom: "3px",
                }}>
                <table className="table">
                 <thead>
                  <tr>
                   <th>Parts needed:</th>
                  </tr>
                 </thead>
                 <tbody>
                  <tr>
                   <td>
                    Item #: <span />
                   </td>
                  </tr>
                  <tr>
                   <td>Acer Battery</td>
                   <td>$500</td>
                  </tr>
                 </tbody>
                </table>
               </div>
              </div>
              <div className="row">
               <div
                className="table-responsive"
                style={{
                 marginLeft: "-12px",
                 marginRight: "-10px",
                 paddingBottom: "0px",
                 marginBottom: "3px",
                }}>
                <table className="table">
                 <thead>
                  <tr>
                   <th>Others:</th>
                  </tr>
                 </thead>
                 <tbody>
                  <tr>
                   <td>Service Fee: </td>
                   <td>$500</td>
                  </tr>
                  <tr>
                   <td>Total Amount:</td>
                   <td>$49</td>
                  </tr>
                 </tbody>
                </table>
               </div>
              </div>
              <div className="row">
               <div className="col" style={{ paddingLeft: "32px" }}>
                <span>Less</span>
               </div>
              </div>
              <div className="row">
               <div className="col" style={{ paddingLeft: "44px" }}>
                <span>Payments:&nbsp;</span>
               </div>
               <div
                className="col text-center"
                style={{
                 borderBottomWidth: "0.5px",
                 borderBottomStyle: "solid",
                 marginRight: "24px",
                 marginLeft: "12px",
                }}>
                <span>$23</span>
               </div>
              </div>
              <div className="row">
               <div className="col-lg-6" style={{ paddingLeft: "32px" }}>
                <span>Sub-total:</span>
               </div>
               <div
                className="col text-center"
                style={{
                 paddingLeft: "32px",
                 borderBottomWidth: "1.5px",
                 borderBottomStyle: "solid",
                 marginRight: "21px",
                 marginLeft: "8px",
                 paddingRight: "31px",
                }}>
                <span>$23</span>
               </div>
              </div>
              <div className="row">
               <div className="col" style={{ paddingLeft: "32px" }}>
                <span>Total:</span>
               </div>
               <div className="col text-center" style={{ paddingLeft: "32px" }}>
                <span style={{ marginRight: "28px" }}>$34</span>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div className="col" style={{ borderStyle: "solid" }}>
            <div className="row">
             <div className="col">
              <div
               className="table-responsive"
               style={{
                marginLeft: "-12px",
                marginRight: "-10px",
                paddingBottom: "0px",
                marginBottom: "3px",
               }}>
               <table className="table">
                <thead>
                 <tr>
                  <th>Date</th>
                  <th>Reference Number</th>
                  <th>Amount</th>
                  <th>Remarks</th>
                 </tr>
                </thead>
                <tbody>
                 <tr>
                  <td>09/12/2003</td>
                  <td>14322111</td>
                  <td>$500</td>
                  <td />
                 </tr>
                 <tr>
                  <td>09/12/2003</td>
                  <td>33221221</td>
                  <td>$500</td>
                  <td />
                 </tr>
                </tbody>
               </table>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>
         <button
          id="btnPrint"
          type="button"
          className="btn btn-outline-secondary m-4"
          onclick={print_body}>
          Print Receipt
         </button>
        </div>
       </div>
      </div>
      {/* ========== End Preview and print of Card ========== */}
      {/* ========== Start Preview and print of G-cash ========== */}
      {/* ========== End Preview and print of G-cash ========== */}
      {/* ========== Start Preview and of Cash ========== */}
      {/* ========== End Preview and of Cash ========== */}
      <Footer />
     </div>
    </div>
   </div>
  </div>
 );
};

export default BillPayment;
