'use client'

import { motion } from 'framer-motion'
import { Button } from 'antd'
import Image from 'next/image'

const HeroSection2 = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/group.jpg"
        alt="Latinos celebrating success"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latinos in Success
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Uniting and uplifting our community for a brighter future
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button type="primary" size="large" className="bg-yellow-500 hover:bg-yellow-600 border-none text-gray-800 font-semibold px-8 py-2 h-auto">
            Join Us
          </Button>
          <Button size="large" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-8 py-2 h-auto">
            Learn More
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection2