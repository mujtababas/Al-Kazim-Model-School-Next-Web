import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import PageNavigation from '@/components/PageNavigation'
import Footer from '@/components/Footer'
function Home() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <Benefits />
      <Testimonials />
      <FAQ />
      <PageNavigation />
      <Footer />
    </div>
  )
}

export default Home
