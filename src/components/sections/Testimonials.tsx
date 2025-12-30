import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Curry",
    role: "CEO, Tech Startup",
    content:
      "Working with AVIN lab was a game-changer for bringing my app idea to life. They demonstrated a high level of expertise and professionalism throughout the entire process.",
    rating: 5,
    project: "Mobile App Development",
  },
  {
    name: "Mohammad ALRashed",
    role: "Healthcare Director",
    content:
      "Truly impressed with the level of dedication and innovation displayed by AVIN lab for the diabetes care app. They have a unique ability to understand end-user needs and deliver a product that exceeds expectations.",
    rating: 5,
    project: "AI Healthcare Solution",
  },
  {
    name: "David Johnson",
    role: "Founder, AgriTech",
    content:
      "AVIN lab helped us build a revolutionary ML solution for our agriculture business. Their team's expertise in computer vision and machine learning is unmatched. Highly recommend!",
    rating: 5,
    project: "ML Agriculture Platform",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 relative overflow-hidden bg-card"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We take pride in delivering high-quality custom services designed to
            help you build, grow, and revolutionize your industry.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative p-6 lg:p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Project Tag */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                {testimonial.project}
              </span>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
