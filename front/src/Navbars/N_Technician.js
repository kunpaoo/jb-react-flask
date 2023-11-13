import DashboardIcon from "@mui/icons-material/Dashboard";
import Groups2Icon from "@mui/icons-material/Groups2";
import PortraitIcon from "@mui/icons-material/Portrait";
import WorkIcon from "@mui/icons-material/Work";
import MemoryIcon from "@mui/icons-material/Memory";
import CreditCard from "@mui/icons-material/CreditCard";
const N_Technician = () => {
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
    </ul>
   </div>
  </nav>
 );
};

export default N_Technician;
