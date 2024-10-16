import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import MarketingInsights from './components/MarketingPage'
import EthAIInfo from './components/AboutPage'
import Tokenomics from './components/TokenomicsPage'
import Roadmap from './components/RoadmapPage'
import FAQ from './components/FAQPage'
import Contact from './components/ContactPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/MarketingPage" element={<MarketingPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/TokenomicsPage" element={<TokenomicsPage />} />
          <Route path="/RoadmapPage" element={<RoadmapPage />} />
          <Route path="/FAQPage" element={<FAQPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
