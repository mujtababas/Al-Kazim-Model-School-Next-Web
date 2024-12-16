"use client";
import React, { useState } from "react";

const galleryData = [
  { id: 1, category: "Classrooms", src: "/images/classroom1.jpg" },
  { id: 2, category: "Library", src: "/images/library1.jpg" },
  { id: 3, category: "Science Lab", src: "/images/sciencelab1.jpg" },
  { id: 4, category: "Computer Lab", src: "/images/computerlab1.jpg" },
  { id: 5, category: "Garden and Nature Area", src: "/images/garden1.jpg" },
];

const categories = [
  "All",
  "Classrooms",
  "Library",
  "Science Lab",
  "Computer Lab",
  "Garden and Nature Area",
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <section className="p-6 md:p-12 bg-[#FFF5EE]">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Our Rooms Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Step into our Gallery and immerse yourself in a visual journey of
          cherished moments and unforgettable experiences at our kindergarten
          school.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-white text-black"
            } hover:bg-black hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={item.src}
              alt={item.category}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="mt-8 bg-white p-6 shadow rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-2">Classrooms</h3>
        <p className="text-gray-600">
          Our well-equipped classrooms are designed to provide a nurturing and
          stimulating learning environment. Each classroom is thoughtfully
          arranged to inspire creativity, curiosity, and engagement.
        </p>
      </div>
    </section>
  );
}
