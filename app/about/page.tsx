import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/">
                <Button variant="ghost" className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about my journey as an art educator and my teaching philosophy.
                </p>
              </div>

              <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">My Story</h2>
                    <p className="text-muted-foreground">
                      I've been passionate about art since childhood. After completing my Master's in Fine Arts and
                      Education, I dedicated my career to helping others discover their creative potential. With over 8
                      years of teaching experience across various settings—from public schools to community centers and
                      private studios—I've developed a teaching approach that balances technical skill-building with
                      creative exploration.
                    </p>
                    <p className="text-muted-foreground mt-4">
                      My own artistic practice informs my teaching. I work primarily in mixed media and painting,
                      exploring themes of identity, nature, and human connection. This ongoing creative practice keeps
                      my teaching fresh and authentic.
                    </p>
                  </div>
                  <div className="space-y-2 mt-6">
                    <h2 className="text-2xl font-bold">Education</h2>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Master of Fine Arts in Art Education, State University (2015)</li>
                      <li>Bachelor of Fine Arts, Visual Arts College (2013)</li>
                      <li>Certified Art Educator, K-12</li>
                    </ul>
                  </div>
                </div>
                <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full">
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="Harshita in her studio"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="mx-auto max-w-5xl space-y-8 py-12">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Teaching Philosophy</h2>
                  <p className="text-muted-foreground">
                    I believe that art education is about more than just teaching techniques—it's about nurturing the
                    whole person. My teaching philosophy centers around these core principles:
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
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
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Individual Expression</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Each student has a unique voice. I create space for personal expression while providing technical
                      guidance.
                    </p>
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
                        <circle cx="12" cy="12" r="10" />
                        <path d="m4.93 4.93 4.24 4.24" />
                        <path d="m14.83 9.17 4.24-4.24" />
                        <path d="m14.83 14.83 4.24 4.24" />
                        <path d="m9.17 14.83-4.24 4.24" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Process Over Product</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      I emphasize the creative journey, encouraging experimentation, risk-taking, and learning from
                      mistakes.
                    </p>
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
                    <h3 className="text-xl font-bold">Community Connection</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Art creates connections. I foster a supportive community where students learn from each other.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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

