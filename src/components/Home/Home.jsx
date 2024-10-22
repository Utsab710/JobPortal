import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  const PopularJobCategory = ({ title }) => (
    <button className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full hover:bg-gray-200 transition-colors duration-300">
      {title}
    </button>
  );
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section with Search */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl font-bold mb-4">
              Join the Job provider companies
            </h1>
            <p className="text-xl mb-8">We've helped to provide you job</p>

            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Job title, keywords or phrase"
                  className="flex-grow p-3 rounded-lg text-gray-900"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="flex-grow p-3 rounded-lg text-gray-900"
                />
                <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300">
                  Search
                </button>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm mb-2">Popular Searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <PopularJobCategory title="UI/UX Design" />
                <PopularJobCategory title="Frontend" />
                <PopularJobCategory title="Backend" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Jobs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Job cards would go here */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Frontend Developer
                </h3>
                <p className="text-gray-600 mb-4">TechCorp Inc.</p>
                <p className="text-sm text-gray-500 mb-4">Kathmandu, Nepal</p>
                <button className="text-black hover:underline">
                  Learn More
                </button>
              </div>
              {/* More job cards... */}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-700 text-white py-16">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
              Ready to start your career?
            </h2>
            <p className="text-xl mb-8">
              Create your profile and let employers find you!
            </p>
            <button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
