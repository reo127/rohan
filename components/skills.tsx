import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Database, Globe, Smartphone, Zap } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      icon: Code,
      technologies: ["React", "Next.js", "JavaScript","TypeScript", "Tailwind CSS", "Bootstrap", "Material UI", "Shadcn", "Responsive Design", "RTK", "Zustand", "API integration"],
      bgColor: "bg-light dark:bg-gray-800",
      textColor: "text-dark dark:text-white",
      buttonColor: "bg-dark dark:bg-primary text-white dark:text-dark",
    },
    {
      title: "Backend Development",
      icon: Database,
      technologies: ["Node.js", "ExpressJs", "Python", "Java", "SpringBoot", "SQL","MySQL", "PostgreSQL", "NoSQL", "MongoDB"],
      bgColor: "bg-primary",
      textColor: "text-dark",
      buttonColor: "bg-dark text-white",
    },
    // {
    //   title: "UI/UX Design",
    //   icon: Palette,
    //   technologies: ["Figma"],
    //   bgColor: "bg-dark dark:bg-gray-900",
    //   textColor: "text-white",
    //   buttonColor: "bg-white dark:bg-primary text-dark",
    // },
    // {
    //   title: "Web Technologies",
    //   icon: Globe,
    //   technologies: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
    //   bgColor: "bg-light dark:bg-gray-800",
    //   textColor: "text-dark dark:text-white",
    //   buttonColor: "bg-dark dark:bg-primary text-white dark:text-dark",
    // },
    {
      title: "Mobile Development",
      icon: Smartphone,
      technologies: ["React Native", "iOS", "Android"],
      bgColor: "bg-primary",
      textColor: "text-dark",
      buttonColor: "bg-dark text-white",
    },
    {
      title: "DevOps & Tools",
      icon: Zap,
      technologies: ["Git", "Docker", "GCP", "CI/CD"],
      bgColor: "bg-dark dark:bg-gray-900",
      textColor: "text-white",
      buttonColor: "bg-white dark:bg-primary text-dark",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block bg-primary px-2 py-1 rounded-lg mb-4">
            <h2 className="text-4xl font-bold text-dark">Skills</h2>
          </div>
          <p className="text-lg text-dark/80 dark:text-white/80 max-w-2xl">
            Here are the technologies and tools I use to bring ideas to life and create exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`${skill.bgColor} border-2 border-dark dark:border-primary rounded-3xl shadow-lg overflow-hidden`}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="space-y-4">
                    <div className="inline-block bg-primary px-2 py-1 rounded-lg">
                      <h3 className="text-2xl font-bold text-dark">{skill.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`text-sm ${skill.textColor} bg-white/20 dark:bg-white/10 px-2 py-1 rounded`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <skill.icon className={`w-12 h-12 ${skill.textColor}`} />
                </div>

                <div className="flex items-center justify-between">
                  {/* <Button
                    className={`${skill.buttonColor} rounded-full px-6 py-2 flex items-center space-x-2 ${
                      skill.bgColor === "bg-primary"
                        ? "hover:bg-dark/90 hover:text-white"
                        : skill.bgColor.includes("bg-dark") || skill.bgColor.includes("bg-gray-900")
                          ? "hover:bg-primary hover:text-dark"
                          : "hover:bg-primary hover:text-dark"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>View Projects</span>
                  </Button> */}

                  {/* Simple illustration placeholder */}
                  {/* <div className="w-24 h-16 bg-white/20 dark:bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/40 dark:bg-white/20 rounded"></div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
