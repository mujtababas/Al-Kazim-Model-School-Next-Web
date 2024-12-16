import React from 'react';  

const testimonialsData = [  
    {  
        name: 'Jennifer B',  
        text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",  
        rating: 5,  
        image: 'https://via.placeholder.com/50', // Placeholder image  
    },  
    {  
        name: 'David K',  
        text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",  
        rating: 5,  
        image: 'https://via.placeholder.com/50',  
    },  
    {  
        name: 'Emily L',  
        text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",  
        rating: 5,  
        image: 'https://via.placeholder.com/50',  
    },  
];  

const Testimonials: React.FC = () => {  
    return (  
        <section className="bg-pink-50 px-4 py-12">  
            <div className="text-center mb-8">  
                <h2 className="text-3xl font-extrabold">Our Testimonials</h2>  
                <p className="mt-4 text-gray-700">  
                    Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.  
                </p>  
            </div>  
            <div className="flex overflow-x-auto space-x-4">  
                {testimonialsData.map((testimonial, index) => (  
                    <div  
                        key={index}  
                        className="bg-white rounded-lg shadow-md p-6 flex-shrink-0 w-80"  
                    >  
                        <div className="flex items-center mb-4">  
                            <img  
                                src={testimonial.image}  
                                alt={testimonial.name}  
                                className="rounded-full mr-3"  
                                width={50}  
                                height={50}  
                            />  
                            <div>  
                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>  
                                <div className="flex">  
                                    {[...Array(testimonial.rating)].map((_, index) => (  
                                        <span key={index} className="text-yellow-500">★</span>  
                                    ))}  
                                </div>  
                            </div>  
                        </div>  
                        <p className="text-gray-600">{testimonial.text}</p>  
                    </div>  
                ))}  
            </div>  
        </section>  
    );  
};  

export default Testimonials;