'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          My Resume
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ATS-Friendly Resume */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">ATS-Friendly Resume</h2>
            <p className="text-gray-300 mb-6">
              A clean, simple version optimized for applicant tracking systems. Perfect for job applications
              and professional submissions.
            </p>
            <Link
              href="/resume-ats.pdf"
              target="_blank"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
            >
              View ATS Resume
            </Link>
          </motion.div>

          {/* Fancy Resume */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Fancy Resume</h2>
            <p className="text-gray-300 mb-6">
              A visually enhanced version with modern design elements. Great for sharing directly
              with hiring managers and networking.
            </p>
            <Link
              href="/resume-fancy.pdf"
              target="_blank"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium hover:from-purple-600 hover:to-purple-800 transition-all duration-200"
            >
              View Fancy Resume
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 