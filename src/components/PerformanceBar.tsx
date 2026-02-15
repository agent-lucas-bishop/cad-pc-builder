export function PerformanceBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="perf-bar">
      <div className="perf-label">
        <span>{label}</span>
        <span className="perf-value">{value}/100</span>
      </div>
      <div className="perf-track">
        <div className="perf-fill" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}
