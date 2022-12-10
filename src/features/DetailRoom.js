import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TableRoomDetail from '../components/TableDetailRoom'
import { fetchRoom } from '../store/actions/diceAction'
export default function DetailRoom () {
  const { id } = useParams()
  let dispatch = useDispatch()
  const { room } = useSelector(state => state.diceState)
  console.log(room.PlayDices)
  useEffect(() => {
    dispatch(fetchRoom(id))
  }, [dispatch])
  // useEffect(() => {
  //   if (errors) {
  //     // const { message } = errors.data
  //     errors.data?.message.forEach(error => {
  //       toast.error(error)
  //     })
  //     dispatch(setErrors(''))
  //   }
  // }, [dispatch, errors])

  function handleJoin (e) {
    e.preventDefault()
  }
  return (
    <div class='container mt-5'>
      <h3 class='mt-2 mb-2'>Detail Room {room.id}</h3>
      <h3 class='mt-2 mb-2'>Max Player {room.max_player}</h3>
      <h3 class='mt-2 mb-2'>Current Player {room.current_player}</h3>
      <table class='table mt-5'>
        <thead>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>id_user</th>
            <th scope='col'>id_room</th>
            <th scope='col'>value</th>
            <th scope='col'>rest_of_shake</th>
            <th scope='col'>result</th>
            <th scope='col'>result</th>
          </tr>
        </thead>
        <tbody>
          {room?.PlayDices?.map(dice => {
            return <TableRoomDetail dice={dice} />
          })}
        </tbody>
      </table>
    </div>
  )
}
