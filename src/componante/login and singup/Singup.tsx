import React, { useState, ChangeEvent, FormEvent } from 'react';
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
        console.log(response.data.message);
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
    setPreviewImage('./unknown-person-icon-27.jpg');
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <form className='signup-container' encType='multipart/form-data' onSubmit={handleSubmit}>
        <p>{message}</p>
        <label htmlFor='pimg' className='profile-image-label'>
          <div className='profile-image-container'>
            <div className={`profile-image-wrapper ${isLoading ? 'loading' : ''}`}>
              <div className='loading-spinner'></div>
              {isLoading ? (
                <div className='loading-message'>Loading...</div>
              ) : (
                <img id='preview-image' className='preview-image' src={previewImage || './unknown-person-icon-27.jpg'} alt='Preview' />
              )}
            </div>
          </div>
        </label>
        <input required id='pimg' className='profile-image-input' type="file" onChange={handleFileChange} />
        <label htmlFor='uinput'>Username:</label>
        <input id='uinput' className='username-input' type="text" value={username} onChange={handleUsernameChange} />
        <br />
        <label>Email:</label>
        <input className='email-input' type="email" value={email} onChange={handleEmailChange} />
        <br />
        <label>Password:</label>
        <input className='password-input' type="password" value={password} onChange={handlePasswordChange} />
        <br />
        <label>First Name:</label>
        <input className='first-name-input' type="text" value={name} onChange={handleNameChange} />
        <br />
        <label>Last Name:</label>
        <input className='last-name-input' type="text" value={lastname} onChange={handleLastnameChange} />
        <br />
        <br />
        <button className='submit-button' type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
