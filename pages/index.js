// pages/index.js
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About AimGrip</title>
        <meta name="description" content="Learn more about AimGrip - the hub for creative, insightful, and powerful digital ideas." />
      </Head>

      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-6">
            About <span className="text-blue-600">AimGrip</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            AimGrip is a creative platform built to share knowledge, ideas, and inspiration for the digital world.
            We believe in providing clear, practical insights that help readers grow in areas like technology,
            digital marketing, business, and creativity.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mt-6">
            Our mission is to empower creators, entrepreneurs, and professionals with the tools and strategies
            needed to make an impact online. At AimGrip, we simplify complex ideas and turn them into actionable insights.
          </p>

          <div className="mt-10">
            <a
              href="https://aimgrip.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Visit AimGrip →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
