import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1. It showcases feature X and solves problem Y.",
    link: "https://github.com/yourusername/project1",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    thumbnail: "/api/placeholder/400/320?text=Project+1", 
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2. It focuses on feature A and improves process B.",
    link: "https://github.com/yourusername/project2",
    techStack: ["Node.js", "Express", "MongoDB"],
    thumbnail: "/api/placeholder/400/320?text=Project+2",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3. It highlights feature M and optimizes task N.",
    link: "https://github.com/yourusername/project3",
    techStack: ["Python", "Django", "PostgreSQL"],
    thumbnail: "/api/placeholder/400/320?text=Project+3",
  },
];

const FuturisticProjects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Variants for header animations
  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };

  // Variants for card animations
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Particle effect component
  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute dark:bg-blue-500 bg-indigo-500 rounded-full w-2 h-2 opacity-30"
            animate={{
              x: [Math.random() * 100, Math.random() * window.innerWidth],
              y: [Math.random() * 100, Math.random() * window.innerHeight],
              opacity: [0.1, 0.8, 0.1],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    );
  };

  // Card hover effect
  const hoverStaggerEffect = (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.05
      }
    };
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-white dark:from-gray-900 dark:via-blue-900 dark:to-black text-gray-800 dark:text-white py-16 px-4 overflow-hidden transition-colors duration-300">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-white dark:bg-black opacity-80 z-0 transition-colors duration-300" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full opacity-10 dark:bg-[radial-gradient(rgba(56,182,255,0.8)_1px,transparent_1px)] bg-[radial-gradient(rgba(79,70,229,0.8)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
      
      {/* Floating particles */}
      <ParticleBackground />
      
      <motion.div 
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto z-10 relative"
      >
        {/* Header section with animation */}
        <motion.div variants={headerVariants} className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-blue-400 dark:to-purple-600 mb-6 transition-colors duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            My Projects
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-blue-200 max-w-3xl mx-auto transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Explore some of the innovative projects I have worked on. Hover over and click on the cards to learn more.
          </motion.p>
        </motion.div>
        
        {/* Projects grid with staggered animation */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`project-${index}`}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedId(index)}
              className="relative bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 bg-gradient-to-br from-white to-gray-100 rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-blue-900/30 shadow-lg dark:shadow-blue-900/5 backdrop-blur-sm transition-colors duration-300"
              style={{ zIndex: selectedId === index ? 40 : 10 }}
            >
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Project image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.thumbnail}
                  alt={`${project.title} Thumbnail`}
                  className="w-full h-full object-cover transition-transform"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent opacity-60 transition-colors duration-300" />
              </div>
              
              {/* Content section */}
              <div className="p-6 relative z-20">
                <motion.h2 
                  className="text-2xl font-bold mb-3 text-indigo-600 dark:text-blue-300 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={hoverStaggerEffect(0)}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-700 dark:hover:text-blue-400 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.title}
                  </a>
                </motion.h2>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={hoverStaggerEffect(1)}
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hoverStaggerEffect(2)}
                >
                  <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-blue-200 transition-colors duration-300">Tech Stack:</h3>
                  <motion.div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-indigo-100 dark:bg-blue-800/70 text-indigo-700 dark:text-blue-100 px-3 py-1 rounded-full text-sm border border-indigo-200 dark:border-blue-500/30 transition-colors duration-300"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(79, 70, 229, 0.2)",
                          color: "rgba(79, 70, 229, 1)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-indigo-300 dark:border-blue-400 opacity-60 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-indigo-300 dark:border-blue-400 opacity-60 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FuturisticProjects;