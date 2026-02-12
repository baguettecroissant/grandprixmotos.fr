export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML or Markdown
    author: string;
    date: string;
    category: "univers-bmw" | "equipement" | "entretien" | "assurance" | "news";
    tags: string[];
    coverImage: string;
    readTime: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
}
