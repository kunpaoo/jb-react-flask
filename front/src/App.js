import LogIn_Page from './LogIn_Page';
function App() {

  
  

<<<<<<< HEAD
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
  },[])

=======
>>>>>>> main

  return (
    /* BODY CONTAINER */
    <div id="page-top" class="overflow-hidden">
    <div id="wrapper">

    

  {/* MAIN CONTENT */}
          
     

    <LogIn_Page/>

<<<<<<< HEAD
  
    </div>
    </div>
=======
    
>>>>>>> main
    
    {/* END MAIN CONTENT */}
    </div>
    </div>
    /* END BODY CONTAINER */
  );
}

export default App;
