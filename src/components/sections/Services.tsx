import { Brain, Smartphone, Globe, Palette, Watch, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "We provide innovative technology solutions including AI, ML, Deep Learning, and Computer Vision specific to your business needs.",
    features: ["Neural Networks", "Computer Vision", "NLP", "Predictive Analytics"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Transform your ideas into feature-rich applications for iOS and Android that attract users and produce measurable results.",
    features: ["iOS & Android", "React Native", "Flutter", "Cross-Platform"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Create scalable web applications using modern technology and industry standards that enhance user experiences.",
    features: ["MERN Stack", "Next.js", "Laravel", "Python/Django"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Converting thoughts into exquisitely designed and easily accessible user interfaces that elevate user engagement.",
    features: ["User Research", "Prototyping", "Visual Design", "Design Systems"],
  },
  {
    icon: Watch,
    title: "Watch App Development",
    description:
      "We create smart and efficient applications for smartwatches that increase user friendliness and accessibility.",
    features: ["Apple Watch", "Wear OS", "Samsung Galaxy", "Fitbit"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions including SEO, SMM, PPC, and content marketing to boost your online presence.",
    features: ["SEO", "Social Media", "PPC Campaigns", "Content Strategy"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Services We{" "}
            <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Enhancing your digital journey with creative, personalized solutions that promote progress and achievement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
