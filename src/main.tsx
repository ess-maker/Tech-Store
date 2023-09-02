import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import "./sass/base/_reset.scss"
import Login from "./componante/login and singup/Login";
import Singup from "./componante/login and singup/Singup";
import App from './componante/App';

export const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
},
{
  path: "/login",
  element: <Login />,
  
},
{
  path: "signup",
  element: <Singup />
}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
