import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Header from './components/Header';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <Router>
      <Header />


      <main className='main d-flex'>

        <div className="sidebarWrapper">
          <Sidebar />
        </div>

        <div className="contentWrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>

        </div>

      </main>


    </Router >
  )
}

export default App