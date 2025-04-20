import React, { useState } from 'react';

const DonutChart = () => {
  const [stats] = useState({
    referrals: 75,
    converted: 65
  });

  const calculateStrokeDashoffset = (percentage) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    return circumference - (circumference * percentage) / 100;
  };

  return (
    <div className="max-w-md flex flex-row  p-8 rounded-2xl">

      <div className="relative w-40 h-40 mx-auto mb-8"> {/* Reduced size */}
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-800">{stats.converted}%</span> {/* Adjusted font size */}
          <span className="text-xs text-gray-500">Conversion Rate</span> {/* Adjusted font size */}
        </div>

        {/* SVG Donut Chart */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100"> {/* Reduced viewBox */}
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#EEF2F6"
            strokeWidth="12"
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(48, 90, 255, 0.8)" />
              <stop offset="100%" stopColor="#B5D2FF" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="12"
            strokeDasharray={2 * Math.PI * 40}
            strokeDashoffset={calculateStrokeDashoffset(stats.converted)}
            className="transition-all duration-1000 ease-in-out"
          />
        </svg>
      </div>

      {/* Stats Legend */}
      <div className="space-y-4  ml-4 flex justify-center items-center flex-col">
        <div className="flex items-center space-x-1 text-sm justify-between rounded-xl">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#4F46E5] mr-3"></div>
            <span className="text-gray-600 font-medium">Total Referrals</span>
          </div>
          <span className="font-bold text-gray-800">{stats.referrals}</span>
        </div>

        <div className="flex  space-x-6 text-sm items-center justify-between  rounded-xl">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#EEF2F6] mr-3"></div>
            <span className="text-gray-600 font-medium">Converted</span>
          </div>
          <span className="font-bold text-gray-800">{stats.converted}</span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
