import React from 'react'
import { Link } from 'react-router-dom'

export default function MainHome() {
  return (
    <div >
        <h1>This is Home Page</h1>
        <Link className='btn btn-outline-warning' to={'/login'} >Login Page</Link>
        <Link className='btn btn-outline-success' to={'/register'}>Register Page</Link>
        
    </div>
  )
}
