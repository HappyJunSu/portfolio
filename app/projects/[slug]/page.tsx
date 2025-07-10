import { Header } from "components/header"
import { Footer } from "components/footer"
import { ProjectDetail } from "components/project-detail"
import { getProject, getProjects } from "lib/projects"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const projects = getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다",
    }
  }

  return {
    title: `${project.title} | 포트폴리오`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </div>
  )
}