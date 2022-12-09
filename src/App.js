import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicRoutes from './routers/PublicRoutes'
import PrivateRoutes from './routers/PrivateRoutes'
import Register from './features/Register'
import Dices from './features/Dices'

function App () {
  return (
    <Router>
      <div className='App'>
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
            path='/'
            element={
              <PrivateRoutes>
                <Dices />
              </PrivateRoutes>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
