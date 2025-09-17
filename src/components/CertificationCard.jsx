import React, { useState } from "react";

const CertificationCard = ({ cert }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-lg font-semibold">{cert.name}</h3>
      <p className="text-sm text-gray-600">{cert.issuer}</p>
      <p className="text-sm text-gray-500">{cert.year}</p>
      <p className="text-xs text-gray-400">ID: {cert.credentialId}</p>

      <button
        onClick={() => setOpen(true)}
        className="mt-2 px-3 py-1 bg-teal-400 text-white text-sm rounded hover:bg-blue-700"
      >
        See More
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-lg font-bold mb-2">{cert.name}</h2>
            <img
              src={cert.image}
              alt={cert.name}
              className="w-64 h-auto rounded border"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;
