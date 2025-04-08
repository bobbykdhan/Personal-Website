'use client';

import { useEffect, useState } from 'react';

interface PDFViewerProps {
  src: string;
}

export default function PDFViewer({ src }: PDFViewerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[calc(100vh-12rem)] flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-400">Loading PDF...</div>
      </div>
    );
  }

  return (
    <iframe
      src={src}
      className="w-full h-[calc(100vh-12rem)]"
      title="Resume PDF Viewer"
    />
  );
} 