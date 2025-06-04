export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <h1 className="text-2xl font-bold text-blue-600">Project Link Up</h1>
        <div className="space-x-4">
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
          <a href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Sign Up
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
        <h2 className="text-4xl font-bold mb-4">
          What is Project Link Up?
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
        Project Link Up is a platform and initiative designed 
        to empower students by making it easier to connect, share 
        ideas, and work together on academic or personal projects.
        The goal of this platform is to simplify team formation, 
        project showcasing, and peer collaboration — as well as 
        fostering a creative, productive, and supportive environment
        for student innovation.
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4 border-t">
        &copy; {new Date().getFullYear()} Project Link Up. All rights reserved.
      </footer>
    </div>
  );
}
