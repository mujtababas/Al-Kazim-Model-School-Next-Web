"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Achievements from "@/components/Achievements"
import Footer from "@/components/Footer";

export default function StudentLife() {
  return (
    <>
      <Navbar />
      <div className="bg-[#fef6f3] min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="rounded-lg shadow-lg bg-white p-8 md:flex md:items-center">
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-4 gap-1 mb-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 w-4 ${
                      i % 2 === 0 ? "bg-[#ff6f61]" : "bg-black"
                    }`}
                  ></div>
                ))}
              </div>
              <button className="bg-white border border-gray-700 text-gray-700 px-3 py-1 rounded-md mb-2">
                Enriching Student Life
              </button>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Embracing Learning with Discovery and Joy
              </h1>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2 text-gray-700 leading-relaxed">
              <p>
                Welcome to our Student Life page, where the magic of childhood
                comes alive through the enriching experiences and adventures
                that our students embark on each day. At our kindergarten
                school, we believe that learning goes beyond textbooks, and we
                strive to create a holistic and engaging environment that
                nurtures every aspect of a child’s development.
              </p>
            </div>
          </div>

          {/* Events & Celebrations Section */}
          <div className="mt-12">
            <div className="text-center mb-10">
              <button className="border border-gray-700 text-gray-700 px-4 py-1 rounded-md">
                Our Features
              </button>
              <h2 className="text-3xl font-bold mt-2">Events & Celebrations</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                At Little Learners Academy, we celebrate every milestone and create
                cherished memories for our students. Throughout the year, we host
                a variety of events and celebrations that bring the entire school
                community together. Some of our memorable events include:
              </p>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "/images/sports-day.jpg",
                  title: "Annual Sports Day",
                  description:
                    "A day filled with friendly competition, team spirit, and sportsmanship.",
                },
                {
                  image: "/images/cultural-festivals.jpg",
                  title: "Cultural Festivals",
                  description:
                    "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
                },
                {
                  image: "/images/art-exhibition.jpg",
                  title: "Art Exhibitions",
                  description:
                    "Showcasing our students' artistic talents through exhibitions and displays.",
                },
                {
                  image: "/images/science-fair.jpg",
                  title: "Science Fair",
                  description:
                    "A platform for budding scientists to present their innovative projects and experiments.",
                },
                {
                  image: "/images/international-day.jpg",
                  title: "International Day",
                  description:
                    "A vibrant celebration of our diverse community, embracing cultures from around the world.",
                },
                {
                  image: "/images/graduation.jpg",
                  title: "Graduation Ceremony",
                  description:
                    "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Achievements />
      <Footer />
    </>
  );
}
