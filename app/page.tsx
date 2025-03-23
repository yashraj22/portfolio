import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  ArrowRight,
  Briefcase,
  BookOpen,
  Award,
  Code,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Combined Navbar and Hero Section - Docked to top */}
      {/*< header className="sticky size-fit top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-zinc-800 flex justify-center" > */}
      <header className="sticky mx-auto top-0 z-10 w-fit">
        <div className="max-w-2xl w-full px-4">
          <div className="flex flex-col items-center">
            {/* Hero Section */}
            <div className="w-fit mx-auto flex items-center justify-between border border-zinc-800 rounded-lg bg-zinc-900/50 p-2 mt-2 mb-2">
              <div className="text-left">
                <h1 className="text-sm font-bold tracking-tight">Hey Yashraj Here</h1>
                <p className="text-xs text-zinc-400">Software Engineer & AI Enthusiast</p>
              </div>

              {/* Social Links - Moved inside hero box */}
              <div className="flex space-x-2 ml-4">
                <Link href="#" className="rounded-full bg-zinc-800 p-1.5 transition-colors hover:bg-zinc-700">
                  <Github className="h-3 w-3" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="rounded-full bg-zinc-800 p-1.5 transition-colors hover:bg-zinc-700">
                  <Linkedin className="h-3 w-3" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="rounded-full bg-zinc-800 p-1.5 transition-colors hover:bg-zinc-700">
                  <Twitter className="h-3 w-3" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="rounded-full bg-zinc-800 p-1.5 transition-colors hover:bg-zinc-700">
                  <Mail className="h-3 w-3" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <nav className="w-full max-w-md">
              <Tabs defaultValue="portfolio" className="w-full">
                <TabsList className="grid w-full grid-cols-6 bg-zinc-900 h-10 text-xs">
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="blog">Blog</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
              </Tabs>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center px-4 py-6">
        {/* Projects Section */}
        <section className="mb-10 max-w-2xl w-full">
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <Code className="mr-2 h-4 w-4" />
            Portfolio
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-zinc-700 transition-all"
              >
                <div className="aspect-video w-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors"></div>
                <div className="border-t border-zinc-800">
                  <CardContent className="p-3">
                    <h3 className="font-bold text-sm">{project.title}</h3>
                    <p className="text-xs text-zinc-400 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-zinc-800 rounded text-[10px] text-zinc-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 p-2 pt-0">
                    <Button variant="outline" size="icon" className="h-6 w-6">
                      <Github className="h-3 w-3" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-6 w-6">
                      <ExternalLink className="h-3 w-3" />
                      <span className="sr-only">Visit</span>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-10 max-w-2xl w-full">
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <Briefcase className="mr-2 h-4 w-4" />
            Experience
          </h2>
          <div className="space-y-3">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-lg bg-zinc-900/50 p-3 hover:border-zinc-700 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm">{experience.role}</h3>
                    <p className="text-xs text-zinc-400">{experience.company}</p>
                  </div>
                  <span className="text-[10px] text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded">
                    {experience.period}
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-400">{experience.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-10 max-w-2xl w-full">
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            Blog
          </h2>
          <div className="grid gap-3 grid-cols-1">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm">{post.title}</h3>
                    <p className="text-[10px] text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded">{post.date}</p>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-3 pb-3 pt-0">
                  <Button variant="outline" size="sm" className="text-xs h-7 px-2">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-10 max-w-2xl w-full">
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <Award className="mr-2 h-4 w-4" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-xs hover:bg-zinc-800 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-10 max-w-md w-full">
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Contact Form
          </h2>
          <form className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Input type="text" placeholder="Name" className="bg-zinc-900 border-zinc-800 h-8 text-sm" />
              <Input type="email" placeholder="Email" className="bg-zinc-900 border-zinc-800 h-8 text-sm" />
            </div>
            <Textarea placeholder="Message" className="min-h-[100px] bg-zinc-900 border-zinc-800 text-sm" />
            <div className="flex justify-end">
              <Button type="submit" className="group h-8 text-xs">
                Send
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

const projects = Array(4).fill({
  title: "Project Title",
  description: "A brief description of the project and its key features.",
  techStack: ["React", "TypeScript", "Tailwind", "Node.js"],
})

const skills = ["JavaScript", "Python", "C++", "C", "TypeScript", "Next.js", "React.js", "Prisma", "Zustand", "Redux"]

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of AI-powered analytics platform. Implemented machine learning algorithms for predictive insights and optimized system performance.",
  },
  {
    role: "Software Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed full-stack web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    period: "2018 - 2020",
    description:
      "Assisted in building and maintaining web applications. Gained experience in modern web technologies and agile development methodologies.",
  },
]

const blogPosts = [
  {
    title: "The Future of AI in Software Development",
    date: "March 15, 2025",
    excerpt:
      "Exploring how artificial intelligence is transforming the way we build and maintain software applications.",
  },
  {
    title: "Building Scalable Applications with Next.js",
    date: "February 28, 2025",
    excerpt: "A comprehensive guide to leveraging Next.js features for building high-performance web applications.",
  },
  {
    title: "The Power of TypeScript in Large Codebases",
    date: "January 20, 2025",
    excerpt: "How TypeScript improves developer experience and reduces bugs in complex software projects.",
  },
  {
    title: "Optimizing React Performance: Advanced Techniques",
    date: "December 10, 2024",
    excerpt: "Deep dive into strategies for improving the performance of your React applications.",
  },
]

