import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const LoginPage = () => {

 return (
  <>
   <div className="container mw-100 align-self-center align-self-center">
    <div
     className="row justify-content-center mt-4"
     style={{ paddingTop: "136px" }}>
     <div
      className="col-md-9 col-lg-12 col-xl-10"
      style={{ marginTop: "26px", borderColor: "rgba(133,135,150,0)" }}>
      <div
       className="card flex-wrap d-flex bg-transparent"
       style={{
        borderColor: "rgba(133,135,150,0)"
       }}>
       <div className="card-body p-0 d-flex justify-content-center">
        <div
         className="row justify-content-evenly w-100"
         style={{ marginLeft: "-1px" }}>
         <div
          className="col-lg-6 col-xl-6 d-none d-lg-flex justify-content-center"
          style={{
           paddingLeft: "0px",
           paddingTop: "0px",
           marginTop: "21px",
          }}>
          <div className="row">
           <div className="col">
            <div>
             <div className="col">
              <img
               alt="occc logo"
               src="https://private-user-images.githubusercontent.com/120037889/282237167-c16b28a0-2b57-4612-9d49-cf0aac138a25.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTk3MDAwNjQsIm5iZiI6MTY5OTY5OTc2NCwicGF0aCI6Ii8xMjAwMzc4ODkvMjgyMjM3MTY3LWMxNmIyOGEwLTJiNTctNDYxMi05ZDQ5LWNmMGFhYzEzOGEyNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTExMVQxMDQ5MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MjQxMzNiY2MwOGYzOTAwYzJjMTljNWY4YmU3N2Y5ZmI1YjZhYjcyZDRlNWViOGMyNTk3YWMxMTRjMDE5YmMwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.lHnFkFwjPsEM2d_hjgMT9D4QEOtih4rqmr6x6Sswucw"
               width={73}
               height={121}
               style={{
                paddingTop: "0px",
                paddingBottom: "30px",
                marginTop: "-24px",
               }}
              />
              <span
               className="align-self-center"
               style={{
                fontSize: "88px",
                paddingBottom: "0px",
                marginBottom: "1px",
                marginTop: "-14px",
                paddingTop: "0px",
                color: "rgb(0,0,0)",
               }}>
               NLINE
              </span>
             </div>
            </div>
            <div className="row">
             <div
              className="col"
              style={{ paddingTop: "0px", marginTop: "-45px" }}>
              <span
               style={{
                fontSize: "64px",
                marginTop: "0px",
                paddingBottom: "0px",
                color: "rgb(0,0,0)",
               }}>
               COMPUTER
              </span>
             </div>
            </div>
            <div className="row">
             <div
              className="col"
              style={{ paddingTop: "0px", marginTop: "-35px" }}>
              <span style={{ fontSize: "64px", color: "rgb(0,0,0)" }}>
               CENTER
              </span>
             </div>
            </div>
            <div className="row">
             <div className="col" style={{ marginTop: "-40px" }}>
              <span style={{ fontSize: "64px", color: "rgb(0,0,0)" }}>
               CORPORATION
              </span>
             </div>
            </div>
           </div>
          </div>
         </div>
         <div
          className="col-lg-6 col-xl-5 mw-100 shadow-sm"
          style={{ background: "rgba(255,255,255,0)" }}>
          <div className="p-5" style={{ background: "rgba(255,255,255,0)" }}>
           <div className="text-center">
            <h4 className="text-dark mb-4" style={{ fontSize: "45px" }}>
             Welcome
            </h4>
           </div>
           <form className="user">
            <div className="mb-3">
             <input
              className="form-control form-control-user"
              type="email"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Email Address..."
              name="email"
              style={{ borderRadius: "12px" }}
             />
            </div>
            <div className="mb-3">
             <input
              className="form-control form-control-user"
              type="password"
              id="exampleInputPassword"
              placeholder="Password"
              name="password"
              style={{ borderRadius: "12px" }}
             />
            </div>
            <div className="mb-3">
             <div className="custom-control custom-checkbox small" />
            </div>
            <a
             className="btn btn-primary d-block btn-user w-100"
             role="button"
             href="/Dashboard">
             Login
            </a>
           </form>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default LoginPage;
