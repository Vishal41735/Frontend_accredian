import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReferModal from './components/ReferModal';
import { Gift, Users, Award, ArrowRight, Zap, BookOpen, Clock, Star, Smile } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Top Banner */}
      <div className="bg-blue-50 text-center py-2 shadow-lg">
        <a href="Expert" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Navigate your ideal career path with tailored guidance
        </a>
      </div>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight animate-slideInLeft">
                  Share Knowledge, Earn Rewards
                </h1>
                <p className="text-xl mb-8 text-gray-200 animate-slideInLeft delay-100">
                  Refer your friends to our courses and earn exclusive rewards while helping them advance their careers.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-200 ease-in-out transform hover:scale-105 animate-bounce"
                >
                  Refer Now
                </button>
              </div>
              <div className="hidden md:block animate-slideInRight">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="Students learning"
                  className="rounded-lg shadow-2xl transform transition duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-white shadow-lg rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 animate-fadeIn">How Do I Refer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 transition-transform transform hover:scale-105 hover:bg-blue-50 rounded-lg shadow-lg animate-slideInUp delay-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Share with Friends</h3>
                <p className="text-gray-600">Invite your friends to join our learning platform</p>
              </div>
              <div className="text-center p-6 transition-transform transform hover:scale-105 hover:bg-blue-50 rounded-lg shadow-lg animate-slideInUp delay-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">They Enroll</h3>
                <p className="text-gray-600">When they enroll in any course using your referral</p>
              </div>
              <div className="text-center p-6 transition-transform transform hover:scale-105 hover:bg-blue-50 rounded-lg shadow-lg animate-slideInUp delay-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
                <p className="text-gray-600">Get exciting rewards for successful referrals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 animate-fadeIn">Referral Benefits</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-slideInUp">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Benefit</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 flex items-center">
                      <Zap className="h-5 w-5 text-blue-600 mr-2" /> Cash Rewards
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">Earn ₹2000 for each successful referral</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 flex items-center">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-2" /> Course Discount
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">Get 20% off on your next course purchase</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-2" /> Premium Access
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">1 month free access to premium content</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 flex items-center">
                      <Star className="h-5 w-5 text-blue-600 mr-2" /> Exclusive Badges
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">Earn exclusive badges for top referrers</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 flex items-center">
                      <Smile className="h-5 w-5 text-blue-600 mr-2" /> Community Recognition
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">Get featured in our community leaderboard</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8 animate-fadeIn">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105"
              >
                Start Referring Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ReferModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;