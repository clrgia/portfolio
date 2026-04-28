"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { content } from "./content.json";
import { ArrowUpRight, GitHub, Moon } from "@deemlol/next-icons";
import { Toggle } from "@/components/ui/toggle";
import { Timezone } from "@/components/ui/timezone";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-0">
      <header className="pb-6 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 text-sm">
          <div className="flex items-center justify-between lg:block py-4 border-b lg:border-b-0 lg:pl-4">
            <div className="space-y-1">
              <p className="text-xs opacity-75">portfolio</p>
              <a href="https://claragarcia.dev" className="hover:underline">
                claragarcia.dev
              </a>
            </div>

            <div className="lg:hidden">
              <Toggle aria-label="Toggle dark mode">
                <Moon className="w-4 h-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-1 py-4 border-b lg:border-b-0 lg:border-l lg:pl-4">
            <p className="text-xs opacity-75">github</p>
            <a
              href="https://github.com/clrgia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/clrgia
            </a>
          </div>

          <div className="space-y-1 py-4 border-b lg:border-b-0 lg:border-l lg:pl-4">
            <p className="text-xs opacity-75">contact</p>
            <a
              href="mailto:clara.garcia.contact@gmail.com"
              className="hover:underline break-all"
            >
              clara.garcia.contact@gmail.com
            </a>
          </div>

          <div className="flex justify-between py-4 border-b lg:border-b-0 lg:border-l lg:pl-4">
            <div className="space-y-1">
              <p className="text-xs opacity-75">location</p>
              <div className="flex gap-2">
                <p className="text-sm">PARIS, FR</p>
                <p className="text-[5px] text-muted-foreground">
                  <Timezone />
                </p>
              </div>
            </div>

            <Toggle aria-label="Toggle dark mode" className="hidden lg:flex">
              <Moon className="w-4 h-4" />
            </Toggle>
          </div>
        </div>

        <Separator className="hidden sm:block" />
      </header>

      <div className="max-w-4xl pb-16">
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
          <div className="h-55 w-55 rounded-full bg-[url(https://avatars.githubusercontent.com/u/92577997?v=4)] bg-cover" />

          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">clara garcia</h2>
            <p className="text-muted-foreground">fullstack developer</p>
          </div>
        </div>

        <Tabs defaultValue="about" className="mt-8 w-full">
          <TabsList className="flex flex-wrap gap-2">
            <TabsTrigger value="about">about</TabsTrigger>
            <TabsTrigger value="projects">projects</TabsTrigger>
            <TabsTrigger value="experience">experience</TabsTrigger>
            <TabsTrigger value="education">education</TabsTrigger>
          </TabsList>

          <TabsContent
            value="about"
            className="mt-4 p-4 border rounded-md lowercase"
          >
            {content.aboutme}
          </TabsContent>

          <TabsContent value="projects" className="mt-4 space-y-4 lowercase">
            {content.projects.map((project, index) => (
              <div key={index} className="border rounded-md p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{project.name}</h3>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                {project.github && project.link && (
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank">
                        <Badge variant="outline">
                          github <ArrowUpRight className="w-4 h-4" />
                        </Badge>
                      </a>
                    )}

                    {project.link && (
                      <a href={project.link} target="_blank">
                        <Badge variant="outline">
                          app <ArrowUpRight className="w-4 h-4" />
                        </Badge>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </TabsContent>

          <TabsContent value="experience" className="mt-4 space-y-4 lowercase">
            {content.experience.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 border p-4 rounded-md"
              >
                <p className="text-muted-foreground sm:w-32 shrink-0 whitespace-nowrap">
                  {exp.duration}
                </p>

                <Separator orientation="vertical" className="hidden sm:block" />

                <div>
                  <p className="font-bold">{exp.position}</p>
                  <p className="uppercase text-muted-foreground">
                    {exp.company}, {exp.location}
                  </p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="education" className="mt-4 space-y-4 lowercase">
            {content.education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 border p-4 rounded-md"
              >
                <p className="text-muted-foreground sm:w-32">{edu.duration}</p>

                <Separator orientation="vertical" className="hidden sm:block" />

                <div>
                  <p className="font-bold">{edu.degree}</p>
                  <p className="text-xs uppercase text-muted-foreground">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
