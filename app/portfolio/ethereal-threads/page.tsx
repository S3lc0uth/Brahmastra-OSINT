import EtherealScene from "@/components/project/ethereal-scene"
import FeatureCard from "@/components/project/feature-card"
import ProjectHeader from "@/components/project/project-header"
import ProjectNavigation from "@/components/project/project-navigation"

const features = [
  {
    icon: "Wind",
    title: "Fluid Dynamics",
    description: "A real-time simulation of flowing, smoke-like threads using multi-layered noise algorithms.",
  },
  {
    icon: "Palette",
    title: "Generative Color",
    description:
      "Colors are blended and shifted procedurally, creating an endless palette of unique visual compositions.",
  },
  {
    icon: "Brush",
    title: "Interactive Flow",
    description: "Influence the direction and intensity of the threads with your cursor, becoming part of the artwork.",
  },
]

const EtherealThreadsPage = () => {
  return (
    <div>
      <div className="relative h-screen">
        <EtherealScene />
        <div className="absolute inset-0 flex items-center justify-center">
          <ProjectHeader
            title="Ethereal Threads"
            description="An interactive artwork that weaves light, color, and motion into a mesmerizing digital tapestry. Guide the flow and watch as new patterns emerge."
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

      <ProjectNavigation href="/portfolio/quantum-leap" projectName="Quantum Leap" />
    </div>
  )
}

export default EtherealThreadsPage
