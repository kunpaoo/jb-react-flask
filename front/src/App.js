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


  return (
    /* BODY CONTAINER */
    <div id="page-top" class="overflow-hidden">
    <div id="wrapper">

    <Navbar/>

  {/* MAIN CONTENT */}
    <div id="wrapper container-fluid border border-black" style={{height: '100vh', overflowY: 'auto', width: '100%'}}>
    <div className="d-flex flex-column container-fluid" id="content-wrapper" style={{padding: '0px'}}>
          
     <Header/>

    <Dashboard/>

  
    </div>
    </div>
    
    {/* END MAIN CONTENT */}
    </div></div>
    /* END BODY CONTAINER */
  );
}

export default App;
