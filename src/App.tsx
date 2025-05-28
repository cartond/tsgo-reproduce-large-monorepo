import React from 'react';
// @ts-ignore
import { formatDate } from '@slack/utils';
// This is the problematic import that uses @slack with relative path traversal
import pdf_1 from '@slack/../../files/pdf/pdf_1.pdf';
// @ts-ignore
import SomeImage from '@slack/../../files/img/icon_1.png';

export const App: React.FC = () => {
  const handleDownload = () => {
    console.log('Downloading PDF:', pdf_1);
    // In a real app, this would trigger a download
  };

  return (
    <div>
      <h1>TypeScript stuff</h1>
      <p>Today's date: {formatDate(new Date())}</p>
      <button onClick={handleDownload}>
        Download ISO 27001 PDF
      </button>
      <p>
        This component imports a PDF using a problematic path: 
        <code>@slack/../../files/some_pdf.pdf</code>
      </p>
      <img src={SomeImage} alt="Fake icon" style={{ width: 40, height: 40 }} />
    </div>
  );
}; 