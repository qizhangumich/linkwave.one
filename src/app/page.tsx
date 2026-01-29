export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-semibold tracking-tight">
              linkwave.one
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Clarity before execution.
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Linkwave works with operators facing cross-border decisions where judgment matters more than frameworks.
          </p>
        </div>
      </section>

      {/* What Linkwave Is / Is Not */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">What Linkwave is</h2>
          <div className="space-y-6 text-neutral-700 dark:text-neutral-300 mb-12">
            <p className="text-lg leading-relaxed">
              A place to think through cross-border decisions before they become commitments.
            </p>
            <p className="text-lg leading-relaxed">
              A space to slow down thinking before irreversible moves.
            </p>
            <p className="text-lg leading-relaxed">
              A collaborative environment for examining tradeoffs that do not fit slides.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-8">What Linkwave is not</h2>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p className="text-lg leading-relaxed">
              A consulting firm.
            </p>
            <p className="text-lg leading-relaxed">
              A service menu.
            </p>
            <p className="text-lg leading-relaxed">
              A shortcut to outcomes.
            </p>
            <p className="text-lg leading-relaxed">
              A replacement for responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">How we work</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
              Conversations begin with whatever is on the table — a situation, a tension, a decision that will not wait for perfect information.
            </p>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
              Uncertainty is treated as material, not as something to be managed away. The goal is to see what is actually at stake, including what cannot be known.
            </p>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
              Decisions are slowed when that slowing creates value. Sometimes clarity emerges from stillness. Sometimes it emerges from disagreement that is allowed to breathe.
            </p>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              The posture is collaborative, not advisory. You know your context better than anyone else. The work is done together, not to you.
            </p>
          </div>
        </div>
      </section>

      {/* Exploration Tracks */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Areas of ongoing attention</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-12">
            These are not services. They are places where tradeoffs show up repeatedly.
          </p>
          <div className="space-y-10">
            <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
              <h3 className="text-lg font-medium mb-3">Alignment under time pressure</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Situations where long-term alignment and short-term pressure pull in opposite directions. The work involves finding arrangements that respect both.
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
              <h3 className="text-lg font-medium mb-3">Execution across jurisdictions</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Decisions that must survive contact with multiple regulatory environments, incentive systems, and cultural contexts. The question is what structures actually hold up.
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
              <h3 className="text-lg font-medium mb-3">Capital that accounts for reality</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Financial structures that work given actual constraints, not theoretical ones. This includes tax, regulation, and the real incentives of every party at the table.
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
              <h3 className="text-lg font-medium mb-3">Situations that resist templates</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Contexts where standard frameworks break down — family dynamics, unconventional constraints, competing interests across borders. The work is custom because the situation is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Who we work with</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-12">
            Described by decision posture, not title.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-medium">
                1
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">People carrying downside personally</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  When you have something real at stake, generic advice becomes dangerous. You need thinking that accounts for your actual exposure.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-medium">
                2
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Operators with partial information</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  You will never have complete information. The question is how to decide well anyway, and how to structure arrangements that remain robust as you learn more.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-medium">
                3
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Partners facing non-reversible commitments</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  When a decision cannot be easily undone, the quality of the thinking beforehand matters disproportionately. This is where the work focuses.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-medium">
                4
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Teams navigating ambiguity without clean exits</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Sometimes the hard part is not finding the right answer — it is understanding what you are actually choosing between, and what happens after.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Statement */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Geography</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Geography follows the situation. Work spans jurisdictions and regions. Location matters when it introduces constraints — not as a label.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
            If there is something you are thinking through, we can talk.
          </p>
          <a
            href="mailto:jeremy@linkwave.one"
            className="inline-block px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            jeremy@linkwave.one
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto text-center text-neutral-500 dark:text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} linkwave.one</p>
        </div>
      </footer>

      {/* Tone Guardrails - Hidden comment for future editors */}
      {/*
        === LINKWAVE TONE AND LANGUAGE GUARDRAILS ===

        When editing this site, respect these principles:

        1. Core Positioning (Non-Negotiable)
           Linkwave is NOT a consultancy, platform, or service catalogue.
           Linkwave is: A place to think through cross-border decisions BEFORE they become commitments.

        2. Role Definition
           The voice is a senior operator and judgment partner — not a consultant.
           - Has sat inside execution, not just advisory roles
           - Does not need to prove intelligence
           - Does not simplify reality to sound helpful

        3. Primary Reader
           Write for people who:
           - Face decisions that cannot be easily reversed
           - Operate across borders, jurisdictions, or systems
           - Hold personal or reputational downside
           - Are uncomfortable outsourcing judgment

        4. Core Intent
           The goal is NOT conversion, persuasion, scale, or visibility.
           The goal is for the right reader to feel:
           - "This feels calm."
           - "This understands where things break."
           - "I wouldn't be oversold here."
           - "I could think out loud with this person."

        5. Forbidden Words/Concepts
           - best-in-class, world-class, seamless, efficient
           - proven framework, guaranteed outcomes
           - access as a selling point

        6. Guiding Rule
           "If it sounds confident, soften it.
            If it sounds smooth, roughen it.
            If it sounds complete, reopen it."

        7. Structure Rules
           - No steps, phases, diagrams, or frameworks in "How We Work"
           - Exploration tracks framed as areas of tension, not services
           - Who we work with described by how they decide, not who they are
           - Geography follows the situation (factual, not branded)

        8. Emergency Rewrite Instruction
           If output starts to sound like consulting or marketing:
           "Rewrite this as if you have seen deals fail, partnerships break,
            and decisions age badly. Remove certainty. Keep responsibility."

        9. Single Guiding Principle
           Linkwave does not sell answers.
           Linkwave protects the space where good decisions are still possible.
      */}
    </main>
  );
}
