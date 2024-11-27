import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Basic",
    price: "9.99",
    features: ["1 Game", "Basic Features", "24/7 Support", "Weekly Updates"],
  },
  {
    name: "Pro",
    price: "19.99",
    features: ["3 Games", "Advanced Features", "Priority Support", "Daily Updates", "Custom Scripts"],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "29.99",
    features: ["All Games", "Premium Features", "VIP Support", "Instant Updates", "Custom Scripts", "Private Discord"],
  },
];

const Purchase = () => {
  return (
    <section className="section-spacing">
      <div className="container-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card relative animate-scale-in ${
                plan.popular ? "border-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold">
                  ${plan.price}
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full btn-primary">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purchase;