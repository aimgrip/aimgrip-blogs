export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explore Ideas, Knowledge & Creativity with <span className="text-blue-400">AimGrip Blogs</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Discover deep insights, unique thoughts, and stories crafted with passion and purpose.
        </p>
        <div className="mt-10">
          <a
            href="https://aimgrip.gumroad.com"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Visit AimGrip →
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">About AimGrip</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          AimGrip Blogs is a creative platform built to share knowledge, ideas, and inspiration.
          We aim to empower readers through thoughtful articles crafted with purpose and passion.
        </p>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Blog Title {i}</h3>
              <p className="text-gray-600 mb-4">
                This is a placeholder for blog {i}. Future posts will appear here.
              </p>
              <a href="#" className="text-blue-600 hover:underline">Read more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8">
        <p>© 2025 AimGrip Blogs — Built with ❤️ using Next.js & TailwindCSS</p>
      </footer>
    </div>
  );
}
