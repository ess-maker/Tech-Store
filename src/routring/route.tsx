import {
    createBrowserRouter,
  } from "react-router-dom";
import Sidebar from "../componante/sidebar/Sidebar";
import Carsoul from "../componante/header/Carsoul";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Sidebar />
    },
  ])
  
const route = () => {
  return (
    <div>
      <Sidebar />
      <Carsoul />
    </div>
  )
}

export default route