"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Star, Sparkles } from "lucide-react"

interface HeaderProps {
  onSignUp?: () => void
}

export default function Header({ onSignUp }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Creative Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Main Logo Circle */}
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 lottery-ball">
                <Star className="text-white animate-spin" size={32} />
              </div>
              {/* Floating Mini Balls */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold gradient-text">Big Aussie Chance</div>
            </div>
          </Link>

          {/* Desktop Navigation with Creative Styling */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/cookies", label: "Cookies Policy" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative text-white hover:text-yellow-400 font-semibold transition-colors duration-300 group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Creative Login and Sign Up Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Link href="/login">
                <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 pulse-border">
                  <span className="flex items-center gap-2">
                    LOGIN
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Sparkles size={14} className="animate-spin" />
                    </div>
                  </span>
                </Button>
              </Link>
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            </div>

            <div className="relative">
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 pulse-border">
                  <span className="flex items-center gap-2">
                    SIGN UP
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Sparkles size={14} className="animate-spin" />
                    </div>
                  </span>
                </Button>
              </Link>
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white relative group" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Creative Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg rounded-2xl mt-4 p-6 border border-white/20 shadow-2xl">
            <nav className="flex flex-col space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/cookies", label: "Cookies Policy" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white hover:text-yellow-400 font-semibold py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link href="/login">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg w-full">
                    LOGIN
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full shadow-lg w-full">
                    SIGN UP
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
