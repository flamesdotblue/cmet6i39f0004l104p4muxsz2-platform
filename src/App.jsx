import React, { useState } from 'react';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleTrialSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
    setTimeout(() => {
      setTrialOpen(false);
      setSubmitted(false);
      setEmail('');
      alert('Thanks! Your free trial has been activated. Check your email for next steps.');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-fuchsia-500/20 selection:text-fuchsia-200">
      <AnimatedBackground />

      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/20 flex items-center justify-center">
              <span className="text-white font-black">AI</span>
            </div>
            <span className="font-semibold tracking-tight">SiteSmith</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <button className="hover:text-white transition" onClick={() => scrollTo('features')}>Features</button>
            <button className="hover:text-white transition" onClick={() => scrollTo('testimonials')}>Testimonials</button>
            <button className="hover:text-white transition" onClick={() => scrollTo('pricing')}>Pricing</button>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white transition" onClick={() => setDemoOpen(true)}>Watch demo</button>
            <button className="px-4 py-2 rounded-lg text-sm bg-white text-gray-900 hover:bg-white/90 active:scale-[0.99] transition" onClick={() => setTrialOpen(true)}>Start free</button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 pt-12 pb-24 md:pt-20 md:pb-28 text-center">
            <Badge>New: Multi-page funnels in one click</Badge>
            <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Build stunning websites with AI in minutes
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              From idea to live site fast. Describe your brand and get a responsive, SEO-friendly website complete with images, copy, and forms—no code required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={() => setTrialOpen(true)} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:opacity-95 active:scale-[0.99] transition shadow-lg shadow-fuchsia-500/20">
                Start free trial
              </button>
              <button onClick={() => setDemoOpen(true)} className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 hover:border-white/25 text-white/90 hover:text-white transition backdrop-blur">
                Watch 90s demo
              </button>
            </div>
            <div className="mt-6 text-xs text-white/50">
              No credit card required • 7-day trial • Cancel anytime
            </div>
            <HeroPreview />
          </div>
        </section>

        <section id="features" className="relative z-10 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-center text-3xl md:text-4xl font-bold">Everything you need to go live, fast</h2>
            <p className="text-center text-white/70 max-w-2xl mx-auto mt-3">
              Powerful AI combined with best‑practice building blocks so you can focus on your business.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <FeatureCard icon={<IconMagic />} title="AI Site Builder" desc="Generate multi‑page websites with brand‑aligned copy, images, and layout from a simple prompt." />
              <FeatureCard icon={<IconBlocks />} title="Drag & Drop" desc="Fine‑tune with a modern editor. Sections, components, and global styles built‑in." />
              <FeatureCard icon={<IconSpeed />} title="Blazing Performance" desc="Get Lighthouse‑friendly pages, image optimization, and edge hosting by default." />
              <FeatureCard icon={<IconSeo />} title="SEO & Analytics" desc="Automatic metadata, sitemaps, schema, and real‑time analytics for insights." />
            </div>
          </div>
        </section>

        <section id="testimonials" className="relative z-10 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-center text-3xl md:text-4xl font-bold">Loved by founders and creators</h2>
            <p className="text-center text-white/70 max-w-2xl mx-auto mt-3">
              Join thousands who launched faster and converted better.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Testimonial quote="We shipped a polished site in one afternoon. Our conversion rate jumped 28%." name="Jade Liu" role="Founder, Looply" color="from-fuchsia-500 to-indigo-500" />
              <Testimonial quote="It wrote great copy, picked our palette, and even generated hero images. Wild." name="Marcus V." role="Creator" color="from-sky-500 to-cyan-400" />
              <Testimonial quote="Replaced our agency for MVP launches. The editor is delightfully simple." name="Ana Gómez" role="PM, Volta" color="from-emerald-500 to-lime-400" />
            </div>
          </div>
        </section>

        <section id="pricing" className="relative z-10 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-center text-3xl md:text-4xl font-bold">Simple, transparent pricing</h2>
            <p className="text-center text-white/70 max-w-2xl mx-auto mt-3">
              Start free. Upgrade when you’re ready to publish.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <PricingCard
                name="Starter"
                price="$0"
                period="/mo"
                features={[
                  'AI site generator (limited)',
                  '1 draft project',
                  'Community support',
                ]}
                cta="Start free"
                onClick={() => setTrialOpen(true)}
              />
              <PricingCard
                highlighted
                name="Pro"
                badge="Most popular"
                price="$19"
                period="/mo"
                features={[
                  'Unlimited generations',
                  'Custom domain & hosting',
                  'SEO & analytics',
                  'Priority support',
                ]}
                cta="Start 7‑day trial"
                onClick={() => setTrialOpen(true)}
              />
              <PricingCard
                name="Teams"
                price="$49"
                period="/mo"
                features={[
                  'Everything in Pro',
                  'Collaboration & roles',
                  'Shared components',
                  'SSO & audit logs',
                ]}
                cta="Book a demo"
                onClick={() => setDemoOpen(true)}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-indigo-500 flex items-center justify-center">
              <span className="text-white text-xs font-black">AI</span>
            </div>
            <span>© {new Date().getFullYear()} SiteSmith</span>
          </div>
          <div className="flex items-center gap-5">
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#pricing">Pricing</a>
            <button className="hover:text-white" onClick={() => setDemoOpen(true)}>Demo</button>
          </div>
        </div>
      </footer>

      {demoOpen && (
        <Modal onClose={() => setDemoOpen(false)} title="Watch the product demo">
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="Product demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </Modal>
      )}

      {trialOpen && (
        <Modal onClose={() => setTrialOpen(false)} title="Start your free trial">
          <form onSubmit={handleTrialSubmit} className="space-y-4">
            <p className="text-white/70 text-sm">Create your account to get 7 days of Pro features. No credit card required.</p>
            <div>
              <label className="block text-sm mb-2 text-white/80" htmlFor="email">Work email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
              />
            </div>
            <button type="submit" disabled={submitted} className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:opacity-95 disabled:opacity-60">
              {submitted ? 'Creating your trial…' : 'Create account & start trial'}
            </button>
            <div className="text-xs text-white/50">By continuing you agree to our Terms and Privacy Policy.</div>
          </form>
        </Modal>
      )}

      <StyleTag />
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(50%_50%_at_100%_0%,rgba(79,70,229,0.25),transparent_60%),radial-gradient(40%_40%_at_0%_50%,rgba(34,197,94,0.18),transparent_60%)]" />
      <div className="absolute -inset-[10%] bg-[linear-gradient(120deg,#0b0b12,rgba(11,11,18,0.7),#0b0b12)] bg-[length:300%_300%] animate-gradient opacity-[0.65]" />
      <div className="absolute top-1/4 -left-24 h-72 w-72 bg-fuchsia-500/20 blur-3xl rounded-full animate-float" />
      <div className="absolute bottom-10 -right-10 h-80 w-80 bg-indigo-500/20 blur-3xl rounded-full animate-float-delayed" />
      <div className="absolute inset-0 mix-blend-overlay opacity-20 [background-image:radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 animate-pulse" />
      {children}
    </span>
  );
}

