import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

const ManyNavigation = () => {
  return (
    <div>
        <Navbar/>

        <div id='home'>
          <Home/>
        </div>
        <div id='about'>
          <About/>
        </div>

        <div id='skills'>
          <Skills/>
        </div>

        <div id='projects'>
          <Project/>
        </div>

        <div id='contact'>
          <Contact/>
        </div>
    </div>
  )
}
export default ManyNavigation;
