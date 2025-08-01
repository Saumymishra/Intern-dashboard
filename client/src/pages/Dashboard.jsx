import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage or use default
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      // Default data if no stored data
      setUserData({
        name: "Somu",
        referralCode: "somu2025",
        totalDonations: 2500
      });
    }
  }, []);

  const rewards = [
    {
      title: "Bronze Supporter",
      description: "Raised ₹1000",
      icon: "🥉",
      requirement: 1000,
      unlocked: userData?.totalDonations >= 1000
    },
    {
      title: "Silver Supporter", 
      description: "Raised ₹2500",
      icon: "🥈",
      requirement: 2500,
      unlocked: userData?.totalDonations >= 2500
    },
    {
      title: "Gold Supporter",
      description: "Raised ₹5000", 
      icon: "🥇",
      requirement: 5000,
      unlocked: userData?.totalDonations >= 5000
    },
    {
      title: "Diamond Supporter",
      description: "Raised ₹10000",
      icon: "💎", 
      requirement: 10000,
      unlocked: userData?.totalDonations >= 10000
    }
  ];

  if (!userData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-white">ID</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Intern Dashboard</h1>
            </div>
            <button
              onClick={() => navigate("/")}
              className="text-gray-500 hover:text-gray-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl text-center mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userData.name}! 👋
          </h2>
          <p className="text-gray-600">Here's your impact summary and achievements.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Name Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition duration-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Intern Name</p>
                <p className="text-2xl font-bold text-gray-900">{userData.name}</p>
              </div>
            </div>
          </div>

          {/* Referral Code Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition duration-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Referral Code</p>
                <p className="text-2xl font-bold text-gray-900 font-mono">{userData.referralCode}</p>
              </div>
            </div>
          </div>

          {/* Total Donations Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition duration-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Total Donations</p>
                <p className="text-2xl font-bold text-gray-900">₹{userData.totalDonations.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Rewards & Achievements</h3>
            <span className="text-sm text-gray-500">
              {rewards.filter(reward => reward.unlocked).length}/{rewards.length} unlocked
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 border-2 transition duration-300 ${
                  reward.unlocked
                    ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-sm hover:shadow-md"
                    : "bg-gray-50 border-gray-200 opacity-60"
                }`}
              >
                {reward.unlocked && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-4xl mb-3">{reward.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{reward.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                  
                  {!reward.unlocked && (
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.min((userData.totalDonations / reward.requirement) * 100, 100)}%`
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        ₹{(reward.requirement - userData.totalDonations).toLocaleString()} more to unlock
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/leaderboard")}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl"
          >
            View Leaderboard 🏆
          </button>
          <button className="flex-1 bg-white text-gray-700 py-3 px-6 rounded-xl font-semibold border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition duration-200">
            Share Referral Code 📤
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;