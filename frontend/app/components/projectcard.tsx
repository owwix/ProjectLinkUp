interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
  }
  
  export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
    return (
      <div className="bg-slate-800 shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex 	text-slate-400 flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <button className="text-blue-400 hover:text-blue-300">View Details</button>
      </div>
    );
  }