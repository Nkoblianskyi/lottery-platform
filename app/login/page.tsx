"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, CheckCircle, Star, Sparkles } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const router = useRouter()

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        router.push("/") // Redirect to home page
      }, 2000)
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl text-center">
          <CheckCircle className="mx-auto text-green-400 mb-6 animate-pulse" size={80} />
          <h2 className="text-4xl font-bold text-green-400 mb-4">Login Successful!</h2>
          <p className="text-white/90 text-xl">Welcome back to Australian Chance!</p>
          <div className="flex justify-center items-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="text-yellow-400 animate-pulse"
                size={20}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />

      {/* Floating Lottery Balls */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce shadow-2xl">
          7
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl animate-pulse shadow-2xl">
          21
        </div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold animate-spin shadow-2xl">
          45
        </div>
      </div>

      <div className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Creative Login Form */}
            <div className="relative">
              {/* Background Shape */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 transform rotate-3 rounded-3xl p-8 absolute inset-0"></div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 relative transform -rotate-1 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 lottery-ball">
                    <Star className="text-white animate-spin" size={40} />
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2">Welcome Back!</h1>
                  <p className="text-white/80 flex items-center justify-center gap-2">
                    Login to your Australian Chance account
                    <Sparkles className="animate-pulse" size={16} />
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-semibold">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`pl-10 bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400 ${errors.email ? "border-red-500" : ""
                          }`}
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white font-semibold">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`pl-10 bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400 ${errors.password ? "border-red-500" : ""
                          }`}
                      />
                    </div>
                    {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 hover:from-green-600 hover:via-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Login to Your Account
                  </Button>

                  <div className="text-center">
                    <p className="text-white/80">
                      Don't have an account?{" "}
                      <Link href="/signup" className="text-yellow-400 hover:text-yellow-300 font-semibold underline">
                        Sign Up Here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
