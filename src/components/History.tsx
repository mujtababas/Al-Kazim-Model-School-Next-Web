import React from 'react';  

const History: React.FC = () => {  
    return (  
        <section className="py-12 px-4 bg-white">  
            <div className="max-w-6xl mx-auto text-center">  
                <h2 className="text-3xl font-bold mb-4">Our History</h2>  
                <p className="mb-8">  
                    Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment!  
                </p>  
                
                <div className="relative">  
                    {/* Timeline */}  
                    <div className="border-l-2 border-gray-300">  
                        {/* Individual Events */}  
                        {[  
                            {  
                                year: "2023",  
                                title: "Resilience and Future Horizons",  
                                description: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",  
                            },  
                            {  
                                year: "2017",  
                                title: "Innovation and Technology",  
                                description: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",  
                            },  
                            {  
                                year: "2012",  
                                title: "Expansion and Recognition",  
                                description: "These years marked a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",  
                            },  
                            {  
                                year: "2005",  
                                title: "Inception and Growth",  
                                description: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."  
                            },  
                        ].map((event, index) => (  
                            <div key={index} className="mb-10 flex flex-col items-start">  
                                <div className="flex items-center mb-2">  
                                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">  
                                        {event.year}  
                                    </div>  
                                    <h3 className="font-semibold text-lg">{event.title}</h3>  
                                </div>  
                                <p className="text-gray-700">{event.description}</p>  
                                <div className="absolute w-2 h-2 bg-orange-500 rounded-full left-3 -top-1"></div>  
                            </div>  
                        ))}  
                    </div>  
                </div>  
            </div>  
        </section>  
    );  
};  

export default History;