import { Cloud, Zap, Brain, Link, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Custom SaaS Development",
    description: "End-to-end product design, scalable architecture, and secure systems for startups and enterprises. Transform your business model into reliable, performance-optimized solutions."
  },
  {
    icon: Zap,
    title: "AI & Automation Solutions",
    description: "Integrate AI into workflows to eliminate repetitive tasks, reduce errors, and increase productivity. From intelligent CRMs to document OCR automation and RPA."
  },
  {
    icon: Brain,
    title: "Generative AI Applications",
    description: "Develop custom GenAI systems that reason, assist, and create. AI copilots, LLM integrations, multimodal systems, and fine-tuned agents that understand your data contextually."
  },
  {
    icon: Link,
    title: "Intelligent API Integrations",
    description: "Connect your products to global ecosystems through secure APIs. Payment systems, data pipelines, third-party integrations, and AI model wrappers."
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Consulting",
    description: "Be your thought partner in AI adoption. Product strategy, architecture planning, automation audits, and AI readiness assessments for digital transformation."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Do <span className="text-gradient">Best</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five pillars of expertise that drive intelligent business transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
