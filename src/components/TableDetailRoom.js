export default function TableRoomDetail ({ dice }) {
  //   console.log(dice)
  return (
    <tr>
      <th scope='row'>{dice.id}</th>
      <td>{dice.user_id}</td>
      <td>{dice.room_id}</td>
      <td>{dice.value}</td>
      <td>{dice.rest_of_shake}</td>
      <td>{dice.rest_of_turn}</td>
      <td>{dice.result}</td>
    </tr>
  )
}
