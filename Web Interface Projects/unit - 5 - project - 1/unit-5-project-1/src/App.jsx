import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Profile from './pages/Profile.jsx'
import Semester1 from './pages/Semester1.jsx'
import Semester2 from './pages/Semester2.jsx'
import Semester3 from './pages/Semester3.jsx'
import Overall from './pages/Overall.jsx'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/semester-1" element={<Semester1 />} />
          <Route path="/semester-2" element={<Semester2 />} />
          <Route path="/semester-3" element={<Semester3 />} />
          <Route path="/overall" element={<Overall />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="site-footer">Student Academic Record <span>•</span> 2026</footer>
    </div>
  )
}

export default App
