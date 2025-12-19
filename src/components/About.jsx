const About = () => {
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
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-purple-500/20 to-transparent rounded-3xl blur-2xl scale-105"></div>

          {/* Dashboard Image Container */}
          <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-4 shadow-2xl shadow-purple-900/30">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-black/50 min-h-[400px] flex items-center justify-center">
              {/* Placeholder for project showcase - replace with your image */}
              <div className="text-center p-12"></div>

              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
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
