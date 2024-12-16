import React from 'react';  

const Footer: React.FC = () => {  
    return (  
        <footer className="bg-pink-50 py-8 px-4">  
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">  
                <div className="mb-6 md:mb-0">  
                    <h2 className="text-2xl font-bold">Al Kazim Model School</h2>  
                    <p className="text-gray-600">  
                        We believe in the power of play to foster creativity, problem-solving skills, and imagination.  
                    </p>  
                    <div className="flex items-center mt-2">  
                        <a href="mailto:hello@littlelearners.com" className="flex items-center mr-6 text-gray-700">  
                            <span className="material-icons">mail : </span>  akms@gmail.com  
                        </a>  
                        <a href="tel:+919181323209" className="flex items-center mr-6 text-gray-700">  
                            <span className="material-icons">phone : </span>   +92 335 7573433  
                        </a>  
                    </div>  
                    <p className="text-gray-700"><span className="material-icons">location_on</span> Somewhere in the World</p>  
                </div>  
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">  
                    <div>  
                        <h3 className="font-semibold mb-2">Home</h3>  
                        <ul>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Features</a></li>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Our Testimonials</a></li>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">FAQ</a></li>  
                        </ul>  
                    </div>  
                    <div>  
                        <h3 className="font-semibold mb-2">About Us</h3>  
                        <ul>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Our Mission</a></li>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Our Vision</a></li>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Awards and Recognitions</a></li>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">History</a></li>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Teachers</a></li>  
                        </ul>  
                    </div>  
                    <div>  
                        <h3 className="font-semibold mb-2">Academics</h3>  
                        <ul>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Special Features</a></li>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Gallery</a></li>  
                        </ul>  
                    </div>  
                    <div>  
                        <h3 className="font-semibold mb-2">Contact Us</h3>  
                        <ul>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Information</a></li>  
                            <li><a href="#" className="text-gray-600 hover:text-blue-500">Map & Direction</a></li>  
                        </ul>  
                    </div>  
                </div>  
            </div>  
            <div className="mt-8 border-t border-gray-300 pt-4 text-center">  
                <p className="text-gray-600">Terms of Service | Privacy Policy | Cookie Policy</p>  
                <p className="text-gray-600 mt-2">Copyright © [2023] Little Learners Academy. All rights reserved.</p>  
                <div className="flex justify-center mt-4">  
                    <span className="text-gray-600">Website created by ❤️ <a href="https://next-js-portfolio-wine-mu.vercel.app/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Syed Mujtaba Abbas</a></span>  
                </div>  
                <div className="flex justify-center mt-4">  
                    <a href="https://www.facebook.com/groups/122477177807047" className="mx-2 text-gray-500 hover:text-blue-500">Facebook</a>
                </div>  
            </div>  
        </footer>  
    );  
};  

export default Footer;