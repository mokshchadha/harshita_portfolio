import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedWork } from "@/components/featured-work"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Harshita</h1>
                <p className="text-xl text-muted-foreground">Art Educator & Visual Artist</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Transforming lives through creative expression and art education. I help students discover their
                artistic voice while building essential skills.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/portfolio">
                  <Button className="px-8">View My Work</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[450px] w-[350px] overflow-hidden rounded-lg bg-muted">
                <img
                  src="/placeholder.svg?height=450&width=350"
                  alt="Harshita teaching art"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm an art educator with over 8 years of experience teaching various art forms to students of all ages.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Philosophy</h3>
                  <p className="text-muted-foreground">
                    I believe that art education is not just about teaching techniques, but about nurturing creativity,
                    critical thinking, and self-expression. My approach combines traditional methods with innovative
                    teaching strategies to create an engaging learning environment.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Approach</h3>
                  <p className="text-muted-foreground">
                    Each student has unique talents and interests. I tailor my teaching methods to individual needs
                    while fostering a collaborative atmosphere where students can learn from each other.
                  </p>
                </div>
                <Link href="/about">
                  <Button variant="link" className="p-0 h-auto">
                    Learn more about my teaching philosophy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Art classroom setting"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <FeaturedWork />

      {/* Workshops & Services */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Workshops & Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I offer a variety of art workshops and educational services for individuals and groups.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 12h20" />
                    <path d="M6 12a9.77 9.77 0 0 1 11 0" />
                    <path d="M9 12a4.86 4.86 0 0 1 6 0" />
                    <path d="M12 12v.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Private Lessons</h3>
                <p className="text-sm text-muted-foreground text-center">
                  One-on-one instruction tailored to your specific goals and skill level.
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Group Workshops</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Collaborative sessions focusing on specific techniques or art forms.
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">School Programs</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Curriculum development and specialized art programs for educational institutions.
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <Link href="/services">
              <Button>
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in lessons, workshops, or collaborations? Reach out to me.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <Mail className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-sm text-muted-foreground">harshita@example.com</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <Phone className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Studio</h3>
                <p className="text-sm text-muted-foreground">123 Art Street, Creative City</p>
              </div>
            </div>
            <Link href="/contact">
              <Button>
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Instagram
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Pinterest
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                YouTube
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Harshita. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

