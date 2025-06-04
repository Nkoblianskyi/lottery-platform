import Header from "../components/header"
import Footer from "../components/footer"
import { Shield, Eye, Lock, FileText } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we protect and use your information.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <Shield className="text-blue-600" size={48} />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Commitment to Privacy</h2>
                  <p className="text-gray-600">Last updated: December 2024</p>
                </div>
              </div>

              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="text-purple-600" size={24} />
                  <h3 className="text-2xl font-bold text-gray-800">Information We Collect</h3>
                </div>
                <div className="pl-9 space-y-3 text-gray-700">
                  <p>We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Personal identification information (name, email address, phone number)</li>
                    <li>Account credentials and preferences</li>
                    <li>Payment and banking information for transactions</li>
                    <li>Communication records when you contact our support team</li>
                    <li>Usage data and website interaction information</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock className="text-green-600" size={24} />
                  <h3 className="text-2xl font-bold text-gray-800">How We Use Your Information</h3>
                </div>
                <div className="pl-9 space-y-3 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and maintain our lottery services</li>
                    <li>Process transactions and manage your account</li>
                    <li>Send you important updates about draws and winnings</li>
                    <li>Provide customer support and respond to your inquiries</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FileText className="text-orange-600" size={24} />
                  <h3 className="text-2xl font-bold text-gray-800">Information Sharing</h3>
                </div>
                <div className="pl-9 space-y-3 text-gray-700">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>With trusted service providers who assist in our operations</li>
                    <li>To protect our rights, property, or safety, or that of our users</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Data Security</h3>
                <div className="text-gray-700 space-y-3">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>SSL encryption for all data transmissions</li>
                    <li>Secure servers and databases</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Your Rights</h3>
                <div className="text-gray-700 space-y-3">
                  <p>Under Australian privacy laws, you have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your personal information</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>
                </div>
              </section>


              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <p className="text-blue-800 font-semibold">
                  This Privacy Policy may be updated from time to time. We will notify you of any material changes by
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
