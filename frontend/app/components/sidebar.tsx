export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-100 h-full p-4 hidden md:block">
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 hover:font-semibold">My Projects</a>
          <a href="#" className="block text-gray-700 hover:font-semibold">Browse Projects</a>
          <a href="#" className="block text-gray-700 hover:font-semibold">Messages</a>
          <a href="#" className="block text-gray-700 hover:font-semibold">Notifications</a>
          <a href="#" className="block text-gray-700 hover:font-semibold">Profile</a>
        </nav>
      </aside>
    );
  }