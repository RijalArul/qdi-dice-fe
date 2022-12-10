import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setErrors, setActionLogin } from '../store/actions/userAction'
import { toast } from 'react-toastify'

export default function Login () {
  const [user, setUser] = useState({})
  const navigation = useNavigate()
  const { errors } = useSelector(state => state.userState)

  let dispatch = useDispatch()

  useEffect(() => {
    if (errors) {
      toast.error(errors.data?.message)
      dispatch(setErrors(''))
    }

    if (localStorage.getItem('currentUser')) {
      toast.success('Login sucess')
      setTimeout(() => {
        navigation('/')
      }, 2000)
    }
  }, [dispatch, errors])

  function handleLogin (e) {
    e.preventDefault()
    dispatch(setActionLogin(user))
  }

  function handleChange (e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

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
            name='username'
            onChange={e => handleChange(e)}
          />
        </div>
        <div class='mb-3'>
          <label for='password' class='form-label'>
            password
          </label>
          <input
            type='password'
            class='form-control'
            id='password'
            name='password'
            onChange={e => handleChange(e)}
          />
        </div>
        <div class='mb-2'>
          <Link to='/register'>Sign Up</Link>
        </div>
        <button type='submit' class='btn btn-primary' onClick={handleLogin}>
          Submit
        </button>
      </form>
    </div>
  )
}
