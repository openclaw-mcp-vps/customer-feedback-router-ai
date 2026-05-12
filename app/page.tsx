export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Feedback Routing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route feedback to the{' '}
          <span className="text-[#58a6ff]">right team</span>{' '}instantly
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          AI categorizes every piece of customer feedback and automatically routes it to the right team member — with full context, via email or Slack.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start for $25/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Learn more
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[['OpenAI GPT-4', 'Smart classification'], ['Webhook routing', 'Instant delivery'], ['Email + Slack', 'Team notifications']].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-white font-semibold text-sm">{title}</p>
              <p className="text-[#8b949e] text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Pro Plan</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-bold text-white">$25</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to route feedback at scale</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited feedback submissions',
              'AI classification via GPT-4',
              'Webhook-based routing engine',
              'Email & Slack notifications',
              'Custom routing rules',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started now
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the AI classify feedback?',
              a: 'We use OpenAI GPT-4 to analyze each feedback submission and categorize it by type (bug, feature request, billing, etc.) and sentiment, then match it to your configured routing rules.'
            },
            {
              q: 'Which notification channels are supported?',
              a: 'FeedbackRouter AI supports email and Slack out of the box. You can configure different destinations per category — e.g. bugs go to engineering Slack, billing issues go to finance email.'
            },
            {
              q: 'Can I customize the routing rules?',
              a: 'Yes. You define routing rules via a simple dashboard — map feedback categories and keywords to specific team members or channels. Rules update instantly with no code changes needed.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} FeedbackRouter AI. All rights reserved.
      </footer>
    </main>
  )
}
