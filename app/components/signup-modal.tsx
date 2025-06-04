"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Mail, Lock, Phone, MapPin, Calendar } from "lucide-react"

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
}

export default function SignUpModal({ isOpen, onClose, onLogin }: SignUpModalProps) {
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
      onLogin()
    }, 2000)
  }

  if (showSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
            <h2 className="text-2xl font-bold text-green-600 mb-2">Registration Successful!</h2>
            <p className="text-gray-600">Welcome to Big Aussie Chance! Please log in to continue.</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-purple-600">
            Join thousands of winners and start your lottery journey today
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email and Password */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">ACCOUNT</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Select onValueChange={(value) => handleInputChange("title", value)}>
                  <SelectTrigger>
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
                <Label htmlFor="firstName">First name *</Label>
                <Input
                  id="firstName"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name *</Label>
                <Input
                  id="lastName"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthName">Birth name</Label>
              <Input
                id="birthName"
                placeholder="Birth name (if different)"
                value={formData.birthName}
                onChange={(e) => handleInputChange("birthName", e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zip">Zip *</Label>
                <Input
                  id="zip"
                  placeholder="Postal code"
                  value={formData.zip}
                  onChange={(e) => handleInputChange("zip", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                  <Input
                    id="location"
                    placeholder="City/Location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="street">Street *</Label>
                <Input
                  id="street"
                  placeholder="Street address"
                  value={formData.street}
                  onChange={(e) => handleInputChange("street", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="houseNumber">House number *</Label>
                <Input
                  id="houseNumber"
                  placeholder="House number"
                  value={formData.houseNumber}
                  onChange={(e) => handleInputChange("houseNumber", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of birth *</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="placeOfBirth">Place of birth *</Label>
                <Input
                  id="placeOfBirth"
                  placeholder="Place of birth"
                  value={formData.placeOfBirth}
                  onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                <Input
                  id="phone"
                  placeholder="+XX X XXXX XXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          {/* Bank Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">BANK</h3>
            <div className="space-y-2">
              <Label htmlFor="iban">IBAN *</Label>
              <Input
                id="iban"
                placeholder="Enter your IBAN"
                value={formData.iban}
                onChange={(e) => handleInputChange("iban", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
              required
            />
            <Label htmlFor="terms" className="text-sm">
              I agree with the policies of bigaussiechance.com and data processing for my inquiry
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg"
            disabled={!formData.agreeToTerms}
          >
            Sign Up
          </Button>

          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button type="button" onClick={onLogin} className="text-purple-600 hover:text-purple-700 font-semibold">
                Log In
              </button>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
