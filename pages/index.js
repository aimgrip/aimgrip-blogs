import Head from "next/head";
import AboutSection from "../components/AboutSection"; // About section component

export default function Home() {
  return (
    <>
      <Head>
        <title>About AimGrip</title>
        <meta
          name="description"
          content="Learn more about AimGrip — a creative digital hub built to share powerful ideas and insights."
        />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="google133f0d3eb47af87f"
        />
      </Head>

      {/* Hero / Intro section */}
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            About <span className="text-blue-700 font-extrabold">AimGrip</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            AimGrip is a creative platform that empowers modern thinkers, developers, and creators
            to explore innovative ideas and grow in the digital world.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            We focus on delivering clear insights, practical knowledge, and inspiring content that helps our audience
            learn, create, and evolve with confidence.
          </p>

          <a
            href="https://aimgrip.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-10 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
          >
            Visit AimGrip →
          </a>
        </div>
      </main>

      {/* AboutSection with image + detailed text */}
      <AboutSection />
    </>
  );
}
