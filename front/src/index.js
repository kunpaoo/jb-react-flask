import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard/Dashboard';
import Technician from './tech_pages/Technician';
import Edit_tech from './tech_pages/Edit_technician';
import Create_tech from './tech_pages/Create_tech';
import JobOrder from './JobOrder_pages/Job_order';
import Createjob from './JobOrder_pages/Create_Job_order';
import Edit_Job_Order from './JobOrder_pages/Edit_JobOrder';
import Customer from './Cust_pages/Customer';
import Create_customer from './Cust_pages/Create_Customer';
import Edit_cust from './Cust_pages/Edit_Cust';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Edit_job from './JobOrder_pages/Edit_JobOrder';
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
  element: <Create_tech />,
 },
 {
  path: "/Edit_technician",
  element: <Edit_tech />,
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
  path: "/Edit_Job_Order",
  element: <Edit_Job_Order />,
 },
 {
  path: "/customer",
  element: <Customer />,
 },
 {
  path: "/create_customer",
  element: <Create_customer />,
 },
 {
  path: "/edit_customer",
  element: <Edit_cust />,
 },
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
