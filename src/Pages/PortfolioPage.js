import React, { useState, useEffect, useRef } from 'react';
import Header from '../Components/Layout/Header';
import Loader from '../Components/common/Loader';
import ContactForm from '../Components/Layout/ContactForm';
import Footer from '../Components/Layout/Footer';
import BackToTopButton from '../Components/common/BackToTopButton';
import About from '../Components/Layout/About';
import HeroSection from '../Components/Layout/HeroSection';
import Projects from '../Components/Layout/Projects';

const Home = () => {
  const [pageReady, setPageReady] = useState(false);
  const homeRef = useRef(null); // Create a ref for the home element

  useEffect(() => {
    // Set a minimum 3 seconds to show the loader
    const timer = setTimeout(() => {    
      // Check if the home element is rendered
      if (homeRef.current) {
        setPageReady(true); // Update pageReady when the element is rendered
      }
    }, 3000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, [homeRef]); // Dependency array can be empty since we only want to check once

  return (
    <>
      {!pageReady && <Loader />}
      <main id="home" ref={homeRef} style={{ display: pageReady ? 'block' : 'none' }}>
        <BackToTopButton />
        <Header />
        <HeroSection />
        <About />
        <Projects />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default Home;