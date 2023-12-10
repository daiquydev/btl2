import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Table from './pages/Table'
import AuthLayout from './components/Layout/AuthLayout'
import GuestLayout from './components/Layout/GuestLayout'
import Login from './pages/auth/Login'
import Blank from './pages/Blank'
import NotFound from './pages/NotFound'
import Form from './pages/Form'
import RegisterIndex from './pages/auth/Register'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Replace this with your actual authentication state

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <AuthLayout /> : <Navigate to="/auth/login" />}
      >
        <Route
          path="/"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/auth/login" />}
        ></Route>
        <Route
          path="/table"
          element={isLoggedIn ? <Table /> : <Navigate to="/auth/login" />}
        ></Route>
        <Route
          path="/blank"
          element={isLoggedIn ? <Blank /> : <Navigate to="/auth/login" />}
        ></Route>
        <Route
          path="/404"
          element={isLoggedIn ? <NotFound /> : <Navigate to="/auth/login" />}
        ></Route>
        <Route
          path="/form"
          element={isLoggedIn ? <Form /> : <Navigate to="/auth/login" />}
        ></Route>
        <Route
          path="/profile"
          element={isLoggedIn ? <Blank /> : <Navigate to="/auth/login" />}
        ></Route>
      </Route>
      <Route path="/auth" element={<GuestLayout />}>
        <Route
          path="/auth/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/auth/register" element={<RegisterIndex />} />
      </Route>
    </Routes>
  )
}

export default App
