import { LayoutGrid } from "./ui/layout-grid";

const SkeletonOne = () => {
  return <div>{/* Add your image here */}</div>;
};

const SkeletonTwo = () => {
  return (
    <div className="p-4 md:p-6">
      <p className="font-bold text-2xl md:text-3xl text-white mb-4">
        Skills & Expertise
      </p>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-purple-300">React</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-purple-300">Node.js</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-purple-300">
              JavaScript
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-purple-300">
              TypeScript
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2">
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
    <div className="p-4 md:p-6">
      <p className="font-bold text-2xl md:text-3xl text-white mb-4">
        Get In Touch
      </p>
      <div className="space-y-3 text-neutral-200">
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
          <span className="text-sm md:text-base">your.email@example.com</span>
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-sm md:text-base">+1 (123) 456-7890</span>
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
          <span className="text-sm md:text-base">Your City, Country</span>
        </div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="p-4 md:p-6">
      <p className="font-bold text-2xl md:text-4xl text-white mb-4">About Me</p>
      <p className="font-normal text-sm md:text-base leading-relaxed text-neutral-200">
        I'm a passionate Full Stack Developer with expertise in building modern
        web applications. I love creating elegant solutions to complex problems
        and turning ideas into reality. With a strong foundation in both
        frontend and backend technologies, I strive to deliver exceptional user
        experiences that make a difference.
      </p>
      <p className="font-normal text-sm md:text-base leading-relaxed text-neutral-200 mt-3">
        When I'm not coding, you can find me exploring new technologies,
        contributing to open-source projects, or sharing knowledge with the
        developer community.
      </p>
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
