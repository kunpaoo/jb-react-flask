import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Modal, Button } from "react-bootstrap"; 
import Header from "../Header";
import Navbar from "../Navbar";


const Deliveries = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [eventInfo, setEventInfo] = useState({
        title: "",
        start: ""
            });
    
    const handleEventClick = (arg) => {
        setModalIsOpen(true);
        setEventInfo({
            title: arg.event.title,
            start: arg.event.start.toISOString(), // Convert date to string
            })
    };


    return (
    <div id="page-top" class="overflow-hidden">
        <div id="wrapper">
        <Navbar />
        <div className="h-100 w-100">
        <Header />
        <div>
        <div className="m-4">
            <h2 className="mb-3">View Deliveries</h2>
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
        </div>
    </div>
    );
}
 
export default Deliveries;