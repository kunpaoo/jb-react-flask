import Header from "../Header";
import Navbar from "../Navbar";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Modal, Button } from "react-bootstrap";

class DCashier extends React.Component {

    state = {
     modalIsOpen: false,
     eventInfo: { title: "", start: "" },
    };

    handleEventClick = (arg) => {
     this.setState({
      eventInfo: {
       title: arg.event.title,
       start: arg.event.start.toISOString(), // Convert date to string
      },
      showModal: true,
     });
    };

    closeModal = () => {
     this.setState({ showModal: false });
    };
render(){
 return (
  <div id="page-top" class="overflow-hidden">
   <div id="wrapper">
    <Navbar />
    <div className="h-100 w-100">
     <Header />
     <div className="m-4">
      <div>
       <div className="mb-4">
        <h3 className="text-dark mb-0">Dashboard</h3>
       </div>

       <div class="row">
        <div class="col">
         <div className="row me-1">
          <div class="card">
           <div class="card-body p-3">
            <h3 class="card-title text-secondary">Quotations</h3>
            <div className="row justify-content-between pt-2">
             <div className="col-auto">
              <div>
               <span className="text-lg">Total</span>
              </div>
              <div>
               <span>5</span>
              </div>
             </div>
             <div className="col-auto">
              <div>
               <span className="text-lg">On hold</span>
              </div>
              <div>
               <span>5</span>
              </div>
             </div>
             <div className="col-auto">
              <div>
               <span className="text-lg">Accepted</span>
              </div>
              <div>
               <span>5</span>
              </div>
             </div>
             <div className="col-auto">
              <div>
               <span className=" text-lg">Decline</span>
              </div>
              <div>
               <span>5</span>
              </div>
             </div>
             <div className="col-auto">
              <div>
               <span className="text-lg">To invoice</span>
              </div>
              <div>
               <span>5</span>
              </div>
             </div>
            </div>
           </div>
          </div>

          <div className="row mt-2">
           <div className="card">
            <div className="card-body">
             <div className="d-sm flex justify-content-center">
              <div className="maincontainer form-control">
               <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                eventClick={this.handleEventClick}
                events={[
                 { title: "event 1", date: "2023-11-13" },
                 { title: "event 2", date: "2023-11-15" },
                ]}
               />

               <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header closeButton>
                 <Modal.Title>{this.state.eventInfo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <p>Start Date: {this.state.eventInfo.start}</p>
                 {/* Add other event information or content here */}
                </Modal.Body>
                <Modal.Footer>
                 <Button variant="secondary" onClick={this.closeModal}>
                  Close
                 </Button>
                </Modal.Footer>
               </Modal>
              </div>
             </div>
            </div>
           </div>
          </div>

          <div className="row">
           <div class="card mt-2">
            <div class="card-body">
             <h3 class="card-title text-secondary">Purchased History</h3>
             <div className="row">
              <div className="col">
               <table className="table mt-3">
                <thead>
                 <tr>
                  <th className="text-start">Id</th>
                  <th className="text-start">Name</th>
                  <th className="text-center">Brand</th>
                  <th className="text-center">Unit</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Total Amount</th>
                 </tr>
                </thead>
                <tbody>
                 <tr>
                  <td>1213</td>
                  <td>Battery</td>
                  <td>Acer</td>
                  <td>123-jad1</td>
                  <td>2</td>
                  <td>$908</td>
                 </tr>
                </tbody>
               </table>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>

        <div className="col-auto">
         <div className="row">
          <div class="card mb-2 me-2">
           <div class="card-body">
            <h6 class="card-title text-success">Delivered Items</h6>
            <p class="card-text">Text</p>
           </div>
          </div>
         </div>
         <div className="row">
          <div class="card mb-2 me-2">
           <div class="card-body">
            <h6 class="card-title text-success">Purchased Item</h6>
            <p class="card-text">Text</p>
           </div>
          </div>
         </div>
         <div className="row">
          <div class="card mb-2 me-2">
           <div class="card-body">
            <h6 class="card-title text-success">With warranty</h6>
            <p class="card-text">Text</p>
           </div>
          </div>
         </div>
         <div className="row">
          <div class="card mb-2 me-2">
           <div class="card-body">
            <h6 class="card-title text-success">Without warranty</h6>
            <p class="card-text">Text</p>
           </div>
          </div>
         </div>
         <div className="row">
          <div class="card mb-2 me-2">
           <div class="card-body">
            <h6 class="card-title text-success">From OCCC</h6>
            <p class="card-text">Text</p>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
            }
};

export default DCashier;
