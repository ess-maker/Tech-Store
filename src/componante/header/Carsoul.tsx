import { suggtion } from "../../content";
import "./carsoul.scss";
const Carsoul = () => {
  return (
    <div className="Carsoul">
        <ul className="Carsoul_list">
          {suggtion.map(ele => (
            <li className="Carsoul_item">{ele.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default Carsoul