import DashboardIcon from "@mui/icons-material/Dashboard";
import Groups2Icon from "@mui/icons-material/Groups2";
import PortraitIcon from "@mui/icons-material/Portrait";
import WorkIcon from "@mui/icons-material/Work";
import MemoryIcon from "@mui/icons-material/Memory";
import CreditCard from "@mui/icons-material/CreditCard";
const Navbar = () => {
 return (
  <nav
   className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary navbar-dark"
   style={{ background: "rgb(56,57,58)" }}>
   <div className="container-fluid d-flex flex-column">
    <hr className="sidebar-divider" />
    <div className="container">
     <div className="row">
      <div className="col" id="image">
       <img
        alt="logo"
        style={{ marginRight: 12, marginLeft: -15 }}
        className="position-relative"
        src="https://private-user-images.githubusercontent.com/120037889/279146448-b5808a7e-93a8-4d95-8cad-04fff7557572.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTg2ODc1ODcsIm5iZiI6MTY5ODY4NzI4NywicGF0aCI6Ii8xMjAwMzc4ODkvMjc5MTQ2NDQ4LWI1ODA4YTdlLTkzYTgtNGQ5NS04Y2FkLTA0ZmZmNzU1NzU3Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMDMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTAzMFQxNzM0NDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YmZlZTYzZDMzN2U4NzY0NGU5YTk0OTI4YzY5YTM5ODQ2YzYwZDU4NDMxOTQ4NDFiYmYwNTIxMzg4NzFjM2UyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.qpGb8PM_e7AbC13wCX5bHnhgtvMyn3IyG0JY00O1DSU"
        width={182}
        height={118}
       />
      </div>
     </div>
    </div>
    <ul className="navbar-nav text-light" id="accordionSidebar">
     <li className="nav-item">
      <a className="nav-link " href="/Dashboard">
       <DashboardIcon />
       <span style={{ paddingInline: 4, marginTop: 120 }}>Dashboard</span>
      </a>
     </li>
     <li className="nav-item">
      <a className="nav-link" href="/technician">
       <Groups2Icon />
       <span style={{ paddingInline: 4 }}>Technicians</span>
      </a>
     </li>
     <li className="nav-item">
      <a className="nav-link" href="/customer">
       <PortraitIcon />
       <span style={{ paddingInline: 4}}>Customers</span>
      </a>
     </li>
     <li className="nav-item">
      <a className="nav-link" href="/job_order">
       <WorkIcon />
       <span style={{ paddingInline: 4 }}>Job Order</span>
      </a>
     </li>
     <li className="nav-item">
      <a className="nav-link" href="/parts_list">
       <MemoryIcon />
       <span style={{ paddingInline: 4 }}>Items/Parts</span>
      </a>
     </li>
     <li className="nav-item">
      <a className="nav-link" href="/Bill_Payment">
       <CreditCard />
       <span style={{ paddingInline: 4 }}>Bills/Payments</span>
      </a>
     </li>
    </ul>
   </div>
  </nav>
 );
};

export default Navbar;
