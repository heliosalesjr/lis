import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Partnerships", href: "#partnerships" },
    { name: "Upcoming Events", href: "#events" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-white text-2xl font-bold tracking-wide cursor-pointer">
            Latinos in Success
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <span className="text-3xl">☰</span>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-b md:bg-none from-indigo-600 to-purple-600 md:flex md:space-x-8 p-4 md:p-0`}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                className={`block text-white text-lg py-2 px-4 rounded md:inline md:px-0 ${
                  activeSection === item.name
                    ? "border-b-2 border-white"
                    : "hover:border-b-2 hover:border-purple-300"
                } transition-all`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
