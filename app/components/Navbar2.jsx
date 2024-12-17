'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Drawer, Button } from 'antd'
import { FiMenu } from 'react-icons/fi'
import { motion } from 'framer-motion'

const menuItems = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Partnerships', href: '/partnerships' },
  { name: 'Upcoming Events', href: '/events' },
  { name: 'Resources', href: '/resources' },
]

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showDrawer = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  const NavbarContent = ({ mobile = false }) => (
    <ul className={`flex ${mobile ? 'flex-col space-y-4' : 'space-x-6'}`}>
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link href={item.href} passHref>
            <motion.span
              className={`text-lg font-medium cursor-pointer ${
                pathname === item.href
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  className="h-0.5 bg-blue-600"
                  layoutId="underline"
                  initial={false}
                />
              )}
            </motion.span>
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" passHref>
            <motion.span
              className="text-2xl font-bold text-blue-600 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Latinos in Success
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavbarContent />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              className="border-none shadow-none"
              icon={<FiMenu className="text-2xl" />}
              onClick={showDrawer}
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={isOpen}
        bodyStyle={{ padding: 0 }}
      >
        <div className="p-4">
          <NavbarContent mobile />
        </div>
      </Drawer>
    </nav>
  )
}

export default Navbar2

