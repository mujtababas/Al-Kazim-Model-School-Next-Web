'use client';
import React from 'react';
import Image from 'next/image';

const academicsData = [
  {
    title: 'Language Arts',
    description: 'Reading, writing, storytelling, and communication skills.',
    image: '/images/language-arts.jpg',
  },
  {
    title: 'Mathematics',
    description: 'Number sense, basic operations, problem-solving, and logic.',
    image: '/images/mathematics.jpg',
  },
  {
    title: 'Science',
    description: 'Exploring the natural world through hands-on experiments and investigations.',
    image: '/images/science.jpg',
  },
  {
    title: 'Social Studies',
    description: 'Cultivating an understanding of diverse cultures and communities.',
    image: '/images/social-studies.jpg',
  },
  {
    title: 'Arts and Crafts',
    description: 'Encouraging creativity through various art forms and crafts.',
    image: '/images/arts-and-crafts.jpg',
  },
  {
    title: 'Physical Education',
    description: 'Promoting physical fitness, coordination, and teamwork.',
    image: '/images/physical-education.jpg',
  },
];

const AcademicsSection = () => {
  return (
    <section className="bg-[#FDF8F5] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h3 className="text-sm text-gray-600 uppercase font-medium">Our Features</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
          What Students Learn
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Little Learners Academy, we strive to cultivate a love for learning and equip children
          with essential skills for their future success.
        </p>
      </div>

      {/* Grid Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {academicsData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-48 w-full rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            {/* Content */}
            <h3 className="mt-4 text-xl font-bold text-gray-800">{item.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicsSection;
