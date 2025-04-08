'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  const [viewMode, setViewMode] = useState<'ats' | 'fancy'>('fancy');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
            </div>
          </div>
        </motion.div>

        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <iframe
              src={viewMode === 'fancy' ? '/resume-fancy.pdf' : '/resume.pdf'}
              className="w-full h-[calc(100vh-12rem)]"
              title="Resume PDF Viewer"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
} 