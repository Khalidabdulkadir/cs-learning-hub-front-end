import React from "react";
import aboutImage from "../images/Aboutimg.png";
import { FaLaptopCode, FaUsers, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import "./About.css"; // Create this CSS file

const About = () => {
  const features = [
    { icon: <FaLaptopCode />, title: "Practical Coding" },
    { icon: <FaUsers />, title: "Community Driven" },
    { icon: <FaLightbulb />, title: "Innovation First" },
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <motion.div
            className="col-md-6 mb-4 mb-md-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-text mb-4 fw-bold display-5">
              About CS Learning Hub
            </h2>
            <p className="lead mb-4">
              Welcome to our Computer Science Learning Hub! We provide beginner to
              advanced learners with curated resources, expert-led sessions, and a
              supportive community to help you grow as a developer and innovator.
            </p>
            
            <div className="row g-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="col-12 col-sm-4"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-card text-center p-3 h-100">
                    <div className="icon-wrapper mb-3">
                      <span className="feature-icon">{feature.icon}</span>
                    </div>
                    <h3 className="h5 mb-0">{feature.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="image-container position-relative">
              <div className="gradient-bg"></div>
              <img
                src={aboutImage}
                alt="About section"
                className="main-image img-fluid rounded-3 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;