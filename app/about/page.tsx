import Header from "../components/header"
import Footer from "../components/footer"
import { Users, Target, Shield, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">About Big Aussie Chance</h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              Your trusted gateway to Lotto dreams in Victoria, Australia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <Users className="text-yellow-400 mb-6" size={48} />
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                We are dedicated to providing Australians with a safe, reliable, and exciting way to participate in lotterys.
                Our platform connects lottery enthusiasts with their dreams while maintaining the highest
                standards of security and customer service.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <Target className="text-yellow-400 mb-6" size={48} />
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                To become Australia's most trusted lottery platform, helping thousands of players turn their dreams into
                reality while supporting responsible gaming practices and contributing to our local communities.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="mx-auto text-blue-600 mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Secure & Licensed</h3>
                <p className="text-gray-600">
                  We operate under strict Australian regulations and use advanced security measures to protect your
                  personal information and transactions.
                </p>
              </div>

              <div className="text-center">
                <Heart className="mx-auto text-red-500 mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Customer First</h3>
                <p className="text-gray-600">
                  Our dedicated support team is here to help you every step of the way, ensuring you have the best
                  possible lottery experience.
                </p>
              </div>

              <div className="text-center">
                <Users className="mx-auto text-green-600 mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Community Focused</h3>
                <p className="text-gray-600">
                  We believe in giving back to the community and supporting responsible gaming practices throughout
                  Victoria and Australia.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Story</h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
              <p>
                Big Aussie Chance was founded with a simple belief: everyone deserves a chance to dream big. As
                passionate Australians who understand the excitement and hope that comes with playing the lottery, we
                wanted to create a platform that makes participating in lottery easier, safer, and more enjoyable.
              </p>
              <p>
                Based in Victoria, we have deep roots in the Australian community and understand what matters most to
                our players. We're not just a lottery platform – we're your neighbors, your friends, and fellow dreamers
                who believe that with a little luck and the right opportunity, anything is possible.
              </p>
              <p>
                Since our launch, we've helped thousands of Australians participate in lottery draws, and we're proud
                to be part of their journey toward potentially life-changing wins. Every ticket purchased through our
                platform represents someone's hopes and dreams, and we take that responsibility seriously.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
