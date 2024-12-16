"use client";
import React from "react";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { FiArrowRight } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import AdmissionStep from "@/components/AdmissionStep";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";

export default function AdmissionPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#fef6f3] min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="rounded-lg shadow-lg bg-white p-8 md:flex md:items-center md:justify-between">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <FaGraduationCap size={32} className="text-[#ff6f61]" />
                <span className="font-semibold text-lg">Welcome to Admissions</span>
              </div>
              <button className="flex items-center space-x-2 border border-gray-700 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300">
                <span>Admission</span>
                <FiArrowRight size={20} />
              </button>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Join Our Family of Young Learners
              </h1>
            </div>

            {/* Right Content */}
            <div className="mt-6 md:mt-0 md:w-1/2 text-gray-700 leading-relaxed">
              <p>
                At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school.
              </p>
            </div>
          </div>

          {/* Admission Process Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center space-y-4"
              >
                <div className="text-4xl font-bold text-[#ff6f61]">{step.number}</div>
                <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Fee Structure Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Fee Structure</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-[#ffe8e4]">
                    <th className="border border-gray-200 px-4 py-2 text-left">Program</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Age Group</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Annual Tuition</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Registration Fee</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Activity Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((item, index) => (
                    <tr key={index} className="text-gray-700">
                      <td className="border border-gray-200 px-4 py-2">{item.program}</td>
                      <td className="border border-gray-200 px-4 py-2">{item.ageGroup}</td>
                      <td className="border border-gray-200 px-4 py-2">{item.annualTuition}</td>
                      <td className="border border-gray-200 px-4 py-2">{item.registrationFee}</td>
                      <td className="border border-gray-200 px-4 py-2">{item.activityFee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Additional Services Section */}
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {additionalServices.map((service, index) => (
                  <div key={index} className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-700">
                      {service.name}
                    </h4>
                    <p className="text-gray-600 mt-2">{service.price}</p>
                  </div>
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const admissionSteps = [
  {
    number: "01",
    title: "Inquiry",
    description:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
  },
  {
    number: "02",
    title: "School Tour",
    description:
      "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
  },
  {
    number: "03",
    title: "Application Form",
    description:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    number: "04",
    title: "Parent Interview",
    description:
      "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
  },
  {
    number: "05",
    title: "Student Assessment",
    description:
      "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
  },
  {
    number: "06",
    title: "Acceptance",
    description:
      "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
  },
];

const feeStructure = [
  {
    program: "Nursery",
    ageGroup: "2 - 3 Years",
    annualTuition: "$1,686",
    registrationFee: "$162",
    activityFee: "$12",
  },
  {
    program: "Pre - Kindergarten",
    ageGroup: "3 - 4 Years",
    annualTuition: "$2,686",
    registrationFee: "$220",
    activityFee: "$16",
  },
  {
    program: "Kindergarten",
    ageGroup: "4 - 5 Years",
    annualTuition: "$3,686",
    registrationFee: "$340",
    activityFee: "$20",
  },
];

const additionalServices = [
  {
    name: "Before and After-School Care",
    price: "$120 / per month",
  },
  {
    name: "Language Immersion Program",
    price: "$60 / per semester",
  },
  {
    name: "Transportation (optional)",
    price: "$80 / per month",
  },
];
