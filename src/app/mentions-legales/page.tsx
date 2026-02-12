import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Scale, Globe, User, MapPin, Mail, Server } from "lucide-react";

export default function MentionsLegalesPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            <main className="flex-1 flex flex-col">
                {/* Header Section */}
                <section className="relative py-20 overflow-hidden border-b border-white/5 bg-card/30">
                    <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 skew-r">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">Transparence & Conformité</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6 font-display">
                            Mentions <span className="text-primary">Légales</span>
                        </h1>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="space-y-12">

                        {/* 1. Editeur */}
                        <div className="group relative bg-card border border-white/5 p-8 overflow-hidden hover:border-primary/20 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -skew-x-12 translate-x-8 -translate-y-8 rounded-full"></div>
                            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                                <div className="h-10 w-10 bg-primary/10 flex items-center justify-center skew-r border border-primary/20 text-primary">
                                    <Scale className="h-5 w-5 -skew-x-12" />
                                </div>
                                <h2 className="text-2xl font-bold text-white uppercase font-display italic">1. Éditeur du site</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed pl-2">
                                <p>Le site <strong>grandprixmotos.fr</strong> est édité par la société :</p>
                                <ul className="space-y-2 list-none">
                                    <li className="flex items-start gap-3">
                                        <User className="h-5 w-5 text-primary mt-0.5" />
                                        <span><strong>WADE STUDIO LTD</strong></span>
                                    </li>
                                    <li>Société enregistrée auprès du Registrar of Companies de Maurice</li>
                                    <li><strong>Business Registration Number (BRN) :</strong> C25227533</li>
                                    <li><strong>File No :</strong> C227533</li>
                                    <li className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                        <span><strong>Siège social :</strong> 432 Ave Bounty, Morcellement Balaclava, MAURITIUS</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                                        <span><strong>Email de contact :</strong> contact@grandprixmotos.fr</span>
                                    </li>
                                </ul>
                                <p className="mt-4 pt-4 border-t border-white/5">
                                    <strong>Directeur de la publication :</strong> Wade Timothy
                                </p>
                            </div>
                        </div>

                        {/* 2. Hébergement */}
                        <div className="group relative bg-card border border-white/5 p-8 overflow-hidden hover:border-blue-500/20 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 -skew-x-12 translate-x-8 -translate-y-8 rounded-full"></div>
                            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                                <div className="h-10 w-10 bg-blue-500/10 flex items-center justify-center skew-r border border-blue-500/20 text-blue-500">
                                    <Server className="h-5 w-5 -skew-x-12" />
                                </div>
                                <h2 className="text-2xl font-bold text-white uppercase font-display italic">2. Hébergement</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed pl-2">
                                <p>Le site est hébergé par la société :</p>
                                <ul className="space-y-2 list-none">
                                    <li><strong>Vercel Inc.</strong></li>
                                    <li>340 S Lemon Ave #4133 Walnut, CA 91789, USA.</li>
                                    <li className="flex items-center gap-2 mt-2 text-sm text-green-400">
                                        <ShieldCheck className="h-4 w-4" />
                                        Le stockage des données est assuré sur des serveurs sécurisés.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Propriété Intellectuelle */}
                        <div className="group relative bg-card border border-white/5 p-8 overflow-hidden hover:border-purple-500/20 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 -skew-x-12 translate-x-8 -translate-y-8 rounded-full"></div>
                            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                                <div className="h-10 w-10 bg-purple-500/10 flex items-center justify-center skew-r border border-purple-500/20 text-purple-500">
                                    <Globe className="h-5 w-5 -skew-x-12" />
                                </div>
                                <h2 className="text-2xl font-bold text-white uppercase font-display italic">3. Propriété Intellectuelle</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed pl-2">
                                <p>
                                    L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle.
                                    Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                                </p>
                                <p>
                                    La marque "<strong>WADE STUDIO LTD</strong>" et le nom de domaine "<strong>grandprixmotos.fr</strong>" sont la propriété exclusive de l'éditeur.
                                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                                </p>
                            </div>
                        </div>

                        {/* 4. Responsabilité */}
                        <div className="group relative bg-card border border-white/5 p-8 overflow-hidden hover:border-red-500/20 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 -skew-x-12 translate-x-8 -translate-y-8 rounded-full"></div>
                            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                                <div className="h-10 w-10 bg-red-500/10 flex items-center justify-center skew-r border border-red-500/20 text-red-500">
                                    <ShieldCheck className="h-5 w-5 -skew-x-12" />
                                </div>
                                <h2 className="text-2xl font-bold text-white uppercase font-display italic">4. Limitation de responsabilité</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground leading-relaxed pl-2">
                                <p>
                                    Le site <strong>grandprixmotos.fr</strong> agit en tant que média d'information. Il a pour but de fournir des analyses, des essais et des guides pour les passionnés de moto.
                                </p>
                                <p>
                                    La société <strong>WADE STUDIO LTD</strong> s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                                </p>
                                <p>
                                    En conséquence, l'utilisateur reconnait utiliser ces informations données (à titre indicatif, non exhaustives et susceptibles d'évoluer) sous sa responsabilité exclusive.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
