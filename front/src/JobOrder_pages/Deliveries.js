import Navbar from "../Navbar";
import Header from "../Header";
import Scheduler from "react-mui-scheduler";
import Footer from "../Footer";
import { useState, useEffect } from "react";

var Deliveries = () => {

    const [data,setData] = useState();

    useEffect(()=>{
        console.log("AAAAAAA")
        fetch("/api/deli")
        .then((res)=>res.json())
        .then((d)=>{
        console.log(d)
        setData(d);
        });
    })


//  const config = {
//   options: {
//    transitionMode: "zoom", // or fade
//    startWeekOn: "mon", // or sun
//    defaultMode: "month", // or week | day | timeline
//    minWidth: 540,
//    maxWidth: 540,
//    minHeight: 540,
//    maxHeight: 540,
//   },

//   toolbarProps: {
//    showSearchBar: true,
//    showSwitchModeButtons: true,
//    showDatePicker: true,
//   },
//  };


//  const delis = data == null? "loading": data.map(dat => {
//     return {
//         id: dat.id,
//         label: dat.title,
//         groupLabel: dat.ord,  //purchase order or warrantied order
//         color: "#f28f6a",
//         date: dat.date,
//         createdAt: new Date(),
//         createdBy: "Kristina Mayer",
//        };
//  })
//  const events = [
//   {
//    id: "event-1",
//    label: "Medical consultation",
//    groupLabel: "Dr Shaun Murphy",
//    user: "Dr Shaun Murphy",
//    color: "#f28f6a",
//    startHour: "04:00 AM",
//    endHour: "05:00 AM",
//    date: "2023-11-05",
//    createdAt: new Date(),
//    createdBy: "Kristina Mayer",
//   },
//   {
//    id: "event-2",
//    label: "Medical consultation",
//    groupLabel: "Dr Claire Brown",
//    user: "Dr Claire Brown",
//    color: "#099ce5",
//    startHour: "09:00 AM",
//    endHour: "10:00 AM",
//    date: "2023-11-09",
//    createdAt: new Date(),
//    createdBy: "Kristina Mayer",
//   },
//   {
//    id: "event-3",
//    label: "Medical consultation",
//    groupLabel: "Dr Menlendez Hary",
//    user: "Dr Menlendez Hary",
//    color: "#263686",
//    startHour: "13 PM",
//    endHour: "14 PM",
//    date: "2023-11-10",
//    createdAt: new Date(),
//    createdBy: "Kristina Mayer",
//   },
//   {
//    id: "event-4",
//    label: "Consultation prénatale",
//    groupLabel: "Dr Shaun Murphy",
//    user: "Dr Shaun Murphy",
//    color: "#f28f6a",
//    startHour: "08:00 AM",
//    endHour: "09:00 AM",
//    date: "2023-11-11",
//    createdAt: new Date(),
//    createdBy: "Kristina Mayer",
//   },
//  ];




 const [modDetails,setModDetails] = useState();
 const handleEventClick = (event, item) => {
    setModDetails(
    <>
    <div className="row">
    <div className="col">
        Delivery ID:<br/>
        123-211
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
    </>
    )
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
      id="content-wrapper"></div>
     <Header />
     <h2 className="m-3"> View Deliveries</h2>
     <div className="container mt-2">
      {/*<Scheduler
       locale="pt-BR"
       events={delis}
       legacyStyle={false}
       options={config.options}
       alertProps={config.alertProps}
       toolbarProps={config.toolbarProps}
 />*/}
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
        {modDetails}
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
    </div>
   </div>
  </div>
 );
};
export default Deliveries;
