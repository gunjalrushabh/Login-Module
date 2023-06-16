import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {

  const [users, setUser] = useState({
    employeename: "",
    password: "",
    email: ""
  });

  let navigate = useNavigate();

  const { employeename, password, email } = users;

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/emp/save", users);
    alert("registration succefull")
    navigate('/');
  }

  const onInputChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow py-3'>
          <h1>Registration Page</h1>
          <form onSubmit={(e) => submitForm(e)}>
            <div className='md-3'>
              <label htmlFor="employeeid" className='form-label mt-2'><strong><em>Employee ID:</em> </strong></label>
              <input
                type="number"
                className='form-control'
                id="employeeid"
                placeholder='Enter Your Employee ID'
                name='employeeid'
              />
            </div>

            <div className='md-3'>
              <label htmlFor="employeename" className='form-label mt-2'> <strong><em>Employee Name:</em> </strong></label>
              <input
                type="text"
                className='form-control'
                id="employeename"
                placeholder='Enter Your employeename'
                name='employeename'
                value={employeename}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='md-3'>
              <label htmlFor="password" className='form-label mt-2'> <strong><em>Employee Password:</em> </strong></label>
              <input
                type="text"
                className='form-control'
                id="password"
                placeholder='Enter Your password'
                name='password'
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='md-3'>
              <label htmlFor="email" className='form-label mt-2' > <strong><em>Employee Email:</em> </strong></label>
              <input
                type="email"
                className='form-control'
                id="email"
                placeholder='Enter Your email'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button className='btn btn-outline-primary  mt-2' type='submit'>Submit</button>
            <Link className='btn btn-outline-danger  mt-2' to={'/'}>Back To Home Page</Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}
