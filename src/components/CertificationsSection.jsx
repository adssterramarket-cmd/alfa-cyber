import React, { useState } from "react";
import { portfolioData } from "../mockData";
import CertificationCard from "./CertificationCard";

const CertificationsSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.certifications.map((cert, index) => {
          if (cert.seeMore) {
            return (
              <button
                key={index}
                onClick={() => setShowMore(true)}
                className="see-more-btn px-4 py-2 rounded-lg"
                style={{ backgroundColor: "#00ffd1", color: "#000", fontWeight: "bold" }}
              >
                See More
              </button>
            );
          }
          return <CertificationCard key={index} cert={cert} />;
        })}
      </div>

      {/* Modal Popup */}
      {showMore && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-4xl w-full relative">
            <button
              onClick={() => setShowMore(false)}
              className="absolute top-3 right-3 text-black font-bold"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">All Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <img
                  key={i}
                  src={`/certifications/sample${i + 1}.jpg`} // public/certifications ফোল্ডারে ছবি রাখতে হবে
                  alt={`Certification ${i + 1}`}
                  className="w-full h-24 object-cover rounded shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
