import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicRoutes from './routers/PublicRoutes'
import PrivateRoutes from './routers/PrivateRoutes'
import Register from './features/Register'
import Dices from './features/Dices'
import Login from './features/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DetailRoom from './features/DetailRoom'

function App () {
  return (
    <Router>
      <div className='App'>
        <ToastContainer autoClose={1500} />
        <Routes>
          <Route
            path='/register'
            element={
              <PublicRoutes>
                <Register />
              </PublicRoutes>
            }
          />
          <Route
            path='/login'
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path='/'
            element={
              <PrivateRoutes>
                <Dices />
              </PrivateRoutes>
            }
          />
          <Route
            path='/room/:id'
            element={
              <PrivateRoutes>
                <DetailRoom />
              </PrivateRoutes>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
