import React, { FormEvent, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./signup.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const Loginurl = 'http://localhost:8000/login.php'
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true)

    console.log("Form submitted");
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);

    axios.post(Loginurl , {
      email: formData.email,
      password: formData.password,
    }).then(response => {
      console.log(response);
    })
  
}
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));    }


  return (
    <div>
      <h1>Login</h1>
      <form className="signup-container" onSubmit={handleSubmit}>
        <label htmlFor="pimg" className="profile-image-label"></label>
        <br />
        <label>Email:</label>
        <input
          onChange={handleChange}
          className="email-input"
          type="email"
        />
        <br />
        <label>Password:</label>
        <input
          onChange={handleChange}
          className="password-input"
          type="password"
        />
        <br />
        <Link to="../">
          <p className="alrady_singup">Not Sign Up ? Login</p>
        </Link>
        <button className="submit-button" type="submit">
          {`${isLoading ?"loding...":"Login"}`}
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;