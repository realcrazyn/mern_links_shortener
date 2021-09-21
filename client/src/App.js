import 'materialize-css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'
import { useRoutes } from './routes'

function App() {
  const { token, login, logout, userId, ready } = useAuth()
  const isAuthentificated = !!token
  const routes = useRoutes(isAuthentificated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthentificated }}
    >
      <Router>
        {isAuthentificated && <Navbar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
