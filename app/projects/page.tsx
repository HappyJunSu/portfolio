import { Header } from "components/header"
import { Footer } from "components/footer"
import { ProjectGrid } from "components/project-grid"
import { getProjects } from "lib/projects"

export const metadata = {
  title: "프로젝트 | 개발자 포트폴리오",
  description: "제가 지금까지 수행한 프로젝트들을 소개합니다.",
}

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">프로젝트</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          학업을 통해 배운 다양한 기술들을 활용한 팀 및 개인 프로젝트들을 소개합니다.
        </p>
        <ProjectGrid projects={projects} />
      </main>
      <Footer />
    </div>
  )
}
