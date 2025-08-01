import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider.jsx"
import CardFlip from "./components/CardFlip.jsx";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <CardFlip />
      <ImageSlider />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
