import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block bg-primary px-2 py-1 rounded-lg mb-4">
              <h2 className="text-4xl font-bold text-dark">About Me</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-dark/80 dark:text-white/80 leading-relaxed">
               🚀 Hi, I'm Rohan Malo, a dedicated full-stack developer with two years of hands-on experience in crafting scalable web applications using the MERN stack and Spring Boot. From spearheading the development of an efficient LIMS platform at Swastya.ai, successfully implemented across multiple pathology labs, to creating innovative solutions like e-commerce apps and API services, I thrive on building practical software that addresses real-world challenges.
              </p>
              <p className="text-lg text-dark/80 dark:text-white/80 leading-relaxed">
               Embracing a continuous learning mindset, I am constantly exploring, experimenting, and contributing to projects with a passion for clean code and optimized systems 💻✨. 
              </p>
            </div>
            <Button className="bg-dark dark:bg-primary text-white dark:text-dark hover:bg-dark/90 dark:hover:bg-primary/90 rounded-xl px-8 py-3 text-lg">
              Let's work together
            </Button>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="w-full h-96 bg-light dark:bg-gray-800 rounded-3xl flex items-center justify-center relative overflow-hidden">
              {/* Simple character illustration */}
              <div className="relative">
                <div className="w-32 h-32 bg-dark dark:bg-primary rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white dark:bg-dark rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-dark dark:bg-white rounded-full"></div>
                    <div className="w-4 h-4 bg-dark dark:bg-white rounded-full ml-2"></div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary transform rotate-45"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full"></div>
                <div className="absolute top-4 -left-8 w-12 h-1 bg-dark dark:bg-primary"></div>
                <div className="absolute top-8 -left-8 w-8 h-1 bg-dark dark:bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
