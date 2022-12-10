import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRooms, setErrors } from '../store/actions/diceAction'
import Navbar from '../components/Navbar'
import RoomCard from '../components/RoomCard'

export default function Dices () {
  let dispatch = useDispatch()
  const { errors, rooms } = useSelector(state => state.diceState)

  console.log(rooms)

  useEffect(() => {
    dispatch(fetchRooms())
  }, [])
  return (
    <div>
      <Navbar />
      <div class='container mt-5'>
        <div class='row'>
          {rooms?.map(room => {
            return <RoomCard room={room} />
          })}
        </div>
      </div>
    </div>
  )
}
