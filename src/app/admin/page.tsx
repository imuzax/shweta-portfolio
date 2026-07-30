"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Plus, FolderKanban, MessageSquare } from "lucide-react";

type Tab = "projects" | "messages";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  const [projects, setProjects] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    // Client-side auth check
    const token = localStorage.getItem("admin_token");
    if (token !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuthorized(true);
      fetchData();
    }
  }, [router]);

  const fetchData = async () => {
    try {
      const [projRes, msgRes] = await Promise.all([
        fetch("/api/projects").then(res => res.json()).catch(() => ({ success: false })),
        fetch("/api/contact").then(res => res.json()).catch(() => ({ success: false }))
      ]);
      if (projRes.success) setProjects(projRes.data || []);
      if (msgRes.success) setMessages(msgRes.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  };

  if (!isAuthorized) return <div className="min-h-screen bg-[var(--ivory)]" />;

  return (
    <div className="min-h-screen flex bg-[var(--ivory)]">
      {/* ─── Sidebar ─── */}
      <aside className="w-64 bg-white border-r border-[rgba(201,169,110,0.2)] p-6 flex flex-col">
        <h2 className="font-serif text-2xl mb-10 text-[var(--charcoal)]">Shweta Admin</h2>
        
        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab("projects")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === "projects" ? "bg-[var(--gold)] text-white" : "text-[var(--text-muted)] hover:bg-[var(--ivory-deep)] hover:text-[var(--charcoal)]"}`}
          >
            <FolderKanban size={18} /> Projects
          </button>
          <button 
            onClick={() => setActiveTab("messages")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === "messages" ? "bg-[var(--gold)] text-white" : "text-[var(--text-muted)] hover:bg-[var(--ivory-deep)] hover:text-[var(--charcoal)]"}`}
          >
            <MessageSquare size={18} /> Messages
          </button>
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-500 hover:text-red-600 text-sm font-medium px-4 py-3"
        >
          <LogOut size={16} /> Logout
        </button>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="flex-1 p-10 overflow-y-auto">
        {activeTab === "projects" && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-serif">Manage Projects</h1>
              <button className="btn-primary flex items-center gap-2">
                <Plus size={16} /> Add New Project
              </button>
            </div>
            
            {projects.length > 0 ? (
              <div className="grid gap-4">
                {projects.map((p) => (
                  <div key={p.id} className="bg-white p-4 rounded-lg shadow-sm border border-[rgba(201,169,110,0.1)] flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">{p.title}</h3>
                      <p className="text-sm text-gray-500">{p.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-[rgba(201,169,110,0.1)] p-8 text-center text-[var(--text-muted)]">
                <p>No projects found. Add your first project!</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "messages" && (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-serif">Inbox</h1>
            </div>
            
            {messages.length > 0 ? (
              <div className="grid gap-4">
                {messages.map((m) => (
                  <div key={m.id} className="bg-white p-6 rounded-lg shadow-sm border border-[rgba(201,169,110,0.1)]">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-[var(--charcoal)]">{m.name}</h3>
                        <a href={`mailto:${m.email}`} className="text-sm text-[var(--gold)]">{m.email}</a>
                      </div>
                      <span className="text-xs text-[var(--text-muted)]">
                        {new Date(m.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-[var(--charcoal-soft)] whitespace-pre-wrap text-sm">{m.message}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-[rgba(201,169,110,0.1)] p-8 text-center text-[var(--text-muted)]">
                 <p>No messages yet. They will appear here when someone contacts you.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}