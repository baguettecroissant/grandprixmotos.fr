import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
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
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">Contactez le Team</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6 font-display">
                            Entrons en <span className="text-primary">Contact</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Une question technique ? Un partenariat ? Notre équipe d'experts est à votre écoute pour propulser vos projets.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-white uppercase italic font-display mb-8 skew-r inline-block border-l-4 border-primary pl-4">Nos Coordonnées</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-6 group">
                                        <div className="h-12 w-12 bg-primary/10 flex items-center justify-center shrink-0 skew-r border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <Mail className="h-6 w-6 -skew-x-12" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-1">Email</h3>
                                            <p className="text-muted-foreground">Directeur de publication: contact@grandprixmotos.fr</p>
                                            <p className="text-primary font-medium mt-1">contact@grandprixmotos.fr</p>
                                        </div>
                                    </div>



                                    <div className="flex items-start gap-6 group">
                                        <div className="h-12 w-12 bg-primary/10 flex items-center justify-center shrink-0 skew-r border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <MessageSquare className="h-6 w-6 -skew-x-12" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-1">Réseaux Sociaux</h3>
                                            <div className="flex gap-4 mt-2">
                                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest">Instagram</a>
                                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest">Twitter / X</a>
                                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest">LinkedIn</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-card border border-l-4 border-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -skew-x-12 translate-x-16 -translate-y-16"></div>
                                <h3 className="text-xl font-bold text-white uppercase italic font-display mb-4">Temps de réponse</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                                    Nous recevons un volume important de demandes techniques. Notre équipe s'engage à vous répondre sous <span className="text-primary font-bold">24 à 48 heures</span> (jours ouvrés).
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-12 opacity-50"></div>
                            <form className="relative bg-card border border-white/5 p-8 md:p-10 space-y-6 shadow-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Nom Complet</label>
                                        <input
                                            type="text"
                                            placeholder="Julien Rossi"
                                            className="w-full bg-background border border-white/5 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/10"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                                        <input
                                            type="email"
                                            placeholder="julien@example.com"
                                            className="w-full bg-background border border-white/5 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/10"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Sujet de la demande</label>
                                    <select className="w-full bg-background border border-white/5 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                                        <option>Question Technique / Essais</option>
                                        <option>Partenariat / Publicité</option>
                                        <option>Correction d'article</option>
                                        <option>Autre</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Comment pouvons-nous vous aider ?"
                                        className="w-full bg-background border border-white/5 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/10 resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full group relative flex items-center justify-center gap-3 bg-primary py-4 px-8 text-white font-black uppercase tracking-tighter italic hover:bg-primary/90 transition-all overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <span className="relative z-10 flex items-center gap-3">
                                        Envoyer le message <Send className="h-5 w-5" />
                                    </span>
                                </button>

                                <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest opacity-50">
                                    En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                                </p>
                            </form>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
