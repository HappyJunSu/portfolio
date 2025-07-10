import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectGrid } from "../components/project-grid"
import type { Project } from "../lib/projects"

interface ProjectsShowcaseProps {
  projects: Project[]
}

export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">프로젝트</h2>
            <Button variant="outline" asChild>
              <Link href="/projects">모든 프로젝트 보기</Link>
            </Button>
          </div>

          {/* 통일된 ProjectGrid 컴포넌트 사용 */}
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </section>
  )
}
