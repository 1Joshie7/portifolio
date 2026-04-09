import React from 'react';
import { Download } from 'lucide-react';
import { AnimatedBorderButton } from './AnimatedBorderButton';

export const DownloadCVButton = ({ variant = "animated", className = "" }) => {
  const handleDownload = () => {
    // Link to your PDF file in the public folder
    const pdfUrl = '/cv/Joshua_Tevera_CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Joshua_Tevera_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (variant === "animated") {
    return (
      <AnimatedBorderButton onClick={handleDownload} className={className}>
        <Download size={18} />
        Download CV
      </AnimatedBorderButton>
    );
  }

  return (
    <button
      onClick={handleDownload}
      className={`btn-primary flex items-center gap-2 ${className}`}
    >
      <Download size={18} />
      Download CV
    </button>
  );
};