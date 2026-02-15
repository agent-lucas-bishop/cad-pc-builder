import { useState } from "react";
import { builds } from "../data/builds";
import { BuildCard } from "./BuildCard";
import { CompareView } from "./CompareView";
import { RotateCcw, BarChart3 } from "lucide-react";

interface Props {
  recommendedTiers: number[];
  answers?: Record<string, string>;
  onReset: () => void;
}

export function BuildResults({ recommendedTiers, onReset }: Props) {
  const [compareMode, setCompareMode] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState<number[]>(
    recommendedTiers.length >= 2 ? [recommendedTiers[0], recommendedTiers[1]] : recommendedTiers
  );

  const primary = recommendedTiers[Math.floor(recommendedTiers.length / 2)];

  const toggleCompare = (idx: number) => {
    setSelectedForCompare((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx].slice(-3)
    );
  };

  return (
    <section className="results" id="results">
      <div className="container">
        <h2>Your Recommended Builds</h2>
        <p className="results-sub">
          Based on your workflow, {recommendedTiers.length > 1 ? "these builds" : "this build"} best
          match your needs. The highlighted build is our top pick for you.
        </p>
        <div className="results-actions">
          <button className="btn btn-outline" onClick={() => setCompareMode(!compareMode)}>
            <BarChart3 size={18} /> {compareMode ? "Card View" : "Compare Side by Side"}
          </button>
          <button className="btn btn-ghost" onClick={onReset}>
            <RotateCcw size={18} /> Start Over
          </button>
        </div>

        {compareMode ? (
          <CompareView indices={selectedForCompare} onToggle={toggleCompare} allIndices={[0,1,2,3,4]} />
        ) : (
          <div className="build-grid">
            {recommendedTiers.map((idx) => (
              <BuildCard
                key={idx}
                build={builds[idx]}
                isPrimary={idx === primary}
              />
            ))}
          </div>
        )}

        <div className="all-builds">
          <h3>All Build Tiers</h3>
          <div className="tier-pills">
            {builds.map((b, i) => (
              <a
                key={i}
                href={`#build-${i}`}
                className={`tier-pill ${recommendedTiers.includes(i) ? "recommended" : ""}`}
              >
                {b.tier} — ${b.budget.toLocaleString()}
                {i === primary && <span className="pill-badge">★ Top Pick</span>}
              </a>
            ))}
          </div>
        </div>

        <p className="affiliate-disclaimer">
          💡 Links go to Amazon. As an Amazon Associate, we earn from qualifying purchases. This
          doesn't affect our recommendations or your price.
        </p>
      </div>
    </section>
  );
}
