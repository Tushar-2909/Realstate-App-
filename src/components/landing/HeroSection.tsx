import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const HeroSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contacts").insert([formData]);

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ full_name: "", email: "", mobile: "", city: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-0 w-1/2 h-full bg-primary/3 rounded-l-[100px] -z-10" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4" />
              <span>Premium Properties Across the City</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Find Your{" "}
              <span className="text-primary">Dream Home</span>{" "}
              With Us
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              We help you find the perfect property that matches your lifestyle.
              From luxury apartments to family homes, discover your next chapter with us.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              >
                Explore Properties <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-4 h-4" /> Call Us Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-muted-foreground text-sm">Properties Sold</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">98%</h3>
                <p className="text-muted-foreground text-sm">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-card p-8 rounded-2xl shadow-2xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form and we'll contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({ ...formData, full_name: e.target.value })
                  }
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  required
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4" />
                  <span>info@realestate.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
