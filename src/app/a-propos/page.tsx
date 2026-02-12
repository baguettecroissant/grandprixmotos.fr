import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Award, History, Users, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            <main className="flex-1 flex flex-col">
                {/* Hero Section */}
                <section className="relative py-32 overflow-hidden border-b border-white/5 bg-card/30">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
                        <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none mix-blend-soft-light"></div>
                    </div>

                    {/* Decorative Skewed Shapes */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 -skew-x-12 translate-x-1/4 z-0 border-l border-white/5 backdrop-blur-sm"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 skew-r">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-primary uppercase leading-none">Média Indépendant Haute Performance</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6 font-display leading-[0.9]">
                            L'expertise <span className="text-white">Sans</span> <br />
                            <span className="text-primary">Concession</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium tracking-wide leading-relaxed">
                            GrandPrixMotos.fr n'est pas un simple agrégateur de news. C'est l'autorité technique née de la passion pure et de l'exigence mécanique.
                        </p>
                    </div>
                </section>

                {/* Section 1: Vision & Philosophie */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4 font-display italic">
                                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic transform -skew-x-6">Au-delà du métal, <br /><span className="text-primary">l'âme mécanique.</span></h2>
                                    <div className="h-1 w-24 bg-primary skew-x-12"></div>
                                </div>
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        Dans un monde digital saturé d'opinions superficielles, nous avons choisi une autre voie. Celle de la <span className="text-white font-bold">vérité technique</span>. Pour nous, une moto n'est pas une fiche technique ; c'est un équilibre précaire entre ingénierie et émotion.
                                    </p>
                                    <p>
                                        Chaque article publié sur GrandPrixMotos.fr passe par le filtre de notre ADN : pas de compromis, pas de langue de bois, et une obsession pour la performance qui dure.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-6 pt-4 text-xs font-bold uppercase tracking-widest italic">
                                    <div className="flex items-center gap-3 border-l-2 border-primary pl-4 py-2 bg-white/5 skew-r transform">
                                        Indépendance Totale
                                    </div>
                                    <div className="flex items-center gap-3 border-l-2 border-primary pl-4 py-2 bg-white/5 skew-r transform">
                                        Rigueur Technique
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full translate-y-12 opacity-50"></div>
                                <div className="relative aspect-video bg-card border border-white/10 overflow-hidden transform -skew-x-3 rotate-1 hover:rotate-0 transition-transform duration-500 group shadow-2xl">
                                    <div className="absolute inset-0 bg-[url('/images/blog/r1250gs-engine.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                                </div>
                                {/* Decorative Tech Lines */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40"></div>
                                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Notre Parcours (Timeline) */}
                <section className="py-24 bg-card/20 border-y border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h2 className="text-3xl font-black text-white mb-16 uppercase font-display italic tracking-[0.2em] text-center">Notre Trajectoire</h2>

                        <div className="relative max-w-5xl mx-auto">
                            {/* Desktop Line */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2"></div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                                <div className="relative space-y-4">
                                    <div className="h-4 w-4 bg-primary mx-auto rounded-full z-10 relative border-4 border-background"></div>
                                    <div className="text-primary font-bold font-display italic text-2xl">2010</div>
                                    <h4 className="text-white font-bold uppercase">Les Racines</h4>
                                    <p className="text-sm text-muted-foreground px-6">Ouverture de notre structure d'expertise mécanique à Annecy. La base de notre savoir-faire.</p>
                                </div>
                                <div className="relative space-y-4">
                                    <div className="h-4 w-4 bg-white mx-auto rounded-full z-10 relative border-4 border-background"></div>
                                    <div className="text-white font-bold font-display italic text-2xl">2020</div>
                                    <h4 className="text-white font-bold uppercase">Le Pivot Digital</h4>
                                    <p className="text-sm text-muted-foreground px-6">Lancement du média GrandPrixMotos. Transmettre notre expertise au plus grand nombre.</p>
                                </div>
                                <div className="relative space-y-4">
                                    <div className="h-4 w-4 bg-primary mx-auto rounded-full z-10 relative border-4 border-background"></div>
                                    <div className="text-primary font-bold font-display italic text-2xl">2026</div>
                                    <h4 className="text-white font-bold uppercase">L'Autorité</h4>
                                    <p className="text-sm text-muted-foreground px-6">Référence #1 pour les essais moto premium et guides d'achat techniques en France.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Charte Éditoriale (Trust) */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto p-12 bg-zinc-950 border border-white/10 relative">
                            <div className="absolute top-0 left-0 w-12 h-1 bg-primary"></div>
                            <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 skew-r">L'Engagement GPM</div>
                            <h2 className="text-4xl font-display font-black text-white italic uppercase transform -skew-x-6 mb-12">Rigueur, Vérification <br />& <span className="text-primary">Zéro Compromis</span></h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4 group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 border border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <ShieldCheck className="h-5 w-5" />
                                        </div>
                                        <h4 className="font-bold text-white uppercase text-sm tracking-widest">Tests en conditions réelles</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Pas de tests "parking". Chaque équipement ou moto subit au minimum 1000km de roulage mixte avant un verdict final.</p>
                                </div>
                                <div className="space-y-4 group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 border border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <Zap className="h-5 w-5" />
                                        </div>
                                        <h4 className="font-bold text-white uppercase text-sm tracking-widest">Indépendance financière</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Aucun contenu n'est dicté par les marques. Nos partenariats sont transparents et n'influencent jamais la note finale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Le Team (Experts) */}
                <section className="py-24 bg-card/40 relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-display font-black text-white uppercase italic tracking-tighter mb-4 transform -skew-x-6">Le <span className="text-primary">Team</span> GPM</h2>
                            <p className="text-muted-foreground">Derrière chaque ligne de code et chaque essai, des experts du monde du deux-roues.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Wade Timothy", role: "Fondateur & Vision", focus: "Culture Moto & Stratégie", color: "primary" },
                                { name: "Julien M.", role: "Rédacteur en Chef", focus: "Essais Dynamiques & Équipement", color: "white" },
                                { name: "Marc D.", role: "Directeur Technique", focus: "Mécanique & Fiabilité BMW", color: "white" }
                            ].map((member, i) => (
                                <div key={i} className="group p-8 bg-zinc-950 border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -skew-x-12 translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-colors"></div>
                                    <h4 className="text-2xl font-black text-white uppercase font-display italic mb-1 transform group-hover:-translate-x-2 transition-transform">{member.name}</h4>
                                    <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">{member.role}</p>
                                    <div className="h-px w-12 bg-white/20 mb-6 group-hover:w-full transition-all duration-700"></div>
                                    <p className="text-sm text-muted-foreground italic mb-4">Focus : {member.focus}</p>
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors"><Users className="h-4 w-4" /></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden border-t border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-20"></div>

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase font-display italic transform -skew-x-6 leading-[0.9]">
                            Rejoignez la <br /><span className="text-primary">nouvelle ère.</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Plus qu'un média, une communauté de passionnés exigeants qui ne se contentent pas de l'approximatif.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/univers-bmw"
                                className="group relative px-10 py-5 bg-primary hover:bg-primary/90 text-white font-black tracking-[0.2em] uppercase transition-all transform hover:-translate-y-1 skew-r"
                            >
                                <span className="absolute inset-0 border border-white/20 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></span>
                                <span className="relative flex items-center gap-2">
                                    Explorer le Magazine <ArrowRight className="h-5 w-5" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
