import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "AI & Machine Learning", href: "#services" },
    { label: "Mobile App Development", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Case Studies", href: "#portfolio" },
    { label: "Documentation", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:info@aivinlab.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2 text-xl font-heading font-bold mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold">AI</span>
              </div>
              <span className="gradient-text">AVIN lab</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              We help innovative businesses and startups build their digital
              products using AI, Machine Learning, and cutting-edge web
              technologies.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AVIN lab. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafted with passion in Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
