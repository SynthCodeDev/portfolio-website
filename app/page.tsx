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