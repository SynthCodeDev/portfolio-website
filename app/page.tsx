import { Card } from "@/components/ui/card"
import { JSX } from "react"

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-linear-to-b from-background via-muted/30 to-background text-foreground">

      {/* NAV */}
      <div className="max-w-5xl mx-auto px-6 pt-10 flex justify-between items-center">
        <p className="font-semibold tracking-tight">mariopina.dev</p>
      </div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">

        <h1 className="text-6xl font-bold tracking-tight leading-tight">
          Aplicações{" "}
          <span className="text-primary">
            web modernas
          </span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Full-stack developer com experiência em
          Node.js, Next.js, TypeScript.
        </p>
      </section>

      {/* STATS */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-4 pb-20">

        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Stack</p>
          <p className="font-semibold mt-2">Next.js / Nest.js</p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Foco</p>
          <p className="font-semibold mt-2">Frontend, Backend & UX</p>
        </Card>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Objetivo</p>
          <p className="font-semibold mt-2">Júnior</p>
        </Card>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-muted-foreground pb-10">
        Built with Next.js · Tailwind · shadcn/ui
      </footer>

    </main>
  )
}