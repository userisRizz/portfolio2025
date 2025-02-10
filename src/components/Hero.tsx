import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const careerPathRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const [isWaving, setIsWaving] = useState(false);
  const [greeting, setGreeting] = useState("");
  const isCareerInView = useInView(careerPathRef, {
    once: true,
    margin: "-100px",
  });
  const isEducationInView = useInView(educationRef, {
    once: true,
    margin: "-100px",
  });
  const { scrollY } = useScroll();

  const greetings = [
    "Hii 👋",
    "Sup 👋",
    "Wassup 👋",
    "Hola 👋",
    "Namaste 🙏",
    "Hey 👋",
    "Hello 👋",
    "👋",
    "Good day 👋",
    "Greetings 🙏",
    "Welcome 👋",
    "Yo! 👋",
    "What's up! 👋",
    "Hi there 👋",
    "Howdy 👋",
    "Pleased to meet you 🤝",
    "G'day mate 👋",
    "Aloha 🌺",
  ];

  const handleAvatarClick = () => {
    if (!isWaving) {
      setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }
  };

  // Enhanced transform values for each icon's position based on scroll with initial positions
  const icon1X = useTransform(scrollY, [0, 300], ["85%", "90%"], {
    clamp: true,
  });
  const icon1Y = useTransform(scrollY, [0, 300], ["20%", "22%"], {
    clamp: true,
  });
  const icon2X = useTransform(scrollY, [0, 300], ["20%", "15%"], {
    clamp: true,
  });
  const icon2Y = useTransform(scrollY, [0, 300], ["15%", "13%"], {
    clamp: true,
  });
  const icon3X = useTransform(scrollY, [0, 300], ["75%", "80%"], {
    clamp: true,
  });
  const icon3Y = useTransform(scrollY, [0, 300], ["35%", "33%"], {
    clamp: true,
  });
  const icon4X = useTransform(scrollY, [0, 300], ["15%", "10%"], {
    clamp: true,
  });
  const icon4Y = useTransform(scrollY, [0, 300], ["70%", "72%"], {
    clamp: true,
  });
  const icon5X = useTransform(scrollY, [0, 300], ["85%", "90%"], {
    clamp: true,
  });
  const icon5Y = useTransform(scrollY, [0, 300], ["50%", "52%"], {
    clamp: true,
  });
  const icon6X = useTransform(scrollY, [0, 300], ["15%", "10%"], {
    clamp: true,
  });
  const icon6Y = useTransform(scrollY, [0, 300], ["40%", "38%"], {
    clamp: true,
  });
  const icon7X = useTransform(scrollY, [0, 300], ["5%", "0%"], { clamp: true });
  const icon7Y = useTransform(scrollY, [0, 300], ["30%", "28%"], {
    clamp: true,
  });
  const icon8X = useTransform(scrollY, [0, 300], ["95%", "100%"], {
    clamp: true,
  });
  const icon8Y = useTransform(scrollY, [0, 300], ["30%", "28%"], {
    clamp: true,
  });
  const icon9X = useTransform(scrollY, [0, 300], ["95%", "100%"], {
    clamp: true,
  });
  const icon9Y = useTransform(scrollY, [0, 300], ["65%", "67%"], {
    clamp: true,
  });
  const icon10X = useTransform(scrollY, [0, 300], ["5%", "0%"], {
    clamp: true,
  });
  const icon10Y = useTransform(scrollY, [0, 300], ["65%", "67%"], {
    clamp: true,
  });

  return (
    <div id="hero" className="relative overflow-hidden">
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes float {
            0% {
              transform: translate(-50%, -50%) translateY(0px);
            }
            50% {
              transform: translate(-50%, -50%) translateY(-10px);
            }
            100% {
              transform: translate(-50%, -50%) translateY(0px);
            }
          }
          .spin-slow {
            animation: spin 20s linear infinite;
          }
          .float {
            animation: float 3s ease-in-out infinite;
          }
          .tech-icon {
            position: absolute;
            width: 48px;
            height: 48px;
            padding: 12px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          }

          .tech-icon svg {
            width: 24px;
            height: 24px;
          }

          /* Base styles for icon containers - Light theme by default */
          .tech-icon {
            position: absolute;
            width: 48px;
            height: 48px;
            padding: 12px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          }

          /* Dark theme styles */
          .dark .tech-icon {
            background: rgba(17, 17, 17, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
          }

          /* Hover effects for light theme */
          .tech-icon:hover {
            transform: scale(1.1);
            background: rgba(255, 255, 255, 0.85);
            border-color: rgba(255, 255, 255, 0.9);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          }

          /* Hover effects for dark theme */
          .dark .tech-icon:hover {
            background: rgba(23, 23, 23, 0.9);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          /* Position each icon box */
          .icon-1 {
            animation: float 3s ease-in-out infinite;
          }
          .icon-2 {
            animation: float 3s ease-in-out infinite 0.6s;
          }
          .icon-3 {
            animation: float 3s ease-in-out infinite 1.2s;
          }
          .icon-4 {
            animation: float 3s ease-in-out infinite 1.8s;
            z-index: -1;
          }
          .icon-5 {
            animation: float 3s ease-in-out infinite 2.4s;
          }
          .icon-6 {
            animation: float 3s ease-in-out infinite 3s;
          }
          .icon-7 {
            animation: float 3s ease-in-out infinite 3.6s;
          }
          .icon-8 {
            animation: float 3s ease-in-out infinite 4.2s;
          }
          .icon-9 {
            animation: float 3s ease-in-out infinite 5.4s;
          }
          .icon-10 {
            animation: float 3s ease-in-out infinite 5.4s;
          }

          /* Responsive sizes */
          @media (min-width: 768px) {
            .tech-icon {
              width: 56px;
              height: 56px;
              padding: 14px;
              border-radius: 18px;
            }
            .tech-icon svg {
              width: 28px;
              height: 28px;
            }
          }

          @media (min-width: 1024px) {
            .tech-icon {
              width: 64px;
              height: 64px;
              padding: 16px;
              border-radius: 20px;
            }
            .tech-icon svg {
              width: 32px;
              height: 32px;
            }
          }

          /* Grain effect */
          .grain {
            position: absolute;
            top: -50%;    /* Adjusted from -150% */
            left: -50%;
            right: -50%;
            bottom: -50%; /* Adjusted from -150% */
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            pointer-events: none;
            opacity: 0.25;  /* Adjusted from 0.4 */
            animation: grain 8s steps(10) infinite;
            mix-blend-mode: soft-light;  /* Changed from overlay */
            z-index: 0;
            background-size: 200px;  /* Added to control grain size */
          }

          [data-theme='dark'] .grain {
            opacity: 0.15;  /* Different opacity for dark mode */
            mix-blend-mode: overlay;
          }

          @keyframes grain {
            0%, 100% { transform: translate(0, 0) }
            10% { transform: translate(-2%, -4%) }
            20% { transform: translate(-6%, 2%) }
            30% { transform: translate(3%, -10%) }
            40% { transform: translate(-2%, 10%) }
            50% { transform: translate(-6%, 4%) }
            60% { transform: translate(6%, 0%) }
            70% { transform: translate(0%, 6%) }
            80% { transform: translate(1%, 14%) }
            90% { transform: translate(-4%, 4%) }
          }

          @media (min-width: 768px) {
            .react-logo-container {
              top: 75% !important;  /* Move down for tablet/desktop */
            }
          }

          @keyframes slow-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .animate-slow-spin {
            animation: slow-spin 15s linear infinite;
          }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s linear infinite;
          }

          @keyframes draw {
            from {
              stroke-dashoffset: 1;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
      <div
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
        style={{ paddingTop: "6rem" }}
      >
        {/* Updated background with new gradients */}
        <div className="absolute inset-0">
          {/* Base background color - Changed to pitch black */}
          <div className="absolute inset-0 bg-white dark:bg-[#000000] transition-colors duration-300" />

          {/* Dark mode gradients - Responsive */}
          <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-300">
            {/* Right side gradients */}
            <div className="absolute top-[-10%] right-[-20%] w-[350px] md:w-[600px] lg:w-[900px] h-[350px] md:h-[600px] lg:h-[900px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500/20 via-blue-500/5 to-transparent blur-xl lg:blur-2xl" />
            <div className="absolute top-[30%] right-[-10%] w-[250px] md:w-[400px] lg:w-[600px] h-[250px] md:h-[400px] lg:h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-500/20 via-purple-500/5 to-transparent blur-xl lg:blur-2xl" />

            {/* Left side gradients */}
            <div className="absolute top-[-20%] left-[-20%] w-[350px] md:w-[600px] lg:w-[900px] h-[350px] md:h-[600px] lg:h-[900px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-cyan-500/20 via-cyan-500/5 to-transparent blur-xl lg:blur-2xl" />
            <div className="absolute top-[40%] left-[-10%] w-[250px] md:w-[400px] lg:w-[600px] h-[250px] md:h-[400px] lg:h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-indigo-500/20 via-indigo-500/5 to-transparent blur-xl lg:blur-2xl" />

            {/* Additional accent gradients */}
            <div className="absolute bottom-[-20%] left-[-30%] w-[300px] md:w-[500px] lg:w-[800px] h-[300px] md:h-[500px] lg:h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-500/15 via-purple-500/5 to-transparent blur-xl lg:blur-2xl" />
            <div className="absolute bottom-[-10%] right-[-20%] w-[300px] md:w-[500px] lg:w-[800px] h-[300px] md:h-[500px] lg:h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500/15 via-blue-500/5 to-transparent blur-xl lg:blur-2xl" />

            {/* Center subtle glow */}
            <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 w-[300px] md:w-[500px] lg:w-[800px] h-[300px] md:h-[500px] lg:h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-indigo-500/10 via-indigo-500/5 to-transparent blur-xl lg:blur-2xl" />
          </div>

          {/* Light mode gradients - Responsive */}
          <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-gray-50 to-white" />
            {/* Right side */}
            <div className="absolute top-0 right-[-20%] w-[350px] md:w-[600px] lg:w-[900px] h-[350px] md:h-[600px] lg:h-[900px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent blur-xl lg:blur-2xl" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[500px] lg:w-[800px] h-[300px] md:h-[500px] lg:h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent blur-xl lg:blur-2xl" />
            {/* Left side */}
            <div className="absolute top-[-20%] left-[-20%] w-[350px] md:w-[600px] lg:w-[900px] h-[350px] md:h-[600px] lg:h-[900px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent blur-xl lg:blur-2xl" />
            <div className="absolute bottom-[-10%] left-[-30%] w-[300px] md:w-[500px] lg:w-[800px] h-[300px] md:h-[500px] lg:h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent blur-xl lg:blur-2xl" />
          </div>

          {/* Grain effect - Adjusted opacity */}
          <div className="grain dark:opacity-[0.08] opacity-[0.15]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="relative">
            <div className="icon-container">
              {/* React Icon */}
              <motion.div
                className="tech-icon icon-6"
                style={{
                  left: icon6X,
                  top: icon6Y,
                  x: "-50%",
                  y: "-50%",
                  position: "absolute",
                }}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <svg
                  className="text-[#61dafb] dark:text-[#61dafb] transition-all duration-300 animate-slow-spin"
                  viewBox="-11.5 -10.23174 23 20.46348"
                >
                  <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </motion.div>

              {/* Git Icon */}
              <motion.div
                className="tech-icon icon-1"
                style={{
                  left: icon1X,
                  top: icon1Y,
                  x: "-50%",
                  y: "-50%",
                  position: "absolute",
                }}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg viewBox="0 0 24 24">
                  <path
                    className="dark:fill-[#F05032] fill-[#F05032]"
                    d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.516.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.721.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
                  />
                </svg>
              </motion.div>

              {/* Figma Icon */}
              <motion.div
                className="tech-icon icon-2"
                style={{
                  left: icon2X,
                  top: icon2Y,
                  x: "-50%",
                  y: "-50%",
                  position: "absolute",
                }}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
                  {/* Left side circles */}
                  <path
                    fill="#F24E1E"
                    d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
                  />
                  <path
                    fill="#FF7262"
                    d="M19 9.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
                  />
                  <path
                    fill="#1ABCFE"
                    d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z"
                  />
                  <path
                    fill="#0ACF83"
                    d="M0 28.5a9.5 9.5 0 0 1 9.5-9.5H19v19H9.5a9.5 9.5 0 0 1-9.5-9.5z"
                  />
                  <path
                    fill="#A259FF"
                    d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"
                  />
                </svg>
              </motion.div>

              {/* VS Code Icon */}
              <motion.div
                className="tech-icon icon-3"
                style={{
                  left: icon3X,
                  top: icon3Y,
                  x: "-50%",
                  y: "-50%",
                  position: "absolute",
                }}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#007ACC"
                    d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
                  />
                </svg>
              </motion.div>

              {/* Apple Icon */}
              <motion.div
                className="tech-icon icon-4"
                style={{
                  left: icon4X,
                  top: icon4Y,
                  x: "-50%",
                  y: "-50%",
                  position: "absolute",
                }}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <svg viewBox="0 0 24 24">
                  <path
                    className="dark:fill-gray-300 fill-gray-600"
                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                  />
                </svg>
              </motion.div>

              {/* Android Icon */}
              <motion.div
                className="tech-icon icon-5"
                style={{
                  left: icon5X,
                  top: icon5Y,
                  x: "-50%",
                  y: "-50%",
                  position: "absolute",
                }}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#3DDC84"
                    d="M17.523 15.341a1.658 1.658 0 1 1-.001-3.316 1.658 1.658 0 0 1 .001 3.316m-11.046 0a1.658 1.658 0 1 1-.001-3.316 1.658 1.658 0 0 1 .001 3.316m11.364-6.598 2.364-4.096a.547.547 0 0 0-.201-.748.547.547 0 0 0-.748.201l-2.393 4.146C15.624 7.671 14.172 7.294 12 7.294S8.376 7.671 7.137 8.246L4.744 4.1a.547.547 0 0 0-.748-.201.547.547 0 0 0-.201.748l2.364 4.096C3.314 10.012 1.5 12.319 1.5 15.5h21c0-3.181-1.814-5.488-4.659-6.757"
                  />
                </svg>
              </motion.div>

              {/* TypeScript Icon */}
              <motion.div
                className="tech-icon icon-7"
                style={{
                  left: icon7X,
                  top: icon7Y,
                  x: "-50%",
                  y: "-50%",
                  position: "absolute",
                }}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#3178C6"
                    d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                  />
                </svg>
              </motion.div>

              {/* Redux Icon */}
              <motion.div
                className="tech-icon icon-8"
                style={{
                  left: icon8X,
                  top: icon8Y,
                  x: "-50%",
                  y: "-50%",
                  position: "absolute",
                }}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-6 h-6"
                >
                  <path
                    fill="#764ABC"
                    d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4zm17.6-11.6c-7.6-8.9-18.8-13.8-31.6-13.8h-1.6c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4h1.6c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3zM32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"
                  />
                </svg>
              </motion.div>

              {/* Tailwind Icon */}
              <motion.div
                className="tech-icon icon-9"
                style={{
                  left: icon9X,
                  top: icon9Y,
                  x: "-50%",
                  y: "-50%",
                  position: "absolute",
                }}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#06B6D4"
                    d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                  />
                </svg>
              </motion.div>

              {/* Firebase Icon */}
              <motion.div
                className="tech-icon icon-10"
                style={{
                  left: icon10X,
                  top: icon10Y,
                  x: "-50%",
                  y: "-50%",
                  position: "absolute",
                }}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#FFA000"
                    d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-4a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"
                  />
                </svg>
              </motion.div>
            </div>

            <div className="relative z-10">
              {/* Avatar with enhanced styling */}
              <div
                className="group relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-8 cursor-pointer"
                onClick={handleAvatarClick}
              >
                {/* Outer glow and rotation animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-purple-500/50 to-blue-500/50 rounded-full blur-md group-hover:blur-lg transition-all duration-500 animate-slow-spin" />

                {/* Avatar container */}
                <motion.div
                  className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-r from-primary via-purple-500 to-blue-500 backdrop-blur-sm"
                  animate={
                    isWaving
                      ? {
                          rotate: [0, -2, 2, -2, 2, 0],
                          transition: { duration: 0.5, ease: "easeInOut" },
                        }
                      : {}
                  }
                >
                  {/* Glass effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-black/10 dark:to-black/5 rounded-full backdrop-blur-sm" />

                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/20 dark:ring-black/20">
                    <img
                      src="/avatar.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-500"
                    />
                  </div>

                  {/* Greeting bubble */}
                  <motion.div
                    className="absolute -right-2 -top-8 px-3 py-1 rounded-full bg-white dark:bg-gray-800 shadow-lg text-sm font-medium text-gray-900 dark:text-gray-100"
                    initial={{ opacity: 0, scale: 0, y: 10 }}
                    animate={
                      isWaving
                        ? {
                            opacity: [0, 1, 1, 0],
                            scale: [0.5, 1, 1, 0.5],
                            y: [10, 0, 0, -10],
                            transition: {
                              duration: 1,
                              times: [0, 0.2, 0.8, 1],
                              ease: "easeInOut",
                            },
                          }
                        : {}
                    }
                  >
                    {greeting}
                    {/* Bubble tail */}
                    <div className="absolute bottom-0 right-4 w-2 h-2 bg-white dark:bg-gray-800 transform rotate-45 translate-y-1" />
                  </motion.div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>

              {/* Greeting with simplified styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 text-base md:text-lg lg:text-xl font-medium font-caveat"
              >
                Hello there, 👋
              </motion.div>

              <motion.h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight font-satoshi">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  I'm{" "}
                </motion.span>
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="font-caveat">Syed Rizwan k</span>
                  {/* <span className="font-dancing-script">Syed Rizwan K</span> */}

                  {/* Curved underline SVG with animation */}
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full h-5 md:h-7 lg:h-8"
                    viewBox="0 0 400 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M 0 12 C 150 12 150 18 300 18 L 400 18"
                      className="stroke-primary"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        pathLength: { duration: 1, ease: "easeOut" },
                        opacity: { duration: 0.01 },
                      }}
                    />
                  </motion.svg>
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  I can transform ideas into
                </motion.span>
                <br />
                <motion.span
                  className="dark:bg-gradient-to-r dark:from-white dark:via-white/80 dark:to-white/40 bg-gradient-to-r from-black via-black/80 to-black/40 text-transparent bg-clip-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  seamless web application <br />  experiences
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-primary"
                >
                  .
                </motion.span>
              </motion.h1>
            </div>

            <div className="mt-2 flex flex-col md:flex-row items-start justify-between gap-6 relative z-10">
              <div className="text-left relative z-10">
                {/* Animated Hand-drawn Arrow */}
                <div className="relative -mb-1">
                  <motion.svg
                    width="100"
                    height="140"
                    viewBox="0 0 100 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform -rotate-[20deg] w-[65px] h-[90px] md:w-[75px] md:h-[110px] lg:w-[90px] lg:h-[130px]"
                  >
                    {/* Malayalam tha-like Path */}
                    <motion.path
                      d="M15 20
                         C 15 20, 85 20, 85 45
                         C 85 70, 15 70, 15 45
                         C 15 20, 70 35, 70 60
                         C 70 85, 35 95, 35 110"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="dark:opacity-80"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                      }}
                    />
                    {/* Arrow head */}
                    <motion.path
                      d="M35 110 L30 98 M35 110 L48 98"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="dark:opacity-80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 1.2,
                      }}
                    />
                  </motion.svg>
                </div>
                {/* Get in Touch Button */}
                <button
                  onClick={() => navigate("/contact")}
                  className="
                    relative 
                    inline-flex 
                    items-center 
                    px-5 
                    py-2.5 
                    text-base 
                    font-medium 
                    transition-all 
                    duration-300 
                    rounded-lg 
                    bg-gradient-to-r 
                    from-primary 
                    via-purple-500 
                    to-blue-500 
                    hover:scale-105 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-offset-2 
                    focus:ring-primary
                    dark:focus:ring-offset-gray-900
                    text-white
                    shadow-lg
                    hover:shadow-xl
                    group
                  "
                >
                  <span className="relative">Get in Touch</span>
                  <svg
                    className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
                {/* Small description text */}
                <p className="text-sm text-muted-foreground/60 mt-2 opacity-60">
                  Please checkout the resume section
                  <br />
                  for more information
                </p>
              </div>
              <div className="text-right max-w-xl ml-auto mt-8 md:mt-12 lg:mt-16 relative">
                {/* Hand-drawn Smiley */}
                <motion.svg
                  width="80"
                  height="80"
                  viewBox="-10 -10 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-16 right-0 z-10"
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: -25 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.5,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  <g>
                    {/* Circle */}
                    <motion.path
                      d="M25 45C36.0457 45 45 36.0457 45 25C45 13.9543 36.0457 5 25 5C13.9543 5 5 13.9543 5 25C5 36.0457 13.9543 45 25 45Z"
                      className="stroke-[#B8860B]"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    {/* Smile */}
                    <motion.path
                      d="M15 27C15 27 19 35 25 35C31 35 35 27 35 27"
                      className="stroke-[#B8860B]"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                    {/* Eyes */}
                    <motion.path
                      d="M18 20C18 20 18 20 18 20M32 20C32 20 32 20 32 20"
                      className="stroke-[#B8860B]"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 }}
                    />
                  </g>
                </motion.svg>
                <motion.p
                  className="text-lg text-muted-foreground leading-relaxed max-h-[calc(100vh-400px)] overflow-y-auto"
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1,
                    delay: 1.8,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >I'm a skilled React Developer based in India, specializing in building dynamic, user-friendly web applications with a strong focus on UI/UX and performance optimization. I have experience leading impactful projects that enhance user engagement and drive business growth. Always eager to collaborate and innovate—feel free to connect!
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Component */}
        <div className="container mx-auto px-4 py-8">
          <motion.svg
            width="100%"
            height="20"
            viewBox="0 0 600 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40 max-w-[400px] mx-auto"
          >
            <motion.path
              d="M0 10 H600"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        {/* Design & Develop Section */}
        <div className="container mx-auto px-4 py-16 relative">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* I Design Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative z-10">
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Hand-drawn Design Icon */}
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mb-4"
                  >
                    {/* Palette base */}
                    <motion.path
                      d="M30 50 C30 30, 45 20, 65 20 C85 20, 90 35, 85 50 C80 65, 70 75, 55 75 C40 75, 30 65, 30 50"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="dark:opacity-80"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    {/* Paint dots */}
                    <motion.circle
                      cx="45"
                      cy="35"
                      r="4"
                      className="fill-primary dark:opacity-80"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                    />
                    <motion.circle
                      cx="65"
                      cy="35"
                      r="4"
                      className="fill-blue-500 dark:opacity-80"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.4 }}
                    />
                    <motion.circle
                      cx="75"
                      cy="50"
                      r="4"
                      className="fill-purple-500 dark:opacity-80"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.6 }}
                    />
                    <motion.circle
                      cx="45"
                      cy="60"
                      r="4"
                      className="fill-green-500 dark:opacity-80"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.8 }}
                    />
                    {/* Brush */}
                    <motion.path
                      d="M15 85 C25 75, 35 65, 45 55 C47 53, 50 53, 52 55 C54 57, 54 60, 52 62 C42 72, 32 82, 22 92"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="dark:opacity-80"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                    {/* Brush tip */}
                    <motion.path
                      d="M12 88 L18 82"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="dark:opacity-80"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 1.5,
                        ease: "easeOut",
                      }}
                    />
                  </svg>
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 font-caveat">
                  Building Seamless Web Experiences
                  </h3>
                </motion.div>
                <motion.p
                  className="text-muted-foreground text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Crafting dynamic, high-performance web applications with a 
                  focus on clean architecture, seamless user experiences, and 
                   modern UI aesthetics.
                </motion.p>
              </div>
              {/* Removed decorative squiggle */}
            </motion.div>

            {/* I Develop Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative z-10">
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {/* Hand-drawn Development Icon */}
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mb-4"
                  >
                    <motion.path
                      d="M20 50 L40 30 M20 50 L40 70"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="dark:opacity-80"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M80 50 L60 30 M80 50 L60 70"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="dark:opacity-80"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M45 70 L55 30"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="dark:opacity-80"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    />
                  </svg>
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 font-caveat">
                  Engineering Scalable Solutions

                  </h3>
                </motion.div>
                <motion.p
                  className="text-muted-foreground text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Developing high-performance web applications with React, 
                  focusing on scalability, efficiency, and seamless user experiences.
                </motion.p>
              </div>
              {/* Removed decorative squiggle */}
            </motion.div>
          </div>
        </div>

        {/* Separator Component */}
        <div className="container mx-auto px-4 py-8">
          <motion.svg
            width="100%"
            height="20"
            viewBox="0 0 600 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40 max-w-[400px] mx-auto"
          >
            <motion.path
              d="M0 10 H600"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        {/* Career Path Section */}
        <div
          ref={careerPathRef}
          className="container mx-auto px-4 py-16 relative"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isCareerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
          >
            My Career Path
          </motion.h2>

          <div className="relative max-w-3xl mx-auto h-[800px] sm:h-[700px] md:h-[700px]">
            {/* Timeline Arrow SVG */}
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 400 700"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-1/2 -translate-x-1/2 top-0"
            >
              {/* Main S-curved Line with Arrow */}
              <motion.path
                d="M200 660
                   C 50 660, 50 500, 200 350
                   C 350 200, 350 40, 200 45
                   L 210 35
                   L 200 45
                   L 210 55"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
                initial={{ pathLength: 0 }}
                animate={isCareerInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.svg>

            {/* Company A - Top Left */}
            <motion.div
              className="absolute top-[50px] left-4 md:left-10 w-[45%] text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={
                isCareerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Bengaluru City SVG */}
              <motion.svg
                width="150"
                height="100"
                viewBox="0 0 120 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-40 top-0 hidden md:block"
                initial={{ opacity: 0 }}
                animate={isCareerInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Vidhana Soudha inspired building */}
                <motion.path
                  d="M40 60 L40 30 L45 25 L50 30 L50 60"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isCareerInView ? { pathLength: 1 } : { pathLength: 0 }
                  }
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.path
                  d="M42 35 L48 35 M42 40 L48 40 M44 25 L44 20 L46 20 L46 25"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isCareerInView ? { pathLength: 1 } : { pathLength: 0 }
                  }
                  transition={{ duration: 1, delay: 0.9 }}
                />
                {/* Modern Buildings */}
                <motion.path
                  d="M60 60 L60 35 L65 35 L65 60 M70 60 L70 40 L75 40 L75 60"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isCareerInView ? { pathLength: 1 } : { pathLength: 0 }
                  }
                  transition={{ duration: 1, delay: 1.1 }}
                />
                {/* Trees */}
                <motion.path
                  d="M30 60 C30 55, 25 50, 30 45 C35 40, 35 50, 30 60 M80 60 C80 55, 75 50, 80 45 C85 40, 85 50, 80 60"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isCareerInView ? { pathLength: 1 } : { pathLength: 0 }
                  }
                  transition={{ duration: 1, delay: 1.3 }}
                />
                {/* Ground */}
                <motion.path
                  d="M20 60 L90 60"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isCareerInView ? { pathLength: 1 } : { pathLength: 0 }
                  }
                  transition={{ duration: 1, delay: 1.5 }}
                />
                {/* Bengaluru City Name */}
                <motion.text
                  x="45"
                  y="75"
                  className="text-[10px] font-caveat font-bold"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={isCareerInView ? { opacity: 0.7 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Bengaluru
                </motion.text>
              </motion.svg>
              <div className="md:max-w-[300px]">
                <h3 className="text-base sm:text-lg md:text-xl font-bold">
                Associate Software Engineer              </h3>
                <p className="text-sm sm:text-base text-muted-foreground/80 mb-2">
                  Trimpixel
                </p>
                <p className="text-primary font-semibold mt-1 mb-2 text-sm sm:text-base">
                  2024 - Present
                </p>
                <p className="text-muted-foreground/80 text-xs sm:text-sm md:text-base">
                <ul className="text-muted-foreground/80 text-xs sm:text-sm md:text-base list-disc pl-4 space-y-1">
               <li>Enhanced product categories to improve user engagement</li>
               <li>Conducted A/B testing to refine UI/UX decisions</li>
               <li>Developed reusable UI components, improving code efficiency</li>
               <li>Collaborated with designers and backend teams for seamless integration</li>
               <li>tracked performance metrics with Google Analytics & Microsoft Clerity</li>
               <li>Contributed to scalable solutions,</li>
  </ul>
                </p>
              </div>
            </motion.div>

            {/* Company B - Bottom Right */}
            <motion.div
              className="absolute bottom-[50px] right-4 md:right-10 w-[45%] text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={
                isCareerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Trivandrum City SVG */}
              <motion.svg
                width="150"
                height="100"
                viewBox="0 0 120 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -right-40 top-0 hidden md:block"
                initial={{ opacity: 0 }}
                animate={isCareerInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Padmanabhaswamy Temple inspired structure */}
                <motion.path
                  d="M35 60 L35 30 L45 20 L55 30 L55 60"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isCareerInView ? { pathLength: 1 } : { pathLength: 0 }
                  }
                  transition={{ duration: 1, delay: 0.7 }}
                />
                {/* Temple details */}
                <motion.path
                  d="M40 25 L50 25 M40 35 L50 35 M42 20 L48 15 L42 20"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isCareerInView ? { pathLength: 1 } : { pathLength: 0 }
                  }
                  transition={{ duration: 1, delay: 0.9 }}
                />
                {/* Palm trees */}
                <motion.path
                  d="M25 60 C25 55, 20 50, 25 45 C30 40, 30 50, 25 60 M65 60 C65 55, 60 50, 65 45 C70 40, 70 50, 65 60"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isCareerInView ? { pathLength: 1 } : { pathLength: 0 }
                  }
                  transition={{ duration: 1, delay: 1.1 }}
                />
                {/* Beach waves */}
                <motion.path
                  d="M75 60 C80 58, 85 62, 90 60 C95 58, 100 62, 105 60"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isCareerInView ? { pathLength: 1 } : { pathLength: 0 }
                  }
                  transition={{ duration: 1, delay: 1.3 }}
                />
                {/* Ground */}
                <motion.path
                  d="M20 60 L70 60"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isCareerInView ? { pathLength: 1 } : { pathLength: 0 }
                  }
                  transition={{ duration: 1, delay: 1.5 }}
                />
                {/* Trivandrum City Name */}
                <motion.text
                  x="35"
                  y="75"
                  className="text-[10px] font-caveat font-bold"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={isCareerInView ? { opacity: 0.7 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                   Bengaluru
                </motion.text>
              </motion.svg>
              <div className="md:max-w-[300px] ml-auto">
                <h3 className="text-base sm:text-lg md:text-xl font-bold">
                  React Developer Intern
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground/80 mb-2">
                Inventeron Technologies
                </p>
                <p className="text-primary font-semibold mt-1 mb-2 text-sm sm:text-base">
                Sep2023--Nov2023
                </p>
                <p className="text-muted-foreground/80 text-xs sm:text-sm md:text-base">
                I designed and developed a front-end web application employing HTML/CSS and JavaScript based
                on the provided specifications and wireframes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Separator Component */}
        <div className="container mx-auto px-4 py-8">
          <motion.svg
            width="100%"
            height="20"
            viewBox="0 0 600 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40 max-w-[400px] mx-auto"
          >
            <motion.path
              d="M0 10 H600"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        {/* Education Section */}
        <div
          ref={educationRef}
          className="container mx-auto px-4 py-4 md:py-12 relative mt-8 md:mt-0 mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 md:mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isEducationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
          >
            Education Journey
          </motion.h2>

          <div className="relative max-w-4xl mx-auto h-[250px] md:h-[250px] mt-8 md:mt-0">
            {/* Timeline Arrow SVG */}
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 100"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-1/2 -translate-y-1/2"
            >
              {/* Main Horizontal Line with Arrow */}
              <motion.path
                d="M50 50 L900 50 L890 40 M900 50 L890 60"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
                initial={{ pathLength: 0 }}
                animate={
                  isEducationInView ? { pathLength: 1 } : { pathLength: 0 }
                }
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.svg>

            {/* Pre-University - Left */}
            <motion.div
              className="absolute left-[5%] top-[-20px] md:top-[-20px] w-[40%] text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={
                isEducationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="md:max-w-[300px] relative">
                <h3 className="text-base md:text-lg lg:text-xl font-bold">
                  Pre-University Education
                </h3>
                <p className="text-muted-foreground/80 text-xs md:text-sm lg:text-base">
                  Science Stream 
                  <br />
                  RHPU College davanagere
                </p>
              </div>
            </motion.div>

            {/* University - Right */}
            <motion.div
              className="absolute top-[100px] sm:top-[80px] md:top-[100px] right-[5%] w-[40%] text-right"
              initial={{ opacity: 0, y: -50 }}
              animate={
                isEducationInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -50 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="md:max-w-[300px] ml-auto relative">
                <div className="pt-10 md:pt-14">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold">
                    Bachelor of Engineering in Electronics and Communication
                  </h3>
                  <p className="text-muted-foreground/80 text-xs md:text-sm lg:text-base">
                  P.E.S. Institute of Technology and Management Shivamogga,
                    <br />
                    Visvesvaraya Technological University Belagavi,
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Separator Component */}
        <div className="container mx-auto px-4 py-8">
          <motion.svg
            width="100%"
            height="20"
            viewBox="0 0 600 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40 max-w-[400px] mx-auto"
          >
            <motion.path
              d="M0 10 H600"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        {/* Let's Connect Section */}
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-12">
            {/* Hand-drawn SVG */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <svg
                width="100%"
                height="300"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-[400px] mx-auto"
              >
                {/* Ship Group */}
                <motion.g
                  initial={{ y: 0 }}
                  animate={{
                    y: [-8, 8, -8],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Ship Hull */}
                  <motion.path
                    d="M100 240 
                       L200 240 
                       L300 240 
                       L290 260 
                       L110 260 
                       L100 240"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="dark:opacity-80"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />

                  {/* Main Mast */}
                  <motion.path
                    d="M200 240 L200 120
                       M190 130 L210 130
                       M185 150 L215 150"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="dark:opacity-80"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />

                  {/* Main Sail */}
                  <motion.path
                    d="M200 120 L280 240
                       M200 130 L265 240
                       M200 150 L250 240"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="dark:opacity-60"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />

                  {/* Front Sail */}
                  <motion.path
                    d="M200 120 L120 240
                       M200 130 L135 240
                       M200 150 L150 240"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="dark:opacity-60"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />

                  {/* Flag */}
                  <motion.path
                    d="M200 120 L240 115 L200 110 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="dark:opacity-80"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  />

                  {/* Ship Details */}
                  <motion.path
                    d="M160 245 L170 245 M180 245 L190 245 M210 245 L220 245 M230 245 L240 245"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="dark:opacity-40"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                  />
                </motion.g>

                {/* Wind Effects */}
                <motion.g>
                  {/* Left side wind */}
                  <motion.path
                    d="M80 180 C90 180, 100 175, 110 180
                       M60 200 C70 200, 80 195, 90 200
                       M70 220 C80 220, 90 215, 100 220"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className="dark:opacity-30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: [0, 0.5, 0],
                      x: [20, -10, -30],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Right side wind */}
                  <motion.path
                    d="M290 160 C300 160, 310 155, 320 160
                       M300 190 C310 190, 320 185, 330 190
                       M280 210 C290 210, 300 205, 310 210"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className="dark:opacity-30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: [0, 0.5, 0],
                      x: [20, -10, -30],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1,
                    }}
                  />
                </motion.g>

                {/* Waves */}
                <motion.g>
                  <motion.path
                    d="M40 270 C80 265, 120 275, 160 270 C200 265, 240 275, 280 270 C320 265, 360 275, 400 270"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="dark:opacity-30"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <motion.path
                    d="M20 290 C60 285, 100 295, 140 290 C180 285, 220 295, 260 290 C300 285, 340 295, 380 290"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="dark:opacity-20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  />
                </motion.g>

                {/* Stars */}
                {[
                  { x: 100, y: 80, delay: 0.2 },
                  { x: 300, y: 100, delay: 0.5 },
                  { x: 150, y: 60, delay: 0.8 },
                  { x: 250, y: 70, delay: 1.1 },
                ].map((star, index) => (
                  <motion.path
                    key={index}
                    d={`M${star.x} ${star.y} l-3 -3 l3 3 l-3 3 l3 -3 l3 3 l-3 -3 l3 -3 l-3 3`}
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className="dark:opacity-50"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: star.delay,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Message */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-caveat">
              Let’s Build Something Incredible Together! 🚀
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I’m always eager to collaborate with developers, designers, and tech enthusiasts! 
                Feel free to explore my LinkedIn or download my resume. Whether it’s about an 
                 exciting project, a potential partnership, or just a great conversation about 
                 tech, I’d love to connect! ✨
              </p>
            </motion.div>
          </div>
        </div>

        {/* Centered Arrow pointing to social links */}
        <div className="relative w-full h-[200px] mb-8">
          <motion.svg
            width="150"
            height="150"
            viewBox="0 0 150 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <motion.path
              d="M20 40 
                 C 40 40, 80 40, 100 60
                 C 130 80, 130 120, 100 140
                 C 60 165, 20 140, 40 100
                 C 60 60, 110 90, 120 160
                 C 120 190, 120 200, 120 200"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="dark:opacity-80"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            {/* Arrow head with improved shape */}
            <motion.path
              d="M120 200 L110 190 M120 200 L130 190"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="dark:opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.7 }}
            />
          </motion.svg>
        </div>

        {/* Footer with Social Links */}
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-center space-x-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/syed-rizwan-sadiq/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-icon w-12 h-12 !static transform hover:scale-110 transition-transform duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path
                  fill="#0A66C2"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/userisRizz"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-icon w-12 h-12 !static transform hover:scale-110 transition-transform duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path
                  className="dark:fill-white fill-black"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                />
              </svg>
            </a>

         
            {/* Instagram */}
<a
  href="https://www.instagram.com/syed.rizwan.sk/?utm_source=ig_web_button_share_sheet"
  target="_blank"
  rel="noopener noreferrer"
  className="tech-icon w-12 h-12 !static transform hover:scale-110 transition-transform duration-300"
>
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="currentColor"
      d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zm0 2h9A3.5 3.5 0 0 1 20 7.5v9A3.5 3.5 0 0 1 16.5 20h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4zm9.75 1a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2A3.5 3.5 0 1 1 12 16a3.5 3.5 0 0 1 0-7z"
    />
  </svg>
</a>

          </div>
        <div className="text-center mt-8 text-sm text-muted-foreground/60">
  © {new Date().getFullYear()} Syed Rizwan K. All rights reserved.
</div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
