import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import FormValidation, { SuccessMessage } from './formvalidation'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<FormValidation />} />
        <Route path="/welcome" element={<SuccessMessage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
