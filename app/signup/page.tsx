"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Mail, Lock, Phone, MapPin, Calendar, Star, Sparkles } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    title: "",
    firstName: "",
    lastName: "",
    birthName: "",
    zip: "",
    location: "",
    street: "",
    houseNumber: "",
    dateOfBirth: "",
    placeOfBirth: "",
    phone: "",
    iban: "",
    agreeToTerms: false,
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      // Redirect to login page
      window.location.href = "/login"
    }, 2000)
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl text-center">
          <CheckCircle className="mx-auto text-green-400 mb-6 animate-pulse" size={80} />
          <h2 className="text-4xl font-bold text-green-400 mb-4">Registration Successful!</h2>
          <p className="text-white/90 text-xl">Welcome to Big Aussie Chance! Please log in to continue.</p>
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
      <Header onSignUp={() => {}} />

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
          <div className="max-w-4xl mx-auto">
            {/* Creative Sign Up Form */}
            <div className="relative">
              {/* Background Shape */}
              <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 transform -rotate-2 rounded-3xl p-8 absolute inset-0"></div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 relative transform rotate-1 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 lottery-ball">
                    <Star className="text-white animate-spin" size={40} />
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2">Join Big Aussie Chance</h1>
                  <p className="text-white/80 flex items-center justify-center gap-2">
                    Join thousands of winners and start your lottery journey today
                    <Sparkles className="animate-pulse" size={16} />
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Email and Password */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-semibold">
                        E-mail *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white font-semibold">
                        Password *
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        ACCOUNT DETAILS
                      </h3>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="space-y-2">
                          <Label htmlFor="title" className="text-white font-semibold">
                            Title *
                          </Label>
                          <Select onValueChange={(value) => handleInputChange("title", value)}>
                            <SelectTrigger className="bg-white/20 border-white/30 text-white">
                              <SelectValue placeholder="Select title" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mr">Mr.</SelectItem>
                              <SelectItem value="mrs">Mrs.</SelectItem>
                              <SelectItem value="ms">Ms.</SelectItem>
                              <SelectItem value="dr">Dr.</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-white font-semibold">
                            First name *
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="Your first name"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-white font-semibold">
                            Last name *
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Your last name"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="birthName" className="text-white font-semibold">
                            Birth name
                          </Label>
                          <Input
                            id="birthName"
                            placeholder="Birth name (if different)"
                            value={formData.birthName}
                            onChange={(e) => handleInputChange("birthName", e.target.value)}
                            className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="zip" className="text-white font-semibold">
                              Zip *
                            </Label>
                            <Input
                              id="zip"
                              placeholder="Postal code"
                              value={formData.zip}
                              onChange={(e) => handleInputChange("zip", e.target.value)}
                              className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location" className="text-white font-semibold">
                              Location *
                            </Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                              <Input
                                id="location"
                                placeholder="City/Location"
                                value={formData.location}
                                onChange={(e) => handleInputChange("location", e.target.value)}
                                className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="street" className="text-white font-semibold">
                              Street *
                            </Label>
                            <Input
                              id="street"
                              placeholder="Street address"
                              value={formData.street}
                              onChange={(e) => handleInputChange("street", e.target.value)}
                              className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="houseNumber" className="text-white font-semibold">
                              House number *
                            </Label>
                            <Input
                              id="houseNumber"
                              placeholder="House number"
                              value={formData.houseNumber}
                              onChange={(e) => handleInputChange("houseNumber", e.target.value)}
                              className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dateOfBirth" className="text-white font-semibold">
                              Date of birth *
                            </Label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                              <Input
                                id="dateOfBirth"
                                type="date"
                                value={formData.dateOfBirth}
                                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                                className="pl-10 bg-white/20 border-white/30 text-white focus:border-yellow-400"
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="placeOfBirth" className="text-white font-semibold">
                              Place of birth *
                            </Label>
                            <Input
                              id="placeOfBirth"
                              placeholder="Place of birth"
                              value={formData.placeOfBirth}
                              onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
                              className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white font-semibold">
                            Phone *
                          </Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                            <Input
                              id="phone"
                              placeholder="+XX X XXXX XXXX"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bank Information */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        BANK DETAILS
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="iban" className="text-white font-semibold">
                          IBAN *
                        </Label>
                        <Input
                          id="iban"
                          placeholder="Enter your IBAN"
                          value={formData.iban}
                          onChange={(e) => handleInputChange("iban", e.target.value)}
                          className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-yellow-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                        className="border-white/30"
                        required
                      />
                      <Label htmlFor="terms" className="text-white">
                        I agree with the policies of bigaussiechance.com and data processing for my inquiry
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                    disabled={!formData.agreeToTerms}
                  >
                    Create Your Account
                  </Button>

                  <div className="text-center">
                    <p className="text-white/80">
                      Already have an account?{" "}
                      <Link href="/login" className="text-yellow-400 hover:text-yellow-300 font-semibold underline">
                        Log In Here
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
