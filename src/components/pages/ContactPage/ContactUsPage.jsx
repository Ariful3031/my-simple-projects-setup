import React from "react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            We’d love to hear from you! Reach out to us with any questions or feedback.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Map Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">

            <iframe
              className="w-full h-72 md:h-80 lg:h-96"
              src="https://maps.google.com/maps?q=Uttara+Sector+9&output=embed"
              loading="lazy"
              style={{
                filter: "var(--map-filter)"
              }}
            ></iframe>

            {/* Info Cards */}
            <div className="p-5 space-y-4">

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold">Our Location</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    111 House, Learning Street, Online Campus
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full text-green-600">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    +880 1736-384167
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold">Email Address</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    learn.inception@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-2xl font-semibold text-blue-600">
              Send Us a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Fill out the form and we will get back to you soon.
            </p>

            <form className="mt-6 space-y-4">

              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Type your subject"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Message *
                </label>
                <textarea
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                <span>
                  I agree with <a className="text-blue-600 underline">terms & rules</a>.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;