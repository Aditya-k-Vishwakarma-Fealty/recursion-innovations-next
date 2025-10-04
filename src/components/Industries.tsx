import { Heart, TrendingUp, GraduationCap, ShoppingCart, Home, Briefcase } from "lucide-react";

const industries = [
  {
    icon: Heart,
    title: "HealthTech",
    description: "AI diagnosis tools, patient management, and healthcare automation"
  },
  {
    icon: TrendingUp,
    title: "FinTech",
    description: "Smart analytics, fraud detection, and financial automation"
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Adaptive learning assistants and educational platforms"
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description: "Smart recommendation systems and customer intelligence"
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Property intelligence and automated workflows"
  },
  {
    icon: Briefcase,
    title: "Enterprise SaaS",
    description: "AI copilots for operational efficiency and growth"
  }
];

export const Industries = () => {
  return (
    <section id="industries" className="py-16 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Applying intelligence-driven solutions wherever there's data, complexity, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
              <p className="text-muted-foreground text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
