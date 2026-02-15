import { useState } from "react";
import { type Build, affiliateUrl } from "../data/builds";
import { PerformanceBar } from "./PerformanceBar";
import { ExternalLink, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";

const categoryColors: Record<string, string> = {
  CPU: "#3b82f6",
  GPU: "#22c55e",
  RAM: "#f97316",
  Storage: "#a855f7",
  Motherboard: "#ef4444",
  PSU: "#eab308",
  Case: "#06b6d4",
  Cooler: "#ec4899",
};

const categoryIcons: Record<string, string> = {
  CPU: "🔲",
  GPU: "🎮",
  RAM: "🧮",
  Storage: "💾",
  Motherboard: "🔧",
  PSU: "⚡",
  Case: "🖥️",
  Cooler: "❄️",
};

export function BuildCard({ build, isPrimary }: { build: Build; isPrimary: boolean }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(isPrimary);

  const totalPrice = build.components.reduce((s, c) => s + c.price, 0);

  const copyBuildList = () => {
    const text = build.components
      .map((c) => `${c.category}: ${c.name} (${c.spec}) - $${c.price}\n  ${affiliateUrl(c.asin)}`)
      .join("\n\n");
    const full = `${build.tier} CAD Build (~$${totalPrice})\n\n${text}\n\nBuilt with CAD Build Optimizer`;
    navigator.clipboard.writeText(full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`build-card ${isPrimary ? "primary" : ""}`} id={`build-${build.budget}`}>
      {isPrimary && <div className="card-badge">★ Recommended for You</div>}
      <div className="card-header">
        <div>
          <h3 className="card-tier">{build.tier}</h3>
          <p className="card-tagline">{build.tagline}</p>
        </div>
        <div className="card-price">
          <span className="price-label">~</span>
          <span className="price-amount">${totalPrice.toLocaleString()}</span>
        </div>
      </div>
      <p className="card-desc">{build.description}</p>

      <div className="perf-section">
        <h4>Performance Scores</h4>
        <PerformanceBar label="Modeling" value={build.performanceScores.modeling} color="#3b82f6" />
        <PerformanceBar label="Rendering" value={build.performanceScores.rendering} color="#22c55e" />
        <PerformanceBar label="Assemblies" value={build.performanceScores.assemblies} color="#f97316" />
        <PerformanceBar label="Simulation" value={build.performanceScores.simulation} color="#a855f7" />
        <PerformanceBar label="Multitasking" value={build.performanceScores.multitasking} color="#06b6d4" />
      </div>

      <div className="best-for">
        <h4>Best For</h4>
        <ul>
          {build.bestFor.map((item, i) => (
            <li key={i}>✓ {item}</li>
          ))}
        </ul>
      </div>

      <button className="btn btn-outline expand-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        {expanded ? "Hide Components" : "Show Components"}
      </button>

      {expanded && (
        <div className="components-list">
          {build.components.map((comp, i) => (
            <div key={i} className="component" style={{ borderLeftColor: categoryColors[comp.category] || "#666" }}>
              <div className="comp-header">
                <span className="comp-icon">{categoryIcons[comp.category]}</span>
                <span className="comp-category" style={{ color: categoryColors[comp.category] }}>
                  {comp.category}
                </span>
                <span className="comp-price">${comp.price}</span>
              </div>
              <h5 className="comp-name">{comp.name}</h5>
              <p className="comp-spec">{comp.spec}</p>
              <p className="comp-why">{comp.why}</p>
              <a
                href={affiliateUrl(comp.asin)}
                target="_blank"
                rel="noopener noreferrer"
                className="comp-link"
              >
                View on Amazon <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-ghost copy-btn" onClick={copyBuildList}>
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? "Copied!" : "Copy Build List"}
      </button>
    </div>
  );
}
