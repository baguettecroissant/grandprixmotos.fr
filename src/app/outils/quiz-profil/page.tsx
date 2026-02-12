'use client';

import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from 'next/link';
import { ChevronRight, RefreshCw, Trophy, Target, Globe, ArrowRight, Share2, Check, Zap } from "lucide-react";

type ProfileResult = 'sportive' | 'roadster' | 'adventure' | 'touring' | 'neo-retro';

const questions = [
    {
        id: 1,
        text: "Le week-end parfait, c'est...",
        options: [
            { label: "Une session chrono sur circuit.", value: 'sportive' },
            { label: "Une virée nerveuse dans les cols.", value: 'roadster' },
            { label: "Traverser les frontières sans plan.", value: 'adventure' },
            { label: "Une balade chill avec arrêt café.", value: 'neo-retro' }
        ]
    },
    {
        id: 2,
        text: "Sur la route, ce qui compte le plus...",
        options: [
            { label: "La précision du train avant.", value: 'sportive' },
            { label: "L'agilité et le fun immédiat.", value: 'roadster' },
            { label: "Le confort et la protection.", value: 'touring' },
            { label: "La polyvalence absolue.", value: 'adventure' }
        ]
    },
    {
        id: 3,
        text: "Votre pire cauchemar à moto ?",
        options: [
            { label: "Les lignes droites interminables.", value: 'roadster' },
            { label: "Un bitume dégradé ou gravillonneux.", value: 'sportive' },
            { label: "Avoir mal au dos après 100km.", value: 'touring' },
            { label: "Ne pas pouvoir prendre ce chemin de terre.", value: 'adventure' }
        ]
    },
    {
        id: 4,
        text: "Le look de votre machine idéale ?",
        options: [
            { label: "Carénée, aérodynamique, agressive.", value: 'sportive' },
            { label: "Dépouillée, musculaire, mécanique apparente.", value: 'roadster' },
            { label: "Haute sur pattes, prête au combat.", value: 'adventure' },
            { label: "Intemporelle, élégante, authentique.", value: 'neo-retro' }
        ]
    },
    {
        id: 5,
        text: "Votre budget entretien/consommables ?",
        options: [
            { label: "Peu importe, je veux la perf max.", value: 'sportive' },
            { label: "Raisonnable, je roule tous les jours.", value: 'roadster' },
            { label: "J'investis pour la fiabilité long cours.", value: 'adventure' },
            { label: "Je fais l'entretien moi-même.", value: 'neo-retro' }
        ]
    }
];

const profiles: Record<ProfileResult, { title: string; desc: string; models: string; icon: any; color: string }> = {
    'sportive': {
        title: "Pilote Racing",
        desc: "L'adrénaline est votre carburant. Vous cherchez la performance pure, la trajectoire idéale et le freinage tardif. Le confort est secondaire face au chrono.",
        models: "BMW S1000RR, Yamaha R1, Ducati Panigale",
        icon: Trophy,
        color: "text-red-500"
    },
    'roadster': {
        title: "Pilote Streetfighter",
        desc: "Vous aimez l'agilité et les sensations brutes. La ville est votre terrain de jeu, les cols de montagne votre récréation. Vous voulez du fun, tout de suite.",
        models: "BMW S1000R, Triumph Street Triple, KTM Duke",
        icon: Zap,
        color: "text-blue-500"
    },
    'adventure': {
        title: "Explorateur Adventure",
        desc: "Pour vous, la route ne s'arrête pas là où le bitume finit. Vous voulez une machine capable de tout faire : autoroute, ville et pistes marocaines.",
        models: "BMW R1250 GS, Honda Africa Twin, Yamaha Ténéré",
        icon: Globe,
        color: "text-amber-500"
    },
    'touring': {
        title: "Voyageur Grand Tourisme",
        desc: "Les kilomètres sont une formalité. Vous cherchez le confort ultime, la protection et la technologie pour abattre les bornes sans fatigue.",
        models: "BMW R1250 RT, Honda Goldwing, BMW K1600",
        icon: Globe,
        color: "text-primary"
    },
    'neo-retro': {
        title: "Gentleman Rider",
        desc: "Le style compte autant que les sensations. Vous aimez les belles mécaniques, le bruit authentique et l'esprit 'Heritage'. La vitesse n'est pas tout.",
        models: "BMW R NineT, Triumph Bonneville, Kawasaki Z900RS",
        icon: Target,
        color: "text-zinc-400"
    }
};

