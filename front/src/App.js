import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Dashboard from './Dashboard/Dashboard';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
  },[])
  
  
  /* generate customer list */
  var cust_list;
  data == null
  ? (cust_list = "loading")
  : (cust_list = data.map((row) => {
    return(
    <tr>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.address}</td>
      <td>{row.cont_num}</td>
    </tr>
    );
  }));

  return (
    /* BODY CONTAINER */
    <div id="page-top" class="overflow-hidden">
    <div id="wrapper">

    

  {/* MAIN CONTENT */}
    <div id="wrapper container-fluid border border-black" style={{height: '100vh', overflowY: 'auto', width: '100%'}}>
    <div className="d-flex flex-column container-fluid" id="content-wrapper" style={{padding: '0px'}}>
          
     

    <Dashboard/>

    <div className="app">
      Main App
      Data table:
      <table>
        <tbody>
              <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th></th>
                </tr>
                {cust_list}
                </tbody>
            </table>
    </div>
    </div>
    </div>
    
    {/* END MAIN CONTENT */}
    </div></div>
    /* END BODY CONTAINER */
  );
}

export default App;
