import { SET_USER, SET_ERRORS } from '../keys'
import API_URL from '../../axios'

export function setUser (payload) {
  return {
    type: SET_USER,
    payload
  }
}

export function setErrors (payload) {
  return {
    type: SET_ERRORS,
    payload
  }
}

export function setActionRegister (payload) {
  return async function (dispatch) {
    try {
      const resp = await API_URL({
        url: '/users/register',
        method: 'POST',
        data: payload
      })

      const { data } = resp.data
      localStorage.setItem('currentUser', data)
      dispatch(setUser(data))
    } catch (err) {
      const errors = {
        data: err.response?.data,
        status: err.response?.status
      }
      if (err.response?.status) {
        dispatch(setErrors(errors))
      } else {
        dispatch(setErrors(errors))
      }
    }
  }
}

export function setActionLogin (payload) {
  return async function (dispatch) {
    try {
      const resp = await API_URL({
        url: '/users/login',
        method: 'POST',
        data: payload
      })

      const { data } = resp.data
      localStorage.setItem('currentUser', data)
      dispatch(setUser(data))
    } catch (err) {
      const errors = {
        data: err.response?.data,
        status: err.response?.status
      }
      dispatch(setErrors(errors))
    }
  }
}
