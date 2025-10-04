import { Shield, Cpu, Layers, Users } from "lucide-react";

const advantages = [
  {
    icon: Cpu,
    title: "Deep AI & LLM Expertise",
    description: "Mastery of GenAI, machine learning, and intelligent automation systems"
  },
  {
    icon: Layers,
    title: "Scalable Cloud Architecture",
    description: "Built for growth—from prototype to millions of users"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Industry-leading security standards and compliance protocols"
  },
  {
    icon: Users,
    title: "Client-First Collaboration",
    description: "Your long-term innovation partner, not just a vendor"
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">RecursX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Not just a development agency—your partner in intelligent transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex gap-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Strong Engineering. Creative Solutions. <span className="text-gradient">AI Excellence.</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We help businesses transition from digital to intelligent, building the next generation 
            of smart, AI-powered products.
          </p>
        </div>
      </div>
    </section>
  );
};
