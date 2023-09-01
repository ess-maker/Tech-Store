import { FormEvent, useState } from "react"
import "./signup.css"
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
    <div>
    <h1>Login</h1>

    <form className='signup-container' onSubmit={handleSubmit}>
      <label htmlFor='pimg' className='profile-image-label'>
      </label>
      <br />
      <label>Email:</label>
      <input onChange={handleChange} className='email-input' type="email"/>
      <br />
      <label>Password:</label>
      <input onChange={handleChange} className='password-input' type="password" />
      <br />
      <Link to="../"> <p className="alrady_singup">Not Sign Up ? Login</p></Link>      
      <button className='submit-button' type="submit">
        Login
      </button>
    </form>
  </div>
  )
}

export default Login