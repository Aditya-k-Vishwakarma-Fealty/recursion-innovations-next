import { Button } from "@/components/ui/button";
import { Mail, Globe, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 relative">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Intelligent</span> Together
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ready to transform your business with AI-powered solutions? 
              Schedule a discovery call or reach out to discuss your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 glow-primary group">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                Schedule Discovery Call
              </Button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground/80">Email us at</div>
                  <div className="text-foreground font-medium">contact@recursx.dev</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground/80">Global Delivery</div>
                  <div className="text-foreground font-medium">Remote-First Team</div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                © 2025 RecursX Innovations. Building the future with AI, one intelligent solution at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
