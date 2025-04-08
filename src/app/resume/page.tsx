'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Resume
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fancy Resume</h2>
            <p className="text-gray-600 mb-6">
              View my professionally designed LaTeX resume with a modern and clean layout.
            </p>
            <Link
              href="/resume/fancy"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
            >
              View Fancy Resume
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">ATS-Friendly Resume</h2>
            <p className="text-gray-600 mb-6">
              Download my ATS-friendly resume optimized for applicant tracking systems.
            </p>
            <Link
              href="/resume/ats"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
            >
              View ATS Resume
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 