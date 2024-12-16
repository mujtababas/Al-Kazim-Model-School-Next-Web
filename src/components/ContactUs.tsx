import React from 'react';  

const ContactUs: React.FC = () => {  
  return (  
    <section className="bg-white p-6 rounded-lg shadow-lg">  
      <div className="flex flex-col lg:flex-row justify-between items-start">  
        <div className="lg:w-1/2">  
          <h2 className="text-2xl font-bold">Feel Free To Connect With Us</h2>  
          <p className="mt-2 text-gray-600">  
            We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods.  
          </p>  
        </div>  
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex flex-col space-y-4">  
          <div className="flex items-center">  
            <span className="mr-2">  
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 220a17.688 17.688 0 01-6.924 0C8.46 217.035 4 212.363 4 198.744c0-7.939 3.108-13.803 7.526-18.597C7 167.514 4 161.304 4 154c0-12.688 12-21 24-21s24 8.312 24 21c0 7.304-3 13.514-7.526 26.147C20.892 184.941 24 190.805 24 198.744c0 13.619-4.46 18.291-5.076 20H16z" />  
              </svg>  
            </span>  
            <a href="mailto:hello@littlelearners.com" className="text-gray-800 hover:underline">  
              hello@littlelearners.com  
            </a>  
          </div>  
          <div className="flex items-center">  
            <span className="mr-2">  
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 6.943 8.924 3 12 3s8.268 3.943 9.542 9c-1.274 5.057-6.466 9-9.542 9S3.732 17.057 2.458 12z" />  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h6m-3 3v-6" />  
              </svg>  
            </span>  
            <span className="text-gray-800">+91 91813 23 2309</span>  
          </div>  
          <div className="flex items-center">  
            <span className="mr-2">  
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13h1m4 0h1m4 0h1m4 0h1m1 0h1m1 0h1m1 0h1M3 6h12m10 0H12M3 18h18M2 15v1m0 4h20v-1m0-7h1M2 4v1M5 4h15m1 0h1" />  
              </svg>  
            </span>  
            <span className="text-gray-800">Somewhere in the World</span>  
          </div>  
          <div className="flex items-center">  
            <span className="mr-2">  
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h10M3 12h10m-10 5h10" />  
              </svg>  
            </span>  
            <span className="text-gray-800">Office Hours - 9 am - 6 pm</span>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default ContactUs;