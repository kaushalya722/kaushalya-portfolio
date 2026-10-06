import React from 'react'
import '../style/About.css'
import me from '../assets/me.jpg'
import { IoIosCheckmarkCircle } from "react-icons/io";

function About() {
  return (
    <>
    <div className="section about" id='about' data-section>
      <div className="section-title">
        <p>Get To Know Me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
         <div className="me-card">
          <img src={me}></img>
        </div>
        <div className='details-card'>
          <h3>Software Engineering Student</h3>
 
          <p>
            I'm a Software Engineering undergraduate at ICBT Colombo,
            currently developing my skills in web and mobile application
            development.
          </p>

          <p>
            I enjoy learning new technologies and applying what I learn by
            building practical projects. I'm particularly interested in
            full-stack application development.
          </p>

          <p>
            My current learning journey includes React.js, Node.js,
            Express.js, MongoDB, Flutter and other modern development tools.
          </p>
          <p className='lan-topic'>Languages</p>
          <div className='language'>

            <div className='sinhala'>
             <p className='sub'>Sinhala</p>
             <p className='sub-1'>Native</p>
            </div>

            <div className='english'>
              <p className='sub'>English</p>
              <p className='sub-1'>Professional working proficiency</p>
            </div>
          </div>
        </div>

      </div>
      <div className='soft-skills'>
      
        <div className='about-card-1'>
          <p className='lan-topic'>Soft Skills</p>
          <div className='column'>
          <div className='column-one'>
              <div className='one'><span><IoIosCheckmarkCircle /></span> Teamwork</div>
                <div className='one'><span><IoIosCheckmarkCircle /></span> Communication</div>
                <div className='one'><span><IoIosCheckmarkCircle /></span> Time Management</div>
                </div>
                <div className='column-two'>
                  <div className='one'><span><IoIosCheckmarkCircle /></span> Problem Solving</div>
                  <div className='one'><span><IoIosCheckmarkCircle /></span> Adaptability</div>
                </div>
                </div>
                
        </div>
        <div className="about-card">
          <p className='lan-topic'>Education</p>
          <div className='degree-details'>
          <h4>BSc (Hons) Software Engineering</h4>

          <p className='location'>ICBT Campus, Colombo</p>

          <p className='end'>Expected Graduation: February 2028</p>
        </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default About;
