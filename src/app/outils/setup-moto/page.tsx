'use client';

import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Gauge, Settings, Thermometer, Briefcase, Zap, Info, ChevronRight, Activity, Share2, Check } from "lucide-react";

type MotoType = 'roadster' | 'sportive' | 'trail' | 'touring';
type Usage = 'solo' | 'duo' | 'duo_loaded' | 'track';
type Weather = 'dry_warm' | 'wet_cold' | 'mixed';

interface Recommendation {
    pressureFront: number;
    pressureRear: number;
    preload: string;
    rebound: string;
    note: string;
}

export default function SetupMotoPage() {
    const [motoType, setMotoType] = useState<MotoType>('roadster');
    const [usage, setUsage] = useState<Usage>('solo');
    const [weather, setWeather] = useState<Weather>('dry_warm');
    const [showResult, setShowResult] = useState(false);

    const getRecommendation = (): Recommendation => {
        let pFront = 2.5;
        let pRear = 2.9;
        let preload = "Standard";
        let rebound = "Standard";
        let note = "Réglages polyvalents pour un usage quotidien.";

        // Base Pressures by Moto Type
        if (motoType === 'sportive') { pFront = 2.3; pRear = 2.5; preload = "Ferme (+2 clicks)"; rebound = "Vif (-2 clicks)"; }
        if (motoType === 'trail') { pFront = 2.4; pRear = 2.8; preload = "Souple (-2 clicks)"; rebound = "Standard"; }
        if (motoType === 'touring') { pFront = 2.5; pRear = 2.9; preload = "Standard"; rebound = "Lent (+2 clicks)"; }

        // Adjustments by Usage
        if (usage === 'duo') {
            pRear += 0.2;
            preload = "Durcir précharge (+5 clicks ou +1 tour)";
            note = "En duo, l'assiette de la moto change. Durcissez l'amortisseur arrière pour garder une direction vive.";
        }
        if (usage === 'duo_loaded') {
            pRear += 0.3;
            pFront += 0.1;
            preload = "Précharge MAX";
            rebound = "Fermer hydraulique (+3 clicks)";
            note = "Chargement maximal : augmentez les pressions et bloquez les pompages excessifs via l'hydraulique.";
        }
        if (usage === 'track') {
            pFront = 2.1; // Cold pressure assumption for track day beginner
            pRear = 1.9;
            preload = "Ferme (+4 clicks)";
            rebound = "Vif (-4 clicks)";
            note = "Attention : Pressions à froid pour piste uniquement. Vérifiez à chaud (Objectif: 2.3 AV / 2.1 AR à chaud).";
        }

        // Adjustments by Weather
        if (weather === 'wet_cold') {
            pFront -= 0.1; // More contact patch
            pRear -= 0.1;
            rebound = "Ouvrir hydraulique (-2 clicks)"; // Softer damping for grip
            note += " Sur le mouillé, assouplissez les suspensions pour favoriser le grip mécanique et baissez légèrement les pressions.";
        }

        return { pressureFront: Number(pFront.toFixed(1)), pressureRear: Number(pRear.toFixed(1)), preload, rebound, note };
    };

    const result = getRecommendation();
    const [copied, setCopied] = useState(false);

    const copyResult = () => {
        const text = `🏁 GPM Setup :
- Pression AV : ${result.pressureFront} bar
- Pression AR : ${result.pressureRear} bar
- Précharge : ${result.preload}
- Détente : ${result.rebound}
\nConfigs : ${motoType} / ${usage} / ${weather}`;
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
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">Outil Tech GPM</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6 font-display">
                            GPM <span className="text-primary">Setup</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Optimisez le comportement de votre machine en quelques clics. Pressions, suspensions : ne roulez plus au hasard.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* INPUTS */}
                        <div className="space-y-8 bg-card border border-white/5 p-8 rounded-xl shadow-xl">
                            <h3 className="text-2xl font-bold text-white uppercase italic font-display flex items-center gap-3">
                                <Settings className="h-6 w-6 text-primary" />
                                Votre Profil
                            </h3>

                            {/* Moto Type */}
                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Type de Moto</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {(['roadster', 'sportive', 'trail', 'touring'] as MotoType[]).map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setMotoType(type)}
                                            className={`p-4 border rounded-lg text-sm font-bold uppercase tracking-wider transition-all skew-r ${motoType === type ? 'bg-primary text-white border-primary' : 'bg-background border-white/10 text-muted-foreground hover:border-white/30'}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Usage */}
                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Usage Prévu</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { id: 'solo', label: 'Solo', icon: <Zap className="h-4 w-4" /> },
                                        { id: 'duo', label: 'Duo', icon: <UsersIcon className="h-4 w-4" /> },
                                        { id: 'duo_loaded', label: 'Duo + Valises', icon: <Briefcase className="h-4 w-4" /> },
                                        { id: 'track', label: 'Piste / Track', icon: <Activity className="h-4 w-4" /> }
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setUsage(item.id as Usage)}
                                            className={`p-4 border rounded-lg text-sm font-bold uppercase tracking-wider transition-all skew-r flex items-center justify-center gap-2 ${usage === item.id ? 'bg-primary text-white border-primary' : 'bg-background border-white/10 text-muted-foreground hover:border-white/30'}`}
                                        >
                                            {item.icon} {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Weather */}
                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Conditions</label>
                                <div className="flex gap-4">
                                    {[
                                        { id: 'dry_warm', label: 'Sec / Chaud' },
                                        { id: 'wet_cold', label: 'Pluie / Froid' },
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setWeather(item.id as Weather)}
                                            className={`flex-1 p-4 border rounded-lg text-sm font-bold uppercase tracking-wider transition-all skew-r ${weather === item.id ? 'bg-primary text-white border-primary' : 'bg-background border-white/10 text-muted-foreground hover:border-white/30'}`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setShowResult(true)}
                                className="w-full py-4 bg-white text-black font-black uppercase italic tracking-tighter hover:bg-gray-200 transition-colors mt-8 skew-r flex items-center justify-center gap-2"
                            >
                                Calculer le Setup <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>

                        {/* RESULTS */}
                        <div className={`space-y-8 transition-opacity duration-500 ${showResult ? 'opacity-100' : 'opacity-50 pointer-events-none filter blur-sm'}`}>
                            <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 rounded-xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('/images/carbon-pattern.png')] opacity-10 mix-blend-overlay"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>

                                <h3 className="text-2xl font-bold text-white uppercase italic font-display mb-8 relative z-10 flex items-center gap-3">
                                    <Activity className="h-6 w-6 text-primary" />
                                    Résultat GPM
                                </h3>

                                <button
                                    onClick={copyResult}
                                    className="absolute top-8 right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20 group/btn"
                                    title="Copier le réglage"
                                >
                                    {copied ? <Check className="h-5 w-5 text-green-500" /> : <Share2 className="h-5 w-5 text-white group-hover/btn:text-primary transition-colors" />}
                                </button>

                                <div className="grid grid-cols-2 gap-8 relative z-10 mb-8">
                                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Pression AV</div>
                                        <div className="text-4xl font-black text-white font-display italic">{result.pressureFront} <span className="text-sm text-primary">bar</span></div>
                                    </div>
                                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/5">
                                        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Pression AR</div>
                                        <div className="text-4xl font-black text-white font-display italic">{result.pressureRear} <span className="text-sm text-primary">bar</span></div>
                                    </div>
                                </div>

                                <div className="space-y-4 relative z-10 bg-black/40 p-6 rounded-lg border border-white/5">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                        <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Précharge (Preload)</span>
                                        <span className="text-white font-bold">{result.preload}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Détente (Rebound)</span>
                                        <span className="text-white font-bold">{result.rebound}</span>
                                    </div>
                                </div>

                                <div className="mt-8 relative z-10 flex gap-4 bg-primary/10 p-4 border border-primary/20 rounded-lg">
                                    <Info className="h-6 w-6 text-primary shrink-0" />
                                    <p className="text-sm text-primary/80 leading-relaxed font-medium">
                                        <strong className="text-primary block mb-1 uppercase text-xs tracking-widest">Note de l'expert :</strong>
                                        {result.note}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="py-16 text-center border-t border-white/5">
                    <p className="text-muted-foreground text-sm max-w-lg mx-auto italic">
                        * Ces valeurs sont données à titre indicatif. Référez-vous toujours au manuel constructeur et adaptez selon votre ressenti.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// Icon helper
function UsersIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    )
}
