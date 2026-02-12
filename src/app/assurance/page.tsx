import { CategoryLayout } from "@/components/CategoryLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Assurance Moto - Comparatifs et Conseils Jeune Permis | GrandPrixMotos.fr",
    description: "Comment bien assurer sa moto au meilleur prix ? Nos guides pour jeunes permis, malussés et motards expérimentés.",
};

export default function AssurancePage() {
    return <CategoryLayout categorySlug="assurance" />;
}
