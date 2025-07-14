const Projects = () => {
  const projectList = [
    {
      title: "🎮 Wackh Game",
      tech: "JavaScript, HTML5, CSS3",
      description:
        "A personalized Whack Game using JavaScript with user profiling for tailored gameplay and enhanced engagement.",
    },
    {
      title: "🏨 Hotel Management System",
      tech: "PHP, MySQL, Apache",
      description:
        "A dynamic hotel booking platform with room management, backend integration, and smooth server-side processing.",
    },
    {
      title: "📚 Java Library Manager",
      tech: "Java, JavaFX/Swing, File I/O",
      description:
        "A desktop application to manage book inventory, borrow/return logs, and export statistics. Recently upgraded from Swing to JavaFX with CSV export, genre stats, and a refreshed UI.",
    },
    {
      title: "🌐 Portfolio Website",
      tech: "React.js, Tailwind CSS, FastAPI",
      description:
        "Fully responsive developer portfolio with animated navigation, contact form with backend integration, and projects pulled from resume. Hosted on GitHub with live deployment pipeline.",
    },
  ];

  return (
    <section id="projects" className="mt-20">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-2">
        🧩 Projects
      </h2>
      <div className="space-y-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/40 transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{project.tech}</p>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
