import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-card text-card-foreground relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-white to-destructive"></div>
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black font-display italic tracking-tighter text-white">
                            GRANDPRIX<span className="text-primary">MOTOS</span>
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Le média de référence pour les passionnés de pure performance.
                            <br />Essais, Tech, et Chronos.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white border-l-2 border-primary pl-4">Rubriques</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/univers-bmw" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">Univers BMW</Link></li>
                            <li><Link href="/equipement" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">Équipement Pro</Link></li>
                            <li><Link href="/assurance" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">Assurance Piste/Route</Link></li>
                            <li><Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">Le Team</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white border-l-2 border-destructive pl-4">Légal</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/mentions-legales" className="hover:text-primary">Mentions Légales</Link></li>
                            <li><Link href="/confidentialite" className="hover:text-primary">Politique de Confidentialité</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Suivez-nous</h4>
                        <p className="text-sm text-muted-foreground">
                            Restez connecté pour ne rien manquer de l'actualité moto.
                        </p>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} GrandPrixMotos.fr. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
