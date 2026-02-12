import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Settings, HelpCircle, ArrowRight, Wrench, Gauge, Target } from "lucide-react";

export default function ToolsPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            <main className="flex-1 flex flex-col">
                <section className="relative py-24 overflow-hidden border-b border-white/5 bg-card/30">
                    <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 skew-r">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">Zone Technique</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6 font-display">
                            Outils <span className="text-primary">Pilotes</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Des utilitaires développés par des motards, pour des motards. Optimisez votre machine et affinez votre profil.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* GPM Setup Tool Card */}
                        <Link href="/outils/setup-moto" className="group relative bg-card border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-500 rounded-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black"></div>
                            <div className="absolute inset-0 bg-[url('/images/carbon-pattern.png')] opacity-20 mix-blend-overlay"></div>

                            <div className="relative p-8 flex flex-col h-full transform transition-transform group-hover:-translate-y-1">
                                <div className="mb-6 flex items-start justify-between">
                                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg skew-r">
                                        <Settings className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">Populaire</div>
                                </div>

                                <h3 className="text-3xl font-black text-white uppercase italic font-display mb-3 group-hover:text-primary transition-colors">GPM Setup</h3>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    Simulateur de pressions de pneus et réglages de suspensions. <br />
                                    Adapté à votre moto, votre usage (Solo, Duo, Piste) et la météo.
                                </p>

                                <div className="mt-auto flex items-center text-primary font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                                    Lancer l'outil <ArrowRight className="ml-2 h-5 w-5" />
                                </div>
                            </div>

                            {/* Decorative */}
                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                        </Link>

                        {/* Quiz Profile Card */}
                        <Link href="/outils/quiz-profil" className="group relative bg-card border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-500 rounded-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black"></div>

                            <div className="relative p-8 flex flex-col h-full transform transition-transform group-hover:-translate-y-1">
                                <div className="mb-6 flex items-start justify-between">
                                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg skew-r">
                                        <Target className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">Nouveau</div>
                                </div>

                                <h3 className="text-3xl font-black text-white uppercase italic font-display mb-3 group-hover:text-primary transition-colors">Profil Pilote</h3>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    Quel type de motard êtes-vous vraiment ? <br />
                                    Un quiz de personnalité pour découvrir votre machine idéale.
                                </p>

                                <div className="mt-auto flex items-center text-primary font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                                    Faire le test <ArrowRight className="ml-2 h-5 w-5" />
                                </div>
                            </div>

                            {/* Decorative */}
                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                        </Link>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
