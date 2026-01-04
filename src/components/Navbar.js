import React from "react";

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = ["Random", "Search"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/60 shadow-sm mb-5">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#6da8ff] to-[#9c6dff] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#6da8ff] to-[#9c6dff]">
            GifSpark
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={()=>setActiveSection(item.toLowerCase()) }
              className={`text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                activeSection === item.toLowerCase()
                  ? "text-[#7d8fff]"
                  : "text-gray-600 hover:text-[#7d8fff]"
              }`}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-[#6da8ff] to-[#9c6dff] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
