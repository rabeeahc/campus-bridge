import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import JourneySection from "./components/home/JourneySection"; 

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <JourneySection/>
    </div>
  );
}

export default App;