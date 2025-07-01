import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Led development of multiple web applications using React and Node.js. Mentored junior developers and implemented best practices for code quality and performance.",
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Built responsive web applications and collaborated with design teams to create pixel-perfect user interfaces. Improved application performance by 40%.",
    },
    {
      title: "Web Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description:
        "Developed custom websites for clients across various industries. Specialized in e-commerce solutions and content management systems.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-light dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block bg-primary px-2 py-1 rounded-lg mb-4">
            <h2 className="text-4xl font-bold text-dark">Experience</h2>
          </div>
          <p className="text-lg text-dark/80 dark:text-white/80 max-w-3xl">
            My professional journey in web development, working with amazing teams and building impactful solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-dark border-2 border-dark dark:border-primary rounded-3xl shadow-lg"
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="inline-block bg-primary px-2 py-1 rounded-lg mb-2">
                      <span className="font-bold text-dark">{exp.period}</span>
                    </div>
                  </div>
                  <div className="md:col-span-3 space-y-3">
                    <h3 className="text-2xl font-bold text-dark dark:text-white">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-dark/70 dark:text-white/70">{exp.company}</h4>
                    <p className="text-dark/80 dark:text-white/80 leading-relaxed">{exp.description}</p>
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
