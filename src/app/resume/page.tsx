'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  const [viewMode, setViewMode] = useState<'ats' | 'fancy'>('fancy');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-between items-center"
        >
          <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
          <div className="flex gap-4 items-center">
            <div className="flex gap-4">
              <button
                onClick={() => setViewMode('fancy')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'fancy'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Fancy Version
              </button>
              <button
                onClick={() => setViewMode('ats')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'ats'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                ATS Version
              </button>
              <a
                href={viewMode === 'fancy' ? '/bobby_dhanoolal_resume_fancy.pdf' : '/bobby_dhanoolal_resume.pdf'}
                download
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {isClient ? (
            <iframe
              src={viewMode === 'fancy' ? '/bobby_dhanoolal_resume_fancy.pdf' : '/bobby_dhanoolal_resume.pdf'}
              className="w-full h-[calc(100vh-12rem)]"
              title="Resume PDF Viewer"
            />
          ) : (
            <div className="w-full h-[calc(100vh-12rem)] flex items-center justify-center bg-gray-50">
              <div className="animate-pulse text-gray-400">Loading PDF...</div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 