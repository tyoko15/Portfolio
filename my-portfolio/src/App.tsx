// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import ScrollToTop from './components/ScrollToTop.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Works from './components/Works.tsx'
import Certifications from './components/Certifications.tsx'
import Contact from './components/Contact.tsx'
import WorkDetail from './pages/WorkDetail.tsx'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Certifications />
      <Contact />
    </>
  )
}

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <ScrollToTop />
      <Header theme={theme} onThemeToggle={toggle} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works/:id" element={<WorkDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}