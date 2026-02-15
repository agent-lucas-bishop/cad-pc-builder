import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Questionnaire } from "./components/Questionnaire";
import { BuildResults } from "./components/BuildResults";
import { Insights } from "./components/Insights";
import { Footer } from "./components/Footer";
import { getRecommendation } from "./data/builds";

export default function App() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendedTiers, setRecommendedTiers] = useState<number[] | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleComplete = (finalAnswers: Record<string, string>) => {
    setAnswers(finalAnswers);
    const tiers = getRecommendation(finalAnswers);
    setRecommendedTiers(tiers);
    setShowResults(true);
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleReset = () => {
    setAnswers({});
    setRecommendedTiers(null);
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header />
      <Hero onStart={() => document.getElementById("questionnaire")?.scrollIntoView({ behavior: "smooth" })} />
      <Questionnaire onComplete={handleComplete} />
      {showResults && recommendedTiers && (
        <BuildResults recommendedTiers={recommendedTiers} answers={answers} onReset={handleReset} />
      )}
      <Insights />
      <Footer />
    </div>
  );
}
