import Header from "../Header";
import Navbar from "../Navbar";
import * as React from "react";
import { Badge } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
    Chart as chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js';

chartjs.register (
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)
var DTechnician = () => {

    const data = {
        labels: ['Jan','Feb','Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            labels: 'Mae Mae',
            data: [2,1,3,1,2,1,2,1,2,1,2,1],
            backgroundColor: 'orange',
            borderColor: 'orange',
            PointBorderColor: 'blue',
            fill: true,
            tension: 0.5
        }]
    }

    const options = {
        plugins: {
        },
        scales: {
            y:{
                
            }
        }

    }
   
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
             <div className="text-uppercase text-primary fw-bold text-xs mb-1">
              <span>Total Service Done</span>
             </div>
             <div className="text-dark fw-bold h5 mb-0">
              <span>2</span>
              <i className="fas fa-wrench ms-2 text-primary text-300" />
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
             <div className="text-uppercase text-success fw-bold text-xs mb-1">
              <span>Reseolved Repairs</span>
             </div>
             <div className="text-dark fw-bold h5 mb-0">
              <span>3</span>
              <i className="fas fa-check-circle ms-2 text-success text-300" />
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
             <div className="text-uppercase text-warning fw-bold text-xs mb-1">
              <span>Un-repairable</span>
             </div>
             <div className="row g-0 align-items-center">
              <div className="col-auto">
               <div className="text-dark fw-bold h5 mb-0 me-3">
                <span>0</span>
                <i className="fas fa-chain-broken ms-2 text-warning text-300" />
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
              <i className="fas fa-chain-broken ms-2 text-danger text-300" />
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
           <h6 className="text-secondary fw-bold m-0">Metrics</h6>
           <div className="dropdown no-arrow">
            <button
             className="btn btn-link btn-sm dropdown-toggle"
             aria-expanded="false"
             data-bs-toggle="dropdown"
             type="button">
             <i className="fa-ellipsis-v text-gray-400" />
            </button>
            <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
             <p className="text-center dropdown-header">dropdown header:</p>
             <a className="dropdown-item" href="True">
              &nbsp;Action
             </a>
             <a className="dropdown-item" href="#">
              &nbsp;Another action
             </a>
             <div className="dropdown-divider" />
             <a className="dropdown-item" href="True">
              &nbsp;Something else here
             </a>
            </div>
           </div>
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
         <h6 className="text-secondary fw-bold m-0">Order History</h6>
        </div>
        <div className="card-body">
         <div
          className="table-responsive table mt-2"
          id="dataTable-2"
          role="grid">
          <table className="table my-0" id="dataTable">
           <thead>
            <tr>
             <th>Order ID</th>
             <th>Customer</th>
             <th>Repair Date</th>
             <th>Amount</th>
             <th>Status</th>
            </tr>
           </thead>
           <tbody>
            <tr>
             <td>12123</td>
             <td>
              Airi Satou
             </td>
             <td>P09/14/2023</td>
             <td>$90</td>
             <td><Badge bg="success">Completed</Badge></td>
            </tr>
           </tbody>

           <tfoot>
            <tr />
           </tfoot>
          </table>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default DTechnician;
