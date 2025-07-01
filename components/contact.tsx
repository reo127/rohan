import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, NotebookPen } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary px-2 py-1 rounded-lg mb-4">
            <h2 className="text-4xl font-bold text-dark">Get In Touch</h2>
          </div>
          <p className="text-lg text-dark/80 dark:text-white/80">Let's discuss next or just say hello!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-dark dark:text-white mb-6">Let's connect</h3>
              <p className="text-lg text-dark/80 dark:text-white/80 mb-8">
                I'm always interested in new opportunities, interesting projects, or just a friendly chat about
                technology and design.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark dark:text-white">Email</h4>
                  <p className="text-dark/70 dark:text-white/70">64rohanmalo@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark dark:text-white">Phone</h4>
                  <p className="text-dark/70 dark:text-white/70">+91 6289038527</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark dark:text-white">Location</h4>
                  <p className="text-dark/70 dark:text-white/70">Bangalore India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-dark dark:text-white mb-4">Where else you can find me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/reo127" target="_blank">
                  <Button
                  variant="outline"
                  size="sm"
                  className="border-dark dark:border-primary text-dark dark:text-primary hover:bg-dark hover:text-white dark:hover:bg-primary dark:hover:text-dark rounded-full bg-transparent dark:bg-transparent"
                >
                  <Github className="w-4 h-4" />
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/rohan-malo-1bb400184/" target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-dark dark:border-primary text-dark dark:text-primary hover:bg-dark hover:text-white dark:hover:bg-primary dark:hover:text-dark rounded-full bg-transparent dark:bg-transparent"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                </a>
                <a href="https://rohan127.hashnode.dev/" target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-dark dark:border-primary text-dark dark:text-primary hover:bg-dark hover:text-white dark:hover:bg-primary dark:hover:text-dark rounded-full bg-transparent dark:bg-transparent"
                >
                  <NotebookPen className="w-4 h-4" />
                </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-light dark:bg-gray-800 border-2 border-dark dark:border-primary rounded-3xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-dark dark:text-white mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-dark dark:text-white font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="border-dark dark:border-primary rounded-xl bg-white dark:bg-dark text-dark dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-dark dark:text-white font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="border-dark dark:border-primary rounded-xl bg-white dark:bg-dark text-dark dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-dark dark:text-white font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="border-dark dark:border-primary rounded-xl bg-white dark:bg-dark text-dark dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-dark dark:text-white font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    className="border-dark dark:border-primary rounded-xl bg-white dark:bg-dark text-dark dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-dark dark:text-white font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[120px] border-dark dark:border-primary rounded-xl bg-white dark:bg-dark text-dark dark:text-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-dark dark:bg-primary text-white dark:text-dark hover:bg-dark/90 dark:hover:bg-primary/90 rounded-xl py-3 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
