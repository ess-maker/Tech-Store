import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios";
import "./signup.css"
import { Link } from "react-router-dom";

const Login = () => {
  const Loginurl:string = "http://localhost:8000/login.php"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mes , setmsg] = useState<string>('') 
  const [IsLoading , setIsLoading] = useState<boolean>(false)
      
      const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    email.length == 0 && password.length == 0 ? setmsg("form must filed out") : setmsg('');
    
    setIsLoading(true)

    console.log("Email:", email);
    console.log("Password:",password);

    axios.post(Loginurl, {
      email: email,
      password:password
    }).then(response => {
      setmsg(response.request.response.substring(260))
    })
  
}

  return (
    <div className="login">
    <h1>Login</h1>

    <form className='signup-container' onSubmit={handleSubmit}>
      <label htmlFor='pimg' className='profile-image-label'>
      </label>
      <br />
      <label>Email:</label>
      <input onChange={handleEmailChange} className='email-input' type="email"/>
      <br />
      <label>Password:</label>
      <input onChange={handlePasswordChange} className='password-input' type="password" />
      <p> {mes} </p>
      <br />
      <Link to="/signup"> <p className="alrady_singup">Not Sign Up ? Login</p></Link>      
      <button className='submit-button' type="submit">
        {IsLoading ? "loding..." : "Login"}
      </button>
    </form>
  </div>
  )
}

export default Login