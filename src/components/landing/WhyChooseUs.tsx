import { Shield, Clock, DollarSign, HeartHandshake, Building, Key } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "All our properties are verified and legally documented for your peace of mind.",
    },
    {
      icon: Clock,
      title: "Quick Process",
      description: "Streamlined buying process that saves you time and reduces paperwork hassle.",
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Competitive pricing with transparent costs. No hidden fees or surprises.",
    },
    {
      icon: HeartHandshake,
      title: "Expert Guidance",
      description: "Our experienced agents guide you through every step of your property journey.",
    },
    {
      icon: Building,
      title: "Wide Selection",
      description: "From apartments to villas, we have properties to match every lifestyle.",
    },
    {
      icon: Key,
      title: "After-Sale Support",
      description: "Our relationship doesn't end at sale. We're here for all your future needs.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            The RealEstate Advantage
          </h2>
          <p className="text-muted-foreground">
            We're committed to making your property journey seamless, transparent, 
            and rewarding. Here's what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
