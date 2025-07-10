import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "../lib/projects"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 mb-8">
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
        <Image
          src={project.coverImage || "/placeholder.svg?height=600&width=800"}
          alt={project.title}
          fill
          className="object-contain bg-black"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: project.content }} />
      </div>

      {project.images && project.images.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">프로젝트 이미지</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg?height=600&width=800"}
                  alt={`${project.title} 스크린샷 ${index + 1}`}
                  fill
                  className="object-contain bg-black"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