function HeroPreview() {
  return (
    <div className="mt-14">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
        <div className="rounded-xl bg-gray-900/50 border border-white/10 overflow-hidden">
          <div className="flex items-center gap-1 px-3 py-2 border-b border-white/10">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-xs text-white/50">preview.sitesmith.ai</span>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="h-8 w-40 rounded bg-white/10" />
              <div className="h-10 w-3/4 rounded bg-white/10" />
              <div className="h-4 w-full rounded bg-white/10" />
              <div className="h-4 w-5/6 rounded bg-white/10" />
              <div className="mt-4 flex gap-3">
                <div className="h-10 w-28 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500" />
                <div className="h-10 w-28 rounded-lg border border-white/15" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-28 rounded-lg bg-white/10" />
              <div className="h-28 rounded-lg bg-white/10" />
              <div className="h-28 rounded-lg bg-white/10" />
              <div className="h-28 rounded-lg bg-white/10" />
              <div className="col-span-2 h-28 rounded-lg bg-white/10" />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-white/50">What you’ll get in seconds from a single prompt.</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition">
      <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold mb-1.5">{title}</h3>
      <p className="text-white/70 text-sm">{desc}</p>
    </div>
  );
}

function Testimonial({ quote, name, role, color }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/80 bg-gradient-to-r ${color} bg-clip-text text-transparent border border-white/10`}>★ Verified user</div>
      <p className="mt-4 text-white/90">“{quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-xs text-white/80">{name.split(' ').map((n) => n[0]).slice(0,2).join('')}</span>
        </div>
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-white/60">{role}</div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, price, period, features, cta, highlighted, badge, onClick }) {
  return (
    <div className={`relative rounded-2xl p-[1px] ${highlighted ? 'bg-gradient-to-br from-fuchsia-500/50 to-indigo-500/50' : 'bg-white/10'} `}>
      <div className={`h-full rounded-2xl bg-gray-950/90 p-6 border ${highlighted ? 'border-white/20' : 'border-white/10'}`}>
        {badge && (
          <div className="absolute -top-3 left-6"><span className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white text-xs px-3 py-1 shadow-lg">{badge}</span></div>
        )}
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-black">{price}</span>
              <span className="text-sm text-white/60">{period}</span>
            </div>
          </div>
        </div>
        <ul className="mt-5 space-y-2 text-sm">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-white/80">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <button onClick={onClick} className={`mt-6 w-full px-5 py-3 rounded-xl transition active:scale-[0.99] ${highlighted ? 'bg-white text-gray-900 hover:bg-white/90' : 'border border-white/15 hover:border-white/25 text-white/90'}`}>
          {cta}
        </button>
      </div>
    </div>
  );
}

function Modal({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-xl rounded-2xl border border-white/10 bg-gray-950 p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button aria-label="Close" onClick={onClose} className="p-2 rounded-lg hover:bg-white/5">✕</button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

function StyleTag() {
  return (
    <style>{`
      @keyframes gradientMove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      .animate-gradient { animation: gradientMove 16s ease-in-out infinite; }
      @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-12px) translateX(6px); } }
      .animate-float { animation: float 10s ease-in-out infinite; }
      .animate-float-delayed { animation: float 12s ease-in-out 1s infinite; }
    `}</style>
  );
}

function IconMagic() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-fuchsia-400">
      <path d="M5 12l7-7 2 2-7 7-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 5l1-1M18 9l1-1M9 18l1-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconBlocks() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-indigo-300">
      <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function IconSpeed() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
      <path d="M21 12a9 9 0 10-18 0 9 9 0 0018 0z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 12l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconSeo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-sky-300">
      <path d="M4 6h16M4 12h10M4 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
