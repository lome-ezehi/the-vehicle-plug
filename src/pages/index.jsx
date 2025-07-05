import React from 'react'
import Navbar from '../components/Navbar'
import landingAudi from '../assets/images/audi-landing.png'
import amg from '../assets/images/amgc63.png'

export default function Home() {
    return (
        <>
            <Navbar />
            {/* Main */}
                <div className="d-flex flex-row align-items-center justify-content-around">
                    <h1 className="display-5 fw-bold text-center">Your Number <br /> 1 Car Plug</h1>
                    <img
                        src={landingAudi}
                        alt="Audi car on display"
                        className="img-fluid"
                        style={{ width: '800px', height: 'auto' }}
                    />
                </div>
        </>
    )   
}

