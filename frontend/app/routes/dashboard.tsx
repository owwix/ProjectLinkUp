import Sidebar from "../components/sidebar";
import ProjectCard from "../components/projectcard";
import { useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-850">
      <header className="flex bg-slate-850 text-gray-800 justify-between items-center px-6 py-4 shadow">
        <h1 className="text-2xl font-bold text-blue-500">Project Link Up</h1>
        <div className="space-x-4">
          <a href="/logout" className="text-blue-600 hover:underline">
            Logout
          </a>
        </div>
      </header>

      {/* Apply padding top so content doesn't go under navbar */}
      <div className="flex bg-slate-900 text-slate-100 pt-20">
        <Sidebar show={sidebarOpen} />
        <main className="flex-1 p-6 ml-0 md:ml-64">
          <h1 className="text-2xl font-bold mb-4">Welcome, User 👋</h1>
          <h2 className="text-lg font-semibold mb-3">Suggested for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <ProjectCard title="AI Study Group" description="..." tags={["#React", "TypeScript"]} />
            <ProjectCard title="Campus Weather App" description="..." tags={["#API", "TailwindCSS"]} />
            <ProjectCard title="Sustainable Housing" description="..." tags={["#Design", "Next.js"]} />
          </div>
        </main>
      </div>
    </div>
  );
}
