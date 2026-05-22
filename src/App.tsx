import { useState } from 'react'
import { ProfileCard } from './components/profile-card'
import { SunIcon, MoonIcon } from './components/icons'
import './components/profile-card.css'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="app">
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
      <ProfileCard
        name="Reno Nala Pratama"
        bio="Percuma kalo ngga IMMO"
        skills={['Skill 1', 'Skill 2', 'Ulti']}
        avatarUrl="./renoooo.jpeg"
        githubUrl="https://github.com/renonala28-crypto"
      />
    </div>
  )
}

export default App
