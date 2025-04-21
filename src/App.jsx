import './App.css'
import { useEffect } from 'react'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './components/Register'
import PlatformSetup from './components/platformpage'
import AIAgentChat from './components/ai-components/AIAgentChat'
import SettingsPage from './components/Setting'
import Dashboard from './components/Dashborad'
import Customers from './components/Customers'
import Payout from './components/Payout'
import Lead from './components/Lead'
import Campagin from './components/Campagin'
import AIAssistantButton from './components/ai-components/AIAssistantButton'

function App() {





  return (
    <Router>
      <Routes>
        <Route path="/login" element={<><Login /><AIAssistantButton /></>} />
        <Route path="/register" element={<><Register /><AIAssistantButton /></>} />
        <Route path="/platform" element={<><PlatformSetup /><AIAssistantButton /></>} />
        <Route path="/aiagent" element={<AIAgentChat />} />
        <Route path="/Setting" element={<><SettingsPage /><AIAssistantButton /></>} />
        <Route path="/" element={<><Dashboard /><AIAssistantButton /></>} />
        <Route path="/payouts" element={<><Payout /><AIAssistantButton /></>} />
        <Route path="/leads" element={<><Lead /><AIAssistantButton /></>} />
        <Route path="/promoters" element={<><Customers /><AIAssistantButton /></>} />
        <Route path="/campaign" element={<><Campagin /><AIAssistantButton /></>} />
      </Routes>
    </Router>
  )
}

export default App;
