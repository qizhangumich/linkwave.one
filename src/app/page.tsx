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
            Finding signal across borders. Turning structure into opportunity.
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            An exploration-driven platform for connecting and structuring cross-border opportunities.
          </p>
        </div>
      </section>

      {/* What This Is - And Is Not */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">What this is</h2>
          <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
            <p className="text-lg leading-relaxed">
              linkwave.one is an experiment in cross-border pattern-matching. It exists because interesting opportunities rarely sit neatly inside one geography, one industry, or one familiar framework.
            </p>
            <p className="text-lg leading-relaxed">
              The work here takes three forms: finding and characterizing opportunities that others miss, structuring deals or projects in ways that account for real-world constraints, and staying engaged through execution. The emphasis is on judgment and alignment rather than canned solutions.
            </p>
            <p className="text-lg leading-relaxed">
              This is not a consulting firm. There are no service menus, no methodology decks, no guarantees. The platform is intentionally open-ended — it evolves as the underlying opportunities evolve.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12">How we work</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-medium mb-3">Exploration first</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Most cross-border situations are messier than they appear from the outside. Time spent mapping incentives, understanding constraints, and finding the real friction points usually saves multiples of that time later.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Structure over pitch</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                The art is in arranging things so that the right people have the right incentives at the right time. Sometimes that looks like a deal structure. Sometimes it looks like a conversation. Sometimes it looks like walking away.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Alignment over transactions</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                The best work comes from long-term alignment with people who think in decades. The platform is selective about who to work with because the opportunities are scarce and the stakes are real.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Comfort with uncertainty</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Cross-border work is inherently uncertain. Regulatory environments shift. Counterparties change their minds. The goal is to build optionality and adapt, not to pretend that everything is knowable in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exploration Tracks */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Exploration tracks</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-12">
            These are areas of active focus — not fixed service offerings, but patterns that come up repeatedly and where there's depth of experience.
          </p>
          <div className="space-y-10">
            <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
              <h3 className="text-lg font-medium mb-3">Cross-border market structure</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Finding and characterizing opportunities that span jurisdictions — regulatory gaps, information asymmetries, incentive misalignments. The work often looks like: mapping who actually decides what, where the frictions are, and what structures would align everyone's interests.
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
              <h3 className="text-lg font-medium mb-3">Technology and infrastructure in underserved markets</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Real infrastructure plays — power, logistics, connectivity — where the unit economics work but the execution complexity filters out most capital. Also: technology businesses that solve actual problems in these environments rather than importing Silicon Valley assumptions.
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
              <h3 className="text-lg font-medium mb-3">Capital formation across jurisdictions</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Structuring capital in ways that account for regulatory reality, tax efficiency, and the actual incentives of all parties. This is not about raising rounds — it's about designing financial structures that survive contact with the real world.
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6">
              <h3 className="text-lg font-medium mb-3">Situational complexity</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Situations that don't fit standard templates — family offices with unconventional constraints, companies navigating inflection points, anything that involves multiple jurisdictions and competing interests. The common thread is high complexity and low template-fit.
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
            The partners who tend to be a good fit share certain characteristics.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-medium">
                1
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Operators, not tourists</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  People who have been inside the situations they're describing. Who understand that the map is not the territory. Who don't expect guarantees.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-medium">
                2
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Long-term thinkers</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  People who think in decades, not quarters. Who understand that the best opportunities often look messy at the beginning. Who are building something durable rather than optimizing for a flip.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-medium">
                3
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Comfortable with ambiguity</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  People who understand that cross-border work involves uncertainty and that the path often changes as you learn more. Who prefer honest assessment over false confidence.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-medium">
                4
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Decision-makers</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  People who can actually make things happen. Whether that's capital allocation, operational authority, or the ability to open doors that stay open.
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
            The platform is global in scope and agnostic about regions. Opportunities come from where they are, not from where we wish they were. Recent work has touched Southeast Asia, the Middle East, parts of Africa, and various points in between — but the common thread is interesting situations, not specific geographies.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Let's talk</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
            If you're working on something that crosses borders and resists simple categorization, that's probably worth a conversation. No decks required — just a description of what you're seeing and what feels hard about it.
          </p>
          <a
            href="mailto:hello@linkwave.one"
            className="inline-block px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            hello@linkwave.one
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
        === TONE AND LANGUAGE GUARDRAILS ===

        When editing this site, respect these principles:

        1. Sound like a real operator, not a consultant
           - Avoid: "we provide solutions", "our methodology", "best-in-class"
           - Prefer: direct description of what actually happens

        2. Acknowledge uncertainty instead of removing it
           - If a sentence sounds too polished, make it more human
           - If it sounds like a Big 4 consulting site, rewrite it

        3. No fixed services, no guarantees, no geographic branding
           - This is a doorway, not a funnel
           - The site should work even if the business evolves significantly

        4. Keep it grounded
           - Respect real-world constraints (regulation, incentives, execution)
           - Emphasize judgment over frameworks

        5. Test every change
           - No sentence should start with "We offer…"
           - No section should imply fixed services
           - The tone should feel closer to an experienced operator than a consultant
      */}
    </main>
  );
}
