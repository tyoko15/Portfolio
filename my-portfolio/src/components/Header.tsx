// Header.tsx
import { profile } from '../data/portfolio'

interface Props {
  theme: string
  onThemeToggle: () => void
}

export default function Header({ theme, onThemeToggle }: Props) {
  return (
    <header className="header">
      <a href="#hero" className="header-logo">
        {profile.nameEn.split(' ')[0]}<span>.</span>
      </a>
      <button onClick={onThemeToggle}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  )
}

