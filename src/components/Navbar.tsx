"use client";

import Link from "next/link";
import { Menu, Search, Bike, X, ArrowRight, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { posts } from "@/data/posts";
import { useRouter } from "next/navigation";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<typeof posts>([]);
    const searchRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Close on escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsSearchOpen(false);
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Search logic
    useEffect(() => {
        if (searchQuery.trim().length > 1) {
            const results = posts.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            ).slice(0, 5);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const handleSelectResult = (slug: string) => {
        setIsSearchOpen(false);
        setSearchQuery("");
        router.push(`/blog/${slug}`);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2 group">
                        {/* Logo Icon */}
                        <div className="bg-primary p-2 group-hover:bg-primary/90 transition-colors transform -skew-x-12">
                            <Bike className="h-6 w-6 text-white skew-x-12" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white font-display uppercase italic">
                            GRANDPRIX<span className="text-primary">MOTOS</span>
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase">
                        <Link href="/univers-bmw" className="relative text-muted-foreground hover:text-white transition-colors group">
                            Univers BMW
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-hover:skew-x-12"></span>
                        </Link>
                        <Link href="/equipement" className="relative text-muted-foreground hover:text-white transition-colors group">
                            Équipement
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-hover:skew-x-12"></span>
                        </Link>
                        <Link href="/outils" className="relative text-muted-foreground hover:text-white transition-colors group">
                            Outils
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-hover:skew-x-12"></span>
                        </Link>
                        <Link href="/assurance" className="relative text-muted-foreground hover:text-white transition-colors group">
                            Assurance
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-hover:skew-x-12"></span>
                        </Link>
                        <Link href="/a-propos" className="relative text-muted-foreground hover:text-white transition-colors group">
                            À Propos
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-hover:skew-x-12"></span>
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="inline-flex items-center justify-center p-2.5 text-muted-foreground hover:bg-white/10 hover:text-white transition-colors skew-r border border-transparent hover:border-white/10"
                    >
                        <Search className="h-5 w-5 -skew-x-12" />
                        <span className="sr-only">Rechercher</span>
                    </button>
                    <button
                        className="inline-flex md:hidden items-center justify-center p-2 text-muted-foreground hover:bg-white/10 hover:text-white transition-colors skew-r border border-transparent hover:border-white/10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5 -skew-x-12" /> : <Menu className="h-5 w-5 -skew-x-12" />}
                        <span className="sr-only">Menu</span>
                    </button>
                </div>
            </div>

            {/* Search Modal */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl animate-fade-in p-4 md:p-20">
                    <div className="max-w-4xl mx-auto" ref={searchRef}>
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white transform -skew-x-6">
                                Recherche <span className="text-primary tracking-normal">GPM</span>
                            </h2>
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="p-3 bg-white/5 hover:bg-primary transition-colors skew-r text-white"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="relative group/search mb-12">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-8 w-8 text-primary group-focus-within/search:text-white transition-colors" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Chercher un article, un test, une marque..."
                                className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary p-8 pl-20 text-2xl md:text-4xl font-black tracking-tight text-white placeholder:text-white/20 outline-none transition-all uppercase italic"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Search Results */}
                        <div className="space-y-4">
                            {searchResults.length > 0 ? (
                                searchResults.map((result) => (
                                    <button
                                        key={result.id}
                                        onClick={() => handleSelectResult(result.slug)}
                                        className="w-full group flex items-center justify-between p-6 bg-white/5 hover:bg-primary transition-all border-l-4 border-transparent hover:border-white skew-r"
                                    >
                                        <div className="text-left">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-white mb-2 block animate-fade-in">
                                                {result.category.replace("-", " ")}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase italic leading-none">
                                                {result.title}
                                            </h3>
                                        </div>
                                        <ArrowRight className="h-6 w-6 text-primary group-hover:text-white transform group-hover:translate-x-2 transition-transform" />
                                    </button>
                                ))
                            ) : searchQuery.length > 1 ? (
                                <div className="p-12 text-center border-2 border-dashed border-white/5">
                                    <p className="text-xl text-muted-foreground font-medium italic">Aucun résultat trouvé pour "{searchQuery}"</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-8 bg-blue-600/10 border border-blue-600/20 skew-r group cursor-pointer hover:bg-blue-600/20 transition-all">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2 block">Sujet Chaud</span>
                                        <h4 className="text-white font-bold uppercase italic">Fiabilité BMW R 1300 GS</h4>
                                    </div>
                                    <div className="p-8 bg-orange-600/10 border border-orange-600/20 skew-r group cursor-pointer hover:bg-orange-600/20 transition-all">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-2 block">Comparatif</span>
                                        <h4 className="text-white font-bold uppercase italic">Shoei vs Schuberth</h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden border-t border-white/10 bg-background p-4 animate-slide-up">
                    <nav className="flex flex-col space-y-4">
                        <Link
                            href="/univers-bmw"
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors p-2 rounded-md hover:bg-white/5"
                            onClick={() => setIsOpen(false)}
                        >
                            Univers BMW
                        </Link>
                        <Link
                            href="/equipement"
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors p-2 rounded-md hover:bg-white/5"
                            onClick={() => setIsOpen(false)}
                        >
                            Équipement
                        </Link>
                        <Link
                            href="/outils"
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors p-2 rounded-md hover:bg-white/5"
                            onClick={() => setIsOpen(false)}
                        >
                            Outils
                        </Link>
                        <Link
                            href="/assurance"
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors p-2 rounded-md hover:bg-white/5"
                            onClick={() => setIsOpen(false)}
                        >
                            Assurance
                        </Link>
                        <Link
                            href="/a-propos"
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors p-2 rounded-md hover:bg-white/5"
                            onClick={() => setIsOpen(false)}
                        >
                            À Propos
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
