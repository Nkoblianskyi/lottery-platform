"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-3">
            <Cookie className="text-orange-500" size={24} />
            <div>
              <p className="text-gray-800 font-semibold">We use cookies</p>
              <p className="text-gray-600 text-sm">
                We use cookies to enhance your experience and analyze our traffic. By continuing to use our site, you
                agree to our cookie policy.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button onClick={declineCookies} variant="outline" size="sm" className="text-gray-600 border-gray-300">
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              size="sm"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
