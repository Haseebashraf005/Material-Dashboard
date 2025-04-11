import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Header from './components/Header';


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      </Routes>
    </Router >
  )
}

export default App