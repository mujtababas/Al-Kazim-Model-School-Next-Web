import React from 'react';  

const MissionVision: React.FC = () => {  
    return (  
        <section className="py-12 px-4 bg-[#F9D0B3]">  
            <div className="max-w-6xl mx-auto text-center">  
                <h2 className="text-3xl font-extrabold mb-4">Our Mission & Visions</h2>  
                <p className="mb-8">We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.</p>  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
                    {/* Mission Card */}  
                    <div className="bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105">  
                        <h3 className="text-xl font-semibold mb-2">Mission</h3>  
                        <p className="text-gray-700">  
                            At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.  
                        </p>  
                    </div>  
                    {/* Vision Card */}  
                    <div className="bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105">  
                        <h3 className="text-xl font-semibold mb-2">Vision</h3>  
                        <p className="text-gray-700">  
                            Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.  
                        </p>  
                    </div>  
                </div>  
            </div>  
        </section>  
    );  
};  

export default MissionVision;