import React from "react";
import { portfolioData } from "../mockData";
import CertificationCard from "./CertificationCard";

const CertificationsSection = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
