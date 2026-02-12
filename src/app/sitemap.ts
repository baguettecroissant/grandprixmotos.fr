import { MetadataRoute } from 'next';
import { posts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://grandprixmotos.fr';

    // Static routes
    const routes = [
        '',
        '/a-propos',
        '/contact',
        '/mentions-legales',
        '/confidentialite',
        '/univers-bmw',
        '/equipement',
        '/assurance',
        '/outils',
        '/outils/setup-moto',
        '/outils/quiz-profil',
        '/outils/budget-gs',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic blog routes
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
}
