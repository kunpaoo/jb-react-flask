import * as React from 'react';
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
import { ThemeProvider } from "styled-components"; 

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

  const customTheme = {
   // Customize styles here
   // Example:
   colors: {
    primary: "red",
   },
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
  <nav
   className="navbar navbar-expand bg-white shadow static-top navbar-light "
   id="header"
   style={{ paddingBottom: "0px", marginBottom: "6px" }}>
   <div className="container-fluid">
    <div className="col-xxl-12 " id="top">
     <div
      className="row"
      id="row_header"
      style={{ height: "100%", width: "110vw" }}>
      <div
       className="col-xl-1 col-auto w-auto"
       style={{
        paddingLeft: "4px",
        marginRight: "5px",
        paddingRight: "0px",
       }}>
       <div style={{ paddingTop: "8px", paddingLeft: "20px" }}>
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
      <div className="col-xl-1 col-auto w-auto h-auto">
       <div style={{ paddingTop: "6px" }}>
        {/* Start: Clock-Real-Time */}
        <div
         id="time"
         style={{
          background: "#ffffff",
          borderStyle: "solid",
          borderColor: "rgb(2,60,63)",
          marginBottom: "18px",
          paddingTop: "0px",
          paddingLeft: "23px",
          paddingBottom: "0px",
          borderRadius: 20,
          boxShadow: "0px 0px",
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
      <div
       className="col-xxl-2 col-auto w-auto h-auto"
       style={{
        marginRight: "5px",
        paddingRight: "0px",
        marginTop: "12pt",
       }}>
       <ThemeProvider theme={customTheme}>
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
       </ThemeProvider>
      </div>
      <div
       className="col-xxl-2 col-auto w-auto h-auto justify-content-end"
       style={{ paddingRight: "0px", paddingLeft: "1px" }}>
       <div id="position" className="w-auto d-flex flex-wrap">
        <div
         className="col-xl-12 w-auto col-auto"
         style={{ paddingRight: "2px", marginRight: "10px" }}>
         <span
          id="name"
          className="flex-fill d-flex w-auto w-auto"
          style={{
           height: "auto",
           width: "94.9px",
           paddingBottom: "0px",
           paddingTop: "7px",
           color: "rgb(2,41,20)",
           fontSize: "21px",
           fontWeight: "500",
           textAlign: "right",
           marginTop: "8px",
          }}>
          Nina Paraiso
         </span>
         <div className="w-auto">
          <span
           id="down"
           className="d-inline-flex w-auto h-auto"
           style={{
            paddingBottom: "1px",
            marginTop: "-10px",
           }}>
           Manager
          </span>
         </div>
        </div>
        <IconButton
         className="align-items-center"
         size="small"
         sx={{ marginBottom: "8pt", marginRight: "6pt", marginLeft: "-3pt" }}>
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
         <MenuItem onClick={handleClose}>
          <ListItemIcon>
           <Settings fontSize="small" />
          </ListItemIcon>
          My profile
         </MenuItem>
         <MenuItem onClick={handleClose}>
          <ListItemIcon>
           <Logout fontSize="small" />
          </ListItemIcon>
          Logout
         </MenuItem>
        </Menu>
       </div>
      </div>
      <div
       className="col align-item-end"
       style={{
        paddingLeft: "0px",
        paddingRight: "1px",
       }}>
       {/* Start: Gravatar Image */}
       <img
        className="rounded-circle"
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
