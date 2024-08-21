import React, { useRef } from "react";
import { AMCItems } from "../components/AmcItems";
import { DownloadCard } from "../components/DownloadCard";
import { HealthStatus } from "../components/HealthStatus";
import { LocationDashboard } from "../components/LocationDashboard";
import html2pdf from "html2pdf.js";

export const AmcTab = () => {
  const amcItemsRef = useRef();

  const handleDownload = () => {
    const element = amcItemsRef.current ;

    // Define options to adjust spacing, quality, and page size in the PDF
    const options = {
      margin: [0.5, 0.5, 0.5, 0.5], // Top, Right, Bottom, Left
      filename: "AMC_Report.pdf",
      image: { type: "jpeg", quality: 0.98 }, // Quality of the image
      html2canvas: {
        scale: 2, // Increase scale for better quality
        logging: true,
        dpi: 192, // High DPI for better resolution
        letterRendering: true,
        useCORS: true, // Enable CORS to handle cross-origin images
      },
      jsPDF: {
        unit: "in",
        format: "A3", // Use A3 for a wider page
        orientation: "portrait",
        putOnlyUsedFonts: true, // Only include fonts that are actually used
        floatPrecision: 16, // Improve text rendering precision
      },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="bg-slate-50 h-screen px-10 py-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2" >
          <LocationDashboard />
        </div>
        <div>
          <HealthStatus />
        </div>
        <div className="col-span-2 ">
          <DownloadCard onDownload={handleDownload} />
        </div>
      </div>
      <div ref={amcItemsRef}>
        <AMCItems />
      </div>
    </div>
  );
};
