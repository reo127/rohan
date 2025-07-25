import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Java Developer ",
      company: "Swastya.ai",
      period: "2024 June - 2025 March",
      startDate: "2024 June",
      endDate: "2025 March",
      work: [
        `Architected and developed swastya.ai LIMS platform using Next.Js App Router frontend and Spring Boot backend with gRPC/Protobuf, aiming to achieve an improvement in a pathology’s operational efficiency.`,
        `Led client-side technical operations and deployment, successfully launching Swastya.ai in 5 patology labs, ensuring seamless onboarding and integration.`,
        `Integrated LLM-powered automation to parse vendor bills, manage inventory, and streamline procurement workflows, reducing manual processing time.`,
        `Developed settings page that was responsible for changing tests and price lists, employees, doctors, institutes, discounts, and lab details.`
      ],
      description:
        "Built responsive web applications and collaborated with design teams to create pixel-perfect user interfaces. Improved application performance by 40%.",
    },
    {
      title: "EduCADD ThinkWORKS",
      company: "thinkworks.co.in",
      period: "2023 March - 2024 June",
      startDate: "2024 June",
      endDate: "2025 March",
      work: [
        `Creating curriculum and taking classes for students.`,
        `Maintaining CRM system, which was responsible for printing invoices and tracking leads and students records`
      ],
      description:
        "Developed custom websites for clients across various industries. Specialized in e-commerce solutions and content management systems.",
    },
    {
      title: "Full Stack MERN intern",
      company: "Academiczone.in",
      period: "2022 March - 2022 august",
      startDate: "2024 June",
      endDate: "2025 March",
      work: [
        `Convert figma design to responsive react component`,
        `Build Authentication using Node, ExpressJs, mongodb, and JWT`,
        `Integrate APIs sing axios and Redux-toolkit`
      ],
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
                    <div className="inline-block bg-primary px-2 py-1 rounded-lg mb-2 xl:max-w-[50%]">
                      <span className="font-bold text-dark">{exp.period}</span>
                    </div>
                  </div>
                  <div className="md:col-span-3 space-y-3">
                    <h3 className="text-2xl font-bold text-dark dark:text-white">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-dark/70 dark:text-white/70">{exp.company}</h4>
                    <div className="text-dark/80 dark:text-white/80 leading-relaxed">
                      <ul className="list-disc pl-5">
                        {exp.work.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </div>
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
