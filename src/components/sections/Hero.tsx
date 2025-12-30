import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent rounded-full animate-float delay-500 opacity-40" />
      <div className="absolute top-1/2 right-1/3 w-4 h-4 border border-primary/30 rounded-full animate-float delay-1000" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Trusted by 100+ Companies Worldwide
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-in delay-100">
            Your Leading{" "}
            <span className="gradient-text">AI Solutions</span>
            <br />
            Development Company
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in delay-200">
            We help innovative businesses and startups build their digital products using{" "}
            <span className="text-foreground font-medium">AI, Computer Vision, Deep Learning, Machine Learning</span>, 
            and cutting-edge Web & Mobile technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="glass"
              size="xl"
              onClick={() => scrollToSection("#portfolio")}
              className="w-full sm:w-auto"
            >
              <Play size={18} className="mr-1" />
              View Portfolio
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="mt-16 lg:mt-20 animate-fade-in delay-400">
            <p className="text-sm text-muted-foreground mb-6">Technologies We Excel In</p>
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {["Python", "TensorFlow", "PyTorch", "React", "Node.js", "Laravel"].map(
                (tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-secondary/30 border border-border/30 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                  >
                    {tech}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