export default function QuizPage() {
    const [step, setStep] = useState(0);
    const [scores, setScores] = useState<Record<string, number>>({});
    const [result, setResult] = useState<ProfileResult | null>(null);
    const [copied, setCopied] = useState(false);

    const handleOptionClick = (value: string) => {
        const newScores = { ...scores, [value]: (scores[value] || 0) + 1 };
        setScores(newScores);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            // Determine winner
            const winner = Object.entries(newScores).reduce((a, b) => a[1] > b[1] ? a : b)[0] as ProfileResult;
            setResult(winner);
        }
    };

    const resetQuiz = () => {
        setStep(0);
        setScores({});
        setResult(null);
    };

    const copyResult = () => {
        if (!result) return;
        const p = profiles[result];
        const text = `🏍️ Mon Profil Pilote GPM : ${p.title}\n"${p.desc}"\nMachines idéales : ${p.models}\n\nFais le test sur grandprixmotos.fr !`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            <main className="flex-1 flex flex-col">
                <section className="relative py-20 overflow-hidden border-b border-white/5 bg-card/30">
                    <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 skew-r">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">Quiz GPM</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6 font-display">
                            Profil <span className="text-primary">Pilote</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            Répondez à 5 questions pour découvrir votre ADN de motard et la catégorie de machine faite pour vous.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-12 max-w-3xl">
                    {!result ? (
                        <div className="bg-card border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-2xl">
                            {/* Progress Bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
                                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
                            </div>

                            <div className="mb-8">
                                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Question {step + 1}/{questions.length}</span>
                                <h2 className="text-3xl font-black text-white italic font-display uppercase">{questions[step].text}</h2>
                            </div>

                            <div className="space-y-4">
                                {questions[step].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionClick(option.value)}
                                        className="w-full text-left p-6 border border-white/10 rounded-xl hover:bg-white/5 hover:border-primary/50 transition-all group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
                                        <span className="relative z-10 text-lg font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                                            {option.label}
                                            <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-2xl text-center animate-in fade-in zoom-in duration-500">
                            <div className="absolute inset-0 bg-[url('/images/carbon-pattern.png')] opacity-10 mix-blend-overlay"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className={`p-6 bg-white/5 rounded-full border-2 border-white/10 mb-8 ${profiles[result].color}`}>
                                    {(() => {
                                        const Icon = profiles[result].icon;
                                        return Icon ? <Icon className="h-12 w-12" /> : null;
                                    })()}
                                </div>

                                <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-[0.3em] mb-4">Votre ADN est :</h2>
                                <h3 className={`text-5xl md:text-6xl font-black uppercase italic font-display mb-6 transform -skew-x-6 ${profiles[result].color}`}>
                                    {profiles[result].title}
                                </h3>

                                <p className="text-xl text-white mb-8 leading-relaxed max-w-xl mx-auto">
                                    {profiles[result].desc}
                                </p>

                                <div className="bg-white/5 p-6 rounded-xl border border-white/5 w-full max-w-lg mb-12">
                                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Machines recommandées</h4>
                                    <p className="text-lg font-bold text-white">{profiles[result].models}</p>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={resetQuiz}
                                        className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center gap-2"
                                    >
                                        <RefreshCw className="h-4 w-4" /> Refaire
                                    </button>
                                    <button
                                        onClick={copyResult}
                                        className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center gap-2"
                                    >
                                        {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />} {copied ? 'Copié !' : 'Partager'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}
