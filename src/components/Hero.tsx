import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-spacing">
      <div className="container-center">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            Level Up Your Game
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join the elite gaming community and unlock your full potential with our premium cheats and tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-primary w-full sm:w-auto">Get Started</Button>
            <Button variant="outline" className="w-full sm:w-auto hover-glow">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;