import React, {useState, useEffect} from 'react'
import Header from '../Components/Header';
import Loader from '../Components/common/Loader';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import BackToTopButton from '../Components/common/BackToTopButton';
import About from '../Components/About';
import HeroSection from '../Components/HeroSection';
import Projects from '../Components/Projects';

const Home = () => {

  const [pageReady, setPageReady] = useState(false);
  
  const pageIsReady = (status) => {
    setPageReady(status);
  }
  
  useEffect(() => {
    const loadElements = () => {
        const mainPage = document.getElementById("home");
        mainPage.style.display = "block";
        pageIsReady(true);
    }

    setTimeout( () => {
      ( () => loadElements())();
    }, 2000 );
    
  }, [pageReady])

  return (
    <>
      { pageReady ? "" : <Loader /> }

      <main id="home" className="hidden">
          <BackToTopButton />
          <Header />
          <HeroSection />
          <About />
          <Projects />
          <ContactForm />
          <Footer />
      </main>
    </>
  )
}

export default Home