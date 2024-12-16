"use client";
import { useEffect, useState } from "react";

interface AdmissionStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

export default function AdmissionStep({
  stepNumber,
  title,
  description,
}: AdmissionStepProps) {
  const [clientRendered, setClientRendered] = useState(false);

  // Ensure code runs only on the client
  useEffect(() => {
    setClientRendered(true);
  }, []);

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg">
      {/* Step Number */}
      <div
        className={`absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg`}
      >
        {clientRendered ? (stepNumber < 10 ? `0${stepNumber}` : stepNumber) : ""}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mt-6">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
