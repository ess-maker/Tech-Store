import { FormEvent, useState } from "react"
import assets from "../../assets/imges"
import "./login.scss"
import { Link } from "react-router-dom";
interface FormData {
    email: string;
    password: string;
  }
const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
      });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
    // Reset form fields
    setFormData({ email: "", password: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
    <div className="container">
          <div className="section-one">
              <div className="social-links">
                  <div className="facebook">
                      <div className="icon">
                          <img src={assets.facebookLogo} alt="" />
                      </div>
                  </div>
                  <div className ="twitter">
                  <div className="icon">
                      <img src={assets.twitterLogo} alt="" />
                  </div>
                                </div>
          </div>
          <form onSubmit={handleSubmit} className="main-form" action="" method="post">
              <input onChange={handleChange} type="email" name="email" placeholder="Email" />
              <input onChange={handleChange} type="password" name="password" placeholder="Password" />
              <a href="#">I forgot my password?</a>
              <button type="submit" onClick={handleSubmit} >Submit</button>
          </form>
          <Link to="/signup">
          <button>
          Create New Account
          </button>
          </Link>
      </div>
  </div>
          </>
  )
}

export default Login