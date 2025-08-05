"use client"
import { motion } from "framer-motion"
import { 
  Brush, 
  Palette, 
  Wind, 
  Code, 
  Cpu, 
  Share2, 
  Atom, 
  Zap, 
  Infinity 
} from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  index: number
}

const iconMap = {
  Brush,
  Palette,
  Wind,
  Code,
  Cpu,
  Share2,
  Atom,
  Zap,
  Infinity,
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const Icon = iconMap[icon as keyof typeof iconMap]
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-500 text-white mb-6">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  )
}

export default FeatureCard
