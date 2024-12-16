import React from 'react';  

const Awards: React.FC = () => {  
    return (  
        <section className="bg-[#F9D0B3] py-12 px-4">  
            <div className="max-w-6xl mx-auto text-center">  
                <h2 className="text-3xl font-bold mb-4">Our Awards and Recognitions</h2>  
                <p className="mb-8">  
                    Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team’s relentless efforts in creating an exceptional learning environment for our students.  
                </p>  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
                    {/* Award Card 1 */}  
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:transform hover:scale-105">  
                        <div className="flex items-center mb-4">  
                            <span className="bg-orange-500 text-white rounded-full p-2 mr-2">  
                                ⭐  
                            </span>  
                            <h3 className="text-xl font-semibold">Outstanding Early Childhood Education Award</h3>  
                        </div>  
                        <p>  
                            Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy’s commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.  
                        </p>  
                    </div>  

                    {/* Award Card 2 */}  
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:transform hover:scale-105">  
                        <div className="flex items-center mb-4">  
                            <span className="bg-orange-500 text-white rounded-full p-2 mr-2">  
                                📈  
                            </span>  
                            <h3 className="text-xl font-semibold">Innovative STEAM Education Award</h3>  
                        </div>  
                        <p>  
                            Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.  
                        </p>  
                    </div>  

                    {/* Award Card 3 */}  
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:transform hover:scale-105">  
                        <div className="flex items-center mb-4">  
                            <span className="bg-orange-500 text-white rounded-full p-2 mr-2">  
                                🌱  
                            </span>  
                            <h3 className="text-xl font-semibold">Environmental Stewardship Award</h3>  
                        </div>  
                        <p>  
                            Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.  
                        </p>  
                    </div>  
                </div>  
                <button className="mt-6 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">  
                    8 More Awards  
                </button>  
            </div>  
        </section>  
    );  
};  

export default Awards;