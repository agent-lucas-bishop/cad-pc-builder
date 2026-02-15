import { useState } from "react";
import { questions } from "../data/builds";
import { ChevronLeft } from "lucide-react";

interface Props {
  onComplete: (answers: Record<string, string>) => void;
}

export function Questionnaire({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const current = questions[step];

  const select = (value: string) => {
    const next = { ...answers, [current.id]: value };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(next);
    }
  };

  return (
    <section className="questionnaire" id="questionnaire">
      <div className="container">
        <div className="q-progress">
          {questions.map((_, i) => (
            <div key={i} className={`q-dot ${i < step ? "done" : i === step ? "active" : ""}`} />
          ))}
        </div>
        <p className="q-step">Question {step + 1} of {questions.length}</p>
        <h2 className="q-title">{current.question}</h2>
        <p className="q-subtitle">{current.subtitle}</p>
        <div className="q-options">
          {current.options.map((opt) => (
            <button
              key={opt.value}
              className={`q-option ${answers[current.id] === opt.value ? "selected" : ""}`}
              onClick={() => select(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {step > 0 && (
          <button className="btn btn-ghost q-back" onClick={() => setStep(step - 1)}>
            <ChevronLeft size={18} /> Back
          </button>
        )}
      </div>
    </section>
  );
}
