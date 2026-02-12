import { CategoryLayout } from "@/components/CategoryLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Univers BMW Motorrad & Adventure - Tout sur la GS et le Flat-Twin",
    description: "Le guide de référence sur l'univers BMW Motorrad. Fiabilité R1250 GS, préparation Roadtrip et actualités de la marque allemande.",
};

export default function UniversBMWPage() {
    return <CategoryLayout categorySlug="univers-bmw" />;
}
