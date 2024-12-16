import React from 'react';  
import Academics from '@/components/Academics';
import Navbar from '@/components/Navbar';  
import SpecialFeatures from '@/components/SpecialFeatures';
import Features from '@/components/Features';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

const AcademicsPage: React.FC = () => {  
    return (  
        <div>  
            <Navbar />
            <Academics />  
            <SpecialFeatures />
            <Features />
            <GallerySection />
            <Footer />
              
        </div>  
    );  
};  

export default AcademicsPage;