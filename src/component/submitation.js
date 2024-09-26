import { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Modal, Button } from 'react-bootstrap'; 
import './substyle.css'; // Make sure to include scoped styles
import { GlobalStateContext } from './GlobalContext';  // Import GlobalContext

const Login = () => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleShow = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", { username, password });
      localStorage.setItem('authtoken', res.data.token);
      handleShow("Login successful!");
     
    } catch (err) {
      handleShow("Failure occurred: " + (err.response ? err.response.data.msg : err.message));
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            className="form-control"  
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary mb-2">Login</button>
          <p className='text-center text-danger'>OR</p>
          <Link to="/register">
            <button type="button" className="btn btn-secondary mb-3">Register</button>
          </Link>
        </form>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Notification</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => setShowModal(false)}>
              Understood
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
