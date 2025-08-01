import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock leaderboard data - sorted by totalDonations in descending order
    const mockData = [
      { name: "Priya", referralCode: "priya2025", totalDonations: 3000 },
      { name: "Somu", referralCode: "somu2025", totalDonations: 2500 },
      { name: "Rahul", referralCode: "rahul2025", totalDonations: 1800 },
      { name: "Ananya", referralCode: "ananya2025", totalDonations: 1500 },
      { name: "Karan", referralCode: "karan2025", totalDonations: 1200 },
      { name: "Meera", referralCode: "meera2025", totalDonations: 950 },
      { name: "Arjun", referralCode: "arjun2025", totalDonations: 800 },
      { name: "Kavya", referralCode: "kavya2025", totalDonations: 650 }
    ];

    setLeaderboardData(mockData);
  }, []);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return "🥇";
      case 2: return "🥈"; 
      case 3: return "🥉";
      default: return `#${rank}`;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return "from-yellow-400 to-yellow-600";
      case 2: return "from-gray-400 to-gray-600";
      case 3: return "from-amber-600 to-amber-800";
      default: return "from-indigo-500 to-purple-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate("/dashboard")}
                className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition duration-200"
              >
                <span className="text-lg">←</span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-white">ID</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1>
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

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">🏆 Top Performers</h2>
          <p className="text-gray-600">See how you rank against other amazing interns!</p>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-12">
          <div className="flex justify-center items-end space-x-4 mb-8">
            {/* 2nd Place */}
            {leaderboardData[1] && (
              <div className="text-center">
                <div className="w-24 h-32 bg-gradient-to-t from-gray-400 to-gray-600 rounded-t-2xl flex flex-col justify-end p-3 mb-3">
                  <span className="text-white font-bold text-lg">2nd</span>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-200">
                  <div className="text-3xl mb-2">🥈</div>
                  <h3 className="font-bold text-gray-900">{leaderboardData[1].name}</h3>
                  <p className="text-sm text-gray-600 font-mono">{leaderboardData[1].referralCode}</p>
                  <p className="text-lg font-bold text-gray-800 mt-2">₹{leaderboardData[1].totalDonations.toLocaleString()}</p>
                </div>
              </div>
            )}

            {/* 1st Place */}
            {leaderboardData[0] && (
              <div className="text-center">
                <div className="w-28 h-40 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-t-2xl flex flex-col justify-end p-3 mb-3 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="text-3xl">👑</span>
                  </div>
                  <span className="text-white font-bold text-xl">1st</span>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-yellow-300">
                  <div className="text-4xl mb-3">🥇</div>
                  <h3 className="font-bold text-gray-900 text-lg">{leaderboardData[0].name}</h3>
                  <p className="text-sm text-gray-600 font-mono">{leaderboardData[0].referralCode}</p>
                  <p className="text-xl font-bold text-yellow-600 mt-2">₹{leaderboardData[0].totalDonations.toLocaleString()}</p>
                </div>
              </div>
            )}

            {/* 3rd Place */}
            {leaderboardData[2] && (
              <div className="text-center">
                <div className="w-24 h-28 bg-gradient-to-t from-amber-600 to-amber-800 rounded-t-2xl flex flex-col justify-end p-3 mb-3">
                  <span className="text-white font-bold text-lg">3rd</span>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-amber-200">
                  <div className="text-3xl mb-2">🥉</div>
                  <h3 className="font-bold text-gray-900">{leaderboardData[2].name}</h3>
                  <p className="text-sm text-gray-600 font-mono">{leaderboardData[2].referralCode}</p>
                  <p className="text-lg font-bold text-gray-800 mt-2">₹{leaderboardData[2].totalDonations.toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
            <h3 className="text-xl font-bold text-white">Full Leaderboard</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Referral Code</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Donations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaderboardData.map((person, index) => {
                  const rank = index + 1;
                  return (
                    <tr key={index} className="hover:bg-gray-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${getRankColor(rank)} flex items-center justify-center text-white font-bold mr-3`}>
                            {rank <= 3 ? getRankIcon(rank) : rank}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">{person.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded-lg inline-block">
                          {person.referralCode}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-lg font-bold text-green-600">
                          ₹{person.totalDonations.toLocaleString()}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Back to Dashboard Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;