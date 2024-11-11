import React, { useState } from 'react';
import banner from "/src/assets/Banner.png";

function Banner() {
  const [name, setName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleSave = () => {
    if (name) {
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 3000); // Welcome message disappears after 3 seconds
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row dark:bg-slate-500 dark:text-white">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 dark:bg-slate-500 dark:text-white">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome and discover something {" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Whether you're looking to find your dream home or secure a profitable investment, we're here to guide you through every step of the process. Explore our listings and discover the perfect property tailored to your needs.
            </p>

            {/* Name Input Box with Icon */}
            <div className="flex items-center border-2 border-black shadow-md rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 opacity-70 mr-2"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="flex-grow p-2 border-0 outline-none"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Button and Welcome Message */}
            <div className="flex items-center space-x-4 mt-3">
              <button onClick={handleSave} className="btn btn-success">Save</button>
              {showWelcome && (
                <span className="text-black text-2xl font-bold">
                  Welcome, {name}!
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img
            src={banner}
            className="md:w-[400px] md:h-[340px] ml-24 mt-28 border-4 border-transparent border-t-transparent border-l-transparent border-b-transparent bg-clip-padding bg-gradient-to-r from-black via-gray-600 to-black shadow-lg shadow-black"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
