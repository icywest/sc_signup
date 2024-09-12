import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';


import App from "./App";
import Welcome from "./Welcome";
import Students from "./Students";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }, {
    path: '/welcome',
    element: <Welcome/>
  }, {
    path: '/students',
    element: <Students/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
