import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Анна, 10 класс",
    role: "Ученица, школа №45",
    avatar: "/professional-woman-scientist.png",
    content:
      "Наконец-то поняла, когда писать more, а когда -er! Таблица с параллелями английского и русского — просто находка.",
  },
  {
    name: "Дмитрий, студент",
    role: "1 курс, лингвистический факультет",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Очень удобно, что примеры даны сразу на двух языках. Сразу видишь логику и легче запоминаешь исключения.",
  },
  {
    name: "Мария Ивановна",
    role: "Учитель английского языка",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Использую эту презентацию на уроках — дети сразу схватывают разницу между сравнительной и превосходной степенью.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят студенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Отзывы учеников и преподавателей о материале по степеням сравнения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}