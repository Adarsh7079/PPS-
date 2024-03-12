import React from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PDFViewer = ({ pdf }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="bg-gray-100 p-4">
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        className="border border-gray-300"
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p className="text-center mt-2">
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PDFViewer;
