import Navbar from "../Navbar";
import Header from "../Header";
import Scheduler from "react-mui-scheduler";
import Footer from "../Footer";




var View_deliveries = () => {
   const config = {
    options: {
     transitionMode: "zoom", // or fade
     startWeekOn: "mon", // or sun
     defaultMode: "month", // or week | day | timeline
     minWidth: 540,
     maxWidth: 540,
     minHeight: 540,
     maxHeight: 540,
    },
   
    toolbarProps: {
     showSearchBar: true,
     showSwitchModeButtons: true,
     showDatePicker: true,
    },
   };

   const events = [
    {
     id: "event-1",
     label: "Medical consultation",
     groupLabel: "Dr Shaun Murphy",
     user: "Dr Shaun Murphy",
     color: "#f28f6a",
     startHour: "04:00 AM",
     endHour: "05:00 AM",
     date: "2022-05-05",
     createdAt: new Date(),
     createdBy: "Kristina Mayer",
    },
    {
     id: "event-2",
     label: "Medical consultation",
     groupLabel: "Dr Claire Brown",
     user: "Dr Claire Brown",
     color: "#099ce5",
     startHour: "09:00 AM",
     endHour: "10:00 AM",
     date: "2022-05-09",
     createdAt: new Date(),
     createdBy: "Kristina Mayer",
    },
    {
     id: "event-3",
     label: "Medical consultation",
     groupLabel: "Dr Menlendez Hary",
     user: "Dr Menlendez Hary",
     color: "#263686",
     startHour: "13 PM",
     endHour: "14 PM",
     date: "2022-05-10",
     createdAt: new Date(),
     createdBy: "Kristina Mayer",
    },
    {
     id: "event-4",
     label: "Consultation prénatale",
     groupLabel: "Dr Shaun Murphy",
     user: "Dr Shaun Murphy",
     color: "#f28f6a",
     startHour: "08:00 AM",
     endHour: "09:00 AM",
     date: "2022-05-11",
     createdAt: new Date(),
     createdBy: "Kristina Mayer",
    },
   ];

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
       <div className="container">
        <h1> View Delveries</h1>
        <Scheduler
         locale="pt-BR"
         events={events}
         legacyStyle={false}
         options={config.options}
         alertProps={config.alertProps}
         toolbarProps={config.toolbarProps}
        />
       </div>

       <Footer />
      </div>
     </div>
    </div>
   );
}
export default View_deliveries;