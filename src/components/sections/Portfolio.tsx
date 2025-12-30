import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Deep Malaria App",
    category: "AI / Healthcare",
    description:
      "Computer Vision and Deep Learning solution for lab technicians to assist in daily malaria diagnostic tests. Makes screening faster, more consistent, and less dependent on human expertise.",
    tags: ["Computer Vision", "Deep Learning", "Healthcare"],
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop",
  },
  {
    title: "ML Rice Classifier",
    category: "Machine Learning",
    description:
      "AI-based solution that makes mobile devices intelligent. Capture rice grain images and predict genus and quality with high accuracy in seconds.",
    tags: ["Machine Learning", "Mobile AI", "Agriculture"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop",
  },
  {
    title: "Pure Strength AI Trainer",
    category: "AI / Fitness",
    description:
      "Ultimate AI-powered strength training tool. Upload videos of barbell lifts and get form feedback, velocity, and range of motion data for each rep.",
    tags: ["AI", "Computer Vision", "Fitness Tech"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  },
  {
    title: "Retinal Image Classification",
    category: "Deep Learning / Medical",
    description:
      "Analyzes retinal images to detect and classify diseases using deep learning. Extracts blood vessel structures, lesions, and abnormalities for accurate diagnosis.",
    tags: ["Deep Learning", "Medical Imaging", "Diagnostics"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of AI-powered solutions that have transformed businesses across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button variant="glass" size="sm" className="group/btn">
                  View Case Study
                  <ExternalLink size={14} className="ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
