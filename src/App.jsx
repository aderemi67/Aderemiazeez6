import { useState } from 'react';
import Navbar  from './components/Navbar';
import Hero from './components/Hero';
import About  from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop  from './components/scrollToTop';
import './App.css';
import DarkModeToggle  from './components/darkModeToggle';

function App() {

  return (
    <>
    <DarkModeToggle /> {/* floating dark mode button */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop /> {/* floating button*/}
    </>
  );
}

export default App;
