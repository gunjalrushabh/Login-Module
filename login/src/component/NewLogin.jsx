import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NewLogin() {  // using const login not a funtion
    let navigate = useNavigate();


    // async function loginuser(event){
    //     try{
    //         event.preventDefault();
    //         axios.post("http://localhost:8080/api/emp/login",users)
    //         .then((result)=>{
    //             console.log(result.data)

    //             if(result.data.message === "email does not exist"){
    //                 alert(result.data.message)
    //             }else if(result.data.message === "password is incorrect"){
    //                 alert()
    //             }else if (result.data.message === "Login Success"){
    //                 console.log("succefully login");
    //                 alert("login succefully done")
    //                 navigate('/login/in')
    //             }
    //             else{
    //                 alert("incorrect mail and password")
    //             }
    //         })
    //     }
    // catch(err){
    //     alert(err)
    // }
        
    // }

    const [users,setUsers] = useState({
        email: "",
        password : ""
    })
    const{email,password}=users;

    const inputchange = (e) =>{
        setUsers({...users,[e.target.name]:e.target.value});
    }
    const login = async (event) =>{
        try{
            event.preventDefault();
           await axios.post("http://localhost:8080/api/emp/login",users)
            .then((result)=>{
                console.log(result.data)

                if(result.data.message === "email does not exist"){
                    alert(result.data.message)
                }else if(result.data.message === "password is incorrect"){
                    alert(result.data.message)
                }else if (result.data.message === "Login Success"){
                    console.log("succefully login");
                    alert("login succefully done")
                    navigate('/login/in')
                }
                else{
                    alert("incorrect mail and password")
                }
            })
        }
    catch(err){
        alert(err)
    }
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 shadow'>
                    <form onSubmit={(e)=>login(e)}>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email"
                                className="form-control shadow"
                                id="email"
                                placeholder="Enter Email"
                                name='email'
                                value={email}
                                onChange={(e)=>inputchange(e)}
                            //    onChange={(event) => {
                            //            setEmail(event.target.value);
                            //             }}
                            />

                        </div>

                        <div class="form-group">
                            <label className="form-label">password</label>
                            <input type="password"
                                className="form-control shadow"
                                id="password"
                                placeholder="Enter Password"
                                name='password'
                                value={password}
                                onChange={(e)=>inputchange(e)}
                            //    onChange={(event) => {
                            //    setPassword(event.target.value);
                            //    }}

                            />
                        </div>
                        <button type="submit" class="btn btn-outline-primary mt-3" onClick={(e)=>login(e)} >Login</button>
                        <Link className="btn btn-outline-danger mt-3" to={'/'}>Cancel</Link>

                    </form>

                </div>
            </div>

        </div>
    )
}
