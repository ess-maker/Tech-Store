import { FormEvent, useState } from "react"
import "./login.scss"

interface FormDatasingup {
    username:string,
    email:string,
    password:string,
    fullName:string,
    img:(File | null),
  }


const singup = () => {
    const [img , setimg] = useState<File | null>(null)
    const [formData, setFormData] = useState<FormDatasingup>({
        username: "",
        email: "",
        password: "",
        fullName: "",
        img:img
      });
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted");
        console.log("Email:", formData.email);
        console.log("Password:", formData.password);
        // Reset form fields
        setFormData({ username: "", email: "", password: "", fullName: "", img:null });
      };
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    const handelimg  = (e:any) => {
        setimg(e.target.files[0])
       }
  return (
    <div className="container">
    <form  className="main-form" action="" onSubmit={handleSubmit} method="post">
    <input onChange={handleChange} type="text" name="Username" placeholder="Username" />
    <input onChange={handleChange} type="email" name="Email" placeholder="Email" />
    <input onChange={handleChange} type="Password" name="password" placeholder="Password" />
    <input onChange={handleChange} type="text" name="Full Name" placeholder="Full Name" />
    <label className="custom-file-upload">
    <input type="file" name="file" placeholder="hamza" className="file-input" onChange={(e) => handelimg(e)} />
  Upload img
</label>
<button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default singup