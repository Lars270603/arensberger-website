"use client";

import { useState } from "react";
import Image from "next/image";
import NestedCta from "./NestedCta";
import BezelFrame from "./BezelFrame";
import { mattressCategories } from "./MattressGrid";

type ResultKey = "federkern" | "gelschaum" | "kaltschaum" | "topper" | "kinder";
type ScoreKey = "federkern" | "gelschaum" | "kaltschaum";

const categoryByHref: Record<ResultKey, string> = {
  federkern: "/matratzen/federkern",
  gelschaum: "/matratzen/gelschaum",
  kaltschaum: "/matratzen/kaltschaum",
  topper: "/matratzen/topper",
  kinder: "/matratzen/kinder",
};

const reasonByKey: Record<ResultKey, string> = {
  federkern: "Du magst es federnd und stabil, und dein Körpergewicht profitiert von zusätzlichem Halt — genau dafür ist unser Federkern-System gebaut.",
  gelschaum: "Dir wird nachts schnell zu warm — unser Nanocell-Gelschaum reguliert Temperatur und Druck aktiv, statt nur stillzuhalten.",
  kaltschaum: "Du magst es gleichmäßig anschmiegsam, ohne einzusinken, und frierst eher leicht — dafür ist Kaltschaum gemacht.",
  topper: "Deine Matratze ist eigentlich okay — ein Topper wertet sie gezielt auf, ohne dass du sie ersetzen musst.",
  kinder: "Für den Nachwuchs entwickeln wir ein eigenes, ergonomisches System für gesunden Schlaf von Anfang an.",
};

const totalSteps = 4;

export default function SchlaffinderQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<ScoreKey, number>>({
    federkern: 0,
    gelschaum: 0,
    kaltschaum: 0,
  });
  const [result, setResult] = useState<ResultKey | null>(null);

  const answerAndAdvance = (delta: Partial<Record<ScoreKey, number>>, nextStep: number) => {
    const next: Record<ScoreKey, number> = { ...scores };
    (Object.keys(delta) as ScoreKey[]).forEach((key) => {
      next[key] = scores[key] + (delta[key] ?? 0);
    });
    setScores(next);

    if (nextStep >= totalSteps) {
      const winner = (Object.keys(next) as ScoreKey[]).reduce((a, b) => (next[b] > next[a] ? b : a));
      setResult(winner);
    }
    setStep(nextStep);
  };

  const chooseDirectly = (key: ResultKey) => {
    setResult(key);
    setStep(totalSteps);
  };

  const reset = () => {
    setScores({ federkern: 0, gelschaum: 0, kaltschaum: 0 });
    setResult(null);
    setStep(0);
  };

  const resultCategory = result ? mattressCategories.find((c) => c.href === categoryByHref[result]) : null;

  return (
    <div className="rounded-[2rem] bg-white p-2 ring-1 ring-black/5">
      <div className="rounded-[calc(2rem-0.5rem)] bg-background px-6 py-10 sm:px-10 sm:py-12">
        {result === null && (
          <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-surface">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        <div aria-live="polite">
          {step === 0 && (
            <Question
              question="Für wen suchst du die passende Matratze?"
              options={[
                { label: "Für mich", onClick: () => setStep(1) },
                { label: "Für mein Kind", onClick: () => chooseDirectly("kinder") },
              ]}
            />
          )}

          {step === 1 && (
            <Question
              question="Wie ist deine aktuelle Matratze?"
              options={[
                {
                  label: "Eigentlich okay, ich will sie nur gezielt aufwerten",
                  onClick: () => chooseDirectly("topper"),
                },
                {
                  label: "Ich brauche eine ganz neue Matratze",
                  onClick: () => setStep(2),
                },
              ]}
            />
          )}

          {step === 2 && (
            <Question
              question="Wie ist dir nachts meistens?"
              options={[
                {
                  label: "Mir wird schnell zu warm",
                  onClick: () => answerAndAdvance({ gelschaum: 2, federkern: 1 }, 3),
                },
                {
                  label: "Mir ist oft kalt, ich friere leicht",
                  onClick: () => answerAndAdvance({ kaltschaum: 2 }, 3),
                },
                {
                  label: "Eher neutral, wechselt selten",
                  onClick: () => answerAndAdvance({ federkern: 1, gelschaum: 1, kaltschaum: 1 }, 3),
                },
              ]}
            />
          )}

          {step === 3 && (
            <Question
              question="Was beschreibt dein Liegegefühl am liebsten?"
              options={[
                {
                  label: "Federnd, mit spürbarem Halt",
                  onClick: () => answerAndAdvance({ federkern: 2 }, 4),
                },
                {
                  label: "Gleichmäßig anschmiegsam, ohne einzusinken",
                  onClick: () => answerAndAdvance({ kaltschaum: 2, gelschaum: 1 }, 4),
                },
              ]}
            />
          )}

          {step === totalSteps && result && resultCategory && (
            <div>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-accent">
                Unsere Empfehlung
              </p>
              <h3 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
                {resultCategory.title}
              </h3>
              <p className="mt-4 max-w-xl font-body text-lg text-secondary">{reasonByKey[result]}</p>

              {resultCategory.image && (
                <div className="mt-8 max-w-md">
                  <BezelFrame>
                    <div className="relative aspect-video w-full">
                      <Image
                        src={resultCategory.image}
                        alt={`${resultCategory.title} Matratze im Wohnkontext`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </BezelFrame>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <NestedCta href={resultCategory.href}>{resultCategory.title} entdecken</NestedCta>
                <button
                  type="button"
                  onClick={reset}
                  className="font-body text-sm text-secondary underline underline-offset-4 hover:text-accent transition-colors"
                >
                  Nochmal von vorn
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Question({
  question,
  options,
}: {
  question: string;
  options: { label: string; onClick: () => void }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-2xl font-bold sm:text-3xl">{question}</h3>
      <div className="mt-6 flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={option.onClick}
            className="w-full rounded-2xl border border-surface bg-white px-6 py-4 text-left font-body text-base transition-colors duration-200 hover:border-accent hover:bg-accent-tint"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
