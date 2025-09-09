"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Download
} from "lucide-react";
// Technology icons from react-icons
import {
  SiPython,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiExpress,
  SiPytorch,
  SiTensorflow,
  SiGit,
  SiFirebase,
  SiVercel,
  SiExpo,
  SiNodedotjs,
  SiKotlin,
  SiSwift,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiArduino,
  SiAutodesk,
  SiRender
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaTerminal, FaRobot } from "react-icons/fa";

// Enhanced components
import TypewriterText from "./components/TypewriterText";
import CursorTrail from "./components/CursorTrail";
import AnimatedButton from "./components/AnimatedButton";
import FloatingArrow from "./components/FloatingArrow";



const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typewriter text options
  const jobTitles = [
    "Robotics",
    "Embedded Software Engineering",
    "Machine Learning"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      {/* Cursor Trail */}
      <CursorTrail />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-enhanced z-40 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              Cole M. Puls
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex space-x-4 sm:space-x-8"
            >
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-zinc-400 hover:text-zinc-200 transition-colors duration-300 font-medium text-sm sm:text-base"
                >
                  {item}
                </button>
              ))}
            </motion.div>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-12"
          >
            {/* Enhanced Hero Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.4, 0, 0.2, 1]
              }}
              className="space-y-8"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white hero-title tracking-tight">
                Cole M. Puls
              </h1>
              
              {/* Typewriter Effect for Job Titles */}
              <div className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 min-h-[3rem]">
                <TypewriterText 
                  texts={jobTitles}
                  typingSpeed={100}
                  deletingSpeed={75}
                  pauseDuration={3000}
                  className="font-medium"
                />
              </div>
              
              <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                Focused on Robotics, Embedded Software Engineering, and Machine Learning
              </p>
            </motion.div>

            {/* Enhanced Animated Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <AnimatedButton
                href="mailto:colepuls@me.com"
                variant="outline"
                delay={0.1}
              >
                <Mail size={20} />
                <span>Email me</span>
              </AnimatedButton>
              
              <AnimatedButton
                href="/RE_Resume.pdf"
                download="Cole_Puls_RE_Resume.pdf"
                variant="outline"
                delay={0.2}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </AnimatedButton>
              
              <AnimatedButton
                href="https://github.com/colepuls"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                delay={0.3}
              >
                <Github size={20} />
                <span>GitHub</span>
              </AnimatedButton>
              
              <AnimatedButton
                href="https://linkedin.com/in/colepuls"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                delay={0.4}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </AnimatedButton>
            </motion.div>

            {/* Enhanced Floating Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="pt-16"
            >
              <FloatingArrow 
                onClick={() => scrollToSection('about')}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <User className="text-[#3f3f46] mr-4" size={32} />
              <h2 className="text-4xl sm:text-5xl font-bold text-white">About Me</h2>
            </div>
            <div className="w-20 h-1 bg-[#3f3f46] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8"
            >
              <p className="text-lg text-zinc-300 leading-relaxed">
                I&apos;m a Computer Science student at Mizzou focused on robotics, embedded systems, and AI/ML. I work on autonomy and perception with the Boston Dynamics Spot and build mobile sensing systems for AI research.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Beyond the lab, I contribute to underwater robotics projects, developing embedded control software for real-time sensing and thruster control.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-3 text-zinc-400">
                  <MapPin size={18} />
                  <span>Columbia, MO</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-400">
                  <GraduationCap size={18} />
                  <span>Expected May 2027</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-400">
                  <Phone size={18} />
                  <span>(573) 979-4058</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="card p-10"
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white text-lg">University of Missouri - Columbia</h4>
                  <p className="text-zinc-300 font-medium">B.S in Computer Science</p>
                  <p className="text-sm text-zinc-500">Expected May 2027</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Concentrations:</h4>
                  <p className="text-zinc-300">Robotics Engineering, Embedded Software Development, Machine Learning</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Relevant Coursework:</h4>
                  <p className="text-zinc-300">Artificial Intelligence, Software Security, Software Engineering</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <Briefcase className="text-[#3f3f46] mr-4" size={32} />
              <h2 className="text-4xl sm:text-5xl font-bold text-white">Experience</h2>
            </div>
            <div className="w-20 h-1 bg-[#3f3f46] mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-12">
            {/* Autonomous Systems Lab */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-30px" }}
              className="card p-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Undergraduate Research Assistant</h3>
                  <p className="text-zinc-300 font-medium text-lg">Autonomous Systems Lab • Robotics & Autonomy</p>
                </div>
                <div className="flex items-center text-zinc-400 text-sm mt-2 sm:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>Aug 2025 - Present</span>
                </div>
              </div>
              <div className="space-y-3 text-zinc-300 mb-6">
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Working with Boston Dynamics Spot on autonomy and perception research.</p>
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Developing ML algorithms with TensorFlow for navigation, sensing, and decision-making.</p>
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Contributing to SDK/ROS2 integration for advanced robot mobility.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <FaRobot className="text-zinc-300 text-3xl" title="Robotics" />
                <SiTensorflow className="text-orange-500 text-3xl" title="TensorFlow" />
              </div>
            </motion.div>

            {/* AI/ML and Mobile Sensing Research */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-30px" }}
              className="card p-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Undergraduate Research Assistant</h3>
                  <p className="text-zinc-300 font-medium text-lg">AI/ML and Mobile Sensing Research</p>
                </div>
                <div className="flex items-center text-zinc-400 text-sm mt-2 sm:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>May 2025 - Aug 2025</span>
                </div>
              </div>
              <div className="space-y-3 text-zinc-300 mb-6">
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Helped build iOS mobile sensing app for passive data collection (accelerometer, gyroscope, behavior patterns).</p>
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Designed real-time data pipeline for training AI models.</p>
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Implemented secure auth and background uploads for longitudinal ML studies.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <SiKotlin className="text-purple-400 text-3xl" title="Kotlin Multiplatform" />
                <SiSwift className="text-orange-400 text-3xl" title="SwiftUI" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <Code className="text-[#3f3f46] mr-4" size={32} />
              <h2 className="text-4xl sm:text-5xl font-bold text-white">Projects</h2>
            </div>
            <div className="w-20 h-1 bg-[#3f3f46] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Arduino Autonomous Robot */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-20px" }}
              className="card p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">Arduino Autonomous Robot</h3>
                <a
                  href="https://github.com/colepuls/FirstAutonomousRobot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
              <p className="text-zinc-300 mb-6 text-lg leading-relaxed">
                Designed and programmed a mobile robot with obstacle avoidance using ultrasonic sensing; built full chassis and electronics.
              </p>
              <div className="space-y-3 text-zinc-300 mb-8">
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Designed and 3D printed full chassis for a mobile robot.</p>
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Programmed embedded system in C++ to autonomously roam and avoid obstacles.</p>
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Demonstrated end-to-end build: hardware design, electronics, and control software.</p>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <SiArduino className="text-cyan-400 text-3xl" title="Arduino" />
                <SiAutodesk className="text-orange-400 text-3xl" title="Fusion 360" />
                <SiCplusplus className="text-blue-500 text-3xl" title="C++" />
              </div>
              <p className="text-sm text-zinc-500">Aug 2025 - Sep 2025</p>
            </motion.div>

            {/* Foreman Logging App */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-20px" }}
              className="card p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">Foreman Logging App</h3>
                <a
                  href="https://github.com/colepuls/Langford-Log-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
              <p className="text-zinc-300 mb-6 text-lg leading-relaxed">Developed cross-platform mobile app (App Store & Play Store) for foremen to log job activities, hours, and photos.</p>
              <div className="space-y-3 text-zinc-300 mb-8">
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Firebase Auth + Firestore for real-time data sync</p>
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>REST API with secure image upload and automated email delivery</p>
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Built with Express.js, Multer, and Nodemailer</p>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <TbBrandReactNative className="text-cyan-500 text-3xl" title="React Native" />
                <SiExpo className="text-white text-3xl" title="Expo" />
                <SiFirebase className="text-yellow-400 text-3xl" title="Firebase" />
                <SiNodedotjs className="text-green-400 text-3xl" title="Node.js" />
              </div>
              <p className="text-sm text-zinc-500">May 2025 - Present</p>
            </motion.div>

            {/* Formatly */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-20px" }}
              className="card p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">Formatly</h3>
                <a
                  href="https://github.com/colepuls/Formatly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
              <p className="text-zinc-300 mb-6 text-lg leading-relaxed">
                Universal image format converter web app with dual-engine conversion using Pillow and ImageMagick. Ad-free and fast.
              </p>
              <div className="space-y-3 text-zinc-300 mb-8">
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Supports 27+ formats (PNG, JPG, HEIC, RAW, PSD, EXR, SVG, PDF, etc.).</p>
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Drag-and-drop UI with error handling and automatic format detection.</p>
                <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Flask backend with Gunicorn, deployable with Docker or Render.</p>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <SiPython className="text-blue-400 text-3xl" title="Python" />
                <SiFlask className="text-white text-3xl" title="Flask" />
                <SiHtml5 className="text-orange-400 text-3xl" title="HTML" />
                <SiCss3 className="text-blue-500 text-3xl" title="CSS" />
                <SiVercel className="text-white text-3xl" title="Vercel" />
              </div>
            </motion.div>

            {/* Diabetes Risk Classifier */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, margin: "-20px" }}
              className="card p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">Diabetes Risk Classifier</h3>
                <a
                  href="https://github.com/colepuls/DiabetesPatientPredictor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
              <p className="text-zinc-300 mb-6 text-lg leading-relaxed">
                Multi-layer neural network with dropout for binary classification of clinical diabetes risk, built during Mizzou Hackathon 2025 in a 72-hour timeframe.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-zinc-300 mb-8">
                <div className="space-y-3">
                  <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Preprocessed real patient data with normalization and imputation</p>
                  <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Boosted model accuracy by 18% through data optimization</p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Designed CLI interface with probability scores and interpretability</p>
                  <p className="flex items-start"><span className="text-zinc-400 mr-3">•</span>Led 3-person team, delivering full ML pipeline in under 72 hours</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <SiPython className="text-blue-400 text-3xl" title="Python" />
                <SiPytorch className="text-orange-400 text-3xl" title="PyTorch" />
                <FaTerminal className="text-zinc-400 text-3xl" title="CLI App" />
              </div>
              <p className="text-sm text-zinc-500">Feb 2025</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <Code className="text-[#3f3f46] mr-4" size={32} />
              <h2 className="text-4xl sm:text-5xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="w-20 h-1 bg-[#3f3f46] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-30px" }}
              className="card p-10 text-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Languages</h3>
              <div className="space-y-6">
                {[
                  { name: 'Python', icon: SiPython, color: 'text-blue-400' },
                  { name: 'C', icon: SiC, color: 'text-blue-600' },
                  { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
                  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-4">
                    <skill.icon className={`${skill.color} text-3xl flex-shrink-0`} />
                    <span className="text-zinc-300 text-lg text-left">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-30px" }}
              className="card p-10 text-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Frameworks/Libraries</h3>
              <div className="space-y-6">
                {[
                  { name: 'PyTorch', icon: SiPytorch, color: 'text-orange-400' },
                  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
                  { name: 'React Native', icon: TbBrandReactNative, color: 'text-cyan-500' },
                  { name: 'Express', icon: SiExpress, color: 'text-zinc-400' }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-4">
                    <skill.icon className={`${skill.color} text-3xl flex-shrink-0`} />
                    <span className="text-zinc-300 text-lg text-left">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-30px" }}
              className="card p-10 text-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Tools & Platforms</h3>
              <div className="space-y-6">
                {[
                  { name: 'Git', icon: SiGit, color: 'text-red-400' },
                  { name: 'Arduino', icon: SiArduino, color: 'text-cyan-400' },
                  { name: 'Fusion 360', icon: SiAutodesk, color: 'text-orange-400' },
                  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-400' },
                  { name: 'Vercel', icon: SiVercel, color: 'text-white' },
                  { name: 'Expo', icon: SiExpo, color: 'text-white' },
                  { name: 'Render', icon: SiRender, color: 'text-blue-400' }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-4">
                    <skill.icon className={`${skill.color} text-3xl flex-shrink-0`} />
                    <span className="text-zinc-300 text-lg text-left">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <Mail className="text-[#3f3f46] mr-4" size={32} />
              <h2 className="text-4xl sm:text-5xl font-bold text-white">Get In Touch</h2>
            </div>
            <div className="w-20 h-1 bg-[#3f3f46] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-30px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
              I&apos;m always interested in discussing new opportunities, collaborations, or just connecting with fellow developers. 
              Feel free to reach out!
            </p>

            <div className="grid sm:grid-cols-3 gap-8 mb-12">
              <a
                href="mailto:colepuls@me.com"
                className="flex items-center justify-center gap-4 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white p-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail size={24} />
                <span className="font-medium">colepuls@me.com</span>
              </a>
              <a
                href="/RE_Resume.pdf"
                download="Cole_Puls_RE_Resume.pdf"
                className="flex items-center justify-center gap-4 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white p-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Download size={24} />
                <span className="font-medium">Download Resume</span>
              </a>
              <a
                href="tel:573-979-4058"
                className="flex items-center justify-center gap-4 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white p-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone size={24} />
                <span className="font-medium">(573) 979-4058</span>
              </a>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/colepuls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-200 transition-colors duration-300"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/colepuls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-200 transition-colors duration-300"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950/80 text-white py-12 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-zinc-400 text-lg">
            © 2025 Cole M. Puls
          </p>
        </div>
      </footer>
    </div>
  );
}
