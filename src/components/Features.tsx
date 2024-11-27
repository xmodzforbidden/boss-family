import { Shield, Zap, Clock, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Undetectable",
    description: "Our cheats are designed to be completely undetectable by anti-cheat systems."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized code ensures minimal impact on your game's performance."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help you with any issues."
  },
  {
    icon: Lock,
    title: "Secure",
    description: "Advanced encryption keeps your account safe and protected."
  }
];

const Features = () => {
  return (
    <section className="section-spacing">
      <div className="container-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;