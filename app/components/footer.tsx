import Link from "next/link"
import { Star, Shield, Heart, Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-blue-500/20 clip-octagon animate-spin"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 border-2 border-green-500/20 clip-diamond animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Creative Logo Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl lottery-ball">
                  <Star className="text-white" size={32} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-bounce"></div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">Big Aussie Chance</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-gray-300 mb-6 max-w-md">
                We are your trusted platform for Oz Lotto information and services in Victoria, Australia. Join
                thousands of players who trust us with their lottery journey.
              </p>
            </div>
          </div>

          {/* Quick Links with Creative Styling */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="text-yellow-400" size={20} />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/privacy", label: "Privacy Policy" },
                  { href: "/cookies", label: "Cookies Policy" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact with Creative Design */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart className="text-pink-400" size={20} />
                Contact
              </h3>
              <div className="text-gray-300 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-pulse"></div>
                  <p>Victoria, Australia</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse delay-300"></div>
                  <p>bigaussiechance.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creative 18+ Warning Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="bg-gradient-to-r from-red-900/40 to-pink-900/40 backdrop-blur-sm border-2 border-red-500/50 rounded-3xl p-8 mb-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-red-400 rounded-full"></div>
              <div className="absolute top-8 right-8 w-6 h-6 border-2 border-pink-400 clip-diamond"></div>
              <div className="absolute bottom-4 left-1/3 w-10 h-10 border-2 border-red-300 clip-octagon"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-4 rounded-full mr-4 shadow-2xl">
                  <Shield className="text-white" size={32} />
                </div>
                <div>
                  <span className="text-3xl font-bold text-red-400 animate-pulse">18+ ONLY</span>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 text-lg">
                This service is only available to persons 18 years of age or older. Please gamble responsibly and seek
                help if gambling becomes a problem.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    href: "https://www.gamblershelp.com.au",
                    label: "Gambler's Help Victoria",
                    logo: "/gamblershelp.svg",
                  },
                  {
                    href: "https://www.vic.gov.au",
                    label: "Victoria Government",
                    logo: "/victoria.svg",
                  },
                  {
                    href: "https://www.gamcare.org.uk",
                    label: "GamCare",
                    logo: "/gamecare.svg",
                  },
                  {
                    href: "https://www.gambleaware.org",
                    label: "GambleAware",
                    logo: "/gamble.webp",
                  },
                  {
                    href: "https://resetapp.com.au/",
                    label: "Reset",
                    logo: "/reset.svg",
                  },
                  {
                    href: "https://www.gambleaware.org",
                    label: "GamblersHelp",
                    logo: "/bgambleaware.svg",
                  },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-blue-400 hover:text-blue-300 hover:bg-white/20 transition-all duration-300 border border-white/10 group flex flex-col items-center gap-3"
                  >
                    <img
                      src={link.logo || "/placeholder.svg"}
                      alt={`${link.label} logo`}
                      className="h-8 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-sm font-semibold group-hover:scale-105 transition-transform">{link.label}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Creative Copyright Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-gray-400 mb-2">&copy; 2024 Big Aussie Chance. All rights reserved.</p>
              <p className="flex items-center justify-center text-gray-400">
                Made with
                <Heart className="text-red-500 mx-2 animate-pulse" size={16} />
                for Australian lottery enthusiasts
                <div className="ml-2 flex gap-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
