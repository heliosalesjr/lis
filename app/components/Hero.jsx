"use client";

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col justify-center items-center text-center p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-white text-5xl md:text-7xl font-bold tracking-wide drop-shadow-lg"
      >
        Latinos in Success
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="text-white text-lg md:text-xl mt-4 max-w-2xl"
      >
        We are a group of Latinos united by a common goal of uplifting our community and nurturing growth.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        className="mt-8 flex space-x-4"
      >
        <button className="bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 transition-all px-6 py-3 rounded-lg font-semibold shadow-lg">
          Join
        </button>
        <button className="bg-transparent border border-white text-white hover:bg-white hover:text-indigo-600 transition-all px-6 py-3 rounded-lg font-semibold shadow-lg">
          Learn More
        </button>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-indigo-400/30 to-purple-500/50 pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
