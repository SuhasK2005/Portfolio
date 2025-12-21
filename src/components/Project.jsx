import { LayoutGrid } from "./ui/layout-grid";

const ProjectOne = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 hover:shadow-purple-900/30 transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-68 w-full overflow-hidden cursor-pointer">
        <img
          src="/project1.png"
          alt="Travel Agency"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-5 space-y-4">
        <h3 className="font-bold text-2xl text-white leading-tight">
          Travel Agency
        </h3>
        <p className="text-sm text-neutral-300 leading-relaxed">
          A full-stack travel agency built with React Router for server-side
          rendering. The platform enables users to browse trips, view travel
          details, and provides admin functionality for managing trips and
          users. Features authentication and trip creation with AI integration.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
            React Router
          </span>
          <span className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
            TypeScript
          </span>
          <span className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
            Appwrite
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <a
            href="https://github.com/SuhasK2005/travel-agency"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://travel-agency-one-self.vercel.app/"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectTwo = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 hover:shadow-purple-900/30 transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-68 w-full overflow-hidden cursor-pointer">
        <img
          src="/project2.png"
          alt="zentry"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Project Details */}
      <div className="p-5 space-y-4">
        <h3 className="font-bold text-2xl text-white leading-tight">
          Zentry - Awwwards
        </h3>
        <p className="text-sm text-neutral-300 leading-relaxed">
          Recreated the Zentry website with a focus on responsive layout, smooth
          scrolling effects, and interactive animations using modern frontend
          tools and libraries, closely following the design and motion
          principles of the original.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
            React
          </span>
          <span className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
            Tailwind CSS
          </span>
          <span className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
            GSAP
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <a
            href="https://github.com/SuhasK2005/zentry"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://zentry-sk.vercel.app/"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectThree = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 hover:shadow-purple-900/30 transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-68 w-full overflow-hidden cursor-pointer">
        <img
          src="/project3.png"
          alt="Brainwave"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-5 space-y-4">
        <h3 className="font-bold text-2xl text-white leading-tight">
          Brainwave - AI Chatbot
        </h3>
        <p className="text-sm text-neutral-300 leading-relaxed">
          An interactive AI Chat application developed using React (or Next.js)
          and styled with Tailwind CSS, featuring real-time conversational UI
          and AI-powered responses. This project showcases a responsive layout
          for all devices.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
            React
          </span>
          <span className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
            Tailwind CSS
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <a
            href="https://github.com/SuhasK2005/brainwave"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://brainwave-aichat.vercel.app/"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const cards = [
    {
      id: 1,
      content: <ProjectOne />,
      className: "col-span-1",
    },
    {
      id: 2,
      content: <ProjectTwo />,
      className: "col-span-1",
    },
    {
      id: 3,
      content: <ProjectThree />,
      className: "col-span-1",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen pb-12 md:pb-20 px-4 md:px-6 overflow-hidden transition-colors duration-500 bg-black"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-left pl-4 md:pl-11 mb-8 md:mb-12 mt-8 md:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            Projects
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg md:w-1/2 pr-4">
            These projects represent my learning journey, where I experiment
            with modern technologies and transform ideas into functional
            applications.
          </p>
        </div>

        {/* Projects Grid */}
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
};

export default Project;
