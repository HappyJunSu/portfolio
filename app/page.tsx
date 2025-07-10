import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { ProjectsShowcase } from "../components/projects-showcase"
import { Skills } from "../components/skills"
import { Footer } from "../components/footer"
import { getProjects } from "../lib/projects"

export default function Home() {
  const projects = getProjects()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Skills />
        <ProjectsShowcase projects={projects} />
      </main>
      <Footer />
    </div>
  )
}
