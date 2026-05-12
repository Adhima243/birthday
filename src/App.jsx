import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Message from './pages/Message'
import Gallery from './pages/Gallery'
import Closing from './pages/Closing'
import Navbar from './components/Navbar'
import MusicPlayer from './components/MusicPlayer'
import { BIRTHDAY_WIB, getWibTargetTimestamp } from './utils/birthdayTime'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isUnlocked, setIsUnlocked] = useState(false)

  // Check if countdown is finished
  useEffect(() => {
    const checkCountdown = () => {
      const now = Date.now()
      setIsUnlocked(now >= getWibTargetTimestamp(BIRTHDAY_WIB))
    }

    checkCountdown()
    // Check every second if it's unlocked yet
    const interval = setInterval(checkCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  // Handle hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      
      // Jika belum unlock (countdown masih berjalan), hanya izinkan home page
      if (!isUnlocked && hash !== 'home') {
        window.location.hash = '#home'
        setCurrentPage('home')
        return
      }
      
      setCurrentPage(hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [isUnlocked])

  const renderPage = () => {
    // Jika belum unlock, hanya tampilkan Home
    if (!isUnlocked) {
      return <Home isLocked={true} />
    }

    // Jika sudah unlock, tampilkan halaman sesuai routing
    switch (currentPage) {
      case 'message':
        return <Message />
      case 'gallery':
        return <Gallery />
      case 'closing':
        return <Closing />
      case 'home':
      default:
        return <Home isLocked={false} />
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar currentPage={currentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <MusicPlayer />
    </div>
  )
}

export default App

