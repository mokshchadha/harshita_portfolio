import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What My Students Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from those who have experienced my teaching approach.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="flex flex-col justify-between space-y-4 bg-background p-6 shadow-lg rounded-lg">
              <div>
                <Quote className="h-8 w-8 text-primary/50 mb-2" />
                <p className="text-lg italic">
                  &quot;Harshita&apos;s teaching style is both inspiring and practical. She helped me discover my own artistic
                  voice while providing solid technical guidance. Her workshops are the highlight of my week!&quot;
                </p>
              </div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Adult Student, 2 years</p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 bg-background p-6 shadow-lg rounded-lg">
              <div>
                <Quote className="h-8 w-8 text-primary/50 mb-2" />
                <p className="text-lg italic">
                  &quot;As a school principal, I&apos;ve seen firsthand how Harshita&apos;s art program has transformed our students&apos;
                  engagement and creativity. Her curriculum is thoughtful and her connection with students is
                  remarkable.&quot;
                </p>
              </div>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Elementary School Principal</p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 bg-background p-6 shadow-lg rounded-lg">
              <div>
                <Quote className="h-8 w-8 text-primary/50 mb-2" />
                <p className="text-lg italic">
                  &quot;My daughter has blossomed under Harshita&apos;s guidance. Not only has her artistic skill improved, but
                  her confidence and ability to express herself have grown tremendously.&quot;
                </p>
              </div>
              <div>
                <p className="font-semibold">Priya Patel</p>
                <p className="text-sm text-muted-foreground">Parent of 10-year-old student</p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 bg-background p-6 shadow-lg rounded-lg">
              <div>
                <Quote className="h-8 w-8 text-primary/50 mb-2" />
                <p className="text-lg italic">
                  &quot;The community mural project that Harshita led was transformative for our neighborhood. She has a gift
                  for bringing people together through art and making everyone feel like they can contribute.&quot;
                </p>
              </div>
              <div>
                <p className="font-semibold">David Rodriguez</p>
                <p className="text-sm text-muted-foreground">Community Center Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

