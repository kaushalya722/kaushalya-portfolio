import React from 'react'

// import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Java", "JavaScript", "Dart"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React.js", "Flutter"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
    },
  ];

  return (
    <>
    <div className="section skills">
      <div className="section-title">
        <p>What I Work With</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Skills;
