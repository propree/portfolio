import React from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./ContactPage.css";

const Contact = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="contact-container">
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50 },
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

      <div className="contact-wrapper">
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

        {/* LEFT SIDE INFO */}
        <div className="contact-info">
          <h1>Let's Build Something 🚀</h1>
          <p>
            Whether it's backend architecture, full stack development,
            or system design discussions — I'm open to opportunities.
          </p>

          <div className="info-box">
            <span>Email</span>
            <h3>preeetesxxxxxxxxxx@gmail.com</h3>
          </div>

          <div className="info-box">
            <span>Phone</span>
            <h3>+91-82755XXXXX</h3>
          </div>

          <div className="social-links">
            <div>LinkedIn</div>
            <div>LeetCode</div>
            <div>GitHub</div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-card">
          <h2>Send Message</h2>

          <form>
            <div className="input-group">
              <input type="text" required />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input type="email" required />
              <label>Your Email</label>
            </div>

            <div className="input-group">
              <textarea required></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;