import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './signup.css';
import assets from '../../assets/imges';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(assets.unknown);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [form, setform] = useState<string>(' ');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (username === "" ) {
      setform ('username is empty')
    }
    else if (previewImage === assets.unknown) {
    setform ('Image is empty')
    } else if ( email === "" ) {
      setform ('email is empty')
    } 
    else if (password === "") {
      setform ('password is empty')
    } 
    else if (lastname === "") {
      setform ('lastname is empty')
    } 
    else {

    setIsLoading(true);
    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('name', name);
    formData.append('lastname', lastname);
    if (selectedFile) {
      formData.append('img', selectedFile);
    }

      try {
        const response = await axios.post('http://localhost:8000/signup.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.data.error) {
          console.log("error");
        } else {
          setMessage(response.data.message); 
          console.log(response.data);                  
        }
      } catch (error) {
        console.error(error);
      }
      
      setIsLoading(false);
      
      // Clear form fields
      setUsername('');
      setEmail('');
      setPassword('');
      setName('');
      setLastname('');
      setSelectedFile(null);
      setPreviewImage(assets.unknown);

  }
}

  return (
    <div className='container'>
      <h1>Sign Up</h1>
      <form className='signup-container' encType='multipart/form-data' onSubmit={handleSubmit}>
        {form.length > 1 && <p className='worning'>{form}</p>}
        <label htmlFor='pimg' className= 'profile-image-label'>
          <div className='profile-image-container'>
            <div className={`profile-image-wrapper ${isLoading ? 'loading' : ''}`}>
              <div className='loading-spinner'></div>
                <img id='preview-image' className='preview-image' src={previewImage || assets.unknown} alt='Preview' />
            </div>
          </div>
        </label>
        <input  id='pimg' className={`profile-image-input`} type="file" onChange={handleFileChange} />
        <label htmlFor='uinput'>Username:</label>
        <input id='uinput' className={`username-input ${username.length > 0 && email.length <  6 ? "active" : null}`} type="text" value={username} onChange={handleUsernameChange} />
        <br />
        <label>Email:</label>
        <input className={`email-input ${email.length > 0 && email.length <  6 ? "active" : null}`} type="email" value={email} onChange={handleEmailChange} />
        <br />
        <label>Password:</label>
        <input className={`password-input ${password.length > 0 && email.length <  6 ? "active" : null}`} type="password" value={password} onChange={handlePasswordChange} />
        <br />
        <label>First Name:</label>
        <input className={`first-name-input ${name.length > 0 && email.length <  6 ? "active" : null}`} type="text" value={name} onChange={handleNameChange} />
        <br />
        <label>Last Name:</label>
        <input className={`last-name-input ${lastname.length > 0 && email.length <  6 ? "active" : null}`} type="text" value={lastname} onChange={handleLastnameChange} />
        <br />
        <br />
      {message && <p className='message'>{message}</p>}
        <button className='submit-button' type="submit">
          {isLoading ?" Loading ..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
