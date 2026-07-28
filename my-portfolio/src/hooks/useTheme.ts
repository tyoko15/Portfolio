// src/hooks/useTheme.ts
import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') ?? 'dark'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}

// 使うとき
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggle } = useTheme()
  return <button onClick={toggle}>{theme === 'dark' ? '☀️' : '🌙'}</button>
}