"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 relative">
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
            Education & Leadership
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Academic Background</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Bachelor of Information Systems
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-500 font-medium mb-2">
                    Yogyakarta University of Technology
                  </p>
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Currently Pursuing</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Yogyakarta, Indonesia</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Specializing in backend development, database systems, and server-side scripting with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Organizational Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
              Leadership Experience
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Deputy, Scientific Division
                </h4>
                <p className="text-emerald-600 dark:text-emerald-500 font-medium mb-2">HMSI – UTY</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">2023</p>
                <p className="text-slate-600 dark:text-slate-300">
                  Led academic initiatives and chaired the 2023 study club focused on backend and data systems.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Secretary, Student Council
                </h4>
                <p className="text-emerald-600 dark:text-emerald-500 font-medium mb-2">SMK N 1 Ponorogo</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">2020 – 2021</p>
                <p className="text-slate-600 dark:text-slate-300">
                  Coordinated major school events including "Amazing Moment with Guyon Waton 2020" and managed event
                  logistics with external vendors.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
