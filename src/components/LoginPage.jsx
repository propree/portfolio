import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./login.css";
const LoginPage = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="login-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 55 },
            color: { value: "#ff6b00" },
            links: {
              enable: true,
              distance: 170,
              color: "#ff6b00",
              opacity: 0.12,
              width: 1,
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

      <div className="login-card">
        <h2>Welcome Back</h2>

        <form>
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup-link">
          Dont have an account? 
          <a href="/signup"> <span>Sign Up</span> </a>
         
        </p>
      </div>
    </div>
  );
};

export default LoginPage;