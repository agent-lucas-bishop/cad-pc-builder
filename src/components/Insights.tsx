import { cadInsights } from "../data/builds";
import { Lightbulb } from "lucide-react";

export function Insights() {
  return (
    <section className="insights" id="insights">
      <div className="container">
        <h2>CAD Hardware Guide: What Actually Matters</h2>
        <p className="insights-sub">
          Understanding how CAD software uses hardware helps you make smarter purchasing decisions.
          Here's what years of benchmarking and real-world testing have shown.
        </p>
        <div className="insights-grid">
          {cadInsights.map((insight, i) => (
            <article key={i} className="insight-card">
              <Lightbulb size={22} className="insight-icon" />
              <h3>{insight.title}</h3>
              <p>{insight.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
