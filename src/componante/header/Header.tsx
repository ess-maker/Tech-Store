import assets from "../../assets/imges"
import Carsoul from "./Carsoul"
import "./header.scss"

const Header = () => {

    fetch('http://localhost:8000/api.php')
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
  });
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
              <img src={assets.addvidoi} alt="addvidoi" />
              <img src={assets.alret} alt="alret" />
          </div>
          
      </div>
      <Carsoul />
      </div>
  )
}

export default Header