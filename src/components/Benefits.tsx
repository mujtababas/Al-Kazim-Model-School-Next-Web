"use client"
import React from 'react';  

const benefitsData = [  
    {  
        icon: '🎓', // Use appropriate icons here (e.g., Font Awesome or SVG)  
        title: 'Holistic Learning Approach',  
        description:  
            'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',  
    },  
    {  
        icon: '👩‍🏫',  
        title: 'Experienced Educators',  
        description:  
            'Our passionate and qualified teachers create a supportive and stimulating learning environment.',  
    },  
    {  
        icon: '🏡',  
        title: 'Nurturing Environment',  
        description: 'We prioritize safety and provide a warm and caring atmosphere for every child.',  
    },  
    {  
        icon: '🎲',  
        title: 'Play-Based Learning',  
        description:  
            'We believe in the power of play to foster creativity, problem-solving skills, and imagination.',  
    },  
    {  
        icon: '👥',  
        title: 'Individualized Attention',  
        description:  
            'Our small class sizes enable personalized attention, catering to each child’s unique needs.',  
    },  
    {  
        icon: '🤝',  
        title: 'Parent Involvement',  
        description:  
            'We foster a strong parent-school partnership to ensure seamless communication and collaboration.',  
    },  
];  

const Benefits: React.FC = () => {  
    return (  
        <section className="bg-orange-50 px-4 py-12">  
            <div className="text-center mb-8">  
                <h2 className="text-3xl font-extrabold">Our Benefits</h2>  
                <p className="mt-4 text-gray-700">  
                    With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum,  
                    we aim to lay a strong foundation for your child's future.  
                </p>  
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
                {benefitsData.map((benefit, index) => (  
                    <div  
                        key={index}  
                        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"  
                    >  
                        <div className="text-4xl mb-4">{benefit.icon}</div>  
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>  
                        <p className="text-gray-600 text-center">{benefit.description}</p>  
                    </div>  
                ))}  
            </div>  
        </section>  
    );  
};  

export default Benefits;