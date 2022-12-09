import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Login () {
  return (
    <div class='container mt-5'>
      <h3>Login Form </h3>
      <form>
        <div class='mb-3'>
          <label for='username' class='form-label'>
            username
          </label>
          <input
            type='text'
            class='form-control'
            id='username'
            aria-describedby='emailHelp'
          />
        </div>
        <div class='mb-3'>
          <label for='password' class='form-label'>
            password
          </label>
          <input type='password' class='form-control' id='password' />
        </div>
        <div class='mb-2'>
          <Link to='/register'>Sign Up</Link>
        </div>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}
