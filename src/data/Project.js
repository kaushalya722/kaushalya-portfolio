
import food from "../assets/s1.png"
import carpooling from '../assets/carpooling.png'
import expenze from '../assets/expenze.png'
import cs from '../assets/cs.png'
const projects = [
  {
    title: "Food Recipe Web Application",
    image:food,
    description:
      "A full-stack web application where users can create, manage, search and save food recipes.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/kaushalya722/Food-Recipe-Web-Application",
    demo: "",
  },

  {
    title: "Carpooling Application",
    image:carpooling,
    description:
      "A collaborative carpooling application developed as a team project with features related to users, rides and secure data management.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/ravindi5387/icbt-carpooling-application.git",
    demo: "",
  },

  

  {
    title: "City Style Footwear",
    image:cs,
    description:
      "An object-oriented programming project developed to demonstrate core OOP concepts.",
    technologies: ["Java", "OOP"],
    github: "",
    demo: "",
  },

  {
    title: "Expenz",
    image:expenze,
    description:
      "A Flutter expense management application using local storage to save user expense data.",
    technologies: ["Flutter", "Dart", "SharedPreferences"],
    github: "https://github.com/kaushalya722/expenz",
    demo: "",
  },
];

export default projects;