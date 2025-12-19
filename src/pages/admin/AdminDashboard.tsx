import { useEffect, useState } from "react";
import { FolderOpen, Users, MessageSquare, Mail, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";

interface Stats {
  projects: number;
  clients: number;
  contacts: number;
  subscribers: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({
    projects: 0,
    clients: 0,
    contacts: 0,
    subscribers: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchStats = async () => {
    const [projectsRes, clientsRes, contactsRes, subscribersRes] = await Promise.all([
      supabase.from("projects").select("*", { count: "exact", head: true }),
      supabase.from("clients").select("*", { count: "exact", head: true }),
      supabase.from("contacts").select("*", { count: "exact", head: true }),
      supabase.from("subscribers").select("*", { count: "exact", head: true }),
    ]);

    setStats({
      projects: projectsRes.count || 0,
      clients: clientsRes.count || 0,
      contacts: contactsRes.count || 0,
      subscribers: subscribersRes.count || 0,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStats();

    // Refresh stats every 5 seconds
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      title: "Total Projects",
      value: stats.projects,
      icon: FolderOpen,
      color: "bg-primary",
    },
    {
      title: "Happy Clients",
      value: stats.clients,
      icon: Users,
      color: "bg-accent",
    },
    {
      title: "Contact Inquiries",
      value: stats.contacts,
      icon: MessageSquare,
      color: "bg-green-500",
    },
    {
      title: "Subscribers",
      value: stats.subscribers,
      icon: Mail,
      color: "bg-purple-500",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to your admin panel. Manage your real estate business.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-foreground mt-1">
                    {isLoading ? "..." : stat.value}
                  </h3>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">+12%</span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="/admin/projects"
              className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors text-center"
            >
              <FolderOpen className="w-8 h-8 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">Manage Projects</span>
            </a>
            <a
              href="/admin/clients"
              className="p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors text-center"
            >
              <Users className="w-8 h-8 text-accent mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">Manage Clients</span>
            </a>
            <a
              href="/admin/contacts"
              className="p-4 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors text-center"
            >
              <MessageSquare className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">View Contacts</span>
            </a>
            <a
              href="/admin/subscribers"
              className="p-4 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors text-center"
            >
              <Mail className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">View Subscribers</span>
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
