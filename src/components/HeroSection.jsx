const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden transition-colors duration-500 bg-gradient-to-br from-gray-900 via-black to-purple-900"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto w-full">
        {/* Content Container */}
        <div className="text-center mt-10">
          {/* NEW Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-2">
            <span className="text-sm font-medium text-purple-300">
              Welcome to my Portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight transition-colors duration-500 text-white">
            Hi, I'm Suhas
            <br />
            <span className="bg-gradient-to-t from-purple-500 to-white bg-clip-text text-transparent">
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
      </div>

      {/* Black gradient at bottom - covers 40% */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black via-black/95 to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

export default HeroSection;
