import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const joinDate = new Date("2025-08-18"); // Change year if needed
  const [duration, setDuration] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateDuration = () => {
      const now = new Date();

      let months =
        (now.getFullYear() - joinDate.getFullYear()) * 12 +
        (now.getMonth() - joinDate.getMonth());

      let days = now.getDate() - joinDate.getDate();
      if (days < 0) {
        months--;
        const prevMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
        days += prevMonth;
      }

      setDuration(`${months} Months ${days} Days`);
    };

    calculateDuration();
    const interval = setInterval(calculateDuration, 86400000);

    // Animate timeline progress
    setTimeout(() => {
      setProgress(100);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="experience-section">
      <div className="experience-container">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="experience-heading"
        >
          Professional <span>Experience</span>
        </motion.h1>

        {/* Timeline */}
        <div className="timeline">

          {/* Vertical Line */}
          <div className="timeline-line">
            <div
              className="timeline-progress"
              style={{ height: `${progress}%` }}
            ></div>
          </div>

          {/* Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="timeline-card"
          >
            <div className="timeline-dot"></div>

            <h2>Full Stack Developer</h2>
            <h3>National Stock Exchange (NSE)</h3>

            <p className="date">
              Joined: 18 August 2025 – Present
            </p>

            <p className="duration">
              ⏳ Duration: {duration}
            </p>

            <p className="description">
              Working on enterprise-grade financial systems, developing
              scalable full-stack applications using React, Spring Boot,
              secure REST APIs, and high-performance database systems.
              Contributing to mission-critical trading and reporting modules
              with emphasis on performance, security, and reliability.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;