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
                    <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0"></div>

                    {/* Decorative Skewed Shapes */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 -skew-x-12 translate-x-1/4 z-0 border-l border-white/5"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 skew-r">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">Média Indépendant</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6 font-display">
                            Notre <span className="text-white">Histoire</span> & <br />
                            <span className="text-primary">Notre Mission</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium tracking-wide leading-relaxed">
                            GrandPrixMotos.fr n'est pas juste un site web. C'est l'héritage d'une passion mécanique née à Annecy, transformée en média de référence pour les motards d'aujourd'hui.
                        </p>
                    </div>
                </section>

                {/* Values Grid - Racing Style */}
                <section className="py-24 bg-background relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="group relative bg-card border-none p-8 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -skew-x-12 translate-x-8 -translate-y-8 rounded-full group-hover:bg-primary/10 transition-colors"></div>
                                <div className="h-14 w-14 bg-primary/10 flex items-center justify-center mb-6 skew-r border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                    <History className="h-7 w-7 -skew-x-12" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase font-display italic">Héritage Mécanique</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Anciennement concessionnaire, nous avons gardé cette exigence de qualité. Nous ne parlons que de ce que nous connaissons : la mécanique, la vraie.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative bg-card border-none p-8 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 -skew-x-12 translate-x-8 -translate-y-8 rounded-full group-hover:bg-blue-500/10 transition-colors"></div>
                                <div className="h-14 w-14 bg-blue-500/10 flex items-center justify-center mb-6 skew-r border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all text-blue-500">
                                    <Award className="h-7 w-7 -skew-x-12" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase font-display italic">Expertise BMW</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Spécialistes historiques de la marque bavaroise, nous décortiquons chaque nouveauté (GS, RT, S1000RR) avec un œil d'experts techniques.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="group relative bg-card border-none p-8 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 -skew-x-12 translate-x-8 -translate-y-8 rounded-full group-hover:bg-red-500/10 transition-colors"></div>
                                <div className="h-14 w-14 bg-red-500/10 flex items-center justify-center mb-6 skew-r border border-red-500/20 group-hover:bg-red-500 group-hover:text-white transition-all text-red-500">
                                    <Zap className="h-7 w-7 -skew-x-12" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase font-display italic">Performance Pure</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Au-delà des essais, nous voulons vous aider à mieux rouler. Guides d'entretien, conseils d'assurance et astuces de pilotage.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section - Tech Look */}
                <section className="py-20 border-y border-white/5 bg-card/30 relative">
                    <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-16 uppercase font-display tracking-widest">Pourquoi nous faire confiance ?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="p-6 group">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50 mb-2 font-display italic group-hover:scale-110 transition-transform">15+</div>
                                <div className="text-xs font-bold text-white uppercase tracking-widest">Années d'Expérience</div>
                            </div>
                            <div className="p-6 group">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2 font-display italic group-hover:scale-110 transition-transform">100%</div>
                                <div className="text-xs font-bold text-white uppercase tracking-widest">Indépendance</div>
                            </div>
                            <div className="p-6 group">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2 font-display italic group-hover:scale-110 transition-transform">500+</div>
                                <div className="text-xs font-bold text-white uppercase tracking-widest">Tests Réalisés</div>
                            </div>
                            <div className="p-6 group">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2 font-display italic group-hover:scale-110 transition-transform">24h</div>
                                <div className="text-xs font-bold text-white uppercase tracking-widest">Réponse Assurée</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-20"></div>

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase font-display italic transform -skew-x-6 leading-tight">
                            Prêt à passer la <br /><span className="text-primary">vitesse supérieure ?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Découvrez nos derniers essais ou trouvez l'assurance parfaite pour votre deux-roues.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/univers-bmw"
                                className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase transition-all transform hover:-translate-y-1 skew-r"
                            >
                                <span className="absolute inset-0 border border-white/20 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></span>
                                <span className="relative flex items-center gap-2">
                                    Voir les Essais <ArrowRight className="h-5 w-5" />
                                </span>
                            </Link>

                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary font-bold tracking-widest uppercase transition-all transform hover:-translate-y-1 skew-r"
                            >
                                <span className="relative flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5" /> Nous Contacter
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
