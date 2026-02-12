import { BlogPost, Category } from "@/types/blog";

export const posts: BlogPost[] = [
  {
    id: "1",
    slug: "shoei-neotec-3-vs-schuberth-c5",
    title: "Shoei Neotec 3 vs Schuberth C5 : Le Duel des Silencieux",
    excerpt: "Ils sont les rois du grand tourisme. Mais qui du japonais ou de l'allemand offre réellement le meilleur silence à 130km/h ? Verdict après 3000km.",
    content: `
      <h2>Le choc des titans</h2>
      <p>C'est la question que tout rouleur en GT ou en Trail se pose. Faut-il rester fidèle à la rigueur allemande du Schuberth C5 ou céder aux sirènes de la perfection japonaise du Shoei Neotec 3 ?</p>
      
      <h2>Insonorisation : La surprise</h2>
      <p>Sur notre R 1250 RT de test, bulle haute, le Schuberth garde une légère avance. Mais dès qu'on passe sur un Roadster, le Shoei semble mieux gérer les turbulences...</p>
      
      <h2>Confort et maintien</h2>
      <p>L'intérieur du C5 est plus ferme, typé "sport-touring", là où le Neotec 3 offre un effet "chausson" immédiat.</p>
      
      <h2>Le verdict</h2>
      <p>Si vous roulez plus de 20 000km par an, le Schuberth sera votre allié. Pour un usage mixte ville/route, le Shoei l'emporte par sa polyvalence.</p>
    `,
    author: "Julien M.",
    date: "2026-02-11",
    category: "equipement",
    tags: ["Comparatif", "Casque Modulable", "Shoei", "Schuberth", "High-Ticket"],
    coverImage: "/images/blog/helmet-duel.png",
    readTime: "10 min"
  },
  {
    id: "2",
    slug: "fiabilite-bmw-r1250-gs-occasion",
    title: "Fiabilité BMW R 1250 GS : Ce qu'il faut savoir avant d'acheter",
    excerpt: "Cardan, électronique, distribution ShiftCam... Quels sont les vrais points faibles de la reine des trails après 50 000km ? L'analyse technique.",
    content: `
      <h2>Une machine (presque) parfaite ?</h2>
      <p>La R 1250 GS est la moto la plus vendue au monde chez les gros cubes. Mais est-elle infaillible ?</p>
      
      <h2>Le rappel du Cardan</h2>
      <p>C'est le point noir de ces dernières années. BMW a lancé une campagne massive de vérification. Sur une occasion, exigez le carnet à jour avec la mention du contrôle de l'arbre de transmission.</p>
      
      <h2>Le système ShiftCam</h2>
      <p>Une complexité mécanique qui effraie, mais qui se révèle finalement très robuste. Aucun cas de casse majeure recensé sur notre panel de 50 propriétaires.</p>
      
      <h2>Bilan Occasion</h2>
      <p>Une R 1250 GS de 2020 avec 40 000km est à peine rodée. C'est un investissement sûr, à condition d'avoir un historique limpide.</p>
    `,
    author: "Marc D. (Ex-Chef d'Atelier)",
    date: "2026-02-08",
    category: "univers-bmw",
    tags: ["BMW", "Occasion", "Fiabilité", "Mécanique"],
    coverImage: "/images/blog/r1250gs-engine.png",
    readTime: "15 min"
  },
  {
    id: "3",
    slug: "cout-assurance-moto-sportive-2026",
    title: "Combien coûte l'assurance d'une moto sportive en 2026 ?",
    excerpt: "S1000RR, Panigale V4, R1... Analyse des tarifs réels pour un profil CSP+ avec 50% de bonus. Les écarts vont du simple au triple.",
    content: `
      <h2>Le prix de la passion</h2>
      <p>Assurer une sportive de plus de 200ch n'est pas donné. Mais contrairement aux idées reçues, ce n'est pas impayable si on a le bon profil.</p>
      
      <h2>Le profil test</h2>
      <p>Homme, 40 ans, cadre, garage fermé, 50% de bonus, région parisienne. Véhicule : BMW S 1000 RR 2025.</p>
      
      <h2>Les tarifs</h2>
      <ul>
        <li>Assureur A (Spécialiste) : 850€/an en Tous Risques</li>
        <li>Assureur B (Banque) : 1400€/an (avec franchise élevée)</li>
        <li>Assureur C (Mutuelle) : Refus de souscription</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Passez par un courtier spécialisé ou utilisez notre comparateur. L'écart finance littéralement votre train de pneus annuel.</p>
    `,
    author: "Sophie L.",
    date: "2026-02-01",
    category: "assurance",
    tags: ["Assurance", "Sportive", "Budget", "Comparatif"],
    coverImage: "/images/blog/sportbike-insurance.png",
    readTime: "8 min"
  },
  {
    id: "4",
    slug: "preparer-roadtrip-alpes-moto",
    title: "Préparer sa moto pour un Roadtrip dans les Alpes",
    excerpt: "Freins, bagagerie, cartographie... La checklist ultime avant d'attaquer les grands cols. Rappel : le col de la Bonette ne pardonne pas l'improvisation.",
    content: `
      <h2>L'appel des sommets</h2>
      <p>Partir d'Annecy pour rejoindre Nice par la Route des Grandes Alpes est le pèlerinage de tout motard.</p>
      
      <h2>La préparation mécanique</h2>
      <p>Vos plaquettes vont souffrir. Purgez votre liquide de frein s'il a plus d'un an (DOT 4 ou 5.1). Vérifiez vos pneus : la route abrasive des cols les mange deux fois plus vite.</p>
      
      <h2>L'équipement du pilote</h2>
      <p>En haut, il fait 5°C. En bas, il fait 30°C. Le multicouche est obligatoire. Un ensemble Gore-Tex laminé est l'investissement roi.</p>
    `,
    author: "L'Équipe GPM",
    date: "2026-01-20",
    category: "equipement", // Can fit both, but mainly gear/prep
    tags: ["Voyage", "Roadtrip", "Alpes", "Tuto"],
    coverImage: "/images/blog/alps-roadtrip.png",
    readTime: "12 min"
  }
];

export const categories: Category[] = [
  {
    id: "1",
    name: "Univers BMW & Adventure",
    slug: "univers-bmw",
    description: "L'autorité technique sur la marque à l'hélice. Fiabilité, roadtrips et guides d'achat pour les passionnés de flat-twin."
  },
  {
    id: "2",
    name: "Équipement & Tech",
    slug: "equipement",
    description: "Comparatifs sans concession pour le motard exigeant. Ne choisissez plus votre matériel au hasard."
  },
  {
    id: "3",
    name: "Assurance & Services",
    slug: "assurance",
    description: "Gagnez de l'argent sur vos contrats. Les conseils d'experts pour optimiser vos coûts sans sacrifier votre couverture."
  },
];
