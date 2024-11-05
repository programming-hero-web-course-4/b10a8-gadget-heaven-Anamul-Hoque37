import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Products from './Components/Home/Products.jsx';
import Cart from './Components/Dashboard/Cart.jsx';
import Wishlist from './Components/Dashboard/Wishlist.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/cards/:product_id",
        element: <Products></Products>,
        loader: () => fetch('../public/Laptop.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../public/Laptop.json')
      }
      // {
      //   path: "/dashboard/cart",
      //   element: <Cart></Cart>
      // },
      // {
      //   path: "/dashboard/wishlist",
      //   element: <Wishlist></Wishlist>
      // }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
