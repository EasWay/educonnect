import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Messages from './components/Messages'
import Courses from './components/Courses'
import StudyGroups from './components/StudyGroups'
import Profile from './components/Profile'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [user] = useState({
    name: 'Alex Johnson',
    role: 'Student',
    avatar: '/api/placeholder/40/40',
    school: 'Tech University',
    grade: 'Computer Science - Year 3'
  })

  return (
    <Router>
      <div className="flex h-screen bg-background">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} user={user} />
        <div className="flex-1 flex flex-col">
          <Header user={user} />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/study-groups" element={<StudyGroups />} />
              <Route path="/profile" element={<Profile user={user} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App

