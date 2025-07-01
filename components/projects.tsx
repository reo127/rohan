import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, and admin dashboard.",
      technologies: ["React", "Node.js", "ExpressJs", "JWT", "MongoDB"],
      image: "https://raw.githubusercontent.com/reo127/mernEcommerceApp/master/screenshots/home.png",
      liveUrl: null,
      githubUrl: "https://github.com/reo127/mernEcommerceApp",
    },
    {
      title: "APISaga - Free Public APIs",
      description:
        "Free public apis for bigener frontend developers to learn api handing and for dummy data ",
      technologies: ["NodeJs", "ExpressJs", "mongoose", "MongoDB", "JWT", "Vercel"],
      image: "/freeapi.png",
      liveUrl: null,
      githubUrl: "https://github.com/reo127/apisaga",
    },
    {
      title: "Secret Santa Generator",
      description:
        "A secret santa generator that generates a random list of participants and their assigned secret santa using excel file.",
      technologies: ["NextJs", "TailwindCss", "ExpressJs", "xlsx", "Vercel"],
      image: "/placeholder.svg?height=200&width=300",
      liveUrl: "https://secret-santa-fe-gilt.vercel.app/",
      githubUrl: "https://github.com/reo127/secret_santa_fe",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-light dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block bg-primary px-2 py-1 rounded-lg mb-4">
            <h2 className="text-4xl font-bold text-dark">Featured Projects</h2>
          </div>
          <p className="text-lg text-dark/80 dark:text-white/80 max-w-3xl">
            Here are some of my recent projects that showcase my skills in web development, design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-dark border-2 border-dark dark:border-primary rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-dark dark:text-white">{project.title}</h3>
                <p className="text-dark/70 dark:text-white/70 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-light dark:bg-gray-800 text-dark dark:text-white px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.liveUrl === null ? "" :
                    <a href={project.liveUrl} target="_blank">
                      <Button
                        size="sm"
                        className="bg-dark dark:bg-primary text-white dark:text-dark hover:bg-dark/90 dark:hover:bg-primary/90 rounded-full flex items-center"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live
                      </Button>
                    </a>
                  }

                  <a href={project.githubUrl} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-dark dark:border-primary text-dark dark:text-primary hover:bg-dark hover:text-white dark:hover:bg-primary dark:hover:text-dark rounded-full flex items-center bg-transparent dark:bg-transparent"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary text-dark hover:bg-primary/90 border border-dark dark:border-primary rounded-xl px-8 py-3 text-lg">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
