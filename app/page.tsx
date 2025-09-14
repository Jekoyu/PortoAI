"use client"

import { Github, Linkedin, Mail, ExternalLink, Server, Database, Code, Cpu, Globe, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { EducationSection } from "@/components/education-section"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const [themeTransition, setThemeTransition] = useState(false)

  useEffect(() => {
    if (mounted && theme) {
      setThemeTransition(true)
      const timer = setTimeout(() => setThemeTransition(false), 500)
      return () => clearTimeout(timer)
    }
  }, [theme, mounted])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "experience", "education", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      {themeTransition && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white dark:bg-slate-900 pointer-events-none"
          transition={{ duration: 0.2 }}
        />
      )}
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl text-slate-900 dark:text-white"
          >
            <span className="text-emerald-600 dark:text-emerald-500">{"<"}</span>
            Joko.Dev
            <span className="text-emerald-600 dark:text-emerald-500">{"/>"}</span>
          </motion.div>

          <nav className="hidden md:flex space-x-6">
            {["about", "skills", "projects", "experience", "education", "contact"].map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={`#${section}`}
                  className={`text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-500 transition relative ${
                    activeSection === section ? "font-medium" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-500"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex space-x-2 items-center">
            {mounted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <ThemeToggle />
              </motion.div>
            )}
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/joko-yuliyanto-783108180" target="_blank" aria-label="LinkedIn">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 dark:bg-emerald-700 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl"></div>

            {/* Theme-specific decorations */}
            <motion.div
              initial={false}
              animate={{ opacity: theme === "dark" ? 0.15 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-40 right-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"
            />
            <motion.div
              initial={false}
              animate={{ opacity: theme === "light" ? 0.1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-40 left-1/4 w-32 h-32 bg-purple-400 rounded-full blur-2xl"
            />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
                Backend Developer
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Backend Developer & <span className="text-emerald-600 dark:text-emerald-500">System Architect</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                A detail-oriented Information Systems student specializing in backend development, database systems, and
                server-side scripting using modern frameworks. Committed to delivering scalable, secure, and efficient
                software solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  className="border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                >
                  Contact Me
                </Button>
              </div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-8 h-12 rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center items-start p-1">
                  <motion.div
                    className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900"></div>

          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block mb-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
                My Expertise
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  icon: <Server className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
                  title: "Backend Development",
                  skills: "Node.js, Express, NestJS, Django, Flask, Spring Boot",
                },
                {
                  icon: <Database className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
                  title: "Database Systems",
                  skills: "PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch",
                },
                {
                  icon: <Code className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
                  title: "API Development",
                  skills: "RESTful APIs, GraphQL, WebSockets, gRPC",
                },
                {
                  icon: <Cpu className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
                  title: "DevOps",
                  skills: "Docker, Kubernetes, CI/CD, AWS, Azure, GCP",
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Theme-specific decoration */}
                  <motion.div
                    className="absolute -right-4 -top-4 w-16 h-16 rounded-full"
                    initial={false}
                    animate={{
                      backgroundColor: theme === "dark" ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.05)",
                      scale: theme === "dark" ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg inline-block mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/30 transition-colors duration-300 relative z-10">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white relative z-10">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 relative z-10">{skill.skills}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
                Technical Skills & Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["PHP", "JavaScript", "Laravel", "Express.js", "MySQL", "Bootstrap", "Git", "RESTful APIs"].map(
                  (lang, index) => (
                    <motion.span
                      key={lang}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-slate-800 dark:text-slate-200 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700"
                    >
                      {lang}
                    </motion.span>
                  ),
                )}
              </div>

              <h4 className="text-xl font-semibold text-center mb-6 text-slate-900 dark:text-white">
                Additional Skills
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Digital Marketing",
                  "Social Media Management",
                  "Content Strategy",
                  "Campaign Development",
                  "Paid Advertising",
                  "Analytics Tools",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 text-sm shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"></div>

          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block mb-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
                My Work
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  title: "Employee Information System",
                  description: "Complete web-based HR system with login, attendance, and report generation modules",
                  tech: ["Laravel", "MySQL", "Bootstrap"],
                  link: "#",
                },
                {
                  title: "Academic Platform API Integration",
                  description:
                    "Middleware that integrated academic modules with student dashboards, reducing load time by 30%",
                  tech: ["Express.js", "Laravel", "API Integration"],
                  link: "#",
                },
                {
                  title: "Client-Specific Applications",
                  description:
                    "Robust backend systems supporting various client applications with third-party integrations",
                  tech: ["PHP", "Laravel", "RESTful APIs"],
                  link: "#",
                },
                {
                  title: "Student Platform Backend",
                  description:
                    "Backend functionalities for academic platforms with modular APIs and user role management",
                  tech: ["Express.js", "Laravel", "Cloud Solutions"],
                  link: "#",
                },
                {
                  title: "Internal Employee System",
                  description:
                    "Complete employee management system from data modeling to UI support with CRUD functionalities",
                  tech: ["PHP", "MySQL", "Web Development"],
                  link: "#",
                },
                {
                  title: "Microservices Architecture",
                  description: "Developed multiple microservices with proper documentation and Agile methodology",
                  tech: ["PHP", "Laravel", "Microservices", "Git"],
                  link: "#",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700 group"
                >
                  <div className="h-3 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs text-slate-800 dark:text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-emerald-600 dark:text-emerald-500 hover:underline group-hover:font-medium"
                    >
                      <span className="relative">
                        View Project
                        <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-500 group-hover:w-full transition-all duration-300" />
                      </span>
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-transparent"
              >
                View All Projects <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="py-20 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900"></div>

          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block mb-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
                My Journey
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Work Experience</h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  role: "Back-End Developer",
                  company: "Intechgrasi.id",
                  period: "May 2025 – Present",
                  description:
                    "Engineered robust backend systems using PHP and Laravel/Express. Developed RESTful APIs, handled third-party integrations, and optimized database queries with security best practices.",
                },
                {
                  role: "Back-End Developer",
                  company: "UTY Software House",
                  period: "Aug 2024 – Present",
                  description:
                    "Designed backend functionalities for academic platforms using Express.js and Laravel. Built modular APIs, managed user roles, and integrated cloud solutions.",
                },
                {
                  role: "Junior Programmer",
                  company: "Integra Multi Solutindo",
                  period: "2022 – 2024",
                  description:
                    "Managed internal employee system development, built CRUD functionalities, performed troubleshooting, and ensured website performance and SEO readiness.",
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative pl-8 border-l-2 border-emerald-200 dark:border-emerald-800"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div
                    className="absolute w-5 h-5 bg-emerald-600 dark:bg-emerald-500 rounded-full -left-[11px] top-1 z-10 shadow-lg shadow-emerald-200 dark:shadow-emerald-900"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                  <div className="absolute w-9 h-9 bg-emerald-100 dark:bg-emerald-900/30 rounded-full -left-[18px] -top-1 z-0" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-emerald-600 dark:text-emerald-500 font-medium">{job.company}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <EducationSection />

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"></div>

          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="inline-block mb-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
                Get In Touch
              </div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Let's Work Together</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                I'm currently available for freelance work and full-time positions. If you're looking for a backend
                developer to join your team or help with a project, let's connect!
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Mail className="h-5 w-5" /> jekoyu157@gmail.com
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn Profile
                </Button>
              </div>
              <div className="text-center mb-8">
                <p className="text-slate-600 dark:text-slate-300">📱 +62 896 9674 1231 | 📧 jekoyu157@gmail.com</p>
              </div>

              <motion.div
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Quick Contact</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-500 transition-colors duration-200"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-500 transition-colors duration-200"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-500 transition-colors duration-200"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-500 transition-colors duration-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Floating theme indicator */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full shadow-lg bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 h-12 w-12"
        >
          {theme === "dark" ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-slate-700" />}
        </Button>
      </motion.div>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
            initial={false}
            animate={{
              backgroundColor: theme === "dark" ? "rgb(16, 185, 129)" : "rgb(52, 211, 153)",
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
            initial={false}
            animate={{
              backgroundColor: theme === "dark" ? "rgb(37, 99, 235)" : "rgb(59, 130, 246)",
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-bold text-2xl mb-2">
                <span className="text-emerald-500">{"<"}</span>
                Joko.Dev
                <span className="text-emerald-500">{"/>"}</span>
              </div>
              <p className="text-slate-400">Information Systems Student & Backend Developer</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center md:items-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex space-x-4 mb-4">
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/joko-yuliyanto-783108180" target="_blank" aria-label="LinkedIn">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:jekoyu157@gmail.com" aria-label="Email">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://example.com" target="_blank" aria-label="Website">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all duration-300"
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Joko.Dev. All rights reserved.</p>
                <div className="text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-400">
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
