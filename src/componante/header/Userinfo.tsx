import assets from '../../assets/imges'
import { userinfo } from '../../content'

const Userinfo = () => {
  return (
        <div className="user_info_container">
            <div className="user_info">
                <img src={assets.Image}  alt="user_img" className="user_img"/>
                <div className='user_content'>
                    <p>hamza abd rahim</p>
                    <p>essh4014@gmail.com</p>
                </div>
            </div>
          {userinfo.map((ele , index) => (
            <div key={index} className={`pop`}>
              <img className="pop_img" src={ele.img} alt="img" />
              <p className="pop_titel">{ele.titel}</p>
            </div>
          ))}
        </div>
  )
}

export default Userinfo