import React from 'react'
import { motion } from 'motion/react';

import '../style/Contact.css'
function Contact() {
  return (
    <>
    <div className="section contact" id='contact' data-section>
      <div className="section-title">
        <p>Let's Connect</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-content">
        <p>
          I'm currently interested in software engineering internship
          opportunities and would be happy to connect.
        </p>

        <motion.div className="contact-links" 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <a href="mailto:kkaushalya722@gmail.com">
            Email
          </a>

          <a
            href="https://github.com/kaushalya722"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/kaushalyakumari/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          {/* <a href="#" target="_blank" rel="noreferrer">
            Behance
          </a> */}
        </motion.div>
      </div>
    </div>
    </>
  );
}

export default Contact;
