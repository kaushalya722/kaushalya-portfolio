
import React from "react";
import '../style/Skills.css'
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaDartLang } from "react-icons/fa6";
import { FaFlutter } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {

const skillGroups = [
    {
      title: "PROGRAMMING",
      skills: [
        {
          name: "Java",
          icon: <FaJava color="#E76F00" />,
        },
        {
          name: "JavaScript",
          icon: <IoLogoJavascript color="#F7DF1E" />,
        },
        {
          name: "Dart",
          icon: <FaDartLang color="#0175C2" />,
        },
      ],
    },

    {
      title: "FRONTEND",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 color="#E34F26" />,
        },
        {
          name: "CSS",
          icon: <FaCss color="#1572B6" />,
        },
        {
          name: "React.js",
          icon: <FaReact color="#61DAFB" />,
        },
        {
          name: "Flutter",
          icon: <FaFlutter color="#02569B" />,
        },
      ],
    },

    {
      title: "BACKEND",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs color="#5FA04E" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress color="#FFFFFF" />, // White for dark backgrounds (or #000000 for light background)
        },
        {
          name: "REST APIs",
          icon: <span className="api-icon" style={{ color: "#009688", fontWeight: "bold" }}>API</span>,
        },
      ],
    },

    {
      title: "DATABASES",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb color="#47A248" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql color="#4479A1" />,
        },
        {
          name: "SQL Server",
          icon: <DiMsqlServer color="#CC292B" />,
        },
      ],
    },

    {
      title: "TOOLS",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt color="#F05032" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub color="#FFFFFF" />, // White for dark theme (or #181717 for light theme)
        },
        {
          name: "Docker",
          icon: <FaDocker color="#2496ED" />,
        },
        {
          name: "Postman",
          icon: <SiPostman color="#FF6C37" />,
        },
        {
          name: "VS Code",
          icon: <VscVscode color="#007ACC" />,
        },
      ],
    },
  ];
    

  return (
    <section className="section skills" id="skills" data-section>

      {/* Section Heading */}
      <div className="section-title">
        <p>What I Work With</p>
        <h2>My Skills</h2>
      </div>


      {/* Skill Groups */}
      <div className="skill-groups">

        {skillGroups.map((group) => (

          <div className="skill-group" key={group.title}>

            {/* Category title */}
            <h3 className="skill-group-title">
              {group.title}
            </h3>


            {/* Individual skill cards */}
            <div className="skills-grid">

              {group.skills.map((skill) => (

                <div
                  className="skill-card"
                  key={skill.name}
                >

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <p className="skill-name">
                    {skill.name}
                  </p>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;


