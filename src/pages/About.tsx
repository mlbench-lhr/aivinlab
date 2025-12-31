import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

const partners = [
  {
    name: "Giuseppe Leo",
    role: "Founder & amp",
    image: "/leo.png",
    bio: "Operations leader focused on driving efficiency and delivering exceptional client experiences.",
    linkedin: "#",
    twitter: "#",
    email: "partner3@aivinlab.com",
  },
  {
    name: "Vivien Konca",
    role: "Business Developer",
    image: "/vivien.png",
    bio: "Driving growth through strategic partnerships, client acquisition, and market expansion.",
    linkedin: "#",
    twitter: "#",
    email: "partner3@aivinlab.com",
  },
  {
    name: "Nabeel Hassan",
    role: "Associate Partner",
    image: "/nabeel.png",
    bio: "Visionary leader with 10+ years in AI/ML and enterprise solutions.",
    linkedin: "https://www.linkedin.com/in/nabeel-hassan-365778136/s",
    twitter: "#",
    email: "partner1@aivinlab.com",
  },
  {
    name: "Qazi Ammar Arshad",
    role: "Associate Partner",
    image: "/ammar.png",
    bio: "Technical architect specializing in scalable systems and machine learning.",
    linkedin: "https://www.linkedin.com/in/qazi-ammar-arshad-a24895123/",
    twitter: "#",
    email: "partner2@aivinlab.com",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We push boundaries and embrace cutting-edge technologies to deliver transformative solutions.",
  },
  {
    icon: Target,
    title: "Client-Centric",
    description:
      "Your success is our priority. We build lasting partnerships through transparent communication.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in code quality, design, and project delivery.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great solutions emerge from diverse perspectives and seamless teamwork.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
              About AVIN lab
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Building the Future with{" "}
              <span className="gradient-text">AI & Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of engineers, designers, and strategists
              dedicated to transforming ideas into powerful digital solutions
              that drive real business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                From Vision to <span className="gradient-text">Reality</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to democratize cutting-edge technology,
                  AVIN lab emerged from the collective experience of industry
                  veterans who saw the transformative potential of AI and modern
                  software development.
                </p>
                <p>
                  Today, we've grown into a full-service technology partner,
                  helping startups and enterprises alike navigate the complex
                  landscape of digital transformation. Our expertise spans AI/ML
                  solutions, mobile applications, web development, and UI/UX
                  design.
                </p>
                <p>
                  What sets us apart is our commitment to understanding your
                  unique challenges and crafting tailored solutions that not
                  only meet your current needs but scale with your future
                  ambitions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                      5+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                      30+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                      15+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Team Members
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What <span className="gradient-text">Drives Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every decision we make and every solution we
              deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
              Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet Our{" "}
              <span className="gradient-text">Associated Partners</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The visionaries and experts leading AVIN lab towards innovation
              and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                <div className="bg-[#e0e5f1] relative overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className=" w-full aspect-square object-cover object-top mt-4 -mb-4 group-hover:scale-100 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 -mt-12 relative z-10">
                  <h3 className="text-xl font-semibold mb-1">{partner.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {partner.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {partner.bio}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={partner.linkedin}
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={`${partner.name} LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={partner.twitter}
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={`${partner.name} Twitter`}
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={`mailto:${partner.email}`}
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={`Email ${partner.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
