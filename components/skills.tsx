import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "웹 개발",
      skills: ["React", "Node.js", "MySQL", "HTML/CSS", "JavaScript"],
    },
    {
      title: "게임 개발",
      skills: ["Unity", "C#", "VR 개발", "게임 디자인"],
    },
    {
      title: "프로그래밍 언어",
      skills: ["JavaScript", "TypeScript", "Python", "C", "C#", "SQL"],
    },
    {
      title: "기타 기술",
      skills: ["Raspberry Pi", "Python (IoT 및 API 연동)", "카카오톡 API"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">기술 스택</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card shadow-md transition-all"
              >
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
