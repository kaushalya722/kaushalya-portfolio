import React from 'react'
// import "./About.css";

function About() {
  return (
    <>
    <div className="section about">
      <div className="section-title">
        <p>Get To Know Me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div>
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
        </div>

        <div className="about-card">
          <h3>Education</h3>

          <h4>BSc (Hons) Software Engineering</h4>

          <p>ICBT Campus, Colombo</p>

          <p>Expected Graduation: February 2028</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
