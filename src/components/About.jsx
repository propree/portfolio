import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./AboutPage.css";

const About = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const [count, setCount] = useState(0);

  // Animated DSA Counter
  useEffect(() => {
    let start = 0;
    const end = 1300;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-container">
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 55 },
            color: { value: "#ff6b00" },
            links: {
              enable: true,
              distance: 170,
              color: "#ff6b00",
              opacity: 0.1,
              triangles: { enable: true, opacity: 0.04 },
            },
            move: { enable: true, speed: 0.6 },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.2 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: {
              grab: { distance: 200, links: { opacity: 0.4 } },
            },
          },
        }}
        className="particles"
      />
{/* <div className="mesh-bg"></div> */}

      {/* Grid Overlay */}
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
      <section className="hero-section">
        
        <h1>
          Hi, I'm <span>Preetesh Biswas</span>
        </h1>
        <h2>Full Stack Developer | Java & Spring Boot | DSA Enthusiast</h2>
      </section>

      <section className="stats-section">
        <div className="stat-box">
          <h3>{count}+</h3>
          <p>DSA Problems Solved</p>
        </div>
        <div className="stat-box">
          <h3>Full Stack</h3>
          <p>React • Spring Boot • Node</p>
        </div>
      </section>

      <section className="tech-section">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          <div className="tech-card">Java</div>
          <div className="tech-card">Spring Boot</div>
          <div className="tech-card">React</div>
          <div className="tech-card">Node.js</div>
          <div className="tech-card">MongoDB</div>
          <div className="tech-card">MySQL</div>
          <div className="tech-card">C++</div>
          <div className="tech-card">System Design</div>
        </div>
      </section>

      <section className="build-section">
        <h2>What I Build</h2>
        <p>
          I design scalable backend systems, secure authentication flows,
          role-based dashboards, and responsive full-stack applications.
        </p>
      </section>
    </div>
  );
};

export default About;