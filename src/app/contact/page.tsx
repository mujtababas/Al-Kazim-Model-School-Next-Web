import React from 'react'
import ContactUs from '@/components/ContactUs'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm';  
import Footer from '@/components/Footer'

function Contact() {
  return (
    <div>
        <Navbar />
      <ContactUs />
      <ContactForm />
      <Footer />
      
    </div>
  )
}

export default Contact
