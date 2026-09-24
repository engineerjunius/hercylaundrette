import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Home from './pages/Home'
import Services from './pages/Services'
import BookNow from './pages/BookNow'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const { pathname } = useLocation()

  // init once; animate each element a single time
  useEffect(() => {
    AOS.init({ duration: 700, offset: 80, easing: 'ease-out-cubic', once: true })
  }, [])

  // start each page at the top and pick up newly rendered AOS elements
  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.refreshHard()
  }, [pathname])

  return (
    // overflow-x-clip: AOS fade-left/right start 100px off-canvas, which would
    // otherwise let the page scroll sideways on phones
    <div className='flex min-h-screen flex-col overflow-x-clip'>
      <Navbar />

      <main className='flex-1 pt-16 sm:pt-20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/book' element={<BookNow />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
