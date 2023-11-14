import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import Notifications from "react-notifications-menu";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
const DEFAULT_NOTIFICATION = {
 image:
  "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
 message: "Notification one.",
 detailPage: "/events",
 receivedTime: "12h ago",
};

const Header = () => {
  const [data, setData] = useState([DEFAULT_NOTIFICATION]);
  const [message, setMessage] = useState("");

  const onClick = () => {
   if (message.length > 0) {
    setData([
     ...data,
     {
      ...DEFAULT_NOTIFICATION,
      message,
     },
    ]);
    setMessage("");
    alert("notification added");
   }
  };

      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
       setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
       setAnchorEl(null);
      };


 return (
  <nav className="d-flex mb-3 navbar bg-white shadow static-top navbar-light w-100 h-auto">
   <div className="row w-100">
    <div className="ps-2 ms-3 col-auto w-auto">
     <div className="pt-2 ps-1">
      <span
       style={{
        fontWeight: "bold",
        fontSize: "37px",
        color: "rgb(2,60,63)",
        fontFamily: "Adamina, serif",
       }}>
       OCCC
      </span>
     </div>
    </div>
    <div className="w-auto h-auto">
     <div className="pt-2">
      {/* Start: Clock-Real-Time */}
      <div
       id="time"
       style={{
        borderStyle: "solid",
        borderColor: "rgb(2,60,63)",
        marginBottom: "18px",
        paddingLeft: "23px",
        borderRadius: 20,
       }}></div>
      {/* End: Clock-Real-Time */}
     </div>
    </div>
    <div className="col-xxl-2 col-auto w-auto h-auto" />
    <div className="col ">
     {/* Start: Search form block */}
     <div className="container flex-column position-relative d-flex w-auto">
      <div className="col-auto ml-auto mr-auto" />
     </div>
     {/* End: Search form block */}
    </div>
    <div className="mt-4 col-auto">
     <Notifications
      data={data}
      height="500px"
      width="300px"
      header={{
       title: "Notifications",
       option: { text: "View All", onClick: () => console.log("Clicked") },
      }}
      markAsRead={(data) => {
       console.log(data);
      }}
     />
    </div>
    <div className="col-auto">
     <div id="position" className="d-flex">
      <div className="pb-1">
       <span
        id="name"
        style={{
         width: "94.9px",
         color: "rgb(2,41,20)",
         fontSize: "21px",
         fontWeight: "500",
         textAlign: "right",
        }}>
        Nina Paraiso
       </span>
       <div className="w-auto">
        <span id="down" className="h-auto" style={{ marginTop: "-10px" }}>
         Manager
        </span>
       </div>
      </div>
      <IconButton className="align-items-center mb-2" size="small">
       <ArrowDropDownIcon
        onClick={handleClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}></ArrowDropDownIcon>
      </IconButton>
      <Menu
       anchorEl={anchorEl}
       id="account-menu"
       open={open}
       onClose={handleClose}
       onClick={handleClose}
       transformOrigin={{ horizontal: "right", vertical: "top" }}
       anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
       <MenuItem onClick={handleClose}>
        <ListItemIcon>
         <PersonAdd fontSize="small" />
        </ListItemIcon>
        Log in to another account
       </MenuItem>
       <a href="/Profile_Page">
        <MenuItem onClick={handleClose}>
         <ListItemIcon>
          <Settings fontSize="small" />
         </ListItemIcon>
         My profile
        </MenuItem>
       </a>
       <a href="/LogIn_Page">
        <MenuItem href="/LogIn">
         <ListItemIcon href="/LogIn">
          <Logout fontSize="small" />
         </ListItemIcon>
         Logout
        </MenuItem>
       </a>
      </Menu>
      <div className="">
       {/* Start: Gravatar Image */}
       <img
        className="rounded-circle ms-2"
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        width={70}
        height={68}
       />
       {/* End: Gravatar Image */}
      </div>
     </div>
    </div>
   </div>
  </nav>
 );
};

export default Header;
