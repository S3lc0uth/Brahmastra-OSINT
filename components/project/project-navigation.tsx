"use client"
import { ArrowRight } from "lucide-react"
import TransitionLink from "../transition-link"

interface ProjectNavigationProps {
  href: string
  projectName: string
}

const ProjectNavigation = ({ href, projectName }: ProjectNavigationProps) => {
  return (
    <div className="text-center py-20">
      <TransitionLink href={href}>
        <div className="inline-flex items-center text-lg group">
          <span className="text-neutral-400 mr-4">Next Project</span>
          <span className="text-3xl font-bold group-hover:text-indigo-400 transition-colors duration-300">
            {projectName}
          </span>
          <ArrowRight className="ml-4 h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </TransitionLink>
    </div>
  )
}

export default ProjectNavigation
