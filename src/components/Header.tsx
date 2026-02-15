import { Cpu } from "lucide-react";

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">
          <Cpu size={28} />
          <span>CAD Build Optimizer</span>
        </a>
        <nav className="header-nav">
          <a href="#questionnaire">Get Recommendation</a>
          <a href="#insights">CAD Hardware Guide</a>
        </nav>
      </div>
    </header>
  );
}
