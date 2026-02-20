import { CategoryLayout } from "@/components/CategoryLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Entretien & Mécanique - Réparez et entretenez votre moto vous-même",
    description: "Tutoriels, guides mécaniques et astuces pour faire l'entretien de votre moto. Vidange, freinage, kit chaîne et astuces de chef d'atelier.",
};

export default function EntretienPage() {
    return <CategoryLayout categorySlug="entretien" />;
}
