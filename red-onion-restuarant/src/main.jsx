import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root/Root';
import Home from './Pages/Home/Home/Home';
import FoodProvider from './Provider/FoodProvider';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import Cart from './Pages/Cart/Cart/Cart';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodProvider>
      <Root></Root>
    </FoodProvider>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/home',
        element : <Home></Home>
      },
      {
        path:'/food/:FoodID',
        element:<PrivateRoute>
          <FoodDetails></FoodDetails>
        </PrivateRoute>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
      ,
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
        <FoodProvider>
        <RouterProvider router={router} />
        </FoodProvider>
        </AuthProvider>
  </React.StrictMode>,
)
