'use client'

import { useState, useEffect } from 'react'
import { LockClosedIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

interface PasswordScreenProps {
  onAuthenticated: () => void
}

export default function PasswordScreen({ onAuthenticated }: PasswordScreenProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const correctPassword = process.env.NEXT_PUBLIC_ACCESS_PASSWORD || ''

  useEffect(() => {
    // Trigger animations after component mounts
    setLoaded(true)
    
    // Check if password environment variable is set
    if (!process.env.NEXT_PUBLIC_ACCESS_PASSWORD) {
      console.error('Warning: NEXT_PUBLIC_ACCESS_PASSWORD environment variable is not set. Password protection will not work correctly.');
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === correctPassword) {
      // Store authentication in localStorage
      localStorage.setItem('solowrap_authenticated', 'true')
      onAuthenticated()
    } else {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 dot-pattern"></div>
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 animate-pulse" style={{ animationDuration: '7s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-teal-500/10 animate-pulse" style={{ animationDuration: '10s' }}></div>
      
      {/* Logo and title section - moved higher up */}
      <div className={`absolute top-8 left-0 right-0 text-center transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} transition-all duration-1000 ease-out`}>
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg animate-float">
            <span className="font-bold text-2xl">SW</span>
          </div>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-2 tracking-tight">
          <span className="inline-block animate-fade-in" style={{ animationDelay: '200ms' }}>S</span>
          <span className="inline-block animate-fade-in" style={{ animationDelay: '300ms' }}>o</span>
          <span className="inline-block animate-fade-in" style={{ animationDelay: '400ms' }}>l</span>
          <span className="inline-block animate-fade-in" style={{ animationDelay: '500ms' }}>o</span>
          <span className="inline-block animate-fade-in" style={{ animationDelay: '600ms' }}>W</span>
          <span className="inline-block animate-fade-in" style={{ animationDelay: '700ms' }}>r</span>
          <span className="inline-block animate-fade-in" style={{ animationDelay: '800ms' }}>a</span>
          <span className="inline-block animate-fade-in" style={{ animationDelay: '900ms' }}>p</span>
        </h1>
        <p className={`text-blue-100 text-lg max-w-md mx-auto ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1000`}>
          Medical Innovations
        </p>
      </div>
      
      {/* Password form - adjusted to be centered on the page */}
      <div className={`bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 transition-all ${shake ? 'animate-shake' : ''} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 ease-out delay-500`}>
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-md">
            <LockClosedIcon className="h-8 w-8" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Secure Access Required</h2>
        <p className="text-center text-gray-600 mb-6">
          Please enter the password to access SoloWrap medical information.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-black`}
              placeholder="Enter password"
              autoFocus
            />
            {error && (
              <p className="mt-1 text-sm text-red-600 animate-fade-in">
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full btn-primary group"
          >
            Access Website
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            This is a secure area. Unauthorized access is prohibited.
          </p>
        </form>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
      <div className="absolute bottom-4 left-0 right-0 text-center text-blue-200/70 text-xs">
        © {new Date().getFullYear()} SoloWrap Medical Innovations. All rights reserved.
      </div>
    </div>
  )
} 