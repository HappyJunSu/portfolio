import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutContent() {
  const skills = {
    webdev: ["React", "Node.js", "MySQL", "HTML/CSS", "JavaScript"],
    gamedev: ["Unity", "C#", "VR 개발", "게임 디자인"],
    programlan: ["JavaScript", "TypeScript", "Python", "C", "C#", "SQL"],
    ecttech: ["Raspberry Pi", "Python (IoT 및 API 연동)", "카카오톡 API"],
  }

  const education = [
    {
      degree: "컴퓨터 공학 학사",
      institution: "동국대학교",
      year: "2025",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">소개</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image src="/images/profile/profile.jpg" alt="프로필 사진" fill className="object-contain object-top" />
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">안녕하세요!</h2>
          <div className="space-y-4 text-lg">
            <p>
              저는 IT 분야에서 성장하며 의미 있는 서비스를 만들고자 하는 취업 준비생 이준수 입니다.<p></p>
              사용자 중심의 웹 애플리케이션은 물론, 몰입감 있는 게임 콘텐츠에도 관심을 가지고 다양한 기술을 탐구해왔습니다.
            </p>
            <p>
              웹 개발에서는 React와 Node.js, 게임 개발에서는 Unity와 C#을 주로 사용하며, 실제 서비스를 기획하고 구현해보는 과정을 통해 개발 역량을 키워가고 있습니다.<p></p>
              새로운 기술을 배우는 데 흥미를 느끼며, 문제 해결 과정에서 얻는 성취감을 통해 꾸준히 성장해왔습니다.
            </p>
            <p>
              팀 프로젝트와 개인 프로젝트를 병행하며 협업 능력과 실전 감각을 길러왔고, 
              앞으로도 사용자에게 실질적인 가치를 전달하는 개발자가 되기 위해 노력하고 있습니다.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">기술 스택</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">웹 개발</h3>
              <div className="flex flex-wrap gap-2">
                {skills.webdev.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">게임 개발</h3>
              <div className="flex flex-wrap gap-2">
                {skills.gamedev.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">프로그래밍 언어</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programlan.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">기타 기술</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ecttech.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">학력</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary">{edu.institution}</span>
                  <span className="text-muted-foreground">{edu.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
