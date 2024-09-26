import { useState } from 'react';
import axios from 'axios';
import "./login.css";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", { username, password }); 
      alert("Registration successful");
    } catch (err) {
      alert("Failure occurred: " + (err.response ? err.response.data.msg : err.message));
    }
  };

  return (<><h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form></>
  );
};

export default Register;
               