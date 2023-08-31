import { useState } from "react";
import assets from "../../assets/imges"
import Addvideo from "./Addvideo";
import Carsoul from "./Carsoul"
import "./header.scss"
import Vidos from "../youtube_vidos/Vidos";

const Header = () :JSX.Element =>  {
  const [toggol , settoggol] = useState<boolean>(false)

  const handelshow = () => {
    settoggol(prev => (!prev))
  }


  return (
    <div className="two">
    <div className="header">
          <div className="shearchbar">
              <div className="first">
                  <input type="text" className="bar" placeholder="Search" />
                  <img src={assets.shearch} alt="shearch" className="shearch" />
              </div>
              <img src={assets.micrphone} alt="micrphone" />
          </div>
          <div className="user">
            <div className="addvidoi">
              <img onClick={handelshow} src={assets.addvidoi} alt="addvidoi" />
              <Addvideo show = {toggol} />
            </div>
            <div>
              <img src={assets.alret} alt="alret" />
            </div>
          </div>
          
      </div>
      <Carsoul />
      <Vidos />
      </div>
  )
}

export default Header