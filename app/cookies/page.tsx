import Header from "../components/header"
import Footer from "../components/footer"
import { Cookie, Settings, Info, Shield } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">Cookies Policy</h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              Learn about how we use cookies to enhance your experience on our website.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <Cookie className="text-orange-500" size={48} />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">About Our Cookies</h2>
                  <p className="text-gray-600">Last updated: December 2024</p>
                </div>
              </div>

              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Info className="text-blue-600" size={24} />
                  <h3 className="text-2xl font-bold text-gray-800">What Are Cookies?</h3>
                </div>
                <div className="pl-9 text-gray-700 space-y-3">
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. They help us
                    provide you with a better experience by remembering your preferences and understanding how you use
                    our site.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Settings className="text-purple-600" size={24} />
                  <h3 className="text-2xl font-bold text-gray-800">Types of Cookies We Use</h3>
                </div>
                <div className="pl-9 space-y-6 text-gray-700">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Essential Cookies</h4>
                    <p>
                      These cookies are necessary for the website to function properly. They enable basic functions like
                      page navigation, access to secure areas, and form submissions. The website cannot function
                      properly without these cookies.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Performance Cookies</h4>
                    <p>
                      These cookies collect information about how visitors use our website, such as which pages are
                      visited most often. This data helps us improve how our website works and optimize user experience.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Functionality Cookies</h4>
                    <p>
                      These cookies allow the website to remember choices you make and provide enhanced, more personal
                      features. They may be set by us or by third-party providers whose services we have added to our
                      pages.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Analytics Cookies</h4>
                    <p>
                      We use analytics cookies to understand how our website is being used and to identify areas for
                      improvement. These cookies collect information anonymously and report website trends without
                      identifying individual visitors.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="text-green-600" size={24} />
                  <h3 className="text-2xl font-bold text-gray-800">Managing Your Cookie Preferences</h3>
                </div>
                <div className="pl-9 text-gray-700 space-y-3">
                  <p>You have several options for managing cookies:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their
                      settings preferences. You can set your browser to refuse cookies or delete certain cookies.
                    </li>
                    <li>
                      <strong>Our Cookie Banner:</strong> When you first visit our site, you can choose which types of
                      cookies to accept through our cookie consent banner.
                    </li>
                    <li>
                      <strong>Opt-out Links:</strong> For third-party cookies, you can often opt out directly through
                      the service provider's website.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Third-Party Cookies</h3>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Some cookies on our site are set by third-party services that appear on our pages. We use reputable
                    third-party services for analytics and functionality, and these services may set their own cookies
                    to provide their services effectively.
                  </p>
                  <p>
                    We do not control these third-party cookies, and they are subject to the respective third party's
                    privacy policy and cookie policy.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Impact of Disabling Cookies</h3>
                <div className="text-gray-700 space-y-3">
                  <p>
                    While you can disable cookies, please note that doing so may affect your experience on our website.
                    Some features may not work properly, and you may need to re-enter information that would normally be
                    remembered.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Updates to This Policy</h3>
                <div className="text-gray-700">
                  <p>
                    We may update this Cookies Policy from time to time to reflect changes in our practices or for other
                    operational, legal, or regulatory reasons. Please check this page periodically for updates.
                  </p>
                </div>
              </section>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
                <p className="text-orange-800 font-semibold">
                  By continuing to use our website, you consent to our use of cookies as described in this policy. You
                  can change your cookie preferences at any time through your browser settings.
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
