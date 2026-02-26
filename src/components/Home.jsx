import { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate =  useNavigate();



  return (
    <section className="hero">

      {/* Mesh Background */}
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

      {/* Big Floating Bubbles */}
      <div className="big-bubble left"></div>
      <div className="big-bubble right"></div>

      <div className="hero-content">

        <p className="subtitle fade-in">👋 Hi, I'm</p>

        <h1 className="title reveal">
          Pree<span className="highlight">TESH</span>
        </h1>

        <h2 className="role fade-in-delay">
          Full Stack Web Developer
        </h2>

        <p className="description fade-in-delay-2">
          I craft fast, scalable & visually stunning web applications 
          using React, Node.js & MongoDB.
        </p>

        <div className="buttons">
          <button className="btn primary" onClick={() => navigate("/projects")}>View Projects</button>
          <button onClick={()=>navigate("/login")} className="btn secondary">Download Resume</button>
        </div>

        <div className="tech-stack">
          {/* <span>⚛ React</span> */}
          {/* <span>🟢 Node</span> */}
          {/* <span>🍃 MongoDB</span> */}
          <span>💨 ExpressJs</span>
          <span>⚛ SpringBoot</span>
          {/* <span>🟢 Java</span> */}
          <span>🍃 C/C++</span>
          <span>💨 SQL/NoSQL</span>
        </div>

      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div> */}

    </section>
  );
};

export default Home;