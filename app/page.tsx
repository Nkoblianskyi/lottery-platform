"use client"

import { useState, useEffect } from "react"
import { Timer, Star, Trophy, Gift, Play, Sparkles, Zap, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "./components/header"
import Footer from "./components/footer"
import CookieBanner from "./components/cookie-banner"
import Link from "next/link"

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const nextTuesday = new Date()

      const daysUntilTuesday = (2 - now.getDay() + 7) % 7
      if (daysUntilTuesday === 0 && now.getHours() >= 20) {
        nextTuesday.setDate(now.getDate() + 7)
      } else {
        nextTuesday.setDate(now.getDate() + (daysUntilTuesday || 7))
      }
      nextTuesday.setHours(20, 0, 0, 0)

      const difference = nextTuesday.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      <Header />

      {/* Hero Section with Creative Shapes */}
      <section className="relative py-20 overflow-hidden">
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
          <div className="absolute top-60 left-1/2 w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce delay-300 shadow-2xl">
            13
          </div>
          <div className="absolute bottom-20 right-40 w-18 h-18 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse delay-500 shadow-2xl">
            33
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
              Big Aussie <span className="text-yellow-400 animate-pulse">Chance</span>
            </h1>
            <div className="relative inline-block">
              <p className="text-2xl text-white/90 mb-8 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full border border-white/20">
                Your Gateway to Lottery Dreams in Victoria!
              </p>
              <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-spin" size={24} />
            </div>
          </div>

          {/* Creative Timer Design */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative">
              {/* Hexagonal Background */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 transform rotate-6 rounded-3xl p-8 absolute inset-0"></div>
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 relative transform -rotate-1 shadow-2xl">
                <h2 className="text-3xl font-bold text-white text-center mb-6 flex items-center justify-center gap-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full animate-pulse">
                    <Timer className="text-white" size={36} />
                  </div>
                  Next Oz Lotto Draw
                </h2>

                {/* Add this new draw date section */}
                <div className="text-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block border border-white/30">
                    <p className="text-white/90 text-lg font-semibold">
                      Draw Date: {(() => {
                        const now = new Date()
                        const nextTuesday = new Date()
                        const daysUntilTuesday = (2 - now.getDay() + 7) % 7
                        if (daysUntilTuesday === 0 && now.getHours() >= 20) {
                          nextTuesday.setDate(now.getDate() + 7)
                        } else {
                          nextTuesday.setDate(now.getDate() + (daysUntilTuesday || 7))
                        }
                        return nextTuesday.toLocaleDateString("en-AU", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      })()}
                    </p>
                    <p className="text-yellow-300 text-sm font-medium">8:00 PM AEST</p>
                  </div>
                </div>

                {/* Creative Timer Circles */}
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  {[
                    { label: "Days", value: timeLeft.days, color: "from-red-500 to-pink-600", delay: "delay-0" },
                    { label: "Hours", value: timeLeft.hours, color: "from-blue-500 to-cyan-600", delay: "delay-100" },
                    {
                      label: "Minutes",
                      value: timeLeft.minutes,
                      color: "from-green-500 to-emerald-600",
                      delay: "delay-200",
                    },
                    {
                      label: "Seconds",
                      value: timeLeft.seconds,
                      color: "from-purple-500 to-indigo-600",
                      delay: "delay-300",
                    },
                  ].map((item, index) => (
                    <div key={index} className={`relative group ${item.delay}`}>
                      {/* Outer Ring */}
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-2 animate-pulse">
                        {/* Inner Circle */}
                        <div
                          className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                        >
                          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                            {item.value.toString().padStart(2, "0")}
                          </div>
                          <div className="text-white/90 font-semibold uppercase tracking-wide text-xs">
                            {item.label}
                          </div>
                        </div>
                      </div>
                      {/* Floating Sparkles */}
                      <Sparkles
                        className="absolute -top-2 -right-2 text-yellow-400 animate-spin group-hover:animate-bounce"
                        size={20}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Creative Buy Button */}
          <div className="text-center relative">
            <div className="relative inline-block">
              <Link href="/login">
                <Button
                  className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 hover:from-green-600 hover:via-emerald-600 hover:to-teal-700 text-white text-2xl px-16 py-8 rounded-full font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/30"
                  size="lg"
                >
                  <Play className="mr-3 animate-pulse" size={32} />
                  Buy Your Lucky Ticket Now!
                  <Zap className="ml-3 animate-bounce" size={32} />
                </Button>
              </Link>
              {/* Surrounding Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Platform Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 clip-octagon blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 clip-diamond blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                About <span className="text-purple-600">Our Platform</span>
              </h2>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin">
                <Star className="text-white" size={24} />
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Big Aussie Chance is your trusted gateway to lottery dreams, built with passion for the Australian
              community
            </p>
          </div>

          {/* Creative Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Trust & Security */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl group-hover:scale-105 transition-transform duration-300 h-full">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 lottery-ball">
                    <Shield className="text-yellow-300" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Trust & Security</h3>
                  <p className="text-white/90 leading-relaxed">
                    We prioritize your security with advanced encryption and secure payment processing. Your personal
                    information and transactions are protected with bank-level security measures.
                  </p>
                </div>
              </div>
            </div>

            {/* User Experience */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-3xl p-8 shadow-2xl group-hover:scale-105 transition-transform duration-300 h-full">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 lottery-ball">
                    <Sparkles className="text-yellow-300 animate-spin" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Seamless Experience</h3>
                  <p className="text-white/90 leading-relaxed">
                    Our platform is designed with you in mind. Easy registration, intuitive navigation, and instant
                    notifications ensure you never miss a draw or a winning opportunity.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Focus */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 shadow-2xl group-hover:scale-105 transition-transform duration-300 h-full">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 lottery-ball">
                    <Heart className="text-yellow-300 animate-pulse" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Community First</h3>
                  <p className="text-white/90 leading-relaxed">
                    As proud Australians, we're committed to supporting our local communities. We believe in responsible
                    gaming and giving back to the places we call home.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Features */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Big Aussie Chance?</h3>
              <div className="flex justify-center items-center gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
                <div className="w-12 h-12 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap className="text-yellow-500" size={32} />,
                  title: "Instant Access",
                  description: "Quick registration and immediate access to lottery services",
                },
                {
                  icon: <Shield className="text-blue-500" size={32} />,
                  title: "Secure Platform",
                  description: "Advanced security measures protect your data and transactions",
                },
                {
                  icon: <Star className="text-purple-500" size={32} />,
                  title: "Premium Service",
                  description: "Dedicated customer support and premium user experience",
                },
                {
                  icon: <Heart className="text-red-500" size={32} />,
                  title: "Local Focus",
                  description: "Built by Australians, for Australians, supporting local communities",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white clip-diamond"></div>
                <div className="absolute bottom-4 left-1/3 w-10 h-10 border-2 border-white clip-octagon"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of Australians who trust Big Aussie Chance for their lottery experience. Your dreams
                  are just a click away!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <Button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <Star className="mr-2" size={20} />
                      Create Account
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Informative Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-purple-500 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-4 border-blue-500 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 border-4 border-green-500 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">
                Why Choose <span className="text-purple-600">Lotto</span>?
              </h2>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin">
                <Star className="text-white" size={24} />
              </div>
            </div>
          </div>

          {/* Creative Hexagonal Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Surrounding Creative Shapes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-24">
              {/* Diamond Shape */}
              <div className="relative group">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 transform rotate-45 mx-auto shadow-2xl group-hover:rotate-90 transition-transform duration-500">
                  <div className="absolute inset-4 bg-white/10 backdrop-blur-lg flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white p-4">
                      <Trophy className="mx-auto mb-3 text-yellow-300" size={48} />
                      <h3 className="text-xl font-bold mb-2">Massive Jackpots</h3>
                      <p className="text-sm">Life-changing amounts every Tuesday!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circle with Inner Shapes */}
              <div className="relative group">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="relative">
                      <Star className="mx-auto mb-3 text-yellow-300 group-hover:animate-spin" size={48} />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">7 Prize Divisions</h3>
                    <p className="text-sm">Multiple ways to win big!</p>
                  </div>
                </div>
              </div>

              {/* Octagon Shape */}
              <div className="relative group">
                <div className="w-64 h-64 bg-gradient-to-br from-green-500 to-teal-500 clip-octagon mx-auto shadow-2xl group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <Gift className="mx-auto mb-3 text-yellow-300 group-hover:animate-bounce" size={48} />
                    <h3 className="text-xl font-bold mb-2">Easy to Play</h3>
                    <p className="text-sm">Pick 7 numbers from 1 to 45!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Creative About Section */}
          <div className="mt-20 relative">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 transform -skew-y-2 p-16 rounded-3xl shadow-2xl">
              <div className="transform skew-y-2">
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold text-gray-800 mb-4">About Lottery</h3>
                  <div className="flex justify-center items-center gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                    <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform">
                    <p>
                      Our lottery is Australia's beloved Tuesday night draw that has been creating millionaires since
                      1994. As one of the most popular lottery games in the country, it offers players the chance to win
                      incredible prizes every week.
                    </p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform delay-100">
                    <p>
                      The game is simple: choose 7 numbers from 1 to 45, and if your numbers match the winning
                      combination, you could be the next big winner! With draws every Tuesday at 8:00 PM AEST, the
                      excitement builds throughout the week.
                    </p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform delay-200">
                    <p>
                      What makes this lottery special is its consistent jackpots and the multiple ways to win. Even if
                      you don't hit the jackpot, there are six other prize divisions that could still make your day!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Winners Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-400/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-pink-400/30 transform rotate-45 animate-spin"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-yellow-400">Legendary</span> Winners
            </h2>
            <div className="flex justify-center items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 animate-pulse"
                  size={24}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          {/* Creative Winner Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { amount: "$107 Million", year: "2012", location: "Victoria", color: "from-red-500 to-pink-600" },
              { amount: "$90 Million", year: "2020", location: "Queensland", color: "from-blue-500 to-cyan-600" },
              {
                amount: "$80 Million",
                year: "2019",
                location: "New South Wales",
                color: "from-green-500 to-emerald-600",
              },
              {
                amount: "$70 Million",
                year: "2021",
                location: "Western Australia",
                color: "from-purple-500 to-indigo-600",
              },
            ].map((winner, index) => (
              <div key={index} className="relative group">
                {/* Lottery Ball Design */}
                <div
                  className={`w-48 h-48 mx-auto bg-gradient-to-br ${winner.color} rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Inner Circle */}
                  <div className="w-40 h-40 bg-white/10 backdrop-blur-lg rounded-full flex flex-col items-center justify-center border-4 border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">{winner.amount}</div>
                    <div className="text-lg font-semibold mb-1 text-yellow-300">{winner.year}</div>
                    <div className="text-white/80 text-sm text-center px-2">{winner.location}</div>
                  </div>
                  {/* Shine Effect */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full blur-sm group-hover:animate-ping"></div>
                </div>
                {/* Floating Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg animate-bounce">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative History Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              The <span className="text-purple-600">History</span> of Australian Lotteries
            </h2>
          </div>

          {/* Creative Timeline */}
          <div className="max-w-6xl mx-auto relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>

            <div className="space-y-16">
              {[
                {
                  title: "The Beginning",
                  content:
                    "Australian lotteries have a rich history dating back to the early 1900s. What started as a way to raise funds for public projects has evolved into one of the most popular forms of entertainment in the country.",
                  color: "from-purple-500 to-pink-600",
                  position: "left",
                },
                {
                  title: "Modern Era",
                  content:
                    "Today, Australian lotteries are regulated and operated with the highest standards of integrity and fairness. Millions of Australians participate weekly, with proceeds supporting community projects and charities across the nation.",
                  color: "from-blue-500 to-cyan-600",
                  position: "right",
                },
                {
                  title: "Digital Revolution",
                  content:
                    "The digital age has transformed how Australians play lotteries. Online platforms have made it easier than ever to participate, check results, and claim prizes, bringing the excitement of lottery games to your fingertips.",
                  color: "from-green-500 to-teal-600",
                  position: "left",
                },
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.position === "right" ? "flex-row-reverse" : ""}`}>
                  {/* Content Bubble */}
                  <div className={`w-5/12 ${item.position === "right" ? "ml-8" : "mr-8"}`}>
                    <div
                      className={`bg-gradient-to-br ${item.color} p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 relative`}
                    >
                      <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                      <p className="text-white/90 text-lg leading-relaxed">{item.content}</p>
                      {/* Arrow */}
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                          item.position === "right"
                            ? "-left-4 border-t-8 border-b-8 border-r-8 border-transparent border-r-current"
                            : "-right-4 border-t-8 border-b-8 border-l-8 border-transparent border-l-current"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl z-10 border-4 border-white">
                    <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Lottery Information Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-100 relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 clip-octagon blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 clip-diamond blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Everything You Need to Know About <span className="text-purple-600">Lottery</span>
            </h2>
            <div className="flex justify-center items-center gap-3">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>

          {/* Creative Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* How to Play - Hexagon Shape */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 clip-hexagon w-80 h-80 mx-auto flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white p-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="text-yellow-300" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">How to Play</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Choose 7 numbers from 1-45</li>
                    <li>• Purchase your ticket</li>
                    <li>• Wait for Tuesday draw</li>
                    <li>• Check your numbers</li>
                    <li>• Claim your prize!</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prize Structure - Circle */}
            <div className="relative group">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-full mx-auto flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-300">
                <div className="text-center text-white p-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="text-yellow-300" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Prize Divisions</h3>
                  <div className="text-sm space-y-1">
                    <div>Division 1: 7 numbers</div>
                    <div>Division 2: 6 numbers + 1 supp</div>
                    <div>Division 3: 6 numbers</div>
                    <div>Division 4: 5 numbers + 1 supp</div>
                    <div>Division 5: 5 numbers</div>
                    <div>Division 6: 4 numbers</div>
                    <div>Division 7: 3 numbers + 1 supp</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Odds & Tips - Diamond */}
            <div className="relative group">
              <div className="w-80 h-80 bg-gradient-to-br from-green-600 to-emerald-700 transform rotate-45 mx-auto shadow-2xl group-hover:rotate-90 transition-transform duration-500">
                <div className="absolute inset-8 bg-white/10 backdrop-blur-lg flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                  <div className="text-center text-white p-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="text-yellow-300" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Winning Tips</h3>
                    <ul className="text-xs space-y-1">
                      <li>• Play consistently</li>
                      <li>• Use system entries</li>
                      <li>• Join a syndicate</li>
                      <li>• Check results regularly</li>
                      <li>• Play responsibly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lottery Facts Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left Side - Curved Shape */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 transform -rotate-2 shadow-2xl">
                <div className="transform rotate-2">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="animate-spin" size={32} />
                    Lottery Facts
                  </h3>
                  <div className="space-y-4 text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <h4 className="font-bold mb-2">🎯 Odds of Winning Division 1</h4>
                      <p>1 in 45,379,620 - but someone has to win!</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <h4 className="font-bold mb-2">💰 Biggest Australian Jackpot</h4>
                      <p>$150 Million - the dream that keeps growing!</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <h4 className="font-bold mb-2">📅 Draw Frequency</h4>
                      <p>Every Tuesday at 8:00 PM AEST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Wavy Shape */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-8 transform rotate-2 shadow-2xl">
                <div className="transform -rotate-2">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Zap className="animate-pulse" size={32} />
                    Why Play Lottery?
                  </h3>
                  <div className="space-y-4 text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <h4 className="font-bold mb-2">🌟 Life-Changing Potential</h4>
                      <p>Turn your dreams into reality with one lucky ticket</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <h4 className="font-bold mb-2">🎉 Community Support</h4>
                      <p>Proceeds help fund community projects across Australia</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <h4 className="font-bold mb-2">💫 Weekly Excitement</h4>
                      <p>The thrill of anticipation every Tuesday night</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsible Gaming Section */}
          <div className="relative">
            <div className="bg-gradient-to-r from-gray-800 to-slate-700 rounded-3xl p-12 shadow-2xl border-4 border-yellow-400/30">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={40} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">Play Responsibly</h3>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Lottery should be fun and entertaining. Always play within your means and remember that gambling
                  should never be seen as a way to solve financial problems.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h4 className="text-white font-bold mb-2">Set Limits</h4>
                  <p className="text-gray-300 text-sm">Decide how much you can afford to spend before you play</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">⏰</span>
                  </div>
                  <h4 className="text-white font-bold mb-2">Take Breaks</h4>
                  <p className="text-gray-300 text-sm">Regular breaks help maintain a healthy perspective</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">🤝</span>
                  </div>
                  <h4 className="text-white font-bold mb-2">Seek Help</h4>
                  <p className="text-gray-300 text-sm">Support is available if gambling becomes a problem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}

      <CookieBanner />
    </div>
  )
}
