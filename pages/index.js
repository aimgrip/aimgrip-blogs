// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>AimGrip Blogs</title>
        <meta name="description" content="Explore Social Media, Tech, SaaS, and Digital Trends with AimGrip" />
      </Head>

      <Nav />

      <main className="min-h-screen">
        <Hero />

        <section className="max-w-6xl mx-auto px-6 py-20">
          <CategoryRow />
        </section>

        <section id="blogs" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8">Latest Posts</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard title="How to grow on Instagram in 2025" excerpt="Quick, practical tips to grow organically and strategically." />
            <BlogCard title="SaaS pricing strategies that convert" excerpt="How to think about pricing for growth and retention." />
            <BlogCard title="Top productivity tools for teams" excerpt="Collaboration and workflows that actually work." />
            <BlogCard title="What’s new in social algorithms" excerpt="Understand new ranking signals and adapt faster." />
            <BlogCard title="Beginner's guide to LinkedIn content" excerpt="Make your posts discoverable and valuable." />
            <BlogCard title="How to run successful content sprints" excerpt="Plan, create, and ship posts faster with quality." />
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              Load more
            </button>
          </div>
        </section>

        <About />

      </main>

      <FloatingBadge />
    </>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm sticky top-0 z-40 border-b border-transparent">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <img src="/logo.png" alt="AimGrip" className="h-10 w-auto" />
            <span className="font-extrabold text-xl text-slate-900">AimGrip</span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#blogs" className="text-sm text-slate-700 hover:text-slate-900">Blogs</a>
          <a href="#about" className="text-sm text-slate-700 hover:text-slate-900">About</a>
          <a
            href="https://aimgrip.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Visit Site
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative">
      <div
        className="h-[76vh] md:h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-slate-900/60" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl bg-transparent">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Explore Social Media, Tech, SaaS, and Digital Trends with <span className="text-white">AimGrip</span>
            </h1>

            <p className="mt-6 text-lg text-slate-200 max-w-xl">
              Social media evolves quickly — AimGrip brings you expert insights, latest updates, and practical tips to master platforms like Instagram, TikTok, LinkedIn, and more.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://aimgrip.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium shadow-lg hover:scale-105 transition-transform"
              >
                Visit AimGrip
              </a>

              <div className="ml-2 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end hero bg */}
    </section>
  );
}

/* ---------- CATEGORY ROW (simple visual row like TalkSocially) ---------- */
function CategoryRow() {
  const cats = [
    { name: "SaaS", desc: "Product & growth" },
    { name: "Business", desc: "Strategy & ops" },
    { name: "Technology", desc: "Trends & tools" },
    { name: "Social Media", desc: "Platform tactics" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cats.map((c) => (
        <div key={c.name} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <h4 className="font-semibold text-lg text-slate-800">{c.name}</h4>
          <p className="mt-2 text-sm text-slate-500">{c.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- BLOG CARD ---------- */
function BlogCard({ title, excerpt }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="h-44 bg-slate-200 flex items-center justify-center">
        {/* placeholder image area */}
        <span className="text-slate-400">image</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 mb-4">{excerpt}</p>
        <a className="text-blue-600 font-medium hover:underline" href="#">Read more →</a>
      </div>
    </article>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-slate-800 mb-6">About AimGrip</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Beyond social media strategies, AimGrip is a hub for insightful, in-depth content that helps readers solve queries across technology, SaaS, social media, and digital trends. We publish actionable, easy-to-understand articles that make learning simple and engaging.
        </p>
      </div>
    </section>
  );
}

/* ---------- FLOATING BADGE ---------- */
function FloatingBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://aimgrip.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white shadow-lg text-sm font-medium hover:opacity-90"
      >
        World Best Service Provider <span className="ml-2 font-bold text-yellow-300">AimGrip.com</span>
      </a>
    </div>
  );
}
