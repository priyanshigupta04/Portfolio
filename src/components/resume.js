import React from 'react';
import '../App.css';
import Resume from '../assets/assets/Resume.pdf';

const ResumePage = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;  // Using the Resume file as the download source
    link.download = "Resume-PDF"; // Setting the download filename
    link.click(); // Triggering the download
  };

  return (
    <>
      <div className="download-container">
        <button className="download-btn" onClick={handleDownload}>Download PDF</button> {/* Updated to use the handleDownload function */}
      </div>
      <div className="pdf-container">
        <embed src={Resume} type="application/pdf" width="100%" height="100%"/>
      </div>
      <div className="download-container">
        <button className="download-btn" onClick={handleDownload}>Download PDF</button> {/* Updated to use the handleDownload function */}
      </div>
    </>
  );
};

export default ResumePage;
