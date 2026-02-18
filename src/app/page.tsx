import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Settings, Flame } from "lucide-react";
import { posts } from "@/data/posts";

export default function Home() {
  const featuredPost = posts.find(p => p.slug === "regarder-motogp-gratuit-streaming-2026");

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />

        {/* Featured Article - À la Une */}
        {featuredPost && (
          <section className="relative py-16 bg-zinc-950 border-y border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Flame className="h-6 w-6 text-primary animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic font-display transform -skew-x-6">
                  À la <span className="text-primary">Une</span>
                </h2>
              </div>
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-zinc-900/80 to-zinc-950 rounded-2xl border border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-500">
                  <div className="relative aspect-video md:aspect-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/60 z-10 hidden md:block"></div>
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest">
                      <span className="animate-pulse">●</span> Article Pilier
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-10 space-y-5">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase leading-tight font-display group-hover:text-primary transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-primary/60 uppercase tracking-wider">
                      <span>{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime} de lecture</span>
                    </div>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-black uppercase tracking-widest hover:bg-primary/90 transition-all group-hover:gap-5">
                        Lire l&apos;article <ArrowRight className="h-5 w-5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}
        {/* Featured Tool Section */}
        <section className="relative py-20 bg-zinc-950 border-y border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/carbon-pattern.png')] opacity-5 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-r from-primary/10 to-transparent p-12 rounded-2xl border border-primary/20">
              <div className="space-y-6 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest skew-r">
                  <span className="animate-pulse">●</span> Nouveau
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic font-display transform -skew-x-6">
                  GPM <span className="text-primary">Setup</span> v1.0
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ne laissez pas le hasard dicter votre grip. Utilisez notre simulateur exclusif pour calculer vos pressions de pneus et réglages de suspensions en fonction de votre usage (Piste, Duo, Pluie...).
                </p>
                <div className="pt-4">
                  <Link href="/outils/setup-moto" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-black uppercase tracking-widest skew-r hover:bg-primary/90 transition-all group">
                    Configurer ma Moto <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative w-48 h-48 border-4 border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="w-40 h-40 border-4 border-primary/30 rounded-full border-t-primary animate-spin"></div>
                </div>
                <Settings className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </section>

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
                <div className="relative aspect-video w-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60"></div>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
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
