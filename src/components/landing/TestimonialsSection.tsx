import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Client {
  id: string;
  name: string;
  designation: string;
  description: string;
  image_url: string;
}

const TestimonialsSection = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);

      if (!error && data) {
        setClients(data);
      }
      setIsLoading(false);
    };

    fetchClients();
  }, []);

  const placeholderClients = [
    {
      id: "1",
      name: "Sarah Johnson",
      designation: "Homeowner",
      description: "Working with RealEstate was an absolute pleasure. They found us our dream home within our budget and made the entire process stress-free.",
      image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: "2",
      name: "Michael Chen",
      designation: "Property Investor",
      description: "Their market knowledge is exceptional. I've invested in multiple properties through them and they always deliver outstanding results.",
      image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      designation: "First-time Buyer",
      description: "As a first-time buyer, I was nervous about the process. The team guided me every step of the way with patience and expertise.",
      image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  const displayClients = clients.length > 0 ? clients : placeholderClients;

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Happy Clients, Happy Homes
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our valued clients have
            to say about their experience with us.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-card p-8 rounded-xl">
                <div className="bg-muted h-4 w-full rounded mb-4" />
                <div className="bg-muted h-4 w-3/4 rounded mb-4" />
                <div className="flex items-center gap-4 mt-6">
                  <div className="bg-muted w-12 h-12 rounded-full" />
                  <div>
                    <div className="bg-muted h-4 w-24 rounded mb-2" />
                    <div className="bg-muted h-3 w-16 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayClients.map((client) => (
              <div
                key={client.id}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 relative z-10">
                  "{client.description}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={client.image_url}
                    alt={client.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {client.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {client.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
