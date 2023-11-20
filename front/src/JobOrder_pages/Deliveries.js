import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";
import Header from "../Header";
import Navbar from "../Navbar";

Modal.setAppElement("#root"); 
////Simple Modal
class Deliveries extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   modalIsOpen: false,
   eventInfo: { title: "", start: "" },
  };
 }

 handleEventClick = (arg) => {
  this.setState({
   eventInfo: {
    title: arg.event.title,
    start: arg.event.start.toISOString(), 
   },
   modalIsOpen: true,
  });
 };

 closeModal = () => {
  this.setState({ modalIsOpen: false });
 };

 render() {
  return (
   <div id="page-top" class="overflow-hidden">
    <div id="wrapper">
     <Navbar />
     <div className="h-100 w-100">
      <Header />
      <div>
       <div className="m-4">
        <h2  className="mb-3">View Deliveries</h2>
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

          <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this.closeModal}
           contentLabel="Event Information">
           <div className="modal-content">
            <div className="modal-header">
             <h5 className="modal-title">{this.state.eventInfo.title}</h5>
             <button
              onClick={this.closeModal}
              className="btn-close"
              aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <p>Start Date: {this.state.eventInfo.start}</p>
             {/* Add other event information or content here */}
            </div>
           </div>
          </Modal>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  );
 }
}
   
export default Deliveries;
