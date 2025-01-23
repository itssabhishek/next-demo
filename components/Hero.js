'use client'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { label: 'Total users', value: '52,630' },
    { label: 'Trade volume', value: '$1,288,314,266' }
  ]

  if (!mounted) return null

  return (
    <section className="px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Buy Memes.<br/>
          In Two Clicks.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The fastest way to buy memes in just two clicks.<br/>
          Under 1 minute to sign up and no wallet needed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"/>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}