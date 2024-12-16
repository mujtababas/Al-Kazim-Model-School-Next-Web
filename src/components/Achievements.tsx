"use client";
import React from "react";

export default function StudentSupport() {
  return (
    <div className="bg-[#fef6f3] p-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <button className="border border-gray-700 text-gray-700 px-4 py-1 rounded-md mb-2">
          Our Achievements
        </button>
        <h2 className="text-3xl font-bold text-gray-900">Student Support</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          At Little Learners Academy, we are committed to providing a supportive
          and nurturing environment that meets the unique needs of each student.
          Our student support services include:
        </p>

        {/* Support Services Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Counseling Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start hover:shadow-lg transition">
            <div className="bg-[#ffdab9] p-3 rounded-md mb-4">
              <span className="text-xl">📍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Counseling</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Professional counselors offer guidance and support to students,
              addressing their emotional and social well-being.
            </p>
          </div>

          {/* Learning Support Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start hover:shadow-lg transition">
            <div className="bg-[#ffdab9] p-3 rounded-md mb-4">
              <span className="text-xl">⏸️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Learning Support
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Our educators provide additional assistance to students who may
              require extra support in their academic journey.
            </p>
          </div>

          {/* Parent-Teacher Collaboration Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start hover:shadow-lg transition">
            <div className="bg-[#ffdab9] p-3 rounded-md mb-4">
              <span className="text-xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Parent-Teacher Collaboration
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              We foster a strong partnership with parents to ensure seamless
              communication and mutual support in a child’s development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
