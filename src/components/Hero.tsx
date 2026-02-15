import { Monitor, Zap, DollarSign } from "lucide-react";

export function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>Build the Perfect PC for SOLIDWORKS & CAD</h1>
        <p className="hero-sub">
          Answer a few questions about your workflow and get personalized component
          recommendations optimized for your CAD software, assembly complexity, and budget.
        </p>
        <button className="btn btn-primary btn-lg" onClick={onStart}>
          Find My Ideal Build →
        </button>
        <div className="hero-features">
          <div className="hero-feature">
            <Monitor size={24} />
            <span>Optimized for SOLIDWORKS, Inventor, Fusion 360 & more</span>
          </div>
          <div className="hero-feature">
            <Zap size={24} />
            <span>Performance scores for modeling, rendering & simulation</span>
          </div>
          <div className="hero-feature">
            <DollarSign size={24} />
            <span>5 budget tiers from $1,000 to $5,000</span>
          </div>
        </div>
      </div>
    </section>
  );
}
