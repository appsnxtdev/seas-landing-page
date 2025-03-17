"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Menu, X, Check, ArrowRight, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SaasLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
  {/* Header */}
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
      <div className="flex items-center gap-2">
        <Image src="/images/icon.png" alt="Logo" width={32} height={32} />
        <span className="text-xl font-bold">AppsNxt</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {["home", "features", "products", "pricing"].map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            onClick={() => scrollToSection(section)}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              activeSection === section ? "text-primary" : "text-muted-foreground"
            )}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex gap-4">
        <Button variant="outline">Log In</Button>
        <Button>Sign Up</Button>
      </div>

      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden border-t">
        <div className="container py-4 flex flex-col gap-4">
          {["home", "features", "products", "pricing"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={() => scrollToSection(section)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === section ? "text-primary" : "text-muted-foreground"
              )}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <div className="flex gap-4 pt-4 border-t">
            <Button variant="outline" className="flex-1">
              Log In
            </Button>
            <Button className="flex-1">Sign Up</Button>
          </div>
        </div>
      </div>
    )}
  </header>


  <main className="flex-1">
    {/* Hero Section */}
    <section id="home" className="relative h-screen md:h-[80vh] lg:h-[90vh]">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/hero.jpg"
      layout="fill"
      objectFit="cover"
      alt="Hero"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center">
    <div className="flex flex-col items-start justify-center text-left lg:max-w-xl space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          All Your SaaS Solutions in One Place
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-lg text-white">
          Discover our suite of powerful SaaS applications designed to streamline your business operations and boost productivity.
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button size="lg" className="gap-1.5 w-full sm:w-auto">
          Get Started <ChevronRight className="h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto">
          View Demo
        </Button>
      </div>
    </div>
  </div>
</section>


    {/* Features Section */}
    <section id="features" className="py-12 bg-muted">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Our Platform
          </h2>
          <br />
          <p className="text-muted-foreground md:text-lg">
            Our integrated SaaS platform offers everything you need to grow and manage your business efficiently.
          </p>
        </div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "All-in-One Solution", description: "Access all your SaaS applications from a single dashboard with unified login." },
            { title: "Seamless Integration", description: "Our applications work together perfectly, sharing data and functionality." },
            { title: "Enterprise Security", description: "Bank-level security protocols protect your sensitive business data." },
            { title: "Scalable Architecture", description: "Grow your business without worrying about outgrowing your software." },
            { title: "24/7 Support", description: "Our dedicated support team is always available to help you succeed." },
            { title: "Regular Updates", description: "Continuous improvements and new features to keep you ahead of the competition." },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary p-2 text-primary-foreground">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Products Section */}
    <section id="products" className="py-12">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Our SaaS Applications
          </h2>
          <br />
          <p className="text-muted-foreground md:text-lg">
            Discover the powerful tools that will transform how you do business.
          </p>
        </div>
        <div className="grid gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "ProjectFlow", description: "Comprehensive project management solution with task tracking, team collaboration, and reporting.", image: "/placeholder.svg?height=300&width=400" },
            { title: "AnalyticsPro", description: "Advanced analytics platform with real-time dashboards, custom reports, and predictive insights.", image: "/placeholder.svg?height=300&width=400" },
            { title: "CRMConnect", description: "Customer relationship management system to track leads, manage sales, and improve customer service.", image: "/placeholder.svg?height=300&width=400" },
            { title: "InvoiceMaster", description: "Streamlined invoicing and payment processing with automated reminders and financial reporting.", image: "/placeholder.svg?height=300&width=400" },
            { title: "HRSuite", description: "Complete human resources management with employee records, time tracking, and performance reviews.", image: "/placeholder.svg?height=300&width=400" },
            { title: "MarketingHub", description: "All-in-one marketing platform with campaign management, email automation, and performance tracking.", image: "/placeholder.svg?height=300&width=400" },
          ].map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-2 text-muted-foreground">{product.description}</p>
                <Button variant="link" className="mt-4 p-0 h-auto font-semibold flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section id="pricing" className="py-12 bg-muted">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <br />
          <p className="text-muted-foreground md:text-lg">
            Choose the plan that works best for your business needs.
          </p>
        </div>
        <div className="grid gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$49",
              description: "Perfect for small businesses just getting started.",
              features: ["Access to 2 SaaS applications", "Up to 5 team members", "5GB storage", "Basic support", "Monthly updates"],
              popular: false,
            },
            {
              name: "Professional",
              price: "$99",
              description: "Ideal for growing businesses with more demands.",
              features: ["Access to all SaaS applications", "Up to 20 team members", "50GB storage", "Priority support", "Weekly updates", "Advanced analytics"],
              popular: true,
            },
            {
              name: "Enterprise",
              price: "$249",
              description: "For large organizations requiring maximum capabilities.",
              features: ["Access to all SaaS applications", "Unlimited team members", "500GB storage", "24/7 dedicated support", "Custom development", "Advanced security features", "API access"],
              popular: false,
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={cn("flex flex-col rounded-lg border bg-background p-6 shadow-sm", plan.popular ? "border-primary ring-1 ring-primary" : "")}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mt-4 flex items-baseline text-3xl font-bold">
                {plan.price}
                <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={cn("mt-8", plan.popular ? "" : "bg-muted hover:bg-muted/80 text-foreground")} variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    {/* <section id="contact" className="py-12">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <br />
          <p className="text-muted-foreground md:text-lg">
            Have questions? Reach out to us anytime. We’d love to hear from you!
          </p>
        </div>
        <div className="mt-8">
          <form action="#" method="POST" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                <input type="text" id="name" name="name" className="w-full rounded-lg border px-4 py-2 text-sm shadow-sm focus:ring-primary" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                <input type="email" id="email" name="email" className="w-full rounded-lg border px-4 py-2 text-sm shadow-sm focus:ring-primary" required />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border px-4 py-2 text-sm shadow-sm focus:ring-primary"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section> */}
  </main>
      {/* Footer */}
      <footer className="border-t bg-muted">
        <div className="container px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/icon.png" alt="Logo" width={32} height={32} />
                <span className="text-xl font-bold">AppsNxt</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your complete SaaS solution provider for business growth and efficiency.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    ProjectFlow
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    AnalyticsPro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    CRMConnect
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    InvoiceMaster
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    HRSuite
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    MarketingHub
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} AppsNxt. All rights reserved.
              </p>
              <nav className="flex gap-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

