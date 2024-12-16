import React from 'react';  

const About: React.FC = () => {  
    return (  
        <section className="bg-[#F9D0B3] py-12 px-4">  
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start">  
                {/* Left Side Decorative Pattern */}  
                <div className="hidden md:block w-1/3 p-6">  
                    <div className="grid grid-cols-3 gap-2">  
                        <div className="bg-[#F89A1E] h-16 w-16"></div>  
                        <div className="bg-[#F89A1E] h-16 w-16"></div>  
                        <div className="bg-[#F89A1E] h-16 w-16"></div>  
                        <div className="bg-[#F89A1E] h-16 w-16"></div>  
                        <div className="bg-[#F89A1E] h-16 w-16"></div>  
                        <div className="bg-[#F89A1E] h-16 w-16"></div>  
                        <div className="bg-[#F89A1E] h-16 w-16"></div>  
                        <div className="bg-[#F89A1E] h-16 w-16"></div>  
                        <div className="bg-[#F89A1E] h-16 w-16"></div>  
                    </div>  
                </div>  
                {/* Right Side Content */}  
                <div className="flex-1 p-6">  
                    <h2 className="text-3xl font-extrabold mb-4">Welcome to Little Learners Academy</h2>  
                    <h3 className="text-xl font-semibold mb-2">Overview</h3>  
                    <p className="text-gray-700">  
                        A Al Kazim Model school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.  
                    </p>  
                </div>  
            </div>  
        </section>  
    );  
};  

export default About;