import { Search, Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Comprehensive Analysis",
    description:
      "We gather strategic insights and conduct in-depth analysis to establish the foundation for well-informed planning and decision-making.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Ideation & Strategy",
    description:
      "Our team uses strategic intelligence and imaginative thinking to develop innovative approaches tailored to your unique requirements.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design & Prototyping",
    description:
      "We ensure relevance and efficiency by developing solutions through design iteration and prototyping based on user feedback.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Development & Execution",
    description:
      "We implement plans with confidence, utilizing resources and technology to achieve goals via smart planning and execution.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment & Evaluation",
    description:
      "We continually evaluate performance metrics, solicit input, and modify plans according to market trends and organization goals.",
  },
];

export const Approach = () => {
  return (
    <section id="approach" className="py-20 lg:py-32 relative overflow-hidden bg-card">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Our Approach to{" "}
            <span className="gradient-text">Your Goals</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            With our dynamic strategy that integrates innovative techniques for unparalleled outcomes, you can streamline your path to success.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Mobile/Tablet Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20" />
                )}

                <div className="flex flex-col items-center text-center relative">
                  {/* Step Circle */}
                  <div className="relative z-10 mb-6">
                    <div className="w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-background lg:bg-transparent p-4 rounded-xl">
                    <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
