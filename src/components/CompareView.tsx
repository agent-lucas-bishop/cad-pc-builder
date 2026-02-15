import { builds, affiliateUrl } from "../data/builds";
import { ExternalLink } from "lucide-react";

interface Props {
  indices: number[];
  onToggle: (idx: number) => void;
  allIndices: number[];
}

const perfKeys = ["modeling", "rendering", "assemblies", "simulation", "multitasking"] as const;

export function CompareView({ indices, onToggle, allIndices }: Props) {
  const selected = indices.map((i) => builds[i]);

  return (
    <div className="compare">
      <div className="compare-selector">
        {allIndices.map((i) => (
          <button
            key={i}
            className={`tier-pill ${indices.includes(i) ? "recommended" : ""}`}
            onClick={() => onToggle(i)}
          >
            {builds[i].tier}
          </button>
        ))}
      </div>
      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th></th>
              {selected.map((b) => (
                <th key={b.tier}>
                  <div className="compare-th">{b.tier}</div>
                  <div className="compare-price">${b.components.reduce((s, c) => s + c.price, 0).toLocaleString()}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {perfKeys.map((key) => (
              <tr key={key}>
                <td className="compare-label">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                {selected.map((b) => {
                  const v = b.performanceScores[key];
                  return (
                    <td key={b.tier}>
                      <div className="compare-score">
                        <div className="compare-bar" style={{ width: `${v}%` }} />
                        <span>{v}</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr className="compare-divider">
              <td colSpan={selected.length + 1}>Components</td>
            </tr>
            {["CPU", "GPU", "RAM", "Storage", "Motherboard", "PSU", "Case", "Cooler"].map((cat) => (
              <tr key={cat}>
                <td className="compare-label">{cat}</td>
                {selected.map((b) => {
                  const c = b.components.find((x) => x.category === cat);
                  return (
                    <td key={b.tier}>
                      {c && (
                        <div className="compare-comp">
                          <strong>{c.name}</strong>
                          <span className="compare-spec">{c.spec}</span>
                          <a href={affiliateUrl(c.asin)} target="_blank" rel="noopener noreferrer">
                            ${c.price} <ExternalLink size={12} />
                          </a>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
