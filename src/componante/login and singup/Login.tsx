import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './signup.css';

function LoginForm() { // Rename the component to LoginForm
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/login.php', {
        email,
        password,
      });

      if (response.data.error) {
        setMessage('Login failed. Please check your credentials.');
      } else {
        setMessage('Login successful.'); // You can customize this message
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred during login.'); // Handle error messages
    }

    setIsLoading(false);
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form className='signup-container' onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          className={`email-input ${email.length > 0 && email.length < 6 ? 'active' : ''}`}
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label>Password:</label>
        <input
          className={`password-input ${password.length > 0 && password.length < 6 ? 'active' : ''}`}
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {message && <p className='message'>{message}</p>}
        <button className='submit-button' type="submit">
          {isLoading ? ' Loading ...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
