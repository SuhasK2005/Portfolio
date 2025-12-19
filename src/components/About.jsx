import { LayoutGrid } from "./ui/layout-grid";

const SkeletonOne = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-purple-900/30 to-black/50 p-6 md:p-8 flex flex-col justify-between">
      {/* Image Container - Top section */}
      <div className="flex-1 flex items-center justify-center mb-6">
        <div className="relative w-full h-full rounded-lg overflow-hidden bg-black/30 border border-purple-500/20">
          {/* Add your image here */}
          <img
            src="/your-image.jpg"
            alt="Profile"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>

      {/* Content Container - Bottom section */}
      <div className="space-y-4">

        {/* Title */}
        <h3 className="font-bold text-2xl md:text-3xl text-white leading-tight">
          Full Stack Developer
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
          Building innovative web solutions with modern technologies. Passionate
          about crafting seamless user experiences and clean code.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 pt-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600/30 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600/30 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600/30 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="p-6 md:p-1 flex flex-col items-center justify-center h-full">
      <p className="font-bold text-2xl md:text-3xl text-white mb-6 text-center">
        Skills & Expertise
      </p>
      <div className="space-y-3 cursor-pointer">
        <div className="flex flex-wrap gap-2 justify-center">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <span className="text-sm font-medium text-purple-300">React</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <span className="text-sm font-medium text-purple-300">Node.js</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <span className="text-sm font-medium text-purple-300">
              JavaScript
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <span className="text-sm font-medium text-purple-300">
              TypeScript
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <span className="text-sm font-medium text-purple-300">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="p-6 md:p-8 flex flex-col items-center justify-center h-full">
      <p className="font-bold text-2xl md:text-3xl text-white mb-6 text-center">
        Get In Touch
      </p>
      <div className="space-y-4 text-neutral-200">
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm md:text-base">suhask6624@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm md:text-base">Chennai, India</span>
        </div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div
      className="relative p-4 md:p-8 md:pt-25 h-full overflow-hidden flex items-end"
      style={{
        backgroundImage: "url(/b1.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left side - Text */}
      <div className="relative pr-8 z-10 max-w-md">
        <h2 className="text-2xl md:text-4xl lg:text-3xl font-bold text-white leading-tight">
          I prioritize client collaboration, fostering open communication
        </h2>
      </div>
    </div>
  );
};

const About = () => {
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "col-span-1 md:row-span-2",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "col-span-1 md:col-span-2",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
    },
  ];

  return (
    <section className="relative min-h-screen pb-20 px-6 overflow-hidden transition-colors duration-500 bg-black">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Dashboard Mockup */}
        <div className="relative mt-16">
          {/* Glow effect behind the dashboard */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/15 via-purple-500/10 to-transparent rounded-3xl blur-2xl scale-105"></div>

          {/* Dashboard Image Container */}
          <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-2 md:p-4 shadow-2xl shadow-purple-900/20">
            <div className="relative rounded-2xl bg-gradient-to-br from-purple-900/20 to-black/50 h-screen">
              {/* Layout Grid Component */}
              <LayoutGrid cards={cards} />
            </div>
          </div>

          {/* Additional glow effects */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-purple-600/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
