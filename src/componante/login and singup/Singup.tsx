import { FormEvent, useState } from "react";
import "./login.scss";

interface FormDataSignup {
  username: string;
  email: string;
  password: string;
  fullName: string;
  img: File | null;
}

const Singup = () => {
  const [img, setImg] = useState<File | null>(null);
  const [msg , setmsg] = useState<string>("")
  console.log(msg);
  
  const [formData, setFormData] = useState<FormDataSignup>({
    username: "",
    email: "",
    password: "",
    fullName: "",
    img: img,
  });

  if (formData.email !== "" && formData.password !== "" ) {
    const url = "Localhost:8000/signup.php"
    const headers = {
      "Accept":"application/json",
      "Content-type": "appliction/json"
    }
    fetch(url , {
      method : "POST",
      headers:headers,
      body:JSON.stringify(formData)
    } 
      ).then (res => res.json())
      .then (res => {
        if (res[0].result !== "Invalid username" || "") {
          console.log("hamza ");
        }
        setmsg(res[0].result)
      }).catch(err => {
        console.log(err);
      })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
    console.log("username:", formData.username);
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
    console.log("fullName:", formData.fullName);
    console.log(img);
fetch('Localhost:8000/signup.php')
    // Reset form fields
    setFormData({
      username: "",
      email: "",
      password: "",
      fullName: "",
      img: null,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
    }
  };

  return (
    <div className="container">
      <form method="post" className="main-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          onChange={handleChange}
          type="text"
          name="fullName"
          placeholder="Full Name"
        />
        <label className="custom-file-upload">
          <input
            type="file"
            name="file"
            placeholder="hamza"
            className="file-input"
            onChange={handleImg}
          />
          Upload img
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Singup;