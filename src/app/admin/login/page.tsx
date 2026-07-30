"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock auth for now. In production, use next-auth or verify via API route + cookies.
    if (password === "shweta2026") {
      // Set a fake token in localStorage for client-side check
      localStorage.setItem("admin_token", "true");
      router.push("/admin");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--ivory)] flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[rgba(201,169,110,0.15)] max-w-md w-full text-center">
        <div className="w-16 h-16 bg-[var(--ivory-deep)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--gold)]">
          <Lock size={24} />
        </div>
        <h1 className="text-3xl font-serif mb-2">Admin Access</h1>
        <p className="text-[var(--text-muted)] text-sm mb-8">Enter the secure password to access your dashboard.</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-[var(--ivory)] border border-transparent focus:border-[var(--gold)] rounded-md outline-none transition-colors text-center"
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}