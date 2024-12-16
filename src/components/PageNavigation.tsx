"use client"
import React from 'react';  

const pages = [  
    {  
        title: 'About Us',  
        description: 'Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.',  
        link: '/about',  
    },  
    {  
        title: 'Academics',  
        description: 'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.',  
        link: '/academics',  
    },  
    {  
        title: 'Student Life',  
        description: 'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.',  
        link: '/student-life',  
    },  
    {  
        title: 'Admissions',  
        description: 'Learn about our Enrollment Process and how to secure your child’s place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.',  
        link: '/admissions',  
    },  
];  

const PageNavigation: React.FC = () => {  
    return (  
        <section className="bg-white py-12 px-4">  
            <div className="text-center mb-8">  
                <h2 className="text-3xl font-extrabold">Navigate through our Pages</h2>  
                <p className="mt-4 text-gray-600">  
                    Your gateway to discovering a wealth of valuable information about our kindergarten school. Feel free to explore and learn more about the enriching experiences that await your child.  
                </p>  
            </div>  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">  
                {pages.map((page, index) => (  
                    <div key={index} className="bg-pink-50 p-6 rounded-lg shadow-md border border-gray-300 transition-transform transform hover:scale-105">  
                        <h3 className="text-xl font-semibold mb-2">{page.title}</h3>  
                        <p className="text-gray-700 mb-4">{page.description}</p>  
                        <a href={page.link} className="inline-flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">  
                            Learn More →  
                        </a>  
                    </div>  
                ))}  
            </div>  
        </section>  
    );  
};  

export default PageNavigation;