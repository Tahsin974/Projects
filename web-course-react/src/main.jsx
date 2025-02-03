import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PageNotFound from './Components/PageNotFound/PageNotFound';
import Roots from './Components/Roots/Roots';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import EnrollReview from './Components/EnrollReview/EnrollReview';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      
      {
        path: "/review",
        element: <EnrollReview></EnrollReview>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
