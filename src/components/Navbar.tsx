"use client";

import Link from "next/link";
import { Menu, Search, Bike, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                    <button className="inline-flex items-center justify-center p-2.5 text-muted-foreground hover:bg-white/10 hover:text-white transition-colors skew-r border border-transparent hover:border-white/10">
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
