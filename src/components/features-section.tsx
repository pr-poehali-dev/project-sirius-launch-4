import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Положительная степень",
    description: "Описывает качество без сравнения. EN: big, happy, interesting. RU: большой, весёлый, интересный.",
    icon: "brain",
    badge: "Positive",
  },
  {
    title: "Сравнительная степень",
    description: "Сравнивает два предмета. EN: bigger, happier, more interesting. RU: больше, веселее, интереснее.",
    icon: "zap",
    badge: "Comparative",
  },
  {
    title: "Превосходная степень",
    description: "Выделяет один предмет среди всех. EN: the biggest, the most interesting. RU: самый большой, наиболее интересный.",
    icon: "target",
    badge: "Superlative",
  },
  {
    title: "Правило -er / -est",
    description: "Короткие прилагательные (1-2 слога): добавляем -er и -est. EN: tall → taller → the tallest.",
    icon: "lock",
    badge: "Правило",
  },
  {
    title: "Правило more / most",
    description: "Длинные прилагательные (3+ слога): используем more и most. EN: beautiful → more beautiful → the most beautiful.",
    icon: "globe",
    badge: "Правило",
  },
  {
    title: "Исключения",
    description: "Неправильные формы нужно запомнить! EN: good → better → the best. RU: хороший → лучше → самый лучший.",
    icon: "link",
    badge: "Исключения",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Три степени сравнения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            В английском и русском языках прилагательные имеют три степени — разбираем каждую с примерами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}