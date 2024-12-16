import React from 'react';  

const Academics: React.FC = () => {  
    return (  
        <section className="py-12 px-4 bg-[#F9D0B3]">  
            <div className="max-w-6xl mx-auto text-center">  
                <h2 className="text-4xl font-bold mb-4">Nurturing Young Minds for Success</h2>  
                <p className="text-lg mb-8">  
                    Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.  
                </p>  
            </div>  

            <div className="flex justify-center">  
                {/* Decorative graphic can be added here */}  
                <div className="hidden md:block w-1/2">  
                    <div className="grid grid-cols-3 gap-4">  
                        <div className="bg-black h-10"></div>  
                        <div className="bg-[#F9D0B3] h-10"></div>  
                        <div className="bg-black h-10"></div>  
                        <div className="bg-[#F9D0B3] h-10"></div>  
                        <div className="bg-black h-10"></div>  
                        <div className="bg-[#F9D0B3] h-10"></div>  
                    </div>  
                </div>  
            </div>  
        </section>  
    );  
};  

export default Academics;