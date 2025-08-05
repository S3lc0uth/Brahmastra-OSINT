"use client"
import { motion } from "framer-motion"

interface ProjectHeaderProps {
  title: string
  description: string
}

const ProjectHeader = ({ title, description }: ProjectHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 text-center py-16 px-4"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">{title}</h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-300">{description}</p>
    </motion.div>
  )
}

export default ProjectHeader
