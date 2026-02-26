import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "SkyBook – Flight Ticket Booking System ✈️",
    tech: [
      "ReactJs",
      "Spring Boot",
      "Spring Security (JWT)",
      "MySQL",
      "JPA/Hibernate",
      "Tailwind CSS",
    ],
    description:
      "A full-stack flight ticket booking platform with secure JWT authentication, advanced flight search filters, real-time seat selection, booking history, ticket cancellation, and an admin dashboard to manage flights and pricing.",
    github: "#",
    live: "#",
  },
  {
    title: "Bookstore – Full Stack Web App",
    tech: ["ReactJs", "NodeJs", "MongoDB", "ExpressJs"],
    description:
      "Responsive bookstore with secure login and signup system featuring email-based 2FA authentication, dark/light theme support, and persistent local storage for user preferences.",
    github: "#",
    live: "#",
  },
  {
    title: "School Dashboard – Management System",
    tech: ["React", "Next.js", "Tailwind", "TypeScript"],
    description:
      "Role-based dashboards for admin, teacher, student, and parent with responsive data tables, interactive charts, and real-time updates for seamless data management.",
    github: "#",
    live: "#",
  },
  {
    title: "Bubble Game – Interactive Web Game",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A number-based bubble hitting game with score tracking, hit counter, timer functionality, and dynamic target-based scoring logic.",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
<div className="grid-overlay"></div>

      {/* Floating Small Bubbles */}
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
        {/* ===== Heading ===== */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-heading"
        >
          My <span>Projects</span>
        </motion.h1>

        {/* ===== Projects Grid ===== */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <h2 className="project-title">{project.title}</h2>

              {/* Tech Stack */}
              <div className="tech-container">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="project-description">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="button-container">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;