import React from 'react';  

const teamMembers = [  
    {  
        name: "Ms. Sarah Anderson",  
        qualification: "Bachelor's Degree in Early Childhood Education",  
        description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",  
    },  
    {  
        name: "Mr. David Roberts",  
        qualification: "Master's Degree in Elementary Education",  
        description: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",  
    },  
    {  
        name: "Ms. Emily Hernandez",  
        qualification: "Diploma in Child Psychology",  
        description: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",  
    },  
    {  
        name: "Mr. Michael Turner",  
        qualification: "Bachelor's Degree in Physical Education",  
        description: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",  
    },  
    {  
        name: "Ms. Jessica Lee",  
        qualification: "Master's Degree in Special Education",  
        description: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",  
    },  
    {  
        name: "Mr. William Parker",  
        qualification: "Bachelor's Degree in Fine Arts",  
        description: "Mr. William's background in the arts brings creativity and imagination to his classroom. Through projects and activities, he nurtures the artistic expression and self-confidence of his students.",  
    },  
];  

const TeamMembers: React.FC = () => {  
    return (  
        <section className="py-12 px-4 bg-[#F9D0B3]">  
            <div className="max-w-6xl mx-auto text-center">  
                <h2 className="text-3xl font-bold mb-6">Our Team Members</h2>  
                <p className="mb-8">  
                    At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.  
                </p>  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
                    {teamMembers.map((member, index) => (  
                        <div key={index} className="border border-gray-300 rounded-lg p-6 bg-white shadow hover:shadow-lg transition-shadow">  
                            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>  
                            <p className="font-medium mb-4">{member.qualification}</p>  
                            <p>{member.description}</p>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </section>  
    );  
};  

export default TeamMembers;