import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
    <div className='whole'>
      <Navbar/>

      <main>
        <section id="home">
          <Home/>
        </section>

        <section id="about">
          <About/>
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;