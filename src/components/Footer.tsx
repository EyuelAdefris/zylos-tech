import { Link } from "@tanstack/react-router";
import { Code2, Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-background/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)]">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold">
              Zylos<span className="text-gradient">Tech</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Building innovative software solutions from Ethiopia for the world.
          </p>
          <div className="mt-5 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="GitHub" className="hover:text-primary-glow"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary-glow"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary-glow"><Twitter className="h-5 w-5" /></a>
            <a href="mailto:hello@zylostech.com" aria-label="Email" className="hover:text-primary-glow"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/why-us" className="hover:text-foreground">Why Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-foreground">SaaS Development</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Enterprise Systems</Link></li>
            <li><Link to="/services" className="hover:text-foreground">UI/UX Design</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Cloud Deployment</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@zylostech.com</li>
            <li>+251 911 000 000</li>
            <li>Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Zylos Tech. All rights reserved.</p>
          <p>Crafted with precision in Addis Ababa.</p>
        </div>
      </div>
    </footer>
  );
}
