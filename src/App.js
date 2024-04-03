
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import Services from './components/services/Services';
import Skills from './components/skill/Skills';
import Projects from './components/projects/Projects';
import Timeline from './components/timeline/Timeline';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';



function App() {

  const { fetchApiData } = useContext(AppContext); 

  useEffect(() => { 
    fetchApiData();
  }, []);


  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Timeline />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
