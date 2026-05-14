import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Когда использовать -er/-est, а когда more/most?",
      answer:
        "Правило простое: если прилагательное короткое (1 слог — tall, big, hot; или 2 слога на -y — happy, easy), добавляем -er/-est. Для всех остальных (3+ слога) — more/most. Например: tall → taller → the tallest, но beautiful → more beautiful → the most beautiful.",
    },
    {
      question: "Какие прилагательные в английском — исключения?",
      answer:
        "Три главных исключения: good → better → the best; bad → worse → the worst; far → farther/further → the farthest/furthest. Их нужно просто запомнить.",
    },
    {
      question: "Как образуется сравнительная степень в русском?",
      answer:
        "Добавляем суффикс -ее (быстрый → быстрее), -е после шипящих (тихий → тише), или -ше (старый → старше). Есть и составная форма: более + прилагательное (более красивый).",
    },
    {
      question: "Как образуется превосходная степень в русском?",
      answer:
        "Два способа: 1) Суффиксы -ейш-/-айш-: красивый → красивейший, высокий → высочайший. 2) Слова «самый» или «наиболее» + прилагательное: самый красивый, наиболее интересный.",
    },
    {
      question: "Одинаково ли работают степени сравнения в двух языках?",
      answer:
        "По смыслу — да, одинаково: три степени (положительная, сравнительная, превосходная) есть в обоих языках. Но способы образования разные: английский чаще использует суффиксы или отдельные слова, русский — богаче на суффиксы.",
    },
    {
      question: "Как быстро запомнить правила?",
      answer:
        "Лучший способ — учить парами: сразу запоминать все три формы (big — bigger — the biggest). Создайте свою таблицу с 10-15 прилагательными, которые чаще всего встречаются, и проверяйте себя каждый день.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Разбираем самые распространённые вопросы о степенях сравнения в английском и русском языках.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}