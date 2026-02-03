import React from 'react';
import useTheme from "../context/useTheme";
import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Package,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const { theme } = useTheme();

  // Statistika ma'lumotlari
  const stats = [
    { id: 1, title: "Total Sales", value: "$45,231", icon: <DollarSign />, change: "+12.5%" },
    { id: 2, title: "Active Users", value: "2,405", icon: <Users />, change: "+3.2%" },
    { id: 3, title: "New Orders", value: "156", icon: <ShoppingBag />, change: "+18.3%" },
    { id: 4, title: "Pending", value: "43", icon: <Clock />, change: "-2.1%" },
  ];

  // Oxirgi buyurtmalar (Dummy data)
  const recentOrders = [
    { id: "#8821", user: "Ali Valiyev", product: "iPhone 15 Pro", price: "$1200", status: "Completed" },
    { id: "#8822", user: "Zilola G'aniyeva", product: "MacBook Air", price: "$999", status: "Processing" },
    { id: "#8823", user: "Jasur Akromov", product: "AirPods Pro", price: "$249", status: "Shipped" },
    { id: "#8824", user: "Madina Umarova", product: "Apple Watch", price: "$399", status: "Pending" },
  ];

  const buttonClass = theme === "dark"
    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 shadow-purple-900/50 hover:shadow-purple-900/70"
    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700";

  return (
    <div className={`min-h-screen transition-colors duration-300 p-6 ${theme === "dark" ? "bg-slate-950 text-white" : "bg-gray-50 text-gray-800"}`}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Xush kelibsiz, do'koningizdagi holatni kuzating.</p>
          </div>
          <button className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 active:scale-95 ${buttonClass}`}>
            Download Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-105 ${theme === 'dark'
                  ? 'bg-slate-900/60 border-slate-700 shadow-purple-900/10'
                  : 'bg-white border-gray-100 shadow-xl shadow-gray-200/50'
                }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-slate-800 text-purple-400' : 'bg-blue-50 text-blue-600'}`}>
                  {stat.icon}
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${stat.change.startsWith('+') ? 'text-green-500 bg-green-500/10' : 'text-red-500 bg-red-500/10'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{stat.title}</h3>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders Table */}
          <div className={`lg:col-span-2 p-6 rounded-2xl border backdrop-blur-md ${theme === 'dark' ? 'bg-slate-900/60 border-slate-700' : 'bg-white border-gray-100 shadow-xl'
            }`}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Package className="text-purple-500" /> Recent Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className={`border-b ${theme === 'dark' ? 'border-slate-700 text-gray-400' : 'border-gray-100 text-gray-500'}`}>
                    <th className="pb-4 font-semibold">ID</th>
                    <th className="pb-4 font-semibold">Customer</th>
                    <th className="pb-4 font-semibold">Product</th>
                    <th className="pb-4 font-semibold">Price</th>
                    <th className="pb-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-transparent">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="group hover:bg-white/5 transition-colors">
                      <td className="py-4 font-medium text-blue-400">{order.id}</td>
                      <td className="py-4">{order.user}</td>
                      <td className="py-4">{order.product}</td>
                      <td className="py-4 font-bold">{order.price}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                            order.status === 'Processing' ? 'bg-blue-500/10 text-blue-500' :
                              'bg-yellow-500/10 text-yellow-500'
                          }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Analytics Card */}
          <div className={`p-6 rounded-2xl border backdrop-blur-md ${theme === 'dark' ? 'bg-slate-900/60 border-slate-700' : 'bg-white border-gray-100 shadow-xl'
            }`}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="text-pink-500" /> Sales Target
            </h2>
            <div className="flex flex-col items-center justify-center py-10">
              <div className="relative w-40 h-40">
                {/* SVG Progress Circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" className={`${theme === 'dark' ? 'text-slate-800' : 'text-gray-100'}`} />
                  <circle cx="80" cy="80" r="70" stroke="url(#gradient)" strokeWidth="10" fill="transparent" strokeDasharray="440" strokeDashoffset="110" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">75%</span>
                  <span className="text-xs text-gray-400">Monthly</span>
                </div>
              </div>
              <p className="mt-6 text-center text-sm text-gray-500">
                You have reached 75% of your monthly goal. Keep it up!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
