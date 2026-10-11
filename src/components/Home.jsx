import React, { useEffect, useState } from 'react'
import '../style/Home.css'
import background from '../assets/kau5.jfif'
import { MdWavingHand } from "react-icons/md";


function Home() {

 const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const homeSection = document.querySelector("#home");

    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setAnimate(true);
            });
          });
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(homeSection);

    return () => observer.disconnect();
  }, []);



  return (
    <>
    <div className="home" id='home' data-section style={{ backgroundImage: `url(${background})` }}>
      <div className={`home-content ${animate ? "slide-left" : ""}`}>
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
          href="/kaushalya_CV.pdf"
          download="Kaushalya CV.pdf"
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
