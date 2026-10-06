import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";



function Footer() {
  return (
    <div>
    <div className='foot'>

        <div className='foot-main'>
        <div className='foot-one'>
          <h2>Kaushalya<span> Kumari</span></h2>
          <p>A Software Engineering undergraduate passionate about building web and mobile applications, learning modern technologies, and turning ideas into practical solutions.</p>
          <div className="contact-link">
          <a href="mailto:kkaushalya722@gmail.com">
            <div className='tools'><MdOutlineEmail /></div>
          </a>

          <a
            href="https://github.com/kaushalya722"
            target="_blank"
            rel="noreferrer">
            <div className='tools'><FiGithub /></div>
          </a>

          <a href="https://www.linkedin.com/in/kaushalyakumari/" target="_blank" rel="noreferrer">
           <div className='tools'><FiLinkedin /></div>
          </a>

          {/* <a href="#" target="_blank" rel="noreferrer">
            Behance
          </a> */}
        </div>
        </div>
        <div className='foot-two'>
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className='foot-three'>
          <h4>CONTACT</h4>
          <p><span><MdOutlineEmail /></span> kkaushalya722@gmail.com</p>
          <p><span><MdOutlinePhone /></span> +94 70 268 4294</p>
          <p><span><CiLocationOn /></span> Sabaragamuwa Province, Sri Lanka</p>
        </div>
        </div>
         
         <div className='foot-four'>
          <div className='left'>
          <p>© 2026 Kaushalya Kumari — Built with React, Vite & CSS</p>  
          </div>
          <div className='right'>
            <div className='right-circle'>
             <a href='#home'><FaArrowUp /></a>
            </div>
          </div>
         </div>
    </div>
    </div>
  )
}

export default Footer;
