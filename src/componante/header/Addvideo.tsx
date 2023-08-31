import { addvideo } from "../../content"
import "./addvideo.scss"
function Addvideo({ show }: { show: boolean }) {  
  return (
    show && (
      <div className="Addvideo">
        {addvideo.map((ele , index) => (
          <div key={index} className={`pop`}>
            <img className="pop_img" src={ele.img} alt="img" />
            <p className="pop_titel">{ele.titel}</p>
          </div>
        ))}
      </div>
    )
  )
}

export default Addvideo