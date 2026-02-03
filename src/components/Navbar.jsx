import { NavLink, useNavigate } from "react-router-dom";
import { Moon, Sun, LogOut, Menu, X } from "lucide-react"; // Menu va X qo'shildi
import { useState } from "react";
import useTheme from "../context/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // Mobil menyu holati

  const userDataStr = sessionStorage.getItem('user');
  const userData = userDataStr ? JSON.parse(userDataStr) : null;
  const isAdmin = sessionStorage.getItem('isAdmin') === "true";
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: '/' },
    { name: "All Products", path: '/products' },
    { name: "Cart", path: '/cart' },
    { name: "About", path: '/about' }
  ];

  // Agar admin bo'lsa, Dashboard va Users linklarini qo'shamiz
  if (isAdmin) {
    links.push({ name: "Dashboard", path: '/dashboard' });
    links.push({ name: "Users", path: '/users' });
  }

  const mainStyle = theme === 'dark' ? "text-white" : "text-slate-900";
  const activeStyle = "bg-blue-600 text-white shadow-md";

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('isAdmin');
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <nav className={`border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${theme === 'dark' ? 'bg-slate-900/90 border-slate-800' : "bg-white/90"} ${mainStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="shrink-0 flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NavBrand
              </span>
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-200 font-medium hover:bg-blue-500/10 ${isActive ? activeStyle : ""}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section (Theme & Desktop User) */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors`}
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center space-x-3">
              {!userData && !isAdmin ? (
                <>
                  <NavLink to={'/login'} className="font-medium hover:text-blue-600">Login</NavLink>
                  <NavLink to={'/register'} className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform">
                    Register
                  </NavLink>
                </>
              ) : (
                <>
                  <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full">
                    {isAdmin ? "Admin" : userData?.username}
                  </span>
                  <button onClick={handleLogout} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                    <LogOut className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md outline-none">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className={`px-4 pt-2 pb-6 space-y-2 border-t ${theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-gray-100 bg-white'}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `block px-4 py-3 rounded-xl font-medium ${isActive ? activeStyle : "hover:bg-blue-500/10"}`}
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-gray-200 dark:border-slate-800">
            {!userData && !isAdmin ? (
              <div className="grid grid-cols-2 gap-4">
                <NavLink to={'/login'} onClick={() => setIsOpen(false)} className="text-center py-3 font-medium border border-gray-300 rounded-xl">Login</NavLink>
                <NavLink to={'/register'} onClick={() => setIsOpen(false)} className="text-center py-3 bg-blue-600 text-white rounded-xl font-medium">Register</NavLink>
              </div>
            ) : (
              <div className="flex items-center justify-between px-4 py-2">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  User: {isAdmin ? "Admin" : userData?.username}
                </span>
                <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 font-bold">
                  <LogOut className="w-5 h-5" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
