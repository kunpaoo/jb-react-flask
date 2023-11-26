import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard/Dashboard';
import Technician from './tech_pages/Technician';
import EditTech from './tech_pages/Edit_technician';
import CreateTech from './tech_pages/Create_tech';
import JobOrder from './JobOrder_pages/Job_order';
import Createjob from './JobOrder_pages/Create_Job_order';
import Deliveries from './JobOrder_pages/Deliveries';
import EditJobOrder from './JobOrder_pages/Edit_JobOrder';
import Customer from './Cust_pages/Customer';
import CreateCustomer from './Cust_pages/Create_Customer';
import EditCust from './Cust_pages/Edit_Cust';

import PartList from './Parts/PartList';
import PurchaseOrders from './Parts/PurchaseOrders';
import BillsPayment from './Bills/Bills_Payments';
import ProfilePage from './Profile_Page';
import LoginPage from './LogIn_Page';
import ListOfPricings from './Bills/ListOfPricings';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
 },
 {
  path: "/Dashboard",
  element: <Dashboard />,
 },
 {
  path: "/technician",
  element: <Technician />,
 },
 {
  path: "/Create_technician",
  element: <CreateTech />,
 },
 {
  path: "/Edit_technician",
  element: <EditTech />,
 },
 {
  path: "/job_order",
  element: <JobOrder />,
 },
 {
  path: "/Create_Job_Order",
  element: <Createjob />,
 },
 {
  path: "/Edit_Job_Order/:id",
  element: <EditJobOrder />,
 },
 {
  path: "/deliveries",
  element: <Deliveries />,
 },
 {
  path: "/parts",
  element: <PartList />,
 },
 {
  path: "/parts/purchaseorders",
  element: <PurchaseOrders />,
 },
 {
  path: "/customer",
  element: <Customer />,
 },
 {
  path: "/create_customer",
  element: <CreateCustomer />,
 },
 {
  path: "/edit_customer",
  element: <EditCust />,
 },

 {
  path: "/profile",
  element: <ProfilePage />,
 },

 {
  path: "/BillsPayments",
  element: <BillsPayment />,
 },
 {
  path: "/LogIn",
  element: <LoginPage />,
 },
 {
  path: "/ListOfPricings",
  element: <ListOfPricings/>,
 }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
