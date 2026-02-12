import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image & Texture */}
            <div className="absolute inset-0 z-0 text-white">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background"></div>
                <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-soft-light"></div>
            </div>

            {/* Abstract Racing Shapes */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-900/30 -skew-x-12 translate-x-1/3 z-0 border-l border-white/5 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary/10 -skew-x-12 -translate-x-1/3 z-0 mix-blend-overlay"></div>

            <div className="container relative z-20 px-4 flex flex-col items-center text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8 skew-r animate-fade-in">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    <span className="text-sm font-bold tracking-widest text-primary uppercase">Grand Public Moto</span>
                </div>

                {/* Main Title - Massive & Aggressive */}
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6">
                    <span className="block text-stroke-white text-transparent opacity-50">Performance</span>
                    <span className="block text-white">Passion</span>
                    <span className="block text-primary">Adrénaline</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 font-medium tracking-wide">
                    Le guide technique de référence pour le motard exigeant.
                    <span className="text-white block mt-2">Essais BMW • Équipement Premium • Assurance</span>
                </p>

                {/* CTA Buttons - Sharp & Skewed */}
                <div className="flex flex-col sm:flex-row gap-6 items-center w-full justify-center">
                    <Link
                        href="/univers-bmw"
                        className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase transition-all transform hover:-translate-y-1 skew-r"
                    >
                        <span className="absolute inset-0 border border-white/20 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></span>
                        <span className="relative flex items-center gap-2">
                            Découvrir les Essais <ArrowRight className="h-5 w-5" />
                        </span>
                    </Link>

                    <Link
                        href="/assurance"
                        className="group relative px-8 py-4 bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary font-bold tracking-widest uppercase transition-all transform hover:-translate-y-1 skew-r"
                    >
                        <span className="relative flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5" /> Comparateur Assurance
                        </span>
                    </Link>
                </div>

                {/* Trust Indicators - Minimalist/Tech */}
                <div className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="text-center font-bold tracking-widest text-sm">BMW MOTORRAD</div>
                    <div className="text-center font-bold tracking-widest text-sm">MOTOBLOUZ</div>
                    <div className="text-center font-bold tracking-widest text-sm">DAFY MOTO</div>
                    <div className="text-center font-bold tracking-widest text-sm">AMV ASSURANCE</div>
                </div>
            </div>
        </section>
    );
}
