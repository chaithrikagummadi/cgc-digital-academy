function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-700 leading-tight">
              Digital Asif Agency
            </h1>

            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              Become a Complete Digital Marketing Expert with Practical
              Training, Live Projects & Career Guidance.
            </p>

            <div className="mt-6 space-y-2 text-lg">
              <p>✔ SEO Training</p>
              <p>✔ Google Ads & Meta Ads</p>
              <p>✔ LinkedIn Ads</p>
              <p>✔ Freelancing Guidance</p>
              <p>✔ Resume Building & Interview Preparation</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919381845418"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg text-lg font-semibold"
              >
                Join Free Demo Class
              </a>

              <a
                href="tel:+919381845418"
                className="border border-blue-600 text-blue-700 px-6 py-3 rounded-2xl text-lg font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Enroll Today
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3"
              />

              <select className="w-full border rounded-xl px-4 py-3">
                <option>Select Course</option>
                <option>SEO Module</option>
                <option>Google Ads Module</option>
                <option>LinkedIn Ads Module</option>
                <option>Complete Digital Marketing Course</option>
              </select>

              <a
                href="https://wa.me/919381845418"
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold"
              >
                Enroll via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700">
            Why Choose Digital asif Agency
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700">
                Practical Training
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Learn with live projects, assignments, real-time campaign setup,
                and hands-on implementation.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700">
                Flexible Online Classes
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Flexible timings designed for students, housewives, job seekers,
                and working professionals.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700">
                Affordable Learning
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Industry-oriented digital marketing training at affordable
                pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700">
            Course Modules
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                SEO Training – 3 Weeks
              </h3>

              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>✔ On-Page SEO</li>
                <li>✔ Off-Page SEO</li>
                <li>✔ Technical SEO</li>
                <li>✔ Keyword Research</li>
                <li>✔ Website Audit</li>
                <li>✔ Google Search Console (GSC)</li>
                <li>✔ GA4 Tracking & Analytics</li>
                <li>✔ SEO Reporting</li>
                <li>✔ Live Website Optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                Google & Meta Ads – 3 Weeks
              </h3>

              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>✔ Google Search Ads</li>
                <li>✔ Display Ads</li>
                <li>✔ YouTube Ads</li>
                <li>✔ Facebook Ads</li>
                <li>✔ Instagram Ads</li>
                <li>✔ Pixel Setup</li>
                <li>✔ Campaign Optimization</li>
                <li>✔ Audience Targeting</li>
                <li>✔ Lead Generation Strategies</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                LinkedIn Ads – 2 Weeks
              </h3>

              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>✔ LinkedIn Campaign Setup</li>
                <li>✔ B2B Marketing</li>
                <li>✔ Professional Targeting</li>
                <li>✔ LinkedIn Lead Generation</li>
                <li>✔ Sponsored Content Ads</li>
                <li>✔ Complete Market Research</li>
                <li>✔ LinkedIn Profile Optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                Career & Freelancing Support
              </h3>

              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>✔ Resume Building</li>
                <li>✔ Interview Preparation</li>
                <li>✔ Freelancing Guidance</li>
                <li>✔ Fiverr & Upwork Training</li>
                <li>✔ Portfolio Development</li>
                <li>✔ Client Acquisition Methods</li>
                <li>✔ Personal Branding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold leading-tight">
            Start Your Digital Marketing Journey Today
          </h2>

          <p className="mt-6 text-xl leading-relaxed">
            Learn practical skills, work on live projects, build your career,
            and explore freelancing opportunities with Digital Asif Agency
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/919381845418"
              className="bg-white text-blue-700 px-8 py-4 rounded-2xl shadow-lg text-xl font-semibold"
            >
              WhatsApp Now
            </a>

            <a
              href="tel:+919381845418"
              className="border border-white text-white px-8 py-4 rounded-2xl text-xl font-semibold"
            >
              Call 9381845418
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10 text-center text-gray-600">
        <h3 className="text-2xl font-bold text-blue-700">
          Digital Asif Agency
        </h3>

        <p className="mt-3">Madhapur | Online Flexible Training</p>

        <p className="mt-2">Phone: 9381845418</p>

        <p className="mt-4 text-sm">
          © 2026 Digital Asif Agency. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
