import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />

        {/* Latest Articles Section */}
        <section className="container mx-auto py-24 px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Derniers <span className="text-primary">Articles</span></h2>
            <Link href="/blog" className="group flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Voir tout le magazine <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <article key={post.id} className="group relative flex flex-col h-full bg-card border-none overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                {/* Image Container with skew effect */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"></div>
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white/10 font-black text-4xl uppercase tracking-tighter">
                    IMAGE
                  </div>
                  {/* Category Badge - Tech Style */}
                  <div className="absolute top-0 left-0 bg-primary/90 text-white text-xs font-bold px-4 py-2 uppercase tracking-widest skew-x-12 -ml-2 transform">
                    <span className="-skew-x-12 block">{post.category.replace("-", " ")}</span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6 relative z-20">
                  <Link href={`/blog/${post.slug}`} className="block group-hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-3 uppercase leading-none font-display">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs font-medium text-primary/60 uppercase tracking-wider border-t border-white/5 pt-4">
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      {post.author}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Decorative Tech Lines */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </article>
            ))}
          </div>
        </section>

        {/* Categories Grid (Quick Access) */}
        <section className="container mx-auto py-16 px-4 border-t border-white/5">
          <h2 className="text-2xl font-bold mb-8 text-white">Explorez par Catégorie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/univers-bmw" className="group relative h-32 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center border border-white/10 hover:border-primary/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 group-hover:scale-110 transition-transform duration-500"></div>
              <span className="relative z-10 font-bold text-lg text-white group-hover:text-primary transition-colors text-center px-2">Univers BMW</span>
            </Link>
            <Link href="/equipement" className="group relative h-32 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center border border-white/10 hover:border-primary/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 group-hover:scale-110 transition-transform duration-500"></div>
              <span className="relative z-10 font-bold text-lg text-white group-hover:text-primary transition-colors">Équipement</span>
            </Link>
            <Link href="/assurance" className="group relative h-32 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center border border-white/10 hover:border-primary/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 group-hover:scale-110 transition-transform duration-500"></div>
              <span className="relative z-10 font-bold text-lg text-white group-hover:text-primary transition-colors">Assurance</span>
            </Link>
            <Link href="/a-propos" className="group relative h-32 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center border border-white/10 hover:border-primary/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 group-hover:scale-110 transition-transform duration-500"></div>
              <span className="relative z-10 font-bold text-lg text-white group-hover:text-primary transition-colors">À Propos</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
