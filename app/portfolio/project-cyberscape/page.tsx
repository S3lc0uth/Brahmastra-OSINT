import CyberscapeScene from "@/components/project/cyberscape-scene"
import FeatureCard from "@/components/project/feature-card"
import ProjectHeader from "@/components/project/project-header"
import ProjectNavigation from "@/components/project/project-navigation"

const features = [
  {
    icon: "Cpu",
    title: "Procedural Generation",
    description: "A dynamic, ever-changing digital landscape generated in real-time using custom GLSL shaders.",
  },
  {
    icon: "Code",
    title: "Interactive Glitch Effects",
    description: "Mouse movements trigger visual distortions, simulating a fluctuating data stream.",
  },
  {
    icon: "Share2",
    title: "Optimized Performance",
    description: "High-performance rendering achieved by offloading complex calculations to the GPU.",
  },
]

const ProjectCyberscapePage = () => {
  return (
    <div>
      <div className="relative h-screen">
        <CyberscapeScene />
        <div className="absolute inset-0 flex items-center justify-center">
          <ProjectHeader
            title="Project Cyberscape"
            description="An immersive journey into a procedurally generated digital world. Experience a reality constructed from pure data, where light and geometry intertwine."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>

      <ProjectNavigation href="/portfolio/ethereal-threads" projectName="Ethereal Threads" />
    </div>
  )
}

export default ProjectCyberscapePage
