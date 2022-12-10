import API_URL from '../../axios'
import { SET_ROOMS, SET_ROOM, SET_ERRORS } from '../keys'

export function setRooms (payload) {
  return {
    type: SET_ROOMS,
    payload
  }
}

export function setRoom (payload) {
  return {
    type: SET_ROOM,
    payload
  }
}

export function setErrors (payload) {
  return {
    type: SET_ERRORS,
    payload
  }
}

export function fetchRooms () {
  return async function (dispatch) {
    try {
      const resp = await API_URL({
        method: 'GET',
        url: '/rooms',
        headers: {
          access_token: localStorage.getItem('currentUser')
        }
      })

      const { data } = resp.data
      dispatch(setRooms(data))
    } catch (err) {
      const errors = {
        data: err.response?.data,
        status: err.response?.status
      }
      dispatch(setErrors(errors))
    }
  }
}

export function createRooms (payload) {
  return async function (dispatch, getState) {
    try {
      const { rooms } = getState().diceState

      const resp = await API_URL({
        method: 'POST',
        url: '/rooms',
        headers: {
          access_token: localStorage.getItem('currentUser')
        },
        data: payload
      })

      const { data } = resp.data
      const newRooms = [...rooms, data]
      dispatch(setRooms(newRooms))
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
