import About from "./components/About";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <Project />
      <Contact />
    </main>
  );
};

export default App;
