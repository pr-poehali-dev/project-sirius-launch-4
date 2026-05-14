import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Английский язык",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            В английском степени сравнения образуются по двум правилам: суффиксы <strong>-er / -est</strong> для коротких 
            прилагательных и слова <strong>more / most</strong> для длинных.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              short → shorter → the shortest (короткий)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              beautiful → more beautiful → the most beautiful (красивый)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              good → better → the best / bad → worse → the worst (исключения)
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Русский язык",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            В русском языке сравнительная степень образуется суффиксами <strong>-ее / -е / -ше</strong>, 
            а превосходная — суффиксами <strong>-ейш- / -айш-</strong> или словами «самый / наиболее».
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              быстрый → быстрее → самый быстрый
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              красивый → красивее → красивейший / самый красивый
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              хороший → лучше → самый лучший (исключение)
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Сравниваем языки",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Оба языка выражают те же три степени, но разными способами. Понимание параллелей 
            помогает запомнить правила быстрее.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              big / большой → bigger / больше → the biggest / самый большой
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              cold / холодный → colder / холоднее → the coldest / самый холодный
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              interesting / интересный → more interesting / интереснее → the most interesting / наиболее интересный
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Сравниваем два языка</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Разбираем, как образуются степени сравнения в английском и русском языках — 
            с правилами, примерами и параллелями между языками.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}