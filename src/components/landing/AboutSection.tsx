import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-primary">15+</h3>
                    <p className="text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
                <div className="bg-muted rounded-2xl h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
                    alt="Modern home interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-muted rounded-2xl h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
                    alt="Luxury property"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-accent/10 rounded-2xl h-48 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/30 transition-colors" />
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-accent-foreground ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">John Doe</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-accent font-semibold">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Building Dreams, Creating Homes Since 2009
            </h2>
            <p className="text-muted-foreground text-lg">
              For over 15 years, we've been helping families find their perfect homes.
              Our journey began with a simple mission: to transform the real estate
              experience from stressful to seamless.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to have served thousands of happy homeowners across
              the region. Our team of dedicated professionals combines deep market
              knowledge with genuine care for every client's unique needs.
            </p>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-2xl font-bold text-foreground">2000+</h4>
                <p className="text-muted-foreground">Properties Sold</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-2xl font-bold text-foreground">50+</h4>
                <p className="text-muted-foreground">Expert Agents</p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 gap-2">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
