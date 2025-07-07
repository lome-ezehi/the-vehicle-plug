import React from 'react'
import Navbar from '../components/Navbar'
import FeaturedCars from '../components/FeaturedCars';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <FeaturedCars />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

