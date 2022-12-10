export default function RoomCard ({ room }) {
  return (
    <div class='col-sm-6'>
      <div class='card'>
        <div class='card-body'>
          <h5 class='card-title'>Room {room.id}</h5>
          {/* <p class='card-text'>room</p> */}
          <p class='card-text'>Max Player {room.max_player}</p>
          <a href='#' class='btn btn-primary'>
            Join
          </a>
        </div>
      </div>
    </div>
  )
}
