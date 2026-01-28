import Image from "next/image"
import { CalendarDays, Clock, User } from "lucide-react"

export default function BlogPage() {
  const featuredArticle = {
    title: "The Future of AI in Enterprise: Beyond the Hype",
    excerpt: "How businesses are moving past ChatGPT experiments to build real, production-grade AI systems that deliver measurable ROI.",
    category: "AI & Machine Learning",
    author: "Rahul Mehta",
    date: "Jan 7, 2026",
    readTime: "8 min read",
    image: "/assets/industries/white-keyboard-earphone-coffee-cup-eyeglasses-pen-spiral-notepad-against-black-desk.jpg"
  }

  const articles = [
    {
      title: "Building Scalable ML Pipelines: Lessons from 50+ Deployments",
      excerpt: "Practical insights on architecting machine learning systems that actually work in production.",
      category: "Engineering",
      author: "Arya Mehta",
      readTime: "6 min read",
      image: "/assets/industries/education-tech.jpg"
    },
    {
      title: "Design Systems that Scale with Your Product",
      excerpt: "Creating maintainable design systems for fast-growing startups and enterprises.",
      category: "Design",
      author: "Sarah Chen",
      readTime: "5 min read",
      image: "/assets/industries/education-tech.jpg"
    },
    {
      title: "The Product-Market Fit Framework That Actually Works",
      excerpt: "A data-driven approach to validating product ideas before writing a single line of code.",
      category: "Product",
      author: "Marcus Johnson",
      readTime: "7 min read",
      image: "/assets/industries/education-tech.jpg"
    }
  ]

  const popularTags = [
    { name: "AI & ML", count: 42 },
    { name: "Engineering", count: 28 },
    { name: "Design", count: 19 },
    { name: "Product", count: 35 },
    { name: "Culture", count: 15 },
    { name: "DevOps", count: 23 },
    { name: "Startups", count: 31 },
    { name: "Research", count: 12 }
  ]

  return (
    <main className="min-h-screen bg-Base text-white px-4 pt-20 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-indigo-300 text-sm font-medium">Latest Updates</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-marcellus">
            Satson <span className="bg-gradient-to-r from-[#5593F7] to-[#C47DE8] bg-clip-text text-transparent">Insights</span>
          </h1>
          
          <p className="text-secondaryText font-inter max-w-2xl mx-auto text-lg mb-8">
            Expert perspectives on AI, engineering, design, and building products that shape the future.
          </p>

          {/* Popular Tags */}
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {popularTags.map((tag) => (
              <button
                key={tag.name}
                className="group relative px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
              >
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {tag.name}
                </span>
                <span className="ml-2 text-xs text-gray-500 group-hover:text-secondaryText">
                  {tag.count}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <section className="relative mb-20 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-[#111827] to-[#1a2332] rounded-3xl p-8 border border-white/10 group-hover:border-indigo-500/30 transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-[320px] lg:h-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full   bg-gradient-to-r from-[#C243FE] to-[#9B34CB]  backdrop-blur-sm text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-4">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 font-poppins px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300 text-sm">
                  {featuredArticle.category}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-marcellus font-bold mb-4 leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-secondaryText font-inter mb-8 text-lg leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8 font-poppins">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full   bg-gradient-to-r from-[#C243FE] to-[#9B34CB] flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">{featuredArticle.author}</p>
                    <div className="flex items-center gap-4 text-sm text-secondaryText">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {featuredArticle.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full   bg-gradient-to-r from-[#C243FE] to-[#9B34CB] px-8 py-2 text-xs font-medium text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 w-fit overflow-hidden font-inter">
                <span className="relative z-10 font-medium">Read Full Article</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold font-marcellus mb-2">Latest Articles</h2>
              <p className="text-secondaryText text-[20px]">Fresh perspectives from our team</p>
            </div>
            <button className="px-6 py-2 rounded-full border border-white/20 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 font-playfairDisplay">
              View All Articles
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group relative bg-gradient-to-b from-[#111827] to-[#1a2332] rounded-2xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500 border border-white/10 hover:border-indigo-500/30"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-playfairDisplay font-semibold mb-3 group-hover:text-indigo-300 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-secondaryText text-sm mb-6 line-clamp-2 font-inter">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-indigo-300" />
                      </div>
                      <span className="text-sm text-gray-300">{article.author}</span>
                    </div>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/20 rounded-2xl transition-all duration-300 pointer-events-none" />
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
      
      </div>
    </main>
  )
}