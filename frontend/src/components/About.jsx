import React from "react";
import Navbar from '../components/Navbar'; // Make sure to import Navbar component

function About() {
  return (
    <>
      <Navbar /> {/* Include Navbar */}

      {/* Background Image */}
      <div className="relative w-full h-screen bg-cover bg-center"
           style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg?ga=GA1.1.737561315.1725476793&semt=ais_hybrid')" }}>
        
        <div className="relative z-10 p-6 text-black">
          {/* Adjusted margin-top to push the content down */}
          <div className="mt-20">
            <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
            <p className="text-lg mb-6 text-center">We are a company committed to providing excellent services and support. Our mission is to offer high-quality solutions to our customers while maintaining strong relationships and trust.</p>

            {/* Description and Bullet Points */}
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6">
                Our website is designed to provide you with an easy-to-use platform for accessing a variety of services. We prioritize user experience and strive to offer the best in customer support.
              </p>
              
              <ul className="list-disc list-inside text-lg">
                <li>High-quality, reliable services</li>
                <li>24/7 customer support</li>
                <li>Secure and easy-to-use platform</li>
                <li>Constantly evolving to meet your needs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
