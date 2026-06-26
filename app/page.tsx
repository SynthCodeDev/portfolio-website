"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"
import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState, useEffect } from "react";
import MoldAppDialog from "@/components/modals/moldAppModal"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react"

export default function Home() {
  const [openMoldApp, setOpenMoldApp] = useState(false);
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const timeLineData = [
  {
    title: "Computer Engineering",
    organization: "Polytechnic of Leiria",
    date: "2026 - Current",
    description: "Currently pursuing a degree to deepen my knowledge in software architecture, advanced algorithms, and systems engineering.",
    type: "Education"
  },
  {
    title: "Full-Stack Developer (Trainee)",
    organization: "Awatic",
    date: "Feb 2026 - Jun 2026",
    description: "Developed and maintained full-stack web applications, working actively with Next.js and NestJS to build scalable solutions.",
    type: "Work Experience"
  },
  {
    title: "Computer Programming",
    organization: "Polytechnic of Leiria",
    date: "2024 - 2026",
    description: "Intensive technical course focused on software fundamentals, web development, and object-oriented programming (C#, Java, PHP, HTML/CSS).",
    type: "Education"
  },
  {
    title: "Injection Mold Designer",
    organization: "Imoplastic",
    date: "2013 - Current",
    description: "Designed 3D molds and 2D components using Creo Parametric. Managed technical documentation and optimized workflows by creating custom automation scripts.",
    type: "Work Experience"
  },
  {
    title: "Technical Course in Mold Designing",
    organization: "Polytechnic of Leiria",
    date: "2011 - 2013",
    description: "Gained strong logical problem-solving skills and spatial awareness through complex CAD software design.",
    type: "Education"
  },
  {
    title: "Vocational Course in Metal Working",
    organization: "Escola Secundária Engº Calazans Duarte",
    date: "2009 - 2011",
    description: "Learned to design, program, and machine mechanical parts, developing a strong sense of precision and attention to detail.",
    type: "Education"
  }
]


  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 text-foreground">

      <section className="fixed top-0 left-0 w-full">
        <div className="flex justify-end p-4">
          <NavigationMenu className="list-none">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#projects">Projects</Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#about">About Me</Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
      </section>

      {/* Glow background gimmick */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-neutral-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-neutral-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">

        {/* HERO */}
        <section className="flex min-h-[90vh] flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Mário Pina
          </h1>
          <p className="max-w-150 text-muted-foreground text-lg md:text-xl">
             Full-Stack Developer crafting clean interfaces and robust web applications.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="py-20 space-y-6" id="projects">
          <h2 className="text-2xl font-semibold">Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <Card
              className="p-6 hover:scale-[1.02] transition-transform cursor-pointer"
              onClick={() => setOpenMoldApp(true)}
            >
              <h3 className="font-semibold text-lg">Mold App</h3>

              <p className="text-sm text-muted-foreground mt-2">
                Web app for engineers and designers of injection molds that helps
                them tracking and managing their projects.
              </p>

              <div className="flex gap-2 mt-4">
                <Badge>Next.js</Badge>
                <Badge>Nest.js</Badge>
                <Badge>Tailwind</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:scale-[1.02] transition-transform cursor-pointer">
              <h3 className="font-semibold text-lg">Task Manager</h3>

              <p className="text-sm text-muted-foreground mt-2">
                Full-stack app with authentication and database.
              </p>

              <div className="flex gap-2 mt-4">
                <Badge>React</Badge>
                <Badge>Node</Badge>
              </div>
            </Card>

          </div>
        </section>

          {/* Modal */}
        <MoldAppDialog
          open={openMoldApp}
          onOpenChange={setOpenMoldApp}
        />

        {/* ABOUT */}
        <section className="py-20 space-y-4" id="about">
          <h2 className="text-2xl font-semibold">About</h2>

          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            I’m a Computer Science student focused on building modern web
            applications. I enjoy working on UI systems, performance
            optimization and clean architecture. Currently looking for an
            Junior opportunity.
          </p>
          <div className="relative mt-12 space-y-8">
            <div className="absolute w-px h-full bg-border left-6 md:left-1/2 md:-translate-x-1/2"/>
            {timeLineData.map((item, index) => {const isEven = index % 2 === 0 
              return (
                <div key={index} className="relative flex w-full mb-10">
                  <div className="absolute w-4 h-4 rounded-full bg-foreground left-6 md:left-1/2 md:-translate-x-1/2 mt-1.5 z-10" />
                  <div className={`w-full pl-14 md:w-1/2 ${
                    isEven ? "md:pl-0 md:pr-10" : "md:pl-10 md:ml-auto"
                  }`}>
                    <Card className="p-6 transition-colors hover:bg-muted/50 border-neutral-200 dark:border-neutral-800 text-left">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2"> {item.type}</div>
                      <Badge variant="secondary" className="w-fit">{item.date}</Badge>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <div className="text-sm font-medium mb-3">{item.organization}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                </div>    
              )
            })}

          </div>
        </section>

        {/* CONTACT */}
<section className="py-20 text-center space-y-4" id="contact">
  <h2 className="text-2xl font-semibold">Let’s work together</h2>

  <p className="text-muted-foreground">
    Open to junior positions.
  </p>

          {/* DIV CONTAINER DOS BOTÕES */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild className="w-fit transition hover:scale-105">
              <a href="mailto:contacto@mariopina.dev">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>

            <Button asChild className="w-fit transition hover:scale-105">
              <a
                href="https://github.com/SynthCodeDev"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button asChild className="w-fit transition hover:scale-105">
              <a
                href="https://www.linkedin.com/in/mário-pina-978207223"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mário Pina. Built with Next.js.
        </footer>

        {/* Back to Top */}
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 rounded-full transition-all duration-300 bg-background/80 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 shadow-sm ${
            showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <ArrowUp className="h-5 w-5 text-foreground" />
        </Button>

      </div>
    </main>
  )
}