import Header from "../Header";
import Navbar from "../Navbar";
import * as React from "react";
import { Line } from "react-chartjs-2";
import {
 Chart as chartjs,
 LineElement,
 CategoryScale,
 LinearScale,
 PointElement,
} from "chart.js";

chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);
var DPurchasingOfficer = () => {
 const data = {
  labels: [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May",
   "Jun",
   "Jul",
   "Aug",
   "Sep",
   "Oct",
   "Nov",
   "Dec",
  ],
  datasets: [
   {
    labels: "Mae Mae",
    data: [2, 1, 3, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    backgroundColor: "orange",
    borderColor: "orange",
    PointBorderColor: "blue",
    fill: true,
    tension: 0.5,
   },
  ],
 };

 const options = {
  plugins: {},
  scales: {
   y: {},
  },
 };

 
 return (
  <div id="page-top" class="overflow-hidden">
   <div id="wrapper">
    <Navbar />
    <div className="h-100 w-100">
     <Header />
     <div className="m-4">
      <div>
       <div className="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 className="text-dark mb-0">Dashboard</h3>
       </div>
       <div className="row">
        <div className=" col-xl-3 mb-4">
         <div className="card shadow border-start-primary py-2">
          <div className="card-body">
           <div className="row align-items-center no-gutters">
            <div className="col me-2">
             <div className="text-uppercase text-dark fw-bold text-xs mb-1">
              <span>Purchased Items</span>
             </div>
             <div className="text-dark fw-bold h5 mb-0">
              <span>2</span>
              <i className="fas fa-shopping-bag ms-2 text-dark-300" />
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div className="col-xl-3 mb-4">
         <div className="card shadow border-start-success py-2">
          <div className="card-body">
           <div className="row align-items-center no-gutters">
            <div className="col me-2">
             <div className="text-uppercase text-warning fw-bold text-xs mb-1">
              <span>Item Requests</span>
             </div>
             <div className="text-dark fw-bold h5 mb-0">
              <span>3</span>
              <i className="fas fa-folder ms-2 text-warning text-300" />
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div className="col-xl-3 mb-4">
         <div className="card shadow border-start-info py-2">
          <div className="card-body">
           <div className="row align-items-center no-gutters">
            <div className="col me-2">
             <div className="text-uppercase text-success fw-bold text-xs mb-1">
              <span>Delivered</span>
             </div>
             <div className="row g-0 align-items-center">
              <div className="col-auto">
               <div className="text-dark fw-bold h5 mb-0 me-3">
                <span>0</span>
                <i className="fas fa-archive ms-2 text-success text-success-300" />
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div className="col-xl-3 mb-4">
         <div className="card shadow border-start-warning py-2">
          <div className="card-body">
           <div className="row align-items-center no-gutters">
            <div className="col me-2">
             <div className="text-uppercase text-danger fw-bold text-xs mb-1">
              <span>Cancelled</span>
             </div>
             <div className="text-dark fw-bold h5 mb-0">
              <span>0</span>
              <i className="fas fa-minus-circle ms-2 text-danger text-300" />
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       {/* Start: Chart */}
       <div className="row">
        <div className=" col-100">
         <div className="card shadow p-0 mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
           <h6 className="text-secondary fw-bold m-0">Monthly Purchased</h6>
           
          </div>
          <div className="card-body">
           <div className="w-100 h-100">
            <Line data={data} options={options}></Line>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     {/* End: Chart */}
     <div className="row m-3">
      <div className="col-lg-6 mb-4 w-100">
       <div className="card shadow mb-4">
        <div className="card-header py-3">
         <div className="row">
          <div className="col">
           <h6 className="text-secondary fw-bold m-0">Monthly Requests</h6>
          </div>
          <div className="col">
           <div className="text-end">
            <input
             type="date"
             style={{
              height: "2rem",
              marginLeft: "0.2rem",
             }}
            />
           </div>
          </div>
         </div>
        </div>

        <div className="card-body">
         <Line data={data} options={options}></Line>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default DPurchasingOfficer;
