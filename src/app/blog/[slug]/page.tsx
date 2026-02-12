import { posts } from "@/data/posts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
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

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Article Header */}
                <header className="relative py-20 overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>
                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
                        </Link>

                        <div className="flex items-center gap-2 mb-6">
                            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-primary/20">
                                {post.category.replace("-", " ")}
                            </span>
                            <span className="text-muted-foreground text-xs font-medium flex items-center">
                                <Calendar className="mr-1 h-3 w-3" /> {post.date}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-white/5 pt-6 mb-12">
                            <div className="flex items-center">
                                <User className="mr-2 h-4 w-4" /> Par <span className="text-white ml-1 font-medium">{post.author}</span>
                            </div>
                            <div className="hidden md:flex items-center">
                                <Tag className="mr-2 h-4 w-4" /> {post.tags.join(", ")}
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 skew-x-12 translate-x-12 translate-y-12 blur-2xl"></div>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <article className="container mx-auto px-4 py-16 max-w-3xl">
                    <div
                        className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </main>

            <Footer />
        </div>
    );
}
