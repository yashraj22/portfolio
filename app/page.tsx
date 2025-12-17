"use client"
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
import { motion } from "motion/react"
import Image from "next/image"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Combined Navbar and Hero Section - Docked to top */}
      <header className="sticky top-4 z-50 mx-auto w-full max-w-2xl px-4 flex flex-col items-center gap-3">
        {/* Hero Section */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="w-fit flex items-center justify-between gap-6 border border-border/40 rounded-lg bg-background/80 backdrop-blur-md shadow-sm px-4 py-2"
        >
          <div className="text-left">
            <h1 className="text-sm font-bold tracking-tight">Hey Yashraj Here</h1>
            <p className="text-xs text-muted-foreground">Software Engineer & AI Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-1">
            {[
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
              { icon: Mail, label: "Email" },
            ].map((social, i) => (
              <Link
                key={i}
                href="#"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <social.icon className="h-4 w-4" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="w-full max-w-md"
        >
          <Tabs defaultValue="portfolio" className="w-full">
            <TabsList className="grid w-full grid-cols-6 h-10 bg-background/80 backdrop-blur-md border border-border/40 shadow-sm rounded-lg p-1">
              {["Portfolio", "Skills", "Experience", "Blog", "About", "Contact"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab.toLowerCase()}
                  className="text-[10px] sm:text-xs data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-md transition-all h-full"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.nav>
      </header>

      <main className="flex flex-col items-center px-4 py-8">
        {/* Projects Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 max-w-2xl w-full"
        >
          <motion.h2 variants={item} className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Code className="h-4 w-4" />
            </span>
            Portfolio
          </motion.h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full overflow-hidden border-border/40 bg-card/50 hover:bg-card hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  <div className="aspect-video w-full bg-muted/50 group-hover:bg-muted transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="border-t border-border/40">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-secondary/50 rounded-full text-[10px] text-secondary-foreground border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2 p-4 pt-0">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Visit</span>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 max-w-2xl w-full"
        >
          <motion.h2 variants={item} className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Briefcase className="h-4 w-4" />
            </span>
            Experience
          </motion.h2>
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative pl-6 border-l border-border/40 pb-6 last:pb-0"
              >
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                <div className="rounded-lg border border-border/40 bg-card/50 p-4 hover:bg-card hover:border-border transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-sm">{experience.role}</h3>
                      <p className="text-xs text-muted-foreground">{experience.company}</p>
                    </div>
                    <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full border border-border/50">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 max-w-2xl w-full"
        >
          <motion.h2 variants={item} className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-primary/10 text-primary">
              <BookOpen className="h-4 w-4" />
            </span>
            Blog
          </motion.h2>
          <div className="grid gap-4 grid-cols-1">
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={item}>
                <Card className="bg-card/50 border-border/40 hover:bg-card hover:border-border transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-sm group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-[10px] text-muted-foreground whitespace-nowrap ml-4">{post.date}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-primary font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read Article <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 max-w-2xl w-full"
        >
          <motion.h2 variants={item} className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-primary/10 text-primary">
              <Award className="h-4 w-4" />
            </span>
            Skills
          </motion.h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className="rounded-full border border-border/40 bg-secondary/30 px-3 py-1 text-xs text-secondary-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form */}
        <div className="flex max-w-2xl w-full">
          <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 max-w-md w-full"
          >
            <motion.h2 variants={item} className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </span>
              Contact
            </motion.h2>
            <motion.form variants={item} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="bg-card/50 border-bg-card/40 focus:bg-card transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-card/50 border-bg-card/40 focus:bg-card transition-colors"
                  />
                </div>
              </div>
              <Textarea
                placeholder="Message"
                className="min-h-[120px] bg-card/50 border-bg-card/40 focus:bg-card transition-colors resize-none"
              />
              <div className="flex justify-start">
                <Button type="submit" className="group">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.form>
          </motion.section>
          <div className="flex justify-center items-start w-1/2 bgf-[#1a1a1a] pt-20 ">
            <Image src="/mailbox.svg"
              width={125}
              height={125}
              alt="Contact" />
          </div>
        </div>
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

