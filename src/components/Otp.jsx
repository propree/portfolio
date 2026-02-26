import React, { useRef } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";
import "./OTPPage.css";

const OTPPage = () => {
  const inputs = useRef([]);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <div className="otp-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            color: { value: "#ff6b00" },
            links: {
              enable: true,
              distance: 170,
              color: "#ff6b00",
              opacity: 0.12,
              triangles: { enable: true, opacity: 0.04 },
            },
            move: {
              enable: true,
              speed: 0.6,
              outModes: { default: "bounce" },
            },
            opacity: { value: 0.2 },
            size: { value: { min: 1.5, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: ["grab"] },
            },
            modes: {
              grab: {
                distance: 220,
                links: { opacity: 0.4 },
              },
            },
          },
        }}
        className="particles"
      />

      <div className="otp-card">
        <h2>Verify OTP</h2>
        <p>Enter the 6-digit code sent to your email</p>

        <div className="otp-inputs">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>

        <button>Verify</button>

        <span className="resend">Resend Code</span>
      </div>
    </div>
  );
};

export default OTPPage;