// src/components/SafeImg.tsx
import { useState } from 'react'
import type { ReactNode } from 'react'

interface Props {
  src: string | null
  alt: string
  className?: string
  fallback: ReactNode
}

export default function SafeImg({ src, alt, className, fallback }: Props) {
  const [failed, setFailed] = useState(false)

  // src が null、または読み込みに失敗したらフォールバックを表示
  if (!src || failed) return <span>{fallback}</span>

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}