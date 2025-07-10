import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">연락처</CardTitle>
          <CardDescription>취업 기회나 프로젝트 협업에 관심이 있으시면 언제든지 연락주세요!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">이메일</p>
                <p className="text-muted-foreground">tvi***@naver.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">전화번호</p>
                <p className="text-muted-foreground">+82 10-****-2317</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">위치</p>
                <p className="text-muted-foreground">경기도 용인시 기흥구, 대한민국</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
