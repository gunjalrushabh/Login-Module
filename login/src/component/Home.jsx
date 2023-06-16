import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


function Home() {  //Login page Logic

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  async function login(event) {  //You can also can you do it like cerate function login(event) and when button is cliccked
                                          // event generated button onClick = {login} and most important their is no button type
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/emp/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res.data);

        if (res.data.message === "email does not exist") {
          alert("Email not exits");
        }
        else if (res.data.message === "Login Success") {

          navigate('/login/in');
        }
        else if (res.data.message === "password is incorrect") {
          alert("Password is not correct")
        }
        else {
          alert("Incorrect Email and Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    }


    catch (err) {
      alert(err);
    }

  }

  return (

    <div class="container">
      <div class="row">
        <em><h2>Login</h2></em>
        <hr />
      </div>
      <div className='col-md-6 offset-md-3 shadow py-3'>
        <form>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" 
                   className="form-control shadow" 
                   id="email" 
                   placeholder="Enter Email"
                   value={email}
                   onChange={(event) => {
                           setEmail(event.target.value);
                            }}
            />

          </div>

          <div class="form-group">
            <label className="form-label">password</label>
            <input type="password" 
                   className="form-control shadow" 
                   id="password" 
                   placeholder="Enter Password"
                   value={password}
                   onChange={(event) => {
                   setPassword(event.target.value);
                   }}

            />
          </div>
          <button type="submit" class="btn btn-primary mt-3" onClick={login} >Login</button>
          <Link className="btn btn-outline-danger mt-3" to={'/'}>Cancel</Link>
        </form>



      </div>

    </div>
  );
}

export default Home;






















//========================my previous versiion =========================
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom';

// export default function Home() {
//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   });

//   const { email, password } = user

//   let navigate = useNavigate();

//   const submitForm = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:8080/api/emp/login", user)
//       .then(() => navigate("/login/in"))
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   const onInputChang = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   }

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-6 offset-md-3 shadow py-3' >

//           <h1 className='shadow'>Facebook</h1>
//           <form onSubmit={(e) => submitForm(e)}>
//             <div>
//               <label htmlFor="email" className='form-label'>Enter your email :   </label>
//               <input type="text" className='form-control shadow' id='email'
//                 placeholder='Enter your email'
//                 name='email'
//                 value={email}
//                 onChange={(e) => onInputChang(e)}
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className='form-label'>Enter your password :   </label>
//               <input type="text" className='form-control shadow' id='email'
//                 placeholder='Enter your password'
//                 name='password'
//                 value={password}
//                 onChange={(e) => onInputChang(e)}
//               />
//             </div>

//             <button type='submit' className='btn btn-outerline-success'>Submit</button>
//             <Link className='btn btn-outerline-warning' to={'/'}>cancel</Link>
//           </form>
//         </div>

//       </div>
//       <form>

//       </form>
//     </div>
//   )
// }
