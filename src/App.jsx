import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ProjectDetails } from './pages/ProjectDetails'
import { ThemeProvider } from './context/ThemeContext'

import { AboutUs } from './pages/AboutUs'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="font-cairo bg-brand-bg text-brand-text selection:bg-brand-accent/30 selection:text-brand-text flex flex-col min-h-screen">
          <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        
        <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
