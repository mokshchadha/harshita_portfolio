import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FeaturedWork() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my art projects and student work.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
              <Link href="/portfolio/student-exhibition">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Student Exhibition"
                  className="h-[300px] w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">Student Exhibition</h3>
                  <p className="text-sm text-white/90">Annual showcase of student artwork</p>
                </div>
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
              <Link href="/portfolio/community-mural">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Community Mural Project"
                  className="h-[300px] w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">Community Mural</h3>
                  <p className="text-sm text-white/90">Collaborative public art installation</p>
                </div>
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
              <Link href="/portfolio/workshops">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Art Workshops"
                  className="h-[300px] w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">Art Workshops</h3>
                  <p className="text-sm text-white/90">Interactive learning experiences</p>
                </div>
              </Link>
            </div>
          </div>
          <Link href="/portfolio">
            <Button>
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

