'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Play Tracker',
    description: 'Integrated Google Cloud services for real-time data retrieval and decision-making. Built an asynchronous workflow with Python\'s Asyncio to optimize trade execution speed.',
    tags: ['Python', 'IBKR API', 'Docker', 'Fast API', 'Google Cloud', 'Twilio', 'MySQL'],
    status: 'Closed Source',
    date: '2024'
  },
  {
    title: 'SummerSync',
    description: 'Led a team to develop an automated scheduling algorithm for the RIT NTID summer transition program, integrating student ability levels with teacher and room availability to optimize placements.',
    tags: ['Python', 'FastAPI', 'MySQL', 'OpenShift'],
    status: 'Closed Source',
    date: '2024'
  },
  {
    title: 'AutoOrder-API',
    description: 'Automated a headless browser to order food from the RIT dining hall. Enabled users to order using HTTP requests instead of via the command line.',
    tags: ['Python', 'FastAPI', 'Imgur-API', 'Docker', 'OpenShift', 'Selenium'],
    link: 'https://github.com/bobbykdhan/AutoOrder-API',
    status: 'Open Source',
    date: '2023'
  },
  {
    title: 'LINT',
    description: 'Developed a user-friendly reporting system utilized for maintenance issues for RIT residence halls. The system streamlines the process of reporting and tracking maintenance requests.',
    tags: ['Flask', 'Python', 'HTML', 'OpenShift', 'Docker', 'Selenium'],
    link: 'https://github.com/Bobbykdhan/LINT',
    status: 'Open Source',
    date: '2023'
  },
  {
    title: 'TigerPay',
    description: 'Created a service that allows students to quickly access their TigerPay Account via text message instead of having to login to their student account, improving accessibility and convenience.',
    tags: ['Python', 'FastAPI', 'MySQL', 'Beautiful Soup', 'OpenShift'],
    link: 'https://github.com/Bobbykdhan/TigerPay',
    status: 'Open Source',
    date: '2023'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                    >
                      View Project
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
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 