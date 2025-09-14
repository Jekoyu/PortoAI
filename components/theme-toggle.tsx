"use client"

// Create a new component for the theme toggle that can be reused

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Handle theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative ${className}`}
    >
      <Button
        variant="outline"
        size="default"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 px-3 flex items-center gap-2"
      >
        {theme === "dark" ? (
          <>
            <Sun className="h-4 w-4 text-amber-500" />
            <span className="text-sm">Light</span>
          </>
        ) : (
          <>
            <Moon className="h-4 w-4 text-slate-700" />
            <span className="text-sm">Dark</span>
          </>
        )}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={false}
          animate={{
            backgroundColor: theme === "dark" ? "rgba(30, 41, 59, 0.2)" : "rgba(255, 255, 255, 0.2)",
            border: theme === "dark" ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
          }}
          transition={{ duration: 0.5 }}
        />
      </Button>
    </motion.div>
  )
}
