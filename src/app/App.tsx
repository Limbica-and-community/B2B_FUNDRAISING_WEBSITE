import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { ParadigmSection } from "./components/ParadigmSection";
import { SolutionSection } from "./components/SolutionSection";
import { UseCasesSection } from "./components/UseCasesSection";
import { ROISection } from "./components/ROISection";
import { DiffSection } from "./components/DiffSection";
import { ClosingSection } from "./components/ClosingSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ParadigmSection />
      <SolutionSection />
      <UseCasesSection />
      <ROISection />
      <DiffSection />
      <ClosingSection />
      <Footer />
    </div>
  );
}
