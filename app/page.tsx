import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import ProjectCard from "./components/project-card";
import Education from "./components/education";
import WorkExperience from "./components/work-experience";
import Skills from "./components/skills";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-dark dark:bg-gradient-dark light:bg-white text-white light:text-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gradient-header dark:bg-gradient-header light:bg-white backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <nav className="flex items-center space-x-8 text-base font-medium">
              <a
                href="#about"
                className="transition-colors hover:text-blue-400 light:hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#education"
                className="transition-colors hover:text-blue-400 light:hover:text-blue-600"
              >
                Education
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-blue-400 light:hover:text-blue-600"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="transition-colors hover:text-blue-400 light:hover:text-blue-600"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="transition-colors hover:text-blue-400 light:hover:text-blue-600"
              >
                Skills
              </a>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6 mx-auto max-w-5xl">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text mb-4 px-4 py-2 overflow-visible">
                  Joni Ngo
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 dark:text-gray-300 light:text-gray-700 md:text-xl">
                  T-shaped individual with experience in data science, solution
                  selling and industry expertise across ad-tech and banking
                  industry. Track record of identifying customer needs and
                  translating into analytics products that drive business
                  impact. Proficient in Python, SQL, JavaScript, with Masters
                  degree in Machine Learning.
                </p>
              </div>
              <div className="space-x-4 mt-6">
                <Link href="https://github.com/hangjoni" target="_blank">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800/50 shadow-sm hover:bg-gray-700 transition-colors">
                    <Github className="h-5 w-5 text-blue-400" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </Link>
                <Link href="https://linkedin.com/in/hangjoni" target="_blank">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800/50 shadow-sm hover:bg-gray-700 transition-colors">
                    <Linkedin className="h-5 w-5 text-blue-400" />
                    <span className="sr-only">LinkedIn</span>
                  </div>
                </Link>
                <Link href="https://twitter.com/hangjoni" target="_blank">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800/50 shadow-sm hover:bg-gray-700 transition-colors">
                    <Twitter className="h-5 w-5 text-blue-400" />
                    <span className="sr-only">Twitter</span>
                  </div>
                </Link>
                <Link href="mailto:hangjoni@gmail.com">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800/50 shadow-sm hover:bg-gray-700 transition-colors">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span className="sr-only">Email</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center gradient-text mx-auto">
              Education
            </h2>
            <div className="mx-auto max-w-3xl">
              <Education />
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center gradient-text mx-auto">
              Projects
            </h2>
            <ProjectCard />
          </div>
        </section>

        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center gradient-text mx-auto">
              Work Experience
            </h2>
            <div className="mx-auto max-w-4xl">
              <WorkExperience />
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center gradient-text mx-auto">
              Skills
            </h2>
            <Skills />
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 dark:border-gray-800 light:border-gray-200">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
            © 2024 Joni Ngo. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-blue-400 light:hover:text-blue-600"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-blue-400 light:hover:text-blue-600"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
