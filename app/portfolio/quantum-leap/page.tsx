import QuantumScene from "@/components/project/quantum-scene"
import FeatureCard from "@/components/project/feature-card"
import ProjectHeader from "@/components/project/project-header"
import ProjectNavigation from "@/components/project/project-navigation"

const features = [
  {
    icon: "Atom",
    title: "Particle Physics",
    description:
      "A GPU-accelerated particle system simulating quantum foam, with millions of points rendered in real-time.",
  },
  {
    icon: "Zap",
    title: "Interactive Field",
    description:
      "Your cursor acts as a gravitational force, warping the particle field and creating dynamic visual effects.",
  },
  {
    icon: "Infinity",
    title: "Endless Possibilities",
    description:
      "The simulation is non-deterministic, ensuring that every interaction creates a unique and unrepeatable pattern.",
  },
]

const QuantumLeapPage = () => {
  return (
    <div>
      <div className="relative h-screen">
        <QuantumScene />
        <div className="absolute inset-0 flex items-center justify-center">
          <ProjectHeader
            title="Quantum Leap"
            description="An interactive simulation of a quantum field. Disturb the fabric of spacetime with your cursor and witness the chaotic beauty of particle physics."
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

      <ProjectNavigation href="/portfolio/project-cyberscape" projectName="Project Cyberscape" />
    </div>
  )
}

export default QuantumLeapPage
