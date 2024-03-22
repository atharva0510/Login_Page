import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {

      if (!name || !dob || !email || !mobile || !password) {
        toast.error('All fields are required.');
        return;
      }

      await axios.post('http://localhost:2000/user', {
        name,
        dob,
        email,
        mobile,
        password,
      });
      toast.success('Registration successfully!', { style: { background: 'green', color: "white"  } });
      navigate("/login")
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <>
    <h1>Registration Form</h1>
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicMobile">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="mobile"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder=" Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <div className="d-flex justify-content-center pt-4">
      <Button variant="primary" type="button" onClick={handleRegister}>
        Register
      </Button>
      <Link className='btn btn-success ms-2' to={'/login'}>Sign In</Link>
      </div>
    </Form>
    </>
  );
};

export default RegistrationForm;
