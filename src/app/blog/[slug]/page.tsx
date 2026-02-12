import { posts } from "@/data/posts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Article non trouvé - GrandPrixMotos.fr",
        };
    }

    return {
        title: `${post.title} - GrandPrixMotos.fr`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Recommended articles (exclude current, same category first)
    const recommendedPosts = posts
        .filter((p) => p.slug !== slug)
        .sort((a, b) => (a.category === post.category ? -1 : 1))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Article Header */}
                <header className="relative py-20 overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>
                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-8 transition-colors group">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Retour au Magazine
                        </Link>

                        <div className="flex items-center gap-2 mb-6">
                            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-primary/20">
                                {post.category.replace("-", " ")}
                            </span>
                            <span className="text-muted-foreground text-xs font-medium flex items-center">
                                <Calendar className="mr-1 h-3 w-3" /> {post.date}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 leading-[0.9] uppercase italic transform -skew-x-6">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-white/5 pt-6 mb-12">
                            <Link href="/a-propos" className="flex items-center hover:text-primary transition-colors group">
                                <User className="mr-2 h-4 w-4 text-primary" /> Par <span className="text-white ml-1 font-bold group-hover:text-primary">{post.author}</span>
                            </Link>
                            <div className="hidden md:flex items-center">
                                <Tag className="mr-2 h-4 w-4" /> {post.tags.join(", ")}
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="relative w-full aspect-video rounded-none overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10"></div>
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </header>

                <div className="container mx-auto px-4 py-16 max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar / Sommaire */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-6 bg-slate-900/50 border border-white/5">
                                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary animate-pulse"></span> Sommaire
                                </h4>
                                <nav className="space-y-4">
                                    <p className="text-sm text-muted-foreground italic">Navigation rapide activée pour cet article technique.</p>
                                    <div className="text-xs space-y-3 font-bold uppercase tracking-tight">
                                        <div className="text-primary cursor-pointer hover:translate-x-1 transition-transform">01. Analyse Technique</div>
                                        <div className="text-white/60 cursor-pointer hover:text-white transition-colors">02. Performance & Tests</div>
                                        <div className="text-white/60 cursor-pointer hover:text-white transition-colors">03. Verdict de l'Expert</div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* Article Content */}
                    <article className="lg:col-span-3 lg:max-w-3xl">
                        <div
                            className="prose prose-invert prose-lg max-w-none 
                            prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-headings:italic prose-headings:-skew-x-6
                            prose-h2:text-3xl prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-6 prose-h2:mb-8
                            prose-p:text-muted-foreground prose-p:leading-relaxed
                            prose-strong:text-white prose-strong:font-bold
                            prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-lg
                            prose-img:rounded-none prose-img:border prose-img:border-white/10
                            prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline transition-all"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Author Bio Simple */}
                        <div className="mt-20 p-8 bg-slate-900/40 border border-white/5 flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-none border border-primary/40 flex items-center justify-center shrink-0">
                                <User className="h-10 w-10 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-2">À propos de {post.author}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    Expert passionné et testeur pour GrandPrixMotos.fr. Spécialisé dans l'univers BMW Motorrad et l'équipement haut de gamme.
                                </p>
                                <Link href="/a-propos" className="text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2">
                                    Voir tous les tests <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Recommended Articles Section */}
                <section className="bg-slate-900/30 border-t border-white/5 py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-12 transform -skew-x-6">
                            Articles <span className="text-primary">Recommandés</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {recommendedPosts.map((rec) => (
                                <Link key={rec.id} href={`/blog/${rec.slug}`} className="group flex flex-col bg-background/50 border border-white/5 hover:border-primary transition-all overflow-hidden">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img src={rec.coverImage} alt={rec.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">{rec.category.replace("-", " ")}</span>
                                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight uppercase italic">{rec.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
