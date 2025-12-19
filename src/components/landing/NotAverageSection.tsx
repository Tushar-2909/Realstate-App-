import { CheckCircle, Award, TrendingUp, Users } from "lucide-react";

const NotAverageSection = () => {
  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in real estate services",
    },
    {
      icon: TrendingUp,
      title: "Market Experts",
      description: "Deep understanding of local and regional markets",
    },
    {
      icon: Users,
      title: "Personal Approach",
      description: "Dedicated agents who understand your needs",
    },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-accent font-semibold">What Makes Us Different</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              We're Not Your Average Realtor
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              We go beyond traditional real estate services. Our team combines
              cutting-edge technology with personalized service to deliver an
              unmatched experience in finding your perfect property.
            </p>

            <ul className="space-y-4">
              {[
                "24/7 dedicated support for all your queries",
                "Transparent pricing with no hidden fees",
                "Virtual tours and online property viewing",
                "Flexible financing options available",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/70 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotAverageSection;
