import Header from '../Components/Layout/Header';
import ContactForm from '../Components/Layout/ContactForm';
import Footer from '../Components/Layout/Footer';
import BackToTopButton from '../Components/common/BackToTopButton';
import About from '../Components/Layout/About';
import HeroSection from '../Components/Layout/HeroSection';
import Projects from '../Components/Layout/Projects';
import { useRef } from 'react';

const PortfolioPage = () => {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <main id="home">
        <BackToTopButton />
        <Header aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
        <HeroSection />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <ContactForm ref={contactRef} />
        <Footer />
      </main>
    </>
  );
};

export default PortfolioPage;