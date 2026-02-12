import { CategoryLayout } from "@/components/CategoryLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Équipement Moto - Tests Casques, Blousons et Gants | GrandPrixMotos.fr",
    description: "Nos experts testent pour vous les meilleurs équipements motard. Comparatifs casques intégraux, blousons cuir/textile et protections.",
};

export default function EquipementPage() {
    return <CategoryLayout categorySlug="equipement" />;
}
