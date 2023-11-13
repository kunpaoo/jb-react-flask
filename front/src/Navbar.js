import DashboardIcon from "@mui/icons-material/Dashboard";
import Groups2Icon from "@mui/icons-material/Groups2";
import PortraitIcon from "@mui/icons-material/Portrait";
import WorkIcon from "@mui/icons-material/Work";
import MemoryIcon from "@mui/icons-material/Memory";
import CreditCard from "@mui/icons-material/CreditCard";
const Navbar = () => {
<<<<<<< HEAD
    return (
     <div className="border border-red" id="sticky-sidebar">
      <nav
       className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark"
       style={{ background: "rgb(56,57,58)" }}>
       <div className="container-fluid d-flex flex-column p-0">
        <hr className="sidebar-divider my-0" />
        <div className="container">
         <div className="row">
          <div
           className="col-md-12 jus"
           id="image"
           style={{ paddingLeft: "4px", paddingTop: "0px" }}>
           <img
            alt="logo"
            className="position-relative"
            src="/assets/img/緋色の風.png"
            width={172}
            height={86}
            style={{
             transformStyle: "preserve-3d",
             paddingBottom: "0px",
             marginTop: "-9px",
             marginRight: "12px",
             paddingRight: "16px",
            }}
           />
          </div>
         </div>
        </div>
        <ul className="navbar-nav text-light" id="accordionSidebar">
         <li className="nav-item pt-4">
          <a className="nav-link active" href="/">
           <i className="material-icons">dashboard</i>
           <span>Dashboard</span>
          </a>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="/technician">
           <i className="icon ion-ios-people" />
           <span>Technicians</span>
          </a>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="/customer">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-person-vcard-fill">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8Zm1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5ZM7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
           </svg>
           <span>Customers</span>
          </a>
         </li>
         <li className="nav-item">
          <a className="nav-link active" href="/job_order">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-briefcase-fill">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
           </svg>
           <span>Job Order</span>
          </a>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="/parts">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-cpu-fill">
            <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
            <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z" />
           </svg>
           <span>Items/Parts</span>
          </a>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="Bills.html">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-cash-stack">
            <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
           </svg>
           <span>Parts</span>
          </a>
         </li>
        </ul>
        <div className="text-center d-none d-md-inline">
         <button
          className="btn rounded-circle border-0"
          id="sidebarToggle"
          type="button"
         />
        </div>
       </div>
      </nav>
=======

 return (
  <nav
   className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary navbar-dark"
   style={{ background: "rgb(56,57,58)" }}>
   <div className="container-fluid w-auto">
    <hr className="sidebar-divider" />
    <div className="container">
     <div className="row">
      <div className="col" id="image">
       <img
        alt="logo"
        className="position-relative"
        src="https://private-user-images.githubusercontent.com/120037889/279146448-b5808a7e-93a8-4d95-8cad-04fff7557572.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTg2ODc1ODcsIm5iZiI6MTY5ODY4NzI4NywicGF0aCI6Ii8xMjAwMzc4ODkvMjc5MTQ2NDQ4LWI1ODA4YTdlLTkzYTgtNGQ5NS04Y2FkLTA0ZmZmNzU1NzU3Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMDMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTAzMFQxNzM0NDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YmZlZTYzZDMzN2U4NzY0NGU5YTk0OTI4YzY5YTM5ODQ2YzYwZDU4NDMxOTQ4NDFiYmYwNTIxMzg4NzFjM2UyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.qpGb8PM_e7AbC13wCX5bHnhgtvMyn3IyG0JY00O1DSU"
        width={182}
        height={120}
       />
      </div>
>>>>>>> main
     </div>
    </div>

    <ul className="navbar-nav d-inline-flex text-light ms-3 mt-4">
     <li className="nav-item">
      <a className="nav-link p-2 " href="/Dashboard">
       <DashboardIcon fontSize="large" />
       <span className="fs-5 ps-1">Dashboard</span>
      </a>
     </li>
     <li className="nav-item">
      <a className="nav-link p-2" href="/technician">
       <Groups2Icon fontSize="large" />
       <span className="fs-5 ps-1">Technicians</span>
      </a>
     </li>
     <li className="nav-item">
      <a className="nav-link p-2" href="/customer">
       <PortraitIcon fontSize="large" />
       <span className="fs-5 ps-1">Customers</span>
      </a>
     </li>
     <li className="nav-item">
      <a className="nav-link p-2" href="/job_order">
       <WorkIcon fontSize="large" />
       <span className="fs-5 ps-1">Job Order</span>
      </a>
     </li>
     <li className="nav-item">
      <a className="nav-link p-2" href="/parts_list">
       <MemoryIcon fontSize="large" />
       <span className="fs-5 ps-1">Items/Parts</span>
      </a>
     </li>
     <li className="nav-item">
      <a className="nav-link p-2" href="/Bill_Payment">
       <CreditCard fontSize="large" />
       <span className="fs-5 ps-1">Bills/Payments</span>
      </a>
     </li>
    </ul>
   </div>
  </nav>
 );
};

export default Navbar;
