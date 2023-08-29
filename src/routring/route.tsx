import {
    createBrowserRouter,
  } from "react-router-dom";
import Sidebar from "../componante/sidebar/Sidebar";
import Carsoul from "../componante/header/Carsoul";
import Login from "../componante/login and singup/Login";
import Singup from "../componante/login and singup/Singup";
  
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "signup",
    element: <Singup />
  }
]);
  
const route = () => {
  return (
    <div >
      <Sidebar />
      <Carsoul />
    </div>
  )
}

export default route