import About from "./components/About";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <Project />
    </main>
  );
};

export default App;
