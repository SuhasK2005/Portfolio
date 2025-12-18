const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden transition-colors duration-500 bg-gradient-to-br from-gray-900 via-black to-blue-900"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Content Container */}
        <div className="text-center mb-6">
          {/* NEW Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-2">
            <span className="text-sm font-medium text-blue-300">
              Welcome to my Portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight transition-colors duration-500 text-white">
            Hi, I'm Suhas
            <br />
            <span className="bg-gradient-to-t from-blue-500 to-white bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed transition-colors duration-500 text-gray-300">
            Crafting beautiful digital experiences with modern technologies.
            <br />
            Turning ideas into elegant, user-friendly solutions.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                const offset = 100;
                const elementPosition =
                  contactSection.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="px-6 py-2 bg-white text-black rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-black/30 border border-gray-200 hover:bg-transparent hover:text-white"
          >
            Get In Touch
          </button>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mt-16">
          {/* Glow effect behind the dashboard */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-blue-500/20 to-transparent rounded-3xl blur-2xl scale-105"></div>

          {/* Dashboard Image Container */}
          <div className="relative bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-4 shadow-2xl shadow-blue-900/30">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/50 to-black/50 min-h-[400px] flex items-center justify-center">
              {/* Placeholder for project showcase - replace with your image */}
              <div className="text-center p-12">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Featured Project
                </h3>
                <p className="text-gray-400">
                  Add your hero image or project showcase here
                </p>
              </div>

              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Additional glow effects */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Black gradient at bottom - covers 40% */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-20"></div>

      {/* Custom styles for enhanced glow */}
      <style jsx>{`
        .glow-border {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
            0 0 40px rgba(59, 130, 246, 0.2), 0 0 80px rgba(59, 130, 246, 0.1),
            inset 0 0 20px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
