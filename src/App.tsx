import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Barakah } from "./components/Barakah";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Barakah />
      <Contact />
    </div>
  );
}
