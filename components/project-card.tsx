import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "../lib/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
        {/* 이미지 영역 */}
        <div className="relative aspect-video bg-muted flex items-center justify-center">
          <Image
            src={project.coverImage || "/placeholder.svg?height=600&width=800"}
            alt={`${project.title} 프로젝트 대표 이미지`}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* 텍스트 정보 */}
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">{project.title}</CardTitle>
          <CardDescription>{project.summary}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <Badge key={`${tech}-${index}`} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
