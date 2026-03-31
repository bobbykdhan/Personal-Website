'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  const [viewMode, setViewMode] = useState<'ats' | 'fancy'>('fancy');
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleViewModeChange = (mode: 'ats' | 'fancy') => {
    setViewMode(mode);
    if (isMobile) {
      const pdfUrl = mode === 'fancy' ? '/bobby_dhanoolal_resume_fancy.pdf' : '/bobby_dhanoolal_resume.pdf';
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Resume</h1>
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center w-full md:w-auto">
            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
              <button
                onClick={() => handleViewModeChange('fancy')}
                className={`px-4 py-2 rounded-lg transition-colors w-full md:w-auto ${
                  viewMode === 'fancy' || isMobile
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Fancy Version
              </button>
              <button
                onClick={() => handleViewModeChange('ats')}
                className={`px-4 py-2 rounded-lg transition-colors w-full md:w-auto ${
                  viewMode === 'ats' || isMobile
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                ATS Version
              </button>
              <a
                href={viewMode === 'fancy' ? '/bobby_dhanoolal_resume_fancy.pdf' : '/bobby_dhanoolal_resume.pdf'}
                download
                className="hidden md:flex px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors items-center justify-center gap-2 w-full md:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download
              </a>
            </div>
          </div>
        </motion.div>

        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {isClient ? (
              <iframe
                src={viewMode === 'fancy' ? '/bobby_dhanoolal_resume_fancy.pdf' : '/bobby_dhanoolal_resume.pdf'}
                className="w-full h-[calc(100vh-16rem)] md:h-[calc(100vh-12rem)]"
                title="Resume PDF Viewer"
              />
            ) : (
              <div className="w-full h-[calc(100vh-16rem)] md:h-[calc(100vh-12rem)] flex items-center justify-center bg-gray-50">
                <div className="animate-pulse text-gray-400">Loading PDF...</div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
} 