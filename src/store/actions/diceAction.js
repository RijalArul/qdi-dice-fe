import API_URL from '../../axios'
import { SET_ROOMS, SET_ROOM, SET_ERRORS, SET_DICES, SET_WINNER } from '../keys'

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

export function setDices (payload) {
  return {
    type: SET_DICES,
    payload
  }
}

export function setWinners (payload) {
  return {
    type: SET_WINNER,
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

export function fetchRoom (payload) {
  return async function (dispatch, getState) {
    try {
      const resp = await API_URL({
        url: `/rooms/${payload}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('currentUser')
        }
      })
      const { data } = resp.data
      dispatch(setRoom(data))
      dispatch(setDices(data.PlayDices))
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

export function createPlay (payload) {
  return async function (dispatch, getState) {
    try {
      const { dices } = getState().diceState
      const resp = await API_URL({
        url: `/plays/${payload}`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('currentUser')
        }
      })
      const { data } = resp.data
      const newDices = [...dices, data]
      dispatch(setDices(newDices))
    } catch (err) {
      console.log(err)
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

export function updatePlay (payload) {
  return async function (dispatch, getState) {
    try {
      const { dices, winners } = getState().diceState
      const resp = await API_URL({
        url: `/plays/${payload}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('currentUser')
        }
      })
      const { data } = resp.data
      const findWinners = dices.findIndex(dice => dice.id === payload)
      findWinners[winners] = data
      winners = dices[findWinners]
      dispatch(setWinners(winners))
    } catch (err) {
      console.log(err)
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
