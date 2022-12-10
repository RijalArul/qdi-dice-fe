import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setErrors } from '../store/actions/diceAction'
import { useNavigate } from 'react-router-dom'
export default function RoomCard ({ room }) {
  // const [dice, setDice] = useState({})
  const navigation = useNavigate()

  function handleJoinLink (e) {
    e.preventDefault()
    navigation(`/room/${room.id}`)
    // dispatch()
  }
  return (
    <div class='col-sm-6'>
      <div class='card'>
        <div class='card-body'>
          <h5 class='card-title'>Room {room.id}</h5>
          {/* <p class='card-text'>room</p> */}
          <p class='card-text'>Max Player {room.max_player}</p>
          <a href='#' class='btn btn-primary' onClick={handleJoinLink}>
            Join
          </a>
        </div>
      </div>
    </div>
  )
}
