import React, { useEffect, useState } from 'react';
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const homeStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg?ga=GA1.1.737561315.1725476793&semt=ais_hybrid")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',  // Ensure it covers full viewport height
    paddingTop: '60px'  // Adjust if there's a navbar
  };

  return (
    <>
      <div style={homeStyle} className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-500 dark:text-white">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore your dream property with ESTatex! From luxurious villas to cozy apartments, our platform offers a diverse selection tailored to meet your needs. Whether you’re buying a new home or seeking a smart investment, ESTatex provides a seamless and reliable experience.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
