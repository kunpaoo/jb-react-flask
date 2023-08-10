
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Header from "../Header";

const Customer = () => {

    const [data, setData] = useState();

    useEffect(() => {
      fetch('/customers').then(
        res => res.json()
      ).then(
        
        data => {setData(data);}
        
      )
    },[])
    
    
    /* generate customer list */
    var cust_list;
    data == null? cust_list = "loading" : (cust_list = data.map((row) => {
      return(<tr>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.address}</td>
        <td>{row.cont_num}</td>
        <td><a href="customers/edit/"><button type="button" className="btn btn-info">Edit</button></a></td>
        <td><a href="customers/delete/{row.id}"><button type="button" className="btn btn-danger">Delete</button></a></td>
      </tr>)}))

    return ( 
        
        <div id="page-top" class="overflow-hidden">
    <div id="wrapper">
    
    <Navbar/>
    
    

  {/* MAIN CONTENT */}
    <div id="wrapper container-fluid border border-black" style={{height: '100vh', overflowY: 'auto', width: '100%'}}>
    <div className="d-flex flex-column container-fluid" id="content-wrapper" style={{padding: '0px'}}>
        
     <Header/>


    <div>
     <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div class="container-fluid">
                    <h3 class="text-dark mb-4">Team</h3>
                    <a href="customers/add"><button type="button" className="btn btn-success">Add</button></a>
                    
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">Employee Info</p>
                        </div>

    <div className="card-body" >
  <div className="row" >
    <div className="col-md-6 text-nowrap">
      <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label className="form-label">Show&nbsp;<select className="d-inline-block form-select form-select-sm">
            <option value={10} selected>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>&nbsp;</label></div>
    </div>
    <div className="col-md-6">
      <div className="text-md-end dataTables_filter" id="dataTable_filter"><label className="form-label"><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
    </div>
  </div>
  </div>
                                            
        <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
        <table className="table my-0" id="dataTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            
            {cust_list}
          </tbody>
         
        </table>
      </div>
      </div></div></div></div>
      </div></div></div></div>
      </div>
    )      
}
 
export default Customer;