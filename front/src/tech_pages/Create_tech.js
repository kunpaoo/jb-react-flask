import Header from "../Header";
import Navbar from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";



var Create_tech = () => {
    
    return (
     <div id="page-top" class="overflow-hidden">
      <div id="wrapper">
       <Navbar />
       <div
        id="wrapper container-fluid border border-black"
        style={{ height: "100vh", overflowY: "auto", width: "100%" }}>
        <div
         className="d-flex flex-column container-fluid"
         id="content-wrapper"
         style={{ padding: "0px" }}></div>
        <Header />
        <div>
         <div className="d-flex flex-column" id="content-wrapper">
          
          <div
           style={{
            paddingTop: "0px",
            background: "#ffffff",
            paddingLeft: "0px",
            paddingRight: "0px",
            marginRight: "2px",
            marginTop: "-1px",
           }}>
           <div
            className="d-sm-flex justify-content-between align-items-center"
            id="head2"
            style={{
             paddingRight: "0px",
             marginRight: "0px",
             background: "#ffffff",
             boxShadow: "0px 0px 20px 1px",
            }}>
            <h3 className="text-dark mb-0" style={{ marginLeft: "24px" }}>
             Technician
            </h3>
           </div>
          </div>
          <div className="container-fluid ">
           {/* Start: Multi step form */}
           <div className="row py-4 ">
            <div className="w-100 row justify-content-center">
             <div className>
              <form action method="post" id="registration">
               <nav>
                <div
                 className="nav nav-pills nav-fill navbar-dark bg-dark text-white"
                 id="nav-tab"
                 role="tablist">
                 <a
                  className="nav-link active"
                  id="step1-tab"
                  data-bs-toggle="tab"
                  href="#step1">
                  Profile
                 </a>
                 <a
                  className="nav-link"
                  id="step4-tab"
                  data-bs-toggle="tab"
                  href="#step2">
                  Preview &amp; Save
                 </a>
                </div>
               </nav>
               <div className="tab-content">
                {/* Step 1*/}
                <div
                 className="tab-pane fade show active rounded bg-white p-4"
                 id="step1">
                 <h3 className="multisteps-form__title text-start">Profile</h3>
                 <div className="form-row row-auto mt-2">
                  <div className="row">
                   <div className="col">
                    <span>Name:&nbsp;</span>
                    <input className="form-control" type="text" required />
                   </div>
                  </div>
                  <div className="row">
                   <div className="row">
                    <div className="col">
                     <span>Defect Description:&nbsp;</span>
                     <textarea
                      id="defect_descrip"
                      className="form-control"
                      style={{ height: "111px" }}
                      required
                      defaultValue={""}
                     />
                    </div>
                   </div>
                   <div id="product_row" className="row row-auto">
                    <div className="col">
                     <span>
                      Email:{" "}
                      <input
                       id="unit_name"
                       className="form-control"
                       type="text"
                      />
                     </span>
                    </div>
                    <div className="col">
                     <span>Contact:&nbsp;</span>
                     <input
                      id="brand_name"
                      className="form-control"
                      type="text"
                     />
                    </div>
                    <div className="col">
                     <span>Head Technician:&nbsp;</span>
                     <input type="checkbox" />
                    </div>
                   </div>
                   <div className="row">
                    <div className="col">
                     <span>Username:</span>
                     <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                     <span>Password:</span>
                     <input type="text" className="form-control" />
                    </div>
                    <div className="col">
                     <span>Retype Password:</span>
                     <input type="text" className="form-control" />
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
                {/* Step 2*/}
                <div className="tab-pane fade rounded bg-white p-4" id="step2">
                 <h4 className="text-start">Preview &amp; Save</h4>
                 <div className>
                  <div className="row">
                   <div className="col">
                    <span>Name of Technician: </span>
                    <span />
                   </div>
                   <div className="col">
                    <span>Email: </span>
                    <span />
                   </div>
                   <div className="col">
                    <span>Contact: </span>
                    <span />
                   </div>
                  </div>
                  <div className="row">
                   <div className="col">
                    <span>ID</span>
                    <span />
                   </div>
                   <div className="col">
                    <span>Address:</span>
                    <span />
                   </div>
                   <div className="col">
                    <span>HEAD TEACHNICIAN</span>
                    <span />
                   </div>
                  </div>
                  <div className="row pt-4">
                   <div className="col">
                    <span>Username: </span> <span />
                   </div>
                   <div className="col">
                    <span>Password: </span> <span />
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </form>
              <div className="row justify-content-between">
               <div className="col-auto">
                <button
                 type="button"
                 className="btn btn-secondary"
                 data-enchanter="previous">
                 Previous
                </button>
               </div>
               <div className="col-auto">
                <button
                 type="button"
                 className="btn btn-primary"
                 data-enchanter="next">
                 Next
                </button>
                <button
                 type="submit"
                 className="btn btn-primary"
                 data-enchanter="finish">
                 Finish
                </button>
               </div>
              </div>
             </div>
            </div>
           </div>
           {/* End: Multi step form */}
          </div>
          <footer className="bg-white sticky-footer">
           <div className="container my-auto">
            <div className="text-center my-auto copyright">
             <span>Copyright © OCCC 2023</span>
            </div>
           </div>
          </footer>
         </div>
         <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up" />
         </a>
        </div>

        {/* MAIN CONTENT */}
       </div>
      </div>
     </div>
    );
}

export default Create_tech;