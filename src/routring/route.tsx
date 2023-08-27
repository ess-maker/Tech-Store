import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<App />
    }
  ])
  
const route = () => {
  return (
    <div>route</div>
  )
}

export default route