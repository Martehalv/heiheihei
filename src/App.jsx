import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Login from './components/Login'
import Welcome from './components/Welcome'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'

function App() {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={signedIn ? <Welcome /> : <Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Layout>
  )
}

export default App


