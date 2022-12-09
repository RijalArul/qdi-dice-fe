import { Navigate, useLocation } from 'react-router-dom'
function PublicRoutes ({ children }) {
  let location = useLocation()

  if (localStorage.getItem('currentUser')) {
    return <Navigate to='/' state={{ from: location }} />
  }

  return children
}

export default PublicRoutes
