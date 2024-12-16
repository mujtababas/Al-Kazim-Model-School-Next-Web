"use client"
import React, { useState } from 'react';  

const faqs = [  
    {  
        question: 'What are the school hours at Little Learners Academy?',  
        answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.',  
    },  
    {  
        question: 'Is there a uniform policy for students?',  
        answer: 'Yes, we have a uniform policy to promote a sense of belonging and discipline among students.',  
    },  
    {  
        question: 'What extracurricular activities are available for students?',  
        answer: 'We offer a range of extracurricular activities including art, music, sports, and science clubs.',  
    },  
    {  
        question: 'How do you handle food allergies and dietary restrictions?',  
        answer: 'We take food allergies and dietary restrictions very seriously. We ensure to accommodate special dietary needs through careful meal planning.',  
    },  
    {  
        question: 'What is the teacher-to-student ratio at Little Learners Academy?',  
        answer: 'Our teacher-to-student ratio is 1:10, ensuring personalized attention for each child.',  
    },  
    {  
        question: 'How do you handle discipline and behavior management?',  
        answer: 'We have a structured behavior management policy that focuses on positive reinforcement and clear communication.',  
    },  
    {  
        question: 'How do I apply for admission to Little Learners Academy?',  
        answer: 'To apply for admission, please fill out our online application form available on our website.',  
    },  
];  

const FAQ: React.FC = () => {  
    const [openIndex, setOpenIndex] = useState<number | null>(null);  

    const toggleFAQ = (index: number) => {  
        setOpenIndex(openIndex === index ? null : index);  
    };  

    return (  
        <section className="bg-gray-100 px-4 py-12">  
            <div className="text-center mb-8">  
                <h2 className="text-3xl font-extrabold">Frequently Asked Questions</h2>  
                <p className="mt-4 text-gray-700">  
                    Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.  
                </p>  
            </div>  
            <div className="max-w-3xl mx-auto">  
                {faqs.map((faq, index) => (  
                    <div key={index} className="border-b last:border-b-0">  
                        <button  
                            className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold focus:outline-none"  
                            onClick={() => toggleFAQ(index)}  
                        >  
                            <span>{faq.question}</span>  
                            <span className="text-gray-500">{openIndex === index ? '−' : '+'}</span>  
                        </button>  
                        {openIndex === index && (  
                            <p className="pb-4 ml-4 text-gray-600">{faq.answer}</p>  
                        )}  
                    </div>  
                ))}  
            </div>  
        </section>  
    );  
};  

export default FAQ;