import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'

function Home() {
  const homeStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg?ga=GA1.1.737561315.1725476793&semt=ais_hybrid")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',  // Make sure it covers the full height of the viewport
    paddingTop: '60px'  // Adjust padding for navbar height if necessary
  };

  return (
    <div style={homeStyle}>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  )
}

export default Home
