import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <div>LoginPage</div>,
  },
  {
    path: "/register",
    element: <div>RegisterPage</div>,
  },
  {
    path: "/users",
    element: <div>UserPage</div>,
  },
  {
    path: "/products",
    element: <div>ProductPage</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
