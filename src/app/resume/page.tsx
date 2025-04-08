'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function ResumePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <p className="text-gray-600 mb-8">
            Download my resume in PDF format or view it online below.
          </p>
          <div className="relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Download PDF
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link
                    href="/atsresume.pdf"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    ATS-Friendly Version
                  </Link>
                  <Link
                    href="/fancyresume.pdf"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Fancy Version
                  </Link>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Bobby Dhanoolal</h2>
            <p className="text-gray-600">Computer Science Student at RIT</p>
            <p className="text-gray-600">Seeking Full-Time Backend Development Position for 2025</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Rochester Institute of Technology</h4>
                <p className="text-gray-600">Bachelor of Science in Computer Science</p>
                <p className="text-gray-500">Expected Graduation: 2025</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900">Software Engineer Intern - IBM</h4>
                <p className="text-gray-600">May 2024 - Present</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Working on backend development projects</li>
                  <li>Contributing to enterprise-level software solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Software Engineering Co-Op - Codonics</h4>
                <p className="text-gray-600">Jan 2024 - May 2024</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Developed and maintained software solutions</li>
                  <li>Collaborated with cross-functional teams</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Web & Email Technologist - RIT University Advancement</h4>
                <p className="text-gray-600">Aug 2023 - Present</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Managed web and email technologies</li>
                  <li>Implemented automation solutions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Languages</h4>
                <p className="text-gray-600">Python, Java, JavaScript, TypeScript, C++, SQL</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Frameworks</h4>
                <p className="text-gray-600">React, Next.js, Node.js, Express, Flask</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Tools</h4>
                <p className="text-gray-600">Git, Docker, AWS, PostgreSQL, MongoDB</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Projects</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Play Tracker</h4>
                <p className="text-gray-600">A web application for tracking and analyzing sports plays</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">SummerSync</h4>
                <p className="text-gray-600">A scheduling and coordination platform for summer activities</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">AutoOrder-API</h4>
                <p className="text-gray-600">An automated ordering system API</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 