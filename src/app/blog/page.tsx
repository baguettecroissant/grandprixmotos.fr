import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { posts } from "@/data/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Magazine Moto & Équipement - GrandPrixMotos.fr",
    description: "Retrouvez tous nos essais, comparatifs équipements et guides conseils pour motards exigeants.",
};

export default function BlogIndexPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white">
            <Navbar />
            <main className="flex-1 flex flex-col">
                {/* Header Section - Tech/Racing Style */}
                <section className="relative py-24 overflow-hidden border-b border-white/5 bg-card/30">
                    <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0"></div>

                    {/* Decorative Skewed Shapes */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 -skew-x-12 translate-x-1/4 z-0 border-l border-white/5"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 skew-r">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">Archives & Dossiers</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6 font-display">
                            Le Magazine
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium tracking-wide">
                            L'intégralité de nos essais et guides techniques sans filtre.
                        </p>
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="container mx-auto py-16 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post) => (
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
            </main>
            <Footer />
        </div>
    );
}
