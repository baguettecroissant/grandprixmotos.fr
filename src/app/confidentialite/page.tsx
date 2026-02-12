import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lock, Eye, Check, Bell } from "lucide-react";

export default function ConfidentialitePage() {
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
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">RGPD & Données</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6 font-display">
                            Politique de <span className="text-primary">Confidentialité</span>
                        </h1>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="space-y-12">

                        <div className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-headings:font-display prose-headings:uppercase prose-headings:italic prose-a:text-primary">
                            <p className="lead text-xl text-white font-medium">
                                Chez GrandPrixMotos.fr, la confidentialité de vos données est une priorité absolue. Nous collectons le minimum d'informations nécessaires pour vous offrir la meilleure expérience possible.
                            </p>

                            <hr className="border-white/10 my-10" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-12">
                                <div className="p-6 bg-card border border-white/5 rounded-none skew-r hover:border-primary/30 transition-colors">
                                    <Eye className="h-8 w-8 text-primary mb-4 -skew-x-12" />
                                    <h3 className="text-xl font-bold text-white mb-2 font-display italic uppercase">Collecte de Données</h3>
                                    <p className="text-sm text-muted-foreground">Nous collectons des informations lorsque vous vous inscrivez à notre newsletter ou utilisez notre formulaire de contact.</p>
                                </div>
                                <div className="p-6 bg-card border border-white/5 rounded-none skew-r hover:border-primary/30 transition-colors">
                                    <Lock className="h-8 w-8 text-primary mb-4 -skew-x-12" />
                                    <h3 className="text-xl font-bold text-white mb-2 font-display italic uppercase">Sécurité</h3>
                                    <p className="text-sm text-muted-foreground">Vos données sont cryptées et stockées sur des serveurs sécurisés. Nous ne vendons jamais vos données.</p>
                                </div>
                            </div>

                            <h2>1. Utilisation des données</h2>
                            <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
                            <ul className="list-none pl-0 space-y-2">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Personnaliser votre expérience et répondre à vos besoins individuels</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Fournir un contenu publicitaire personnalisé</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Améliorer notre site Web</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Vous contacter par e-mail (Newsletter)</li>
                            </ul>

                            <h2>2. Confidentialité du commerce en ligne</h2>
                            <p>
                                Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction.
                            </p>

                            <h2>3. Divulgation à des tiers</h2>
                            <p>
                                Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
                            </p>

                            <h2>4. Protection des informations</h2>
                            <p>
                                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
                            </p>

                            <h2>5. Cookies</h2>
                            <p>
                                Nos cookies améliorent l'accès à notre site et identifient les visiteurs réguliers. En outre, nos cookies améliorent l'expérience d'utilisateur grâce au suivi et au ciblage de ses intérêts. Cette utilisation des cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site.
                            </p>

                            <div className="bg-primary/5 border border-primary/20 p-6 mt-8 flex items-start gap-4">
                                <Bell className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold uppercase mb-1">Consentement</h4>
                                    <p className="text-sm m-0">En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
