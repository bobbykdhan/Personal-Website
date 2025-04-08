'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
          >
            Bobby Dhanoolal
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${
                isActive('/') 
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                isActive('/about')
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              } transition-colors`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`${
                isActive('/projects')
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              } transition-colors`}
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className={`${
                isActive('/resume')
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              } transition-colors`}
            >
              Resume
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                <Link
                  href="/"
                  className={`block px-4 py-2 rounded-md ${
                    isActive('/')
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`block px-4 py-2 rounded-md ${
                    isActive('/about')
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className={`block px-4 py-2 rounded-md ${
                    isActive('/projects')
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/resume"
                  className={`block px-4 py-2 rounded-md ${
                    isActive('/resume')
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 