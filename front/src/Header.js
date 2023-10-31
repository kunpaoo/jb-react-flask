import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
 return (
  <nav
   className="navbar navbar-expand bg-white shadow static-top navbar-light navbar-collapse"
   id="header"
   style={{ paddingBottom: "0px", marginBottom: "6px" }}>
   <div className="container-fluid">
    <div className="col-xl-11 col-xxl-11 flex-wrap d-flex" id="top">
     <div className="row" id="row_header">
      <div
       className="col-lg-3 col-xl-1 col-auto w-auto"
       style={{
        paddingLeft: "4px",
        marginRight: "5px",
        paddingRight: "0px",
       }}>
       <div style={{ paddingTop: "8px", paddingLeft: "8px" }}>
        <span
         style={{
          fontWeight: "bold",
          fontSize: "37px",
          color: "rgb(2,60,63)",
          fontFamily: "Adamina, serif",
          marginBottom: "1px",
          paddingBottom: "0px",
          paddingTop: "0px",
          marginTop: "0px",
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
      <div className="col-xl-2 col-xxl-2 col-auto w-auto h-auto" />
      <div className="col justify-content-center">
       {/* Start: Search form block */}
       <div
        className="container flex-column position-relative d-flex w-auto"
        style={{
         paddingLeft: "0px",
         marginRight: "3px",
         paddingRight: "0px",
        }}>
        <div className="col-auto ml-auto mr-auto" />
       </div>
       {/* End: Search form block */}
      </div>
      <div
       className="col-1 col-sm-1 col-xl-1 col-xxl-1 col-auto w-auto justify-content-end"
       style={{
        paddingLeft: "0px",
        marginRight: "1px",
        paddingRight: "0px",
       }}>
       <NotificationsIcon
        sx={{
         color: "#023c3f",
         width: "1em",
         height: "1em",
         marginLeft: "1px",
         fontSize: "47px",
         paddingTop: "0px",
         marginTop: "11px",
        }}
       />
      </div>
      <div
       className="col-10 col-sm-7 col-md-5 col-lg-2 col-xl-2 col-xxl-3 col-auto w-auto justify-content-end"
       style={{ paddingRight: "0px", paddingLeft: "1px" }}>
       <div
        id="position"
        className="w-auto d-flex flex-wrap"
        style={{ paddingRight: "0px", marginRight: "0px" }}>
        <div
         className="col-xl-12 w-auto col-auto"
         style={{ paddingRight: "2px", marginRight: "10px" }}>
         <span
          id="name"
          className="flex-fill d-flex w-auto w-auto"
          style={{
           paddingRight: "0px",
           marginRight: "2px",
           paddingLeft: "0px",
           height: "auto",
           width: "94.9px",
           paddingBottom: "0px",
           marginBottom: "-1px",
           paddingTop: "7px",
           color: "rgb(2,41,20)",
           fontSize: "21px",
           fontWeight: "500",
           textAlign: "right",
           marginTop: "10px",
          }}>
          Nina Paraiso
         </span>
         <div className="w-auto">
          <span
           id="down"
           className="d-inline-flex w-auto h-auto"
           style={{
            paddingBottom: "1px",
            marginBottom: "0px",
            paddingTop: "0px",
            marginTop: "-10px",
           }}>
           Manager
          </span>
         </div>
        </div>
        <div
         className="dropdown"
         style={{
          marginRight: "0px",
          paddingTop: "0px",
          paddingBottom: "11px",
         }}>
         <a
          className="dropdown-toggle"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          id="drop_Button"
          href="#dropdown"
          style={{
           paddingRight: "8px",
           marginLeft: "1px",
           marginRight: "6px",
           paddingBottom: "0px",
           marginBottom: "0px",
           paddingTop: "0px",
           marginTop: "2px",
          }}
         />
         <div className="dropdown-menu flex-wrap" id="dropdown">
          <a className="dropdown-item" href="/profile.html">
           Profile
          </a>
          <a className="dropdown-item">Log out</a>
          <a className="dropdown-item" id="another_acc" href="#">
           Log in to another account
          </a>
         </div>
        </div>
       </div>
      </div>
      <div
       className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 col-auto w-auto"
       style={{
        paddingLeft: "0px",
        paddingRight: "1px",
        marginRight: "-1px",
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
