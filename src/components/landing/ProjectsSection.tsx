import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Project {
  id: string;
  name: string;
  description: string;
  location: string | null;
  image_url: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);

      if (!error && data) {
        setProjects(data);
      }
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  const placeholderProjects = [
    {
      id: "1",
      name: "Sunset Valley Residences",
      description: "Luxury apartments with stunning valley views",
      location: "Beverly Hills, CA",
      image_url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    },
    {
      id: "2",
      name: "Ocean Breeze Villas",
      description: "Beachfront properties with private access",
      location: "Malibu, CA",
      image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    },
    {
      id: "3",
      name: "Green Park Estates",
      description: "Family homes surrounded by nature",
      location: "Pasadena, CA",
      image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : placeholderProjects;

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <span className="text-accent font-semibold">Our Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Featured Properties
            </h2>
          </div>
          <Button variant="outline" className="gap-2">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted rounded-xl h-64 mb-4" />
                <div className="bg-muted h-6 w-3/4 rounded mb-2" />
                <div className="bg-muted h-4 w-1/2 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  {project.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{project.location}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
