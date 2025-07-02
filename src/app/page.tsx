"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  User,
  ChevronDown
} from "lucide-react";
// Technology icons from react-icons
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiPytorch,
  SiTailwindcss,
  SiGit,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiExpo,
  SiSanity
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
              <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              Cole M. Puls
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                Cole M. Puls
              </h1>
              <p className="text-xl sm:text-2xl text-slate-200">
                Computer Science Student & Software Engineer
              </p>
              <p className="text-lg text-slate-300">
                Specializing in AI/ML, Mobile Development & Full-Stack Engineering
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="mailto:colepuls@me.com"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Mail size={20} />
                <span>Get in Touch</span>
              </a>
              <a
                href="https://github.com/colepuls"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/colepuls"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-12"
            >
              <button
                onClick={() => scrollToSection('about')}
                className="animate-bounce text-slate-400 hover:text-slate-200 transition-colors"
              >
                <ChevronDown size={32} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <User className="text-blue-600 mr-3" size={28} />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I&apos;m a passionate Computer Science student at the University of Missouri with a focus on 
                Artificial Intelligence, Software Development, and Machine Learning. I love building 
                innovative solutions that make a real impact.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently working as an Undergraduate Research Assistant in AI/ML and Mobile Sensing, 
                where I develop cutting-edge mobile applications and data pipelines for machine learning research.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-slate-300">
                  <MapPin size={16} />
                  <span>Columbia, MO</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <GraduationCap size={16} />
                  <span>Expected May 2027</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Phone size={16} />
                  <span>(573) 979-4058</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-700 p-8 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white">University of Missouri - Columbia</h4>
                  <p className="text-slate-300">B.S in Computer Science</p>
                  <p className="text-sm text-slate-400">Expected May 2027</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Concentrations:</h4>
                  <p className="text-slate-300">Artificial Intelligence, Software Development, Machine Learning</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Relevant Coursework:</h4>
                  <p className="text-slate-300">Data Structures & Algorithms, Object-Oriented Design, Neural Networks, Databases</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="text-blue-600 mr-3" size={28} />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {/* Research Assistant */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Undergraduate Research Assistant</h3>
                  <p className="text-blue-400 font-medium">AI/ML and Mobile Sensing Research</p>
                </div>
                <div className="flex items-center text-slate-400 text-sm">
                  <Calendar size={16} className="mr-1" />
                  <span>June 2025 - Present</span>
                </div>
              </div>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-start"><span className="text-blue-400 mr-2">•</span>Built iOS mobile sensing app for collecting passive sensor data (accelerometer, gyroscope, behavior patterns)</p>
                <p className="flex items-start"><span className="text-blue-400 mr-2">•</span>Designed real-time data pipeline for training AI models</p>
                <p className="flex items-start"><span className="text-blue-400 mr-2">•</span>Implemented secure auth and background uploads for longitudinal ML studies</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Kotlin Multiplatform', 'SwiftUI', 'AI/ML Research'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Software Engineering Intern */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Software Engineering Intern</h3>
                  <p className="text-blue-400 font-medium">The Sunrise State (Remote)</p>
                </div>
                <div className="flex items-center text-slate-400 text-sm">
                  <Calendar size={16} className="mr-1" />
                  <span>May 2025 - Present</span>
                </div>
              </div>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-start"><span className="text-blue-400 mr-2">•</span>Integrated headless CMS using Sanity Studio and Content Lake APIs</p>
                <p className="flex items-start"><span className="text-blue-400 mr-2">•</span>Built newsletter + auth system with Auth.js, Resend, Supabase</p>
                <p className="flex items-start"><span className="text-blue-400 mr-2">•</span>Collaborated using Vercel, GitHub, and Plane.so</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Next.js', 'Tailwind CSS', 'Sanity', 'TypeScript', 'Supabase'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Code className="text-blue-400 mr-3" size={28} />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
            </div>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Foreman Logging App */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-200 border border-slate-600 hover:border-blue-400"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">Foreman Logging App</h3>
                <a
                  href="https://github.com/colepuls/Langford-Log-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-slate-300 mb-4">
                Cross-platform mobile app for foremen to log job activities, hours, and photos at Langford Mechanical & Sheet Metal, INC.
              </p>
              <div className="space-y-2 text-sm text-slate-300 mb-4">
                <p className="flex items-start"><span className="text-blue-400 mr-2">•</span>Firebase Auth + Firestore for real-time data sync</p>
                <p className="flex items-start"><span className="text-blue-400 mr-2">•</span>REST API with secure image upload and automated email delivery</p>
                <p className="flex items-start"><span className="text-blue-400 mr-2">•</span>Built with Express.js, Multer, and Nodemailer</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Expo', 'Firebase', 'Node.js'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-900/50 text-blue-200 text-xs rounded-full border border-blue-700 hover:bg-blue-800/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4">May 2025 - July 2025</p>
            </motion.div>

            {/* Dream Keeper */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all duration-200 border border-slate-600 hover:border-green-400"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors">Dream Keeper</h3>
                <a
                  href="https://github.com/colepuls/DK-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-300 transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-slate-300 mb-4">
                AI-enhanced mobile app for dream journaling with Gemini-powered mood analysis and interactive chat features.
              </p>
              <div className="space-y-2 text-sm text-slate-300 mb-4">
                <p className="flex items-start"><span className="text-green-400 mr-2">•</span>Speech-to-text with animated UI and gesture-based navigation</p>
                <p className="flex items-start"><span className="text-green-400 mr-2">•</span>Backend with Express.js and async storage</p>
                <p className="flex items-start"><span className="text-green-400 mr-2">•</span>Interactive charts and AI mood analysis</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Expo', 'Node.js', 'Google Gemini API'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-green-900/50 text-green-200 text-xs rounded-full border border-green-700 hover:bg-green-800/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4">Mar 2025 - Present</p>
            </motion.div>

            {/* Formatly */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-200 border border-slate-600 hover:border-purple-400"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">Formatly - Universal Image Format Converter</h3>
                <a
                  href="https://github.com/colepuls/Formatly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-purple-300 transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-slate-300 mb-4">
                Web application supporting 27+ image formats including HEIC, RAW, PSD, EXR, SVG, and PDF with dual-engine conversion system.
              </p>
              <div className="space-y-2 text-sm text-slate-300 mb-4">
                <p className="flex items-start"><span className="text-purple-400 mr-2">•</span>Dual-engine conversion using Pillow for common formats and ImageMagick for advanced formats</p>
                <p className="flex items-start"><span className="text-purple-400 mr-2">•</span>Drag-and-drop interface with automatic format detection and error handling</p>
                <p className="flex items-start"><span className="text-purple-400 mr-2">•</span>Production-ready deployment with REST API endpoints and 16MB file upload support</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Flask', 'Pillow', 'ImageMagick', 'HTML/CSS', 'Gunicorn'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-900/50 text-purple-200 text-xs rounded-full border border-purple-700 hover:bg-purple-800/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4">June 2025</p>
            </motion.div>

            {/* Diabetes Risk Classifier */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-200 border border-slate-600 hover:border-orange-400"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">Diabetes Risk Classifier - Mizzou Hackathon 2025</h3>
                <a
                  href="https://github.com/colepuls/DiabetesPatientPredictor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-orange-300 transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-slate-300 mb-4">
                Multi-layer neural network with dropout for binary classification of clinical diabetes risk, built during a 72-hour hackathon.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300 mb-4">
                <div className="space-y-2">
                  <p className="flex items-start"><span className="text-orange-400 mr-2">•</span>Preprocessed real patient data with normalization and imputation</p>
                  <p className="flex items-start"><span className="text-orange-400 mr-2">•</span>Boosted model accuracy by 18% through data optimization</p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-start"><span className="text-orange-400 mr-2">•</span>Designed CLI interface with probability scores and interpretability</p>
                  <p className="flex items-start"><span className="text-orange-400 mr-2">•</span>Led 3-person team, delivering full ML pipeline in under 72 hours</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'CLI App', 'Machine Learning'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-orange-900/50 text-orange-200 text-xs rounded-full border border-orange-700 hover:bg-orange-800/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4">Feb 2025</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Code className="text-blue-400 mr-3" size={28} />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                {[
                  { name: 'Python', icon: SiPython, color: 'text-blue-400' },
                  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
                  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
                  { name: 'Java', icon: FaJava, color: 'text-orange-400' },
                  { name: 'C', icon: SiC, color: 'text-blue-600' },
                  { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3">
                    <skill.icon className={`${skill.color} text-2xl flex-shrink-0`} />
                    <span className="text-slate-300 text-left">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Frameworks</h3>
              <div className="space-y-4">
                {[
                  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
                  { name: 'React Native', icon: TbBrandReactNative, color: 'text-cyan-500' },
                  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
                  { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
                  { name: 'PyTorch', icon: SiPytorch, color: 'text-orange-400' },
                  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3">
                    <skill.icon className={`${skill.color} text-2xl flex-shrink-0`} />
                    <span className="text-slate-300 text-left">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Tools & Platforms</h3>
              <div className="space-y-4">
                {[
                  { name: 'Git', icon: SiGit, color: 'text-red-400' },
                  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-400' },
                  { name: 'Supabase', icon: SiSupabase, color: 'text-green-400' },
                  { name: 'Vercel', icon: SiVercel, color: 'text-white' },
                  { name: 'Sanity', icon: SiSanity, color: 'text-red-500' },
                  { name: 'Expo', icon: SiExpo, color: 'text-white' }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3">
                    <skill.icon className={`${skill.color} text-2xl flex-shrink-0`} />
                    <span className="text-slate-300 text-left">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Mail className="text-blue-400 mr-3" size={28} />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
            </div>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-lg text-slate-300 mb-8">
              I&apos;m always interested in discussing new opportunities, collaborations, or just connecting with fellow developers. 
              Feel free to reach out!
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:colepuls@me.com"
                className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors"
              >
                <Mail size={20} />
                <span>colepuls@me.com</span>
              </a>
              <a
                href="tel:573-979-4058"
                className="flex items-center justify-center space-x-3 border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white p-4 rounded-lg transition-colors"
              >
                <Phone size={20} />
                <span>(573) 979-4058</span>
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/colepuls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/colepuls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2025 Cole M. Puls. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
