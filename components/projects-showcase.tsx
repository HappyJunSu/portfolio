import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "../components/project-card"
import type { Project } from "../lib/projects"

interface ProjectsShowcaseProps {
  projects: Project[]
}

export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">프로젝트</h2>
            <Button variant="outline" asChild>
              <Link href="/projects">모든 프로젝트 보기</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
