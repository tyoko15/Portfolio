// src/components/ScrollToTop.tsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // ハッシュ（#works など）がある場合は対象要素へスクロール
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else {
      // ハッシュがない場合はページトップへ
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}