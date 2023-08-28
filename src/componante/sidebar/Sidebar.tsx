import assets from "../../assets/imges"
import { sidebar } from "../../content"
import Header from "../header/Header"
import "./_sidebar.scss"

const Sidebar = () => {
  return (
    <div className="handler">
    <div className="Sidebar">
      <div className="first">
        <img src={assets.menu} alt="menu" className="youtube_menu" />
        <img src={assets.logolink} alt="youtubelink" />
      </div>
      <ul className="sidebar_list">
        {sidebar.map((link, index) => (
          <li key={link.id} className={`list${index}`}>
            <img src={link.img} alt="" className="img_list" />
            <h3 className="link_list">{link.link}</h3>
          </li>
        ))}
      </ul>
      <div className="subtube">
        <h3 className="subtube_titel">SUBSCRIPTIONS</h3>
        <ul>

        </ul>
      </div>
    </div>
    <Header />
    </div>
  )
}

export default Sidebar