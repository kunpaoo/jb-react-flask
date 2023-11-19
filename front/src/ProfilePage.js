import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Badge } from "react-bootstrap";
var ProfilePage = () => {
       function click() {
        // toggle the type attribute
        const togglePassword = document.querySelector("#togglePassword");
        const passwordV = document.querySelector("#password_field");
        const type =
         passwordV.getAttribute("type") === "password" ? "text" : "password";
        togglePassword.className === "fa fa-eye viewpass mr-4 text-muted"
         ? (document.getElementById("togglePassword").className =
            "fa fa-eye-slash viewpass mr-4 text-muted")
         : (document.getElementById("togglePassword").className =
            "fa fa-eye viewpass mr-4 text-muted");
        passwordV.setAttribute("type", type);
       }
 return (
  <>
   <div id="page-top" class="overflow-hidden">
    <div id="wrapper">
     <Navbar />
     <div className="h-100 w-100">
      <Header />
      <div>
       <div className="container-fluid">
        <h2 className="text-dark mb-5 pb-4 ms-3">Profile</h2>
        <div className="row bg-light border border-2 shadow mx-3">
         <div className="col-100 mt-5">
          <div className="row">
           <div className="col-auto">
            <img
             className="rounded-circle border-secondary-subtle shadow ms-3"
             src="https://pbs.twimg.com/media/F4s5HMgboAAoLOF.jpg"
             style={{
              marginTop: "-6rem",
              width: "8rem",
              height: "8rem",
              border: "solid",
             }}
            />
           </div>
           <div className="col-auto flex-column text-start" style={{ marginTop: "-2rem" }}>
            <div className="col-auto">
             <span style={{ fontSize: "2rem", fontWeight: "normal" }}>
              Technician K. One
             </span>
             <Badge bg="success" className="ms-2">
              HEAD TECHNICIAN
             </Badge>
            </div>
           </div>

           <div
            className="col text-end me-4"
            style={{
             marginTop: "-2rem",
             fontSize: "1.5rem",
             fontWeight: "bold",
            }}>
            <span>ID:</span>
            <span>123</span>
           </div>
          </div>
          <div className="row">
           <div className="col">
            <div className="p-4">
             <div className="">
              <h4>Personal Information</h4>
              <form className="form-control mt-4">
               <div className="row pt-2">
                <div className="col ms-2">
                 <div className="row text-lg">
                  <strong>Username: </strong>
                 </div>
                 <div className="row">
                  <span className="">mnamparaiso-OCCC</span>
                 </div>
                </div>
                <div className="col">
                 <div className="row text-lg">
                  <strong>Email Address: </strong>
                 </div>
                 <div className="row">
                  <span className="">mnamparaiso@addu.edu.ph</span>
                 </div>
                </div>
               </div>
               <div className="row pb-3">
                <div className="col ms-2">
                 <div className="row text-lg">
                  <strong>Address: </strong>
                 </div>
                 <div className="row">
                  <span className="">Purok Silang, Koronadal City</span>
                 </div>
                </div>
                <div className="col">
                 <div className="row text-lg">
                  <strong>Contact Number: </strong>
                 </div>
                 <div className="row">
                  <span className="">09759983569</span>
                 </div>
                </div>
               </div>
              </form>
              <div className="pb-5 mt-4">
               <button
                className="btn btn-primary me-2 float-end"
                data-bs-toggle="modal"
                data-bs-target="#modal-2">
                Edit
               </button>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="modal fade" role="dialog" tabIndex={-1} id="modal-2">
    <div className="modal-dialog modal-lg" role="document">
     <div className="modal-content">
      <div className="modal-body">
       <div
        className="row"
        style={{
         paddingTop: "20px",
         marginLeft: "10px",
         marginRight: "6px",
        }}>
        <div className="col " style={{ paddingRight: "23px" }}>
         <div
          className="col"
          style={{
           paddingBottom: "15px",
           borderRadius: "34px",
           borderColor: "rgba(133,135,150,0)",
           paddingRight: "22px",
          }}>
          <div className="row pt-1 pb-3">
           <div className="col text-center">
             <strong style={{ fontSize: "25px" }}>Edit Information</strong>

           </div>
          </div>
          <div className="row pt-2" >
           <div className="col">
            <span>Name: &nbsp;</span>
            <div>
             <input className="form-control" type="text" />
            </div>
           </div>
           <div className="col">
            <span>Email&nbsp;</span>
            <div>
             <input className="form-control" type="text" />
            </div>
           </div>
           <div className="col">
            <span>Contact&nbsp;</span>
            <div>
             <input className="form-control" type="password" />
            </div>
           </div>
          </div>
          <div className="row pt-2">
           <div className="col">
            <span>Address:&nbsp;</span>
            <div>
             <textarea className="form-control" type="password" />
            </div>
           </div>
          </div>
          <div className="row pt-2">
           <div className="col">
            <span>Current Password:&nbsp;</span>
            <div>
             <input className="form-control" type="password" />
            </div>
           </div>
           <div className="col">
            <span>New Password:&nbsp;</span>
            <div>
             <input className="form-control" type="password" />
            </div>
           </div>
           <div className="col">
            <span>Re-type New Password:&nbsp;</span>
            <div>
             <input className="form-control" type="password" />
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div className="modal-footer">
       <button
        className="btn btn-light"
        type="button"
        data-bs-dismiss="modal"
        style={{ background: "rgb(241,241,241)" }}>
        Close
       </button>
       <button
        className="btn btn-light"
        type="button"
        data-bs-dismiss="modal"
        style={{ background: "rgb(0, 48, 46)", color: "#ffffff" }}>
        Save
       </button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default ProfilePage;
