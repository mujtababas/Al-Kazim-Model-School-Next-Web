"use client"
import React from 'react';  
import { motion } from 'framer-motion';  
import Image from 'next/image';

const Hero: React.FC = () => {  
    return (  
        <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 bg-orange-200">  
            <div className="max-w-lg">  
                <motion.h1  
                    className="text-3xl md:text-4xl font-bold mb-4"  
                    initial={{ y: -30, opacity: 0 }}  
                    animate={{ y: 0, opacity: 1 }}  
                    transition={{ duration: 0.5 }}  
                >  
                    Welcome to Little Learners Academy  
                </motion.h1>  
                <motion.p  
                    className="text-lg mb-6"  
                    initial={{ y: -30, opacity: 0 }}  
                    animate={{ y: 0, opacity: 1 }}  
                    transition={{ duration: 0.6 }}  
                >  
                    Where Young Minds Blossom and <span className="font-bold">Dreams Take Flight.</span>  
                </motion.p>  
                <p className="text-gray-700 mb-4">  
                    Our kindergarten school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!  
                </p>  
                <div className="flex flex-col space-y-2">  
                    <StatBox number="7000+" label="Students Passed Out" />  
                    <StatBox number="37" label="Awards & Recognition" />  
                    <StatBox number="15" label="Experience Educators" />  
                </div>  
            </div>  
            <div className="hidden md:block">  
                <img  
                    src="/school.jpg" // Replace with your image path  
                    alt="Kids"  
                    className="w-80 md:w-96 rounded-lg shadow-lg"  
                />  
            </div>  
        </section>  
    );  
};  

const StatBox: React.FC<{ number: string; label: string }> = ({ number, label }) => {  
    return (  
        <div className="flex items-center">  
            <span className="text-2xl md:text-3xl font-semibold">{number}</span>  
            <span className="ml-2 text-lg text-gray-600">{label}</span>  
        </div>  
    );  
};  

export default Hero;