import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="bg-lightblue border-b border-blue-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">AimGrip Blogs</h1>
          <nav className="space-x-6">
            <a href="#blogs" className="hover:text-blue-600">Blogs</a>
            <a href="#about" className="hover:text-blue-600">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-lightblue">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-4 text-blue-600"
        >
          Welcome to AimGrip Blogs
        </motion.h2>
        <p className="max-w-xl mx-auto text-gray-700">
          Explore insights, ideas, and creative thoughts crafted with passion and purpose.
        </p>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-semibold mb-8 text-center">Blogs</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="p-6 border rounded-2xl shadow hover:shadow-lg transition bg-white"
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-600">Blog Title {item}</h4>
              <p className="text-gray-700 text-sm">
                This is a sample placeholder for blog {item}. Future posts will appear here.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-lightblue py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4 text-blue-600">About AimGrip</h3>
          <p className="text-gray-700 leading-relaxed">
            AimGrip Blogs is a creative platform built to share knowledge, ideas, and inspiration.
            Designed with simplicity in mind — clean, light, and easy to navigate.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t text-center py-6 text-gray-600 text-sm">
        © {new Date().getFullYear()} AimGrip Blogs — Built with ❤️ using Next.js & TailwindCSS
      </footer>
    </div>
  );
}
