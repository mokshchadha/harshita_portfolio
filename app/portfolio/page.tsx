import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function PortfolioPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Portfolio</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A collection of my work as an art educator and artist.
                </p>
              </div>

              <Tabs defaultValue="all" className="w-full max-w-4xl">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">All Work</TabsTrigger>
                  <TabsTrigger value="student">Student Projects</TabsTrigger>
                  <TabsTrigger value="community">Community Art</TabsTrigger>
                  <TabsTrigger value="personal">Personal Work</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {/* Portfolio Items */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                      <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Project ${item}`}
                          alt={`Portfolio item ${item}`}
                          className="h-64 w-full object-cover transition-all group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end opacity-100 transition-opacity">
                          <h3 className="text-xl font-bold text-white">Project Title {item}</h3>
                          <p className="text-sm text-white/90">Brief description of the project</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="student" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {/* Student Projects */}
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Student Project ${item}`}
                          alt={`Student project ${item}`}
                          className="h-64 w-full object-cover transition-all group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end opacity-100 transition-opacity">
                          <h3 className="text-xl font-bold text-white">Student Project {item}</h3>
                          <p className="text-sm text-white/90">Student age group and medium</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="community" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {/* Community Projects */}
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Community Project ${item}`}
                          alt={`Community project ${item}`}
                          className="h-64 w-full object-cover transition-all group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end opacity-100 transition-opacity">
                          <h3 className="text-xl font-bold text-white">Community Project {item}</h3>
                          <p className="text-sm text-white/90">Location and participants</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="personal" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {/* Personal Work */}
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Personal Work ${item}`}
                          alt={`Personal artwork ${item}`}
                          className="h-64 w-full object-cover transition-all group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end opacity-100 transition-opacity">
                          <h3 className="text-xl font-bold text-white">Artwork Title {item}</h3>
                          <p className="text-sm text-white/90">Medium and year</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
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

