import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, MousePointer, Share2, Mail, FileText, BarChart3 } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Search engine optimization",
      icon: Search,
      bgColor: "bg-light",
      textColor: "text-dark",
      buttonColor: "bg-dark text-white",
    },
    {
      title: "Pay-per-click advertising",
      icon: MousePointer,
      bgColor: "bg-primary",
      textColor: "text-dark",
      buttonColor: "bg-dark text-white",
    },
    {
      title: "Social Media Marketing",
      icon: Share2,
      bgColor: "bg-dark",
      textColor: "text-white",
      buttonColor: "bg-white text-dark",
    },
    {
      title: "Email Marketing",
      icon: Mail,
      bgColor: "bg-light",
      textColor: "text-dark",
      buttonColor: "bg-dark text-white",
    },
    {
      title: "Content Creation",
      icon: FileText,
      bgColor: "bg-primary",
      textColor: "text-dark",
      buttonColor: "bg-dark text-white",
    },
    {
      title: "Analytics and Tracking",
      icon: BarChart3,
      bgColor: "bg-dark",
      textColor: "text-white",
      buttonColor: "bg-white text-dark",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block bg-primary px-2 py-1 rounded-lg mb-4">
            <h2 className="text-4xl font-bold text-dark">Services</h2>
          </div>
          <p className="text-lg text-dark/80 max-w-2xl">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
            These services include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.bgColor} border-2 border-dark rounded-3xl shadow-lg overflow-hidden`}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="space-y-4">
                    <div className="inline-block bg-primary px-2 py-1 rounded-lg">
                      <h3 className="text-2xl font-bold text-dark">{service.title}</h3>
                    </div>
                  </div>
                  <service.icon className={`w-12 h-12 ${service.textColor}`} />
                </div>

                <div className="flex items-center justify-between">
                  <Button className={`${service.buttonColor} rounded-full px-6 py-2 flex items-center space-x-2`}>
                    <ArrowRight className="w-4 h-4" />
                    <span>Learn more</span>
                  </Button>

                  {/* Simple illustration placeholder */}
                  <div className="w-24 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/40 rounded"></div>
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
