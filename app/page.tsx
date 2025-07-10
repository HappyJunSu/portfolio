import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { ProjectsShowcase } from "../components/projects-showcase"
import { Skills } from "../components/skills"
import { Footer } from "../components/footer"
import { getProjects } from "../lib/projects"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main role="main" aria-label="메인 콘텐츠 영역">
        <Hero />
        <Skills />
        <ProjectsShowcase projects={projects} />
      </main>
      <Footer />
    </div>
  )
}
