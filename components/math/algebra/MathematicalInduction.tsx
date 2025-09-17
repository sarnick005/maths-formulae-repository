"use client";

export default function MathematicalInduction() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Mathematical Induction
      </h2>

      <div className="space-y-2 font-lora text-sm md:text-base">
        {/* Section 1 : Basics  */}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <div>
            <p className="font-semibold font-robotoMono">
              <span>1. </span>
              <span className="underline">Basics</span>
            </p>

            <div className="flex flex-col gap-2 pl-4 mt-2 ml-3">
              <p>
                (i) Mathematical Deduction is the transition from a general
                proposition to a particular proposition.
              </p>
              <p>
                (ii) Mathematical Induction is the transition from a particular
                proposition to a general proposition.
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold font-robotoMono">
              <span>2. </span>
              <span className="underline">Statement of the Principle</span>
            </p>

            <div className="flex flex-col gap-2 pl-4 mt-2 ml-3">
              <p>
                Let ℕ = {"{1, 2, 3, ...}"} denote the set of natural numbers,
                and <i>P(n)</i> be a mathematical statement involving the
                natural numbers n ∈ ℕ such that
              </p>
              <p>
                (i) <em>P(1)</em> is true, i.e., <em>P(n)</em> is true for n =
                1.
              </p>
              <p>
                (ii) <em>P(k + 1)</em> is true whenever <em>P(k)</em> is true,
                i.e., <em>P(k)</em> true ⇒ <em>P(k + 1)</em> true.
              </p>
              <p>
                Then <em>P(n)</em> is true for all natural numbers n.
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold font-robotoMono">
              <span>3. </span>
              <span className="underline">Steps</span>
            </p>

            <div className="flex flex-col gap-2 pl-4 mt-2 ml-3">
              <p>
                (i) Write the mathematical relation to be proved (involving n)
                in the form of a mathematical statement <em>P(n)</em>.
              </p>
              <p>
                (ii) Show that <em>P(n)</em> is true for n = 1 (or the smallest
                value of n in the domain).
              </p>
              <p>
                (iii) Assume that <em>P(n)</em> is true for some particular
                value of n, say for n = k.
              </p>
              <p>
                (iv) Use the assumption of step (iii) to prove that{" "}
                <em>P(n)</em> is true for n = k + 1.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
