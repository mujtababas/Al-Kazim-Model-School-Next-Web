import React from 'react';  

const features = [  
    {  
        title: "Thematic Learning",  
        description: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",  
        icon: "📚",  // Example icon, consider using SVG or images if needed  
    },  
    {  
        title: "STEAM Education",  
        description: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",  
        icon: "🔬",  
    },  
    {  
        title: "Language Immersion",  
        description: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",  
        icon: "🌍",  
    },  
    {  
        title: "Art and Creativity",  
        description: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",  
        icon: "🎨",  
    },  
    {  
        title: "Outdoor Education",  
        description: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",  
        icon: "🏞️",  
    },  
    {  
        title: "Play-Based Learning",  
        description: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",  
        icon: "🧸",  
    },  
];  

const SpecialFeatures: React.FC = () => {  
    return (  
        <section className="py-12 px-4 bg-[#F0E3D1]">  
            <div className="max-w-6xl mx-auto text-center">  
                <h2 className="text-4xl font-bold mb-4">Our Special Features</h2>  
                <p className="text-lg mb-8">  
                    Our kindergarten school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!  
                </p>  
                {/* Features Grid */}  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
                    {features.map((feature, index) => (  
                        <div key={index} className="bg-white p-6 rounded-lg shadow transition-transform hover:scale-105">  
                            <div className="text-4xl mb-4">{feature.icon}</div>  
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>  
                            <p className="text-gray-700">{feature.description}</p>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </section>  
    );  
};  

export default SpecialFeatures;