import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setErrors, createRooms } from '../store/actions/diceAction'
import { toast } from 'react-toastify'

export default function Navbar () {
  const [room, setRoom] = useState({})
  const navigate = useNavigate()
  let dispatch = useDispatch()
  const { errors } = useSelector(state => state.diceState)
  useEffect(() => {
    if (errors) {
      errors.data?.message.forEach(error => {
        toast.error(error)
      })
      dispatch(setErrors(''))
    }
  }, [errors])

  function handleCreateRooms (e) {
    e.preventDefault()

    dispatch(createRooms(room))
  }

  function handleChange (e) {
    setRoom({ ...room, [e.target.name]: e.target.value })
  }

  function logout () {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <nav class='navbar navbar-expand-lg bg-light'>
      <div class='container-fluid'>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div class='navbar-nav'>
            <a class='nav-link active' aria-current='page' href='#'>
              Home
            </a>
            <button
              type='button'
              class='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#modalForm'
            >
              Create Room
            </button>
            <div
              class='modal fade'
              id='modalForm'
              tabindex='-1'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
            >
              <div class='modal-dialog'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h1 class='modal-title fs-5' id='exampleModalLabel'>
                      Modal title
                    </h1>
                    <button
                      type='button'
                      class='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div class='modal-body'>
                    <form>
                      <div class='mb-3'>
                        <label for='max_player' class='form-label'>
                          max player
                        </label>
                        <input
                          type='number'
                          class='form-control'
                          id='max_player'
                          aria-describedby='emailHelp'
                          name='max_player'
                          onChange={e => handleChange(e)}
                        />
                      </div>
                      <div class='mb-3'>
                        <label for='total_shake' class='form-label'>
                          total shake
                        </label>
                        <input
                          type='number'
                          class='form-control'
                          id='total_shake'
                          name='total_shake'
                          onChange={e => handleChange(e)}
                        />
                      </div>
                    </form>
                  </div>
                  <div class='modal-footer'>
                    <button
                      type='button'
                      class='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                    <button
                      type='button'
                      class='btn btn-primary'
                      onClick={handleCreateRooms}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <a class='nav-link active' aria-current='page' onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
