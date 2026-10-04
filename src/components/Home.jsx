// import "./Home.css";
import React from 'react'
import me from '../assets/me.jpg'
import { MdWavingHand } from "react-icons/md";


function Home() {
  return (
    <>
    <div className="home">
      <div className="home-content">
        <div className='small-div'>
        <p className="small-title">Hello, I'm <MdWavingHand className='ic'/></p>
        </div>
        <h1>Kaushalya</h1>

        <h2>Software Engineering Undergraduate</h2>

        <p className="home-description">
          I enjoy building web and mobile applications and I'm currently
          developing my skills in full-stack software development.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-button">
            View My Projects
          </a>

        <a
          href="/KAUSHALYA KUMARI (1).pdf"
          download="KAUSHALYA KUMARI(1).pdf"
          className="secondary-button"
        >
          Download CV
        </a>
        </div>
      </div>

       
    </div> 
    </>
  );
}

export default Home;
