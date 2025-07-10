import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactItems = [
  {
    icon: Mail,
    label: "이메일",
    value: "tvi***@naver.com",
    ariaLabel: "이메일 주소",
  },
  {
    icon: Phone,
    label: "전화번호",
    value: "+82 10-****-2317",
    ariaLabel: "전화번호",
  },
  {
    icon: MapPin,
    label: "위치",
    value: "경기도 용인시 기흥구, 대한민국",
    ariaLabel: "위치 정보",
  },
]

export function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">연락처</CardTitle>
          <CardDescription>
            취업 기회나 프로젝트 협업에 관심이 있으시면 언제든지 연락주세요!
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid gap-4">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50"
                aria-label={item.ariaLabel}
              >
                <item.icon className="h-6 w-6 text-primary" role="img" aria-hidden="true" />
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
