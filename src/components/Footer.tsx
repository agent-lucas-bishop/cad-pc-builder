export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          <strong>CAD Build Optimizer</strong> — Helping engineers find the right hardware since 2025.
        </p>
        <p className="footer-disclaimer">
          As an Amazon Associate, we earn from qualifying purchases. Prices are approximate and may
          vary. Component recommendations are based on publicly available benchmarks and real-world
          testing. We are not affiliated with Dassault Systèmes, Autodesk, or any CAD vendor.
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} CAD Build Optimizer. All rights reserved.</p>
      </div>
    </footer>
  );
}
