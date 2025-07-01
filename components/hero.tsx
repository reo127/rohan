import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-dark dark:text-white leading-tight">
                Hi, I'm Rohan Malo
              </h1>
              <div className="inline-block bg-primary px-3 py-1 rounded-lg">
                <h2 className="text-2xl font-bold text-dark">Full Stack Developer</h2>
              </div>
            </div>
            <p className="text-lg text-dark/80 dark:text-white/80 leading-relaxed max-w-lg">
              Highly motivated and dedicated developer seeking an opportunity to utilize my technical skills and contribute
              to the success of a dynamic software development team and organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-dark dark:bg-primary text-white dark:text-dark hover:bg-dark/90 dark:hover:bg-primary/90 rounded-xl px-8 py-3 text-lg">
                View My Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-dark dark:border-primary text-dark dark:text-primary hover:bg-dark hover:text-white dark:hover:bg-primary dark:hover:text-dark rounded-xl px-8 py-3 text-lg bg-transparent dark:bg-transparent"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="w-full h-96 bg-light dark:bg-gray-800 rounded-3xl flex items-center justify-center relative overflow-hidden">
              {/* Profile illustration */}
              <div className="relative">
                <div className="w-48 h-48 bg-dark dark:bg-primary rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white dark:text-dark">RM</span>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-dark font-bold">{"</>"}</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full"></div>
                <div className="absolute top-8 left-8 w-6 h-6 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-dark dark:text-white">50+</div>
              <div className="text-dark/60 dark:text-white/60">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-dark dark:text-white">5+</div>
              <div className="text-dark/60 dark:text-white/60">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-dark dark:text-white">100+</div>
              <div className="text-dark/60 dark:text-white/60">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-dark dark:text-white">15+</div>
              <div className="text-dark/60 dark:text-white/60">Technologies</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
