const About = () => {
  const skills = [
    { name: "React", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "Tailwind CSS", level: "85%" },
    { name: "Python", level: "75%" },
    { name: "MongoDB", level: "70%" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-6 overflow-hidden transition-colors duration-500 bg-gradient-to-br from-blue-900 via-gray-900 to-black"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Get to know more about who I am
          </p>
        </div>

        {/* Dashboard Mockup Style Container */}
        <div className="relative">
          {/* Glow effect behind the dashboard */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-blue-500/20 to-transparent rounded-3xl blur-2xl scale-105"></div>

          {/* Dashboard Container */}
          <div className="relative bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-900/30">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/50 to-black/50 p-8 md:p-12">
              {/* Main Content Grid */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Side - Image */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center overflow-hidden mb-6 shadow-2xl shadow-blue-500/30">
                    {/* Replace this with your actual image */}
                    <svg
                      className="w-24 h-24 md:w-32 md:h-32 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm text-center">
                    Replace with your profile image
                  </p>
                </div>

                {/* Right Side - Details */}
                <div className="space-y-6">
                  {/* Bio */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></span>
                      Who I Am
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      I'm a passionate Full Stack Developer with a love for
                      creating beautiful and functional web applications. With
                      expertise in modern technologies and frameworks, I
                      transform ideas into elegant digital solutions that make a
                      difference.
                    </p>
                  </div>

                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 hover:border-blue-400/50 transition-all duration-300">
                      <p className="text-gray-400 text-xs mb-1">Experience</p>
                      <p className="text-white font-semibold">3+ Years</p>
                    </div>
                    <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 hover:border-blue-400/50 transition-all duration-300">
                      <p className="text-gray-400 text-xs mb-1">Projects</p>
                      <p className="text-white font-semibold">20+ Completed</p>
                    </div>
                    <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 hover:border-blue-400/50 transition-all duration-300">
                      <p className="text-gray-400 text-xs mb-1">Location</p>
                      <p className="text-white font-semibold">India</p>
                    </div>
                    <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 hover:border-blue-400/50 transition-all duration-300">
                      <p className="text-gray-400 text-xs mb-1">Availability</p>
                      <p className="text-white font-semibold">Open</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Section - Full Width Below */}
              <div className="mt-8 pt-8 border-t border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></span>
                  Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-400 font-semibold">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          </div>

          {/* Additional glow effects */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
        </div>
      </div>

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

export default About;
