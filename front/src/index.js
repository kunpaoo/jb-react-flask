import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Customers from './pages/Customer';
import CustomerAdd from './pages/CustomerAdd';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/customers",
    element: <Customers/>,
  },
  {
    path:"/customers/add",
    element: <CustomerAdd/>
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
